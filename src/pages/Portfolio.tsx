import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight } from 'lucide-react';

const Portfolio = () => {
    const { t } = useTranslation();

    const projects = [
        { id: "01", key: "project1" },
        { id: "02", key: "project2" },
        { id: "03", key: "project3" },
        { id: "04", key: "project4" }
    ];

    return (
        <PageTransition>
            <Helmet>
                <title>{t('portfolio_page.title')} - fl360</title>
                <meta name="description" content={t('portfolio_page.meta_desc')} />
                <meta property="og:title" content={`${t('portfolio_page.title')} - fl360`} />
                <meta property="og:description" content={t('portfolio_page.og_desc')} />
                <meta property="og:type" content="website" />
            </Helmet>
            <div className="pt-40 pb-20 bg-black min-h-screen text-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-32">
                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-6xl font-bold tracking-tighter opacity-90"
                        >
                            {t('portfolio_page.title')}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-gray-500 font-mono text-xs md:text-sm mt-4 md:mt-0 tracking-widest uppercase"
                        >
                            {t('portfolio_page.subtitle')}
                        </motion.p>
                    </div>

                    <div className="flex flex-col">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="group relative border-t border-white/20 py-12 md:py-16 hover:bg-white/5 transition-colors duration-500 cursor-pointer"
                            >
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-2 md:px-4">
                                    <div className="space-y-2">
                                        <span className="text-xs font-mono text-gray-500 group-hover:text-white transition-colors duration-300">
                                            {t(`portfolio_page.items.${project.key}.category`)}
                                        </span>
                                        <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-tight group-hover:tracking-wide transition-all duration-500">
                                            {t(`portfolio_page.items.${project.key}.title`)}
                                        </h3>
                                    </div>

                                    <div className="flex items-center gap-4 mt-6 md:mt-0 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 text-xs font-mono">
                                        <span>{t('view_case')}</span>
                                        <ArrowUpRight size={18} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                        <div className="border-t border-white/20"></div>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};

export default Portfolio;
