import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import { Check, Download, Plane, Camera, Video, Megaphone } from 'lucide-react';
import Starfield from '../components/Starfield';
import { useTranslation, Trans } from 'react-i18next';

const Formation = () => {
    const { t } = useTranslation();

    const requirements = t('formation.ato.prereq.items', { returnObjects: true }) as string[];
    const features = t('formation.progdigital.features', { returnObjects: true }) as string[];

    return (
        <PageTransition>
            <Helmet>
                <title>{t('formation.title')}</title>
                <meta name="description" content={t('formation.meta_desc')} />
            </Helmet>

            <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-indigo-500/30">
                <Starfield />

                {/* Hero Section */}
                <div className="relative pt-40 pb-20 overflow-hidden">
                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-widest mb-6"
                        >
                            {t('formation.hero.title_line1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">{t('formation.hero.title_highlight')}</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto"
                        >
                            <Trans i18nKey="formation.hero.subtitle" components={{ 1: <span className="font-semibold text-white" /> }} />
                        </motion.p>
                    </div>
                </div>

                {/* ATO Section */}
                <section className="py-20 bg-zinc-900/50 border-y border-white/5 relative">
                    <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                        <h2 className="text-9xl font-black uppercase text-white tracking-tighter">ATO</h2>
                    </div>

                    <div className="container mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-16 items-start">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="inline-block px-4 py-2 border border-indigo-500/30 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-bold uppercase tracking-widest mb-6">
                                    {t('formation.ato.tag')}
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide mb-6">
                                    <span dangerouslySetInnerHTML={{ __html: t('formation.ato.title') }} />
                                </h2>
                                <p className="text-gray-400 leading-relaxed mb-6">
                                    {t('formation.ato.desc')}
                                </p>

                                <div className="bg-zinc-800/50 p-6 border-l-4 border-indigo-500 rounded-r-lg mb-8">
                                    <h3 className="text-xl font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                                        <Plane className="text-indigo-400" /> {t('formation.ato.type_rating.title')}
                                    </h3>
                                    <p className="text-sm text-gray-400">
                                        {t('formation.ato.type_rating.desc')}
                                    </p>
                                    <p className="text-sm text-gray-400 mt-2 italic">
                                        {t('formation.ato.type_rating.note')}
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-zinc-950 p-8 border border-zinc-800 relative group hover:border-indigo-500/50 transition-colors"
                            >
                                <div className="absolute -top-3 -right-3">
                                    <span className="relative flex h-6 w-6">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-6 w-6 bg-indigo-500"></span>
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold uppercase tracking-widest mb-6 border-b border-zinc-800 pb-4">
                                    {t('formation.ato.prereq.title')}
                                </h3>
                                <ul className="space-y-4">
                                    {requirements.map((req, idx) => (
                                        <li key={idx} className="flex items-start gap-4">
                                            <div className="mt-1 bg-indigo-500/20 p-1 rounded-full">
                                                <Check size={14} className="text-indigo-400" />
                                            </div>
                                            <span className="text-gray-300 text-sm leading-relaxed">{req}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Travaux Aériens Section */}
                <section className="py-20 bg-gradient-to-b from-zinc-900 to-zinc-800/50">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-widest mb-6 text-white drop-shadow-lg">{t('formation.aerial_work.title')}</h2>
                            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                                {t('formation.aerial_work.desc')}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Card 1 */}
                            <motion.div
                                whileHover={{ y: -10 }}
                                className="bg-zinc-800/60 backdrop-blur-sm border border-zinc-700/50 p-8 hover:border-indigo-500/50 transition-all group shadow-2xl hover:shadow-indigo-500/10"
                            >
                                <div className="bg-zinc-900/80 w-16 h-16 flex items-center justify-center rounded-2xl mb-6 group-hover:scale-110 transition-transform border border-zinc-700">
                                    <Video className="w-8 h-8 text-indigo-300" />
                                </div>
                                <h3 className="text-xl font-bold uppercase tracking-widest mb-4 text-white">{t('formation.aerial_work.cards.surveillance.title')}</h3>
                                <p className="text-base text-gray-300 leading-relaxed">
                                    {t('formation.aerial_work.cards.surveillance.desc')}
                                </p>
                            </motion.div>

                            {/* Card 2 */}
                            <motion.div
                                whileHover={{ y: -10 }}
                                className="bg-zinc-800/60 backdrop-blur-sm border border-zinc-700/50 p-0 overflow-hidden hover:border-indigo-500/50 transition-all group relative min-h-[400px] shadow-2xl hover:shadow-indigo-500/10"
                            >
                                <img src="/helico4.avif" alt="Hélicoptère Formation" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity" />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/60 to-transparent p-8 flex flex-col justify-end">
                                    <div className="bg-indigo-600 w-12 h-12 flex items-center justify-center rounded-xl mb-4 shadow-lg shadow-indigo-500/30">
                                        <Camera className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold uppercase tracking-widest mb-4 text-white">{t('formation.aerial_work.cards.photo.title')}</h3>
                                    <p className="text-base text-gray-200 leading-relaxed font-medium">
                                        {t('formation.aerial_work.cards.photo.desc')}
                                    </p>
                                </div>
                            </motion.div>

                            {/* Card 3 */}
                            <motion.div
                                whileHover={{ y: -10 }}
                                className="bg-zinc-800/60 backdrop-blur-sm border border-zinc-700/50 p-0 overflow-hidden hover:border-indigo-500/50 transition-all group relative min-h-[400px] shadow-2xl hover:shadow-indigo-500/10"
                            >
                                {/* Assuming a generic aerial image or reusing an asset if available, otherwise just text/gradient */}
                                <div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-indigo-900/20 transition-colors"></div>
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900/90 p-8 flex flex-col justify-end h-full">
                                    <div className="mb-auto mt-6 bg-zinc-900/80 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform border border-zinc-700">
                                        <Megaphone className="w-8 h-8 text-indigo-300" />
                                    </div>
                                    <h3 className="text-xl font-bold uppercase tracking-widest mb-4 text-white">{t('formation.aerial_work.cards.ads.title')}</h3>
                                    <p className="text-base text-gray-300 leading-relaxed">
                                        {t('formation.aerial_work.cards.ads.desc')}
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* SPO CTA Section */}
                <section className="py-20 bg-indigo-600 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/helico4.avif')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-violet-900/90"></div>

                    <div className="container mx-auto px-6 text-center relative z-10">
                        <h2 className="text-3xl font-bold uppercase tracking-widest mb-8 text-white drop-shadow-xl">{t('formation.docs.title')}</h2>

                        <motion.a
                            whileHover={{ scale: 1.05, backgroundColor: "#ffffff" }}
                            whileTap={{ scale: 0.95 }}
                            href="/Licence-Exploitation-Commercial.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-white text-indigo-900 px-10 py-5 rounded-full font-black uppercase tracking-widest hover:text-indigo-700 transition-all shadow-2xl shadow-indigo-900/50 border-4 border-transparent hover:border-indigo-100"
                        >
                            <Download size={24} />
                            <span>{t('formation.docs.button')}</span>
                        </motion.a>
                        <p className="mt-6 text-indigo-200 font-medium tracking-wide">{t('formation.docs.sub')}</p>
                    </div>
                </section>
            </div>
        </PageTransition>
    );
};

export default Formation;
