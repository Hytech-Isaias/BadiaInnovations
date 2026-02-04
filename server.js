#!/usr/bin/env node

/**
 * Simple static server with bot-friendly headers
 * Used for serving the built React SPA on DigitalOcean
 */

import express from 'express';
import compression from 'compression';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8080;
const DIST_DIR = path.join(__dirname, 'dist');

// Compression middleware
app.use(compression());

// Bot detection middleware
const BOT_USER_AGENTS = [
  'googlebot',
  'bingbot',
  'slurp',
  'duckduckbot',
  'baiduspider',
  'yandexbot',
  'facebookexternalhit',
  'twitterbot',
  'linkedinbot',
  'whatsapp',
  'telegrambot',
  'apis-google',
  'mediapartners-google',
  'adsbot-google',
  'google-adwords',
];

function isBot(userAgent) {
  if (!userAgent) return false;
  const ua = userAgent.toLowerCase();
  return BOT_USER_AGENTS.some(bot => ua.includes(bot));
}

// Logging middleware
app.use((req, res, next) => {
  const userAgent = req.get('user-agent') || 'unknown';
  const botStatus = isBot(userAgent) ? '[BOT]' : '[USER]';
  console.log(`${botStatus} ${req.method} ${req.path} - ${userAgent.substring(0, 50)}`);
  next();
});

// Security headers for all responses
app.use((req, res, next) => {
  res.set({
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
  });
  
  // Critical: Tell bots this content is indexable
  res.set('X-Robots-Tag', 'all');
  
  next();
});

// Special headers for critical files
app.get('/ads.txt', (req, res) => {
  res.set({
    'Content-Type': 'text/plain',
    'Cache-Control': 'public, max-age=3600',
    'X-Robots-Tag': 'all',
  });
  res.sendFile(path.join(DIST_DIR, 'ads.txt'));
});

app.get('/robots.txt', (req, res) => {
  res.set({
    'Content-Type': 'text/plain',
    'X-Robots-Tag': 'all',
  });
  res.sendFile(path.join(DIST_DIR, 'robots.txt'));
});

app.get('/sitemap.xml', (req, res) => {
  res.set({
    'Content-Type': 'application/xml',
    'X-Robots-Tag': 'all',
  });
  res.sendFile(path.join(DIST_DIR, 'sitemap.xml'));
});

// Static assets with long-term caching
app.use('/assets', express.static(path.join(DIST_DIR, 'assets'), {
  maxAge: '1y',
  immutable: true,
}));

// All other static files
app.use(express.static(DIST_DIR, {
  maxAge: 0,
  setHeaders: (res, filepath) => {
    // Don't cache HTML
    if (filepath.endsWith('.html')) {
      res.set('Cache-Control', 'public, max-age=0, must-revalidate');
    }
  },
}));

// SPA fallback - serve index.html for all other routes
app.get('*', (req, res) => {
  const userAgent = req.get('user-agent') || '';
  
  // Log bot access specifically
  if (isBot(userAgent)) {
    console.log(`[BOT ACCESS] Serving index.html to: ${userAgent.substring(0, 100)}`);
  }
  
  res.set({
    'Cache-Control': 'public, max-age=0, must-revalidate',
    'X-Robots-Tag': 'all',
  });
  
  res.sendFile(path.join(DIST_DIR, 'index.html'));
});

// Error handling
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).send('Internal Server Error');
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`📁 Serving files from: ${DIST_DIR}`);
  console.log(`🤖 Bot detection enabled`);
  console.log(`🌐 Ready for production traffic`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  process.exit(0);
});
