import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { blogPosts } from "../data/blogPosts";
import { blogPostsEN } from "../data/blogPostsEN";

const BlogPost = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language;

    // Select posts based on current language
    const posts = currentLang === "en" ? blogPostsEN : blogPosts;
    const post = posts.find(p => p.slug === slug);

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
                        onClick={() => navigate('/blog')}
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
                                <Clock size={14} /> {post.readTime} {t("blog.readTimeLabel", "read")}
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
                                <div className="text-white/60 text-xs">{t("blog.author", "Author")}</div>
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

                        {/* Render HTML content safely */}
                        <div dangerouslySetInnerHTML={{ __html: post.content }} />

                    </motion.div>

                    {/* Share / Tags */}
                    <div className="mt-12 pt-8 border-t border-theme flex justify-between items-center">
                        <h4 className="font-bold text-theme">{t("blog.shareArticle", "Share this article")}</h4>
                        <div className="flex gap-2">
                            <button className="p-2 rounded-full glass hover:bg-purple-500/10 hover:text-purple-500 transition-colors">
                                <Share2 size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default BlogPost;

