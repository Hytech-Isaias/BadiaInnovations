import { useEffect, useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { blogPosts } from "../data/blogPosts";
import { blogPostsEN } from "../data/blogPostsEN";
import AdSenseAd from "../components/AdSenseAd";

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  // Select posts based on current language
  const posts = currentLang === "en" ? blogPostsEN : blogPosts;
  const post = posts.find((p) => p.slug === slug);

  // Get related articles (same category, excluding current)
  const relatedPosts = useMemo(() => {
    if (!post) return [];
    return posts
      .filter((p) => p.category === post.category && p.id !== post.id)
      .slice(0, 3);
  }, [post, posts]);

  // Inject Article Schema (JSON-LD) for SEO
  useEffect(() => {
    if (!post) return;

    const schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.excerpt,
      image: post.image,
      author: {
        "@type": "Person",
        name: post.author,
      },
      publisher: {
        "@type": "Organization",
        name: "Badia Innovations",
        logo: {
          "@type": "ImageObject",
          url: "https://badiainnovations.dev/logo.png",
        },
      },
      datePublished: post.date,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://badiainnovations.dev/blog/${post.slug}`,
      },
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "article-schema";
    script.text = JSON.stringify(schema);

    // Remove existing schema if present
    const existing = document.getElementById("article-schema");
    if (existing) existing.remove();

    document.head.appendChild(script);

    // Update page title
    document.title = `${post.title} | Badia Innovations`;

    return () => {
      const schemaScript = document.getElementById("article-schema");
      if (schemaScript) schemaScript.remove();
    };
  }, [post]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-theme">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-theme mb-4">
            {t("blog.notFound", "Article not found")}
          </h2>
          <button
            onClick={() => navigate("/blog")}
            className="text-purple-500 hover:underline flex items-center gap-2 mx-auto"
          >
            <ArrowLeft size={16} /> {t("blog.backToBlog", "Back to Blog")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen pt-24 pb-16 bg-theme">
      {/* Hero Header */}
      <div className="relative h-[400px] md:h-[500px] mb-12">
        <div className="absolute inset-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-xs" />
        </div>

        <div className="relative container mx-auto px-4 md:px-6 h-full flex flex-col justify-end pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft size={16} /> {t("blog.backToBlog", "Back to Blog")}
            </Link>

            <div className="flex flex-wrap items-center gap-4 text-sm text-white/80 mb-4">
              <span className="bg-purple-600/80 px-3 py-1 rounded-full text-white font-medium backdrop-blur-md">
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar size={14} /> {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={14} /> {post.readTime}{" "}
                {t("blog.readTimeLabel", "read")}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">
                {post.author.charAt(0)}
              </div>
              <div>
                <div className="text-white font-medium">{post.author}</div>
                <div className="text-white/60 text-xs">
                  {t("blog.author", "Author")}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg dark:prose-invert prose-purple max-w-none"
          >
            <div className="text-xl text-muted font-medium mb-8 leading-relaxed border-l-4 border-purple-500 pl-4 py-1">
              {post.excerpt}
            </div>

            {/* AdSense - Top */}
            <div className="glass rounded-xl overflow-hidden my-8">
              <div className="px-3 py-1 bg-purple-500/10 border-b border-purple-500/20">
                <p className="text-[10px] uppercase tracking-wider text-purple-300 font-semibold">
                  {currentLang === "es" ? "Publicidad" : "Advertisement"}
                </p>
              </div>
              <div className="p-4 flex justify-center bg-black/20">
                <AdSenseAd
                  adSlot="9954350676"
                  adFormat="auto"
                  fullWidthResponsive={true}
                  className="w-full"
                />
              </div>
            </div>

            {/* Render HTML content safely */}
            <div dangerouslySetInnerHTML={{ __html: post.content }} />

            {/* AdSense - Bottom */}
            <div className="glass rounded-xl overflow-hidden my-12">
              <div className="px-3 py-1 bg-purple-500/10 border-b border-purple-500/20">
                <p className="text-[10px] uppercase tracking-wider text-purple-300 font-semibold">
                  {currentLang === "es" ? "Publicidad" : "Advertisement"}
                </p>
              </div>
              <div className="p-4 flex justify-center bg-black/20">
                <AdSenseAd
                  adSlot="9954350676"
                  adFormat="auto"
                  fullWidthResponsive={true}
                  className="w-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Share / Tags */}
          <div className="mt-12 pt-8 border-t border-theme flex justify-between items-center">
            <h4 className="font-bold text-theme">
              {t("blog.shareArticle", "Share this article")}
            </h4>
            <div className="flex gap-2">
              <button className="p-2 rounded-full glass hover:bg-purple-500/10 hover:text-purple-500 transition-colors">
                <Share2 size={20} />
              </button>
            </div>
          </div>

          {/* Related Articles Section */}
          {relatedPosts.length > 0 && (
            <div className="mt-16 pt-12 border-t border-theme">
              <h3 className="text-2xl font-bold text-theme mb-8">
                {t("blog.relatedArticles", "Related Articles")}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.id}
                    to={`/blog/${related.slug}`}
                    className="group block glass rounded-xl overflow-hidden hover:ring-2 hover:ring-purple-500/50 transition-all"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={related.image}
                        alt={related.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <span className="text-xs text-purple-500 font-medium mb-2 block">
                        {related.category}
                      </span>
                      <h4 className="font-semibold text-theme line-clamp-2 group-hover:text-purple-500 transition-colors">
                        {related.title}
                      </h4>
                      <p className="text-sm text-muted mt-2 line-clamp-2">
                        {related.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
