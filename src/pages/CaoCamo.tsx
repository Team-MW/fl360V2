import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import Starfield from '../components/Starfield';
import camo from '../assets/camo.avif';
import { Check, FileText, Settings, Shield, Monitor, Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const CaoCamo = () => {
    const { t } = useTranslation();

    const services = t('cao_camo.services_list.items', { returnObjects: true }) as string[];

    const progDigitalFeatures = t('cao_camo.progdigital.features', { returnObjects: true }) as string[];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <PageTransition>
            <Helmet>
                <title>{t('cao_camo.title')}</title>
                <meta name="description" content={t('cao_camo.meta_desc')} />
            </Helmet>

            <div className="min-h-screen bg-zinc-950 text-white font-sans">
                <Starfield />

                {/* Hero Section */}
                <div className="relative min-h-[60vh] flex items-center justify-center mb-24 overflow-hidden pt-32 pb-20">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={camo}
                            alt="CAMO Management"
                            className="w-full h-full object-cover opacity-90 select-none"
                        />
                        <div className="absolute inset-0 bg-black/10"></div>
                    </div>
                    <Starfield />

                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-2xl md:text-4xl lg:text-5xl font-black uppercase tracking-widest mb-6 leading-tight"
                        >
                            {t('cao_camo.hero.title_prefix')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">{t('cao_camo.hero.title_highlight')}</span> {t('cao_camo.hero.title_suffix')}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-2xl text-gray-300 font-light tracking-wide max-w-4xl mx-auto mb-8"
                        >
                            {t('cao_camo.hero.subtitle_line1')}<br />
                            <span className="text-indigo-400 text-lg">{t('cao_camo.hero.subtitle_line2')}</span>
                        </motion.p>
                    </div>
                </div>

                <div className="container mx-auto px-6 relative z-10 space-y-24">

                    {/* About Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={containerVariants}
                            className="bg-zinc-900/50 backdrop-blur-sm border border-white/5 p-8 rounded-2xl"
                        >
                            <h2 className="text-2xl font-bold uppercase tracking-widest mb-6 border-l-4 border-indigo-500 pl-4">{t('cao_camo.about.title')}</h2>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                {t('cao_camo.about.p1')}
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                {t('cao_camo.about.p2')}
                            </p>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={containerVariants}
                            className="bg-zinc-900/50 backdrop-blur-sm border border-white/5 p-8 rounded-2xl"
                        >
                            <h2 className="text-2xl font-bold uppercase tracking-widest mb-6 border-l-4 border-violet-500 pl-4">{t('cao_camo.benefits.title')}</h2>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                {t('cao_camo.benefits.desc')}
                            </p>
                            <div className="flex items-center gap-4 text-indigo-300">
                                <Shield size={24} />
                                <span className="font-semibold">{t('cao_camo.benefits.compliance')}</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Services List */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <h2 className="text-3xl font-bold uppercase tracking-widest text-center mb-12">{t('cao_camo.services_list.title')}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors group"
                                >
                                    <div className="mt-1 w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center shrink-0 group-hover:bg-indigo-500/20 transition-colors">
                                        <Check size={16} className="text-indigo-400 group-hover:text-indigo-300" />
                                    </div>
                                    <span className="text-gray-300 group-hover:text-white transition-colors">{service}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Needs vs Offer Sections */}
                    <div className="space-y-16">
                        {/* Navigability Management */}
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <Settings size={32} className="text-violet-500" />
                                <h2 className="text-3xl font-bold uppercase tracking-widest">{t('cao_camo.navigability.title')}</h2>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="bg-zinc-900 border border-white/10 p-8 rounded-xl"
                                >
                                    <h3 className="text-xl font-bold text-gray-400 mb-4 uppercase">{t('cao_camo.navigability.needs.title')}</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        {t('cao_camo.navigability.needs.desc')}
                                    </p>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="bg-gradient-to-br from-indigo-900/40 to-violet-900/40 border border-indigo-500/30 p-8 rounded-xl"
                                >
                                    <h3 className="text-xl font-bold text-indigo-300 mb-4 uppercase">{t('cao_camo.navigability.offer.title')}</h3>
                                    <p className="text-gray-300 leading-relaxed mb-4">
                                        {t('cao_camo.navigability.offer.desc1')}
                                    </p>
                                    <p className="text-gray-300 leading-relaxed">
                                        {t('cao_camo.navigability.offer.desc2')}
                                    </p>
                                </motion.div>
                            </div>
                        </div>

                        {/* Prebuy Inspection */}
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <Search size={32} className="text-violet-500" />
                                <h2 className="text-3xl font-bold uppercase tracking-widest">{t('cao_camo.prebuy.title')}</h2>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="bg-zinc-900 border border-white/10 p-8 rounded-xl"
                                >
                                    <h3 className="text-xl font-bold text-gray-400 mb-4 uppercase">{t('cao_camo.prebuy.needs.title')}</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        {t('cao_camo.prebuy.needs.desc')}
                                    </p>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="bg-gradient-to-br from-indigo-900/40 to-violet-900/40 border border-indigo-500/30 p-8 rounded-xl"
                                >
                                    <h3 className="text-xl font-bold text-indigo-300 mb-4 uppercase">{t('cao_camo.prebuy.offer.title')}</h3>
                                    <p className="text-gray-300 leading-relaxed mb-4">
                                        {t('cao_camo.prebuy.offer.desc1')}
                                    </p>
                                    <p className="text-gray-300 leading-relaxed">
                                        {t('cao_camo.prebuy.offer.desc2')}
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Maintenance Program */}
                    <div className="bg-zinc-900/30 border border-white/5 p-8 md:p-12 rounded-2xl text-center">
                        <FileText size={48} className="text-violet-500 mx-auto mb-6" />
                        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-widest mb-6">{t('cao_camo.maintenance_program.title')}</h2>
                        <p className="text-gray-300 leading-relaxed max-w-4xl mx-auto">
                            {t('cao_camo.maintenance_program.desc')}
                        </p>
                    </div>

                    {/* ProgDigital Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <Monitor size={32} className="text-indigo-400" />
                                <h2 className="text-3xl font-bold uppercase tracking-widest">{t('cao_camo.progdigital.title')}</h2>
                            </div>
                            <p className="text-lg text-indigo-300 mb-6 font-light">
                                {t('cao_camo.progdigital.subtitle')}
                            </p>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                {t('cao_camo.progdigital.desc')}
                            </p>
                            <ul className="space-y-3">
                                {progDigitalFeatures.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0"></div>
                                        <span className="text-gray-300 text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative group overflow-hidden rounded-2xl border border-white/10">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                            <img
                                src="/progdigital.png"
                                alt="ProgDigital Interface"
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>

                    {/* Contact CTA */}
                    <div className="text-center pt-12">
                        <motion.a
                            href="/contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 bg-white text-black px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors"
                        >
                            {t('cao_camo.cta')}
                        </motion.a>
                    </div>

                </div>
            </div>
        </PageTransition>
    );
};

export default CaoCamo;
