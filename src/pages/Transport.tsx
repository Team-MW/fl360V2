import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import Starfield from '../components/Starfield';
import flotteintegration from '../assets/flotteintegration.avif';
import { Plane, Package } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Transport = () => {
    const { t } = useTranslation();

    return (
        <PageTransition>
            <Helmet>
                <title>{t('transport.title')}</title>
                <meta name="description" content={t('transport.meta_desc')} />
            </Helmet>

            <div className="min-h-screen bg-zinc-950 text-white font-sans">
                <Starfield />

                {/* Hero Section */}
                <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={flotteintegration}
                            alt="Transport Aérien"
                            className="w-full h-full object-cover opacity-90 select-none"
                        />
                        <div className="absolute inset-0 bg-black/10"></div>
                    </div>

                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-2xl md:text-4xl lg:text-5xl font-black uppercase tracking-widest mb-6 leading-tight"
                        >
                            {t('transport.hero.title')}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-2xl text-gray-400 font-light tracking-wide uppercase border-b border-white/10 pb-8 inline-block"
                        >
                            {t('transport.hero.subtitle')}
                        </motion.p>
                    </div>
                </div>

                {/* Content Section */}
                <div className="container mx-auto px-6 relative z-10 -mt-16 pb-20">
                    <div className="text-center mb-16 max-w-4xl mx-auto">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="bg-black/40 backdrop-blur-md p-6 rounded-xl border border-white/5 text-lg text-gray-300"
                        >
                            {t('transport.hero.desc')}
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-zinc-900/80 backdrop-blur-sm border border-white/5 p-8 rounded-none hover:border-indigo-500/30 transition-all group"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                                    <Plane size={24} className="text-gray-300 group-hover:text-white" />
                                </div>
                                <h3 className="text-lg font-bold uppercase tracking-widest text-white group-hover:text-indigo-400 transition-colors">{t('transport.cards.passengers.title')}</h3>
                            </div>
                            <p className="text-gray-400">{t('transport.cards.passengers.desc')}</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-zinc-900/80 backdrop-blur-sm border border-white/5 p-8 rounded-none hover:border-indigo-500/30 transition-all group"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                                    <Package size={24} className="text-gray-300 group-hover:text-white" />
                                </div>
                                <h3 className="text-lg font-bold uppercase tracking-widest text-white group-hover:text-indigo-400 transition-colors">{t('transport.cards.freight.title')}</h3>
                            </div>
                            <p className="text-gray-400">{t('transport.cards.freight.desc')}</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};

export default Transport;
