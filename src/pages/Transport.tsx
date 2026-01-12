import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import Starfield from '../components/Starfield';
import flotteintegration from '../assets/flotteintegration.avif';
import { Package, Users, Briefcase, HeartPulse, Clock, ShieldAlert, Anvil, Globe, ShieldCheck, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Transport = () => {
    const { t } = useTranslation();

    return (
        <PageTransition>
            <Helmet>
                <title>{t('transport.title')}</title>
                <meta name="description" content={t('transport.meta_desc')} />
            </Helmet>

            <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-indigo-500/30 relative">
                <Starfield />

                {/* Hero Section */}
                <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={flotteintegration}
                            alt="Transport Aérien"
                            className="w-full h-full object-cover opacity-90 select-none"
                        />
                        <div className="absolute inset-0 bg-black/40"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
                    </div>

                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-3xl md:text-5xl lg:text-7xl font-black uppercase tracking-widest mb-6 leading-tight drop-shadow-2xl"
                        >
                            {t('transport.hero.title')}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-2xl text-gray-200 font-light tracking-wide uppercase border-b-2 border-indigo-500 pb-2 inline-block shadow-black drop-shadow-md"
                        >
                            {t('transport.hero.subtitle')}
                        </motion.p>
                    </div>
                </div>

                {/* Passenger Section */}
                <section className="py-20 bg-zinc-950 relative z-10">
                    <div className="container mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <div className="inline-flex items-center justify-center p-3 bg-indigo-500/10 rounded-full mb-4">
                                <Users size={32} className="text-indigo-400" />
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-widest mb-4">{t('transport.passengers_section.title')}</h2>
                            <p className="text-gray-400 text-lg uppercase tracking-wider">{t('transport.passengers_section.subtitle')}</p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Business */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="bg-zinc-900/50 border border-white/5 p-8 hover:border-indigo-500/50 transition-all group"
                            >
                                <Briefcase className="w-10 h-10 text-indigo-400 mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xl font-bold uppercase tracking-widest mb-4 group-hover:text-indigo-300 transition-colors">{t('transport.passengers_section.business.title')}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm">{t('transport.passengers_section.business.desc')}</p>
                            </motion.div>

                            {/* Group */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="bg-zinc-900/50 border border-white/5 p-8 hover:border-indigo-500/50 transition-all group"
                            >
                                <Users className="w-10 h-10 text-indigo-400 mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xl font-bold uppercase tracking-widest mb-4 group-hover:text-indigo-300 transition-colors">{t('transport.passengers_section.group.title')}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm">{t('transport.passengers_section.group.desc')}</p>
                            </motion.div>

                            {/* Medical */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="bg-zinc-900/50 border border-white/5 p-8 hover:border-red-500/50 transition-all group"
                            >
                                <HeartPulse className="w-10 h-10 text-red-400 mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xl font-bold uppercase tracking-widest mb-4 group-hover:text-red-300 transition-colors">{t('transport.passengers_section.medical.title')}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm">{t('transport.passengers_section.medical.desc')}</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Freight Section */}
                <section className="py-20 bg-zinc-900/30 border-y border-white/5 relative z-10">
                    <div className="container mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <div className="inline-flex items-center justify-center p-3 bg-indigo-500/10 rounded-full mb-4">
                                <Package size={32} className="text-indigo-400" />
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-widest mb-4">{t('transport.freight_section.title')}</h2>
                            <p className="text-gray-400 text-lg uppercase tracking-wider">{t('transport.freight_section.subtitle')}</p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Urgent */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="bg-zinc-950 border border-white/5 p-8 group hover:bg-zinc-900 transition-colors"
                            >
                                <div className="flex items-center justify-between mb-8">
                                    <Clock className="w-8 h-8 text-indigo-400" />
                                    <span className="text-xs font-mono text-gray-500">01</span>
                                </div>
                                <h3 className="text-lg font-bold uppercase tracking-widest mb-4 text-white group-hover:text-indigo-400 transition-colors">{t('transport.freight_section.urgent.title')}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{t('transport.freight_section.urgent.desc')}</p>
                            </motion.div>

                            {/* Dangerous */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="bg-zinc-950 border border-white/5 p-8 group hover:bg-zinc-900 transition-colors"
                            >
                                <div className="flex items-center justify-between mb-8">
                                    <ShieldAlert className="w-8 h-8 text-indigo-400" />
                                    <span className="text-xs font-mono text-gray-500">02</span>
                                </div>
                                <h3 className="text-lg font-bold uppercase tracking-widest mb-4 text-white group-hover:text-indigo-400 transition-colors">{t('transport.freight_section.dangerous.title')}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{t('transport.freight_section.dangerous.desc')}</p>
                            </motion.div>

                            {/* Heavy */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="bg-zinc-950 border border-white/5 p-8 group hover:bg-zinc-900 transition-colors"
                            >
                                <div className="flex items-center justify-between mb-8">
                                    <Anvil className="w-8 h-8 text-indigo-400" />
                                    <span className="text-xs font-mono text-gray-500">03</span>
                                </div>
                                <h3 className="text-lg font-bold uppercase tracking-widest mb-4 text-white group-hover:text-indigo-400 transition-colors">{t('transport.freight_section.heavy.title')}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{t('transport.freight_section.heavy.desc')}</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Features / Why Us */}
                <section className="py-24 relative z-10">
                    <div className="container mx-auto px-6">
                        <div className="grid md:grid-cols-3 gap-12 text-center">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-indigo-500/20">
                                    <Zap className="text-white w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold uppercase tracking-widest mb-2">{t('transport.features.flexibility.title')}</h3>
                                <p className="text-gray-400 text-sm">{t('transport.features.flexibility.desc')}</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-indigo-500/20">
                                    <ShieldCheck className="text-white w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold uppercase tracking-widest mb-2">{t('transport.features.safety.title')}</h3>
                                <p className="text-gray-400 text-sm">{t('transport.features.safety.desc')}</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-indigo-500/20">
                                    <Globe className="text-white w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold uppercase tracking-widest mb-2">{t('transport.features.global.title')}</h3>
                                <p className="text-gray-400 text-sm">{t('transport.features.global.desc')}</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 relative overflow-hidden z-10 border-t border-white/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-950 to-indigo-950"></div>
                    <div className="absolute inset-0 bg-[url('/flotteintegration.avif')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/20 to-transparent"></div>

                    <div className="container mx-auto px-6 text-center relative z-20">
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-widest text-white mb-6 drop-shadow-2xl">
                            {t('transport.cta_footer.title')}
                        </h2>
                        <p className="text-indigo-200 text-lg mb-10 max-w-2xl mx-auto font-light tracking-wide">
                            {t('transport.cta_footer.subtitle')}
                        </p>
                        <motion.a
                            href="/contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block bg-white text-indigo-950 px-12 py-5 rounded-full font-black uppercase tracking-widest hover:bg-indigo-50 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)]"
                        >
                            {t('transport.cta_footer.button')}
                        </motion.a>
                    </div>
                </section>
            </div>
        </PageTransition>
    );
};

export default Transport;
