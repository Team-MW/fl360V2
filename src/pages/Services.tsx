import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/PageTransition';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Services = () => {
    const { t } = useTranslation();

    const services = [
        { id: "01", key: "management" },
        { id: "02", key: "maintenance" },
        { id: "03", key: "consulting" },
        { id: "04", key: "training" }
    ];

    return (
        <PageTransition>
            <Helmet><title>{t('services_page.title')} - fl360</title></Helmet>
            <div className="pt-40 pb-20 bg-black min-h-screen text-white">
                <div className="container mx-auto px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-bold mb-20 tracking-tighter opacity-90"
                    >
                        {t('services_page.title')}
                    </motion.h1>

                    <div className="flex flex-col">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="group relative border-t border-white/20 py-12 hover:bg-white/5 transition-colors duration-500"
                            >
                                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-8 px-4">
                                    <span className="text-sm md:text-base font-mono text-gray-500 group-hover:text-white transition-colors duration-300">
                                        / {service.id}
                                    </span>

                                    <div className="flex-1 max-w-4xl">
                                        <h2 className="text-2xl md:text-4xl font-bold mb-4 uppercase tracking-tight group-hover:tracking-wide transition-all duration-500">
                                            {t(`services_page.items.${service.key}.title`)}
                                        </h2>
                                        <p className="text-base text-gray-400 font-light max-w-2xl leading-relaxed group-hover:text-gray-300 transition-colors">
                                            {t(`services_page.items.${service.key}.desc`)}
                                        </p>
                                    </div>

                                    <div className="hidden md:block">
                                        <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                                            <ArrowUpRight className="transform group-hover:rotate-45 transition-transform duration-500" size={24} />
                                        </div>
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

export default Services;
