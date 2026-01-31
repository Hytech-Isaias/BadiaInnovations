import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";
import { blogPostsEN } from "../data/blogPostsEN";
import { useTranslation } from "react-i18next";

const RecentPosts = () => {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language;

    // Select posts based on current language
    const posts = currentLang === "en" ? blogPostsEN : blogPosts;
    const recentPosts = posts.slice(0, 3);

    return (
        <section id="blog" className="py-24 bg-theme relative">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-theme mb-4">
                        {t("blog.latestTitle", "Latest Resources")}
                    </h2>
                    <p className="text-muted text-lg max-w-2xl mx-auto">
                        {t("blog.subtitle", "Insights and news about technology and business.")}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {recentPosts.map((post, i) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <Link to={`/blog/${post.slug}`} className="group block h-full">
                                <div className="h-full glass rounded-2xl overflow-hidden border border-white/5 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg flex flex-col">
                                    {/* Image */}
                                    <div className="h-48 overflow-hidden relative">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs text-white font-medium border border-white/10">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="flex items-center gap-3 text-xs text-muted mb-3">
                                            <span className="flex items-center gap-1">
                                                <Calendar size={12} className="text-purple-500" />
                                                {post.date}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <User size={12} className="text-purple-500" />
                                                {post.author}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-bold text-theme mb-3 group-hover:text-purple-500 transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>

                                        <p className="text-sm text-muted mb-4 line-clamp-2 flex-grow">
                                            {post.excerpt}
                                        </p>

                                        <div className="flex items-center gap-2 text-sm font-medium text-purple-500 mt-auto group-hover:translate-x-1 transition-transform">
                                            {t("blog.readMore", "Read more")} <ArrowRight size={16} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors shadow-lg shadow-purple-500/20"
                    >
                        {t("blog.viewAll", "View all articles")}
                        <ArrowRight size={18} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default RecentPosts;

