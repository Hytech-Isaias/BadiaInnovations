import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { blogPosts } from "../data/blogPosts";
import { blogPostsEN } from "../data/blogPostsEN";

const Blog = () => {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language;

    // Select posts based on current language
    const posts = currentLang === "en" ? blogPostsEN : blogPosts;

    return (
        <div className="min-h-screen pt-24 pb-16 bg-theme">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                        {t("blog.pageTitle", "Blog & Resources")}
                    </h1>
                    <p className="text-muted text-lg max-w-2xl mx-auto">
                        {t("blog.pageSubtitle", "Articles about technology, business management, and software development to power your business.")}
                    </p>
                </motion.div>

                {/* Featured Post (First one) */}
                {posts.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-16"
                    >
                        <Link to={`/blog/${posts[0].slug}`} className="block group">
                            <div className="glass rounded-3xl overflow-hidden md:flex hover:shadow-2xl transition-all duration-300 border border-theme">
                                <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                                    <img
                                        src={posts[0].image}
                                        alt={posts[0].title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                                    <div className="flex items-center gap-4 text-xs text-muted mb-4 uppercase tracking-wider font-semibold">
                                        <span className="text-purple-500">{posts[0].category}</span>
                                        <span>•</span>
                                        <span className="flex items-center gap-1"><Calendar size={12} /> {posts[0].date}</span>
                                    </div>
                                    <h2 className="text-2xl md:text-4xl font-bold text-theme mb-4 group-hover:text-purple-500 transition-colors">
                                        {posts[0].title}
                                    </h2>
                                    <p className="text-muted mb-6 leading-relaxed line-clamp-3">
                                        {posts[0].excerpt}
                                    </p>
                                    <div className="flex items-center gap-2 text-purple-500 font-medium mt-auto">
                                        {t("blog.readArticle", "Read Article")} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                )}

                {/* Grid of other posts */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.slice(1).map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                        >
                            <Link to={`/blog/${post.slug}`} className="block group h-full">
                                <div className="glass rounded-2xl overflow-hidden h-full flex flex-col hover:shadow-xl transition-all duration-300 border border-theme">
                                    <div className="h-48 overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="flex items-center justify-between text-xs text-muted mb-3">
                                            <span className="text-purple-500 font-semibold uppercase">{post.category}</span>
                                            <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-theme mb-3 group-hover:text-purple-500 transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-sm text-muted mb-4 leading-relaxed line-clamp-3 flex-1">
                                            {post.excerpt}
                                        </p>
                                        <div className="pt-4 border-t border-theme flex items-center justify-between">
                                            <span className="text-xs text-muted flex items-center gap-1">
                                                <User size={12} /> {post.author}
                                            </span>
                                            <span className="text-xs text-purple-500 font-medium">{t("blog.readMore", "Read more")}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;

