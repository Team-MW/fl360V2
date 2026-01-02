import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import Starfield from '../components/Starfield';
import { Zap, Link, Battery, Disc, Settings, Package, Check, Shield, Wrench } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Mro = () => {
    const { t } = useTranslation();

    const categories = [
        {
            title: t('mro.categories.spark_plugs'),
            icon: Zap,
            image: "/spark.avif",
            items: ["Champion"]
        },
        {
            title: t('mro.categories.fittings'),
            icon: Link,
            image: "/flexible1.avif",
            items: t('mro.items.fittings', { returnObjects: true }) as string[]
        },
        {
            title: t('mro.categories.batteries'),
            icon: Battery,
            image: "/batterie.avif",
            items: [
                "Gill",
                "Concorde",
                "True blue power"
            ]
        },
        {
            title: t('mro.categories.tires'),
            icon: Disc,
            image: "/pneu.avif",
            items: [
                "Aero Classic",
                "Condor",
                "Goodyear",
                "Michelin",
                "Speciality Tires"
            ]
        },
        {
            title: t('mro.categories.magneto'),
            icon: Settings,
            image: "/magneto.avif",
            items: [
                "Bendix",
                "Champion Slick Magneto"
            ]
        },
        {
            title: t('mro.categories.others'),
            icon: Package,
            image: "/pieces.avif",
            items: t('mro.items.others', { returnObjects: true }) as string[]
        }
    ];

    return (
        <PageTransition>
            <Helmet>
                <title>{t('mro.title')}</title>
                <meta name="description" content={t('mro.meta_desc')} />
            </Helmet>

            <div className="min-h-screen bg-zinc-950 text-white font-sans">
                {/* Hero Section */}
                <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/pilatus6.avif"
                            alt="MRO Maintenance"
                            className="w-full h-full object-cover opacity-40"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-zinc-950"></div>
                        <Starfield />
                    </div>

                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-black tracking-widest mb-6 leading-tight max-w-5xl mx-auto"
                        >
                            {t('mro.hero.title_prefix')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">{t('mro.hero.title_highlight')}</span> {t('mro.hero.title_suffix')}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-xl md:text-2xl text-gray-300 font-light tracking-wide uppercase border-b border-white/10 pb-8 inline-block"
                        >
                            {t('mro.hero.subtitle')}
                        </motion.p>
                    </div>
                </div>

                <div className="container mx-auto px-6 relative z-10 -mt-20">
                    {/* Intro Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-zinc-900 border border-white/10 p-10 md:p-16 rounded-sm shadow-2xl mb-24 max-w-5xl mx-auto text-center"
                    >
                        <h2 className="text-3xl font-bold uppercase tracking-widest mb-6">{t('mro.intro.title')}</h2>
                        <p className="text-lg text-gray-400 leading-relaxed">
                            {t('mro.intro.desc')}
                        </p>
                    </motion.div>

                    {/* Benefits Grid */}
                    <div className="grid md:grid-cols-3 gap-8 mb-32">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-zinc-900/50 p-8 border border-white/5 hover:border-violet-500/30 transition-colors group"
                        >
                            <Shield className="w-12 h-12 text-violet-500 mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold uppercase tracking-wider mb-4">{t('mro.benefits.cert.title')}</h3>
                            <p className="text-gray-400">{t('mro.benefits.cert.desc')}</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-zinc-900/50 p-8 border border-white/5 hover:border-violet-500/30 transition-colors group"
                        >
                            <Package className="w-12 h-12 text-indigo-500 mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold uppercase tracking-wider mb-4">{t('mro.benefits.stock.title')}</h3>
                            <p className="text-gray-400">{t('mro.benefits.stock.desc')}</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-zinc-900/50 p-8 border border-white/5 hover:border-violet-500/30 transition-colors group"
                        >
                            <Wrench className="w-12 h-12 text-violet-400 mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold uppercase tracking-wider mb-4">{t('mro.benefits.support.title')}</h3>
                            <p className="text-gray-400">{t('mro.benefits.support.desc')}</p>
                        </motion.div>
                    </div>

                    {/* Categories Grid */}
                    <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-center mb-16">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Nos Pièces & Consommables</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
                        {categories.map((category, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-zinc-900/50 backdrop-blur-sm border border-white/5 overflow-hidden group hover:shadow-2xl hover:shadow-indigo-500/10 transition-all"
                            >
                                <div className="relative h-56 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent z-10 opacity-80"></div>
                                    <img
                                        src={category.image}
                                        alt={category.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 group-hover:bg-indigo-600 group-hover:border-indigo-500 transition-colors">
                                        <category.icon size={20} className="text-white" />
                                    </div>
                                </div>

                                <div className="p-8 relative -mt-12 z-20">
                                    <h3 className="text-xl font-bold uppercase tracking-widest text-white mb-6 group-hover:text-indigo-400 transition-colors">{category.title}</h3>
                                    <ul className="space-y-3">
                                        {category.items.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-gray-400 group-hover:text-gray-300 transition-colors border-b border-white/5 pb-2 last:border-0 last:pb-0">
                                                <Check size={16} className="mt-1 text-indigo-500 shrink-0" />
                                                <span className="text-sm font-medium tracking-wide">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center bg-gradient-to-r from-indigo-900/20 to-violet-900/20 border border-indigo-500/30 p-12 rounded-2xl max-w-4xl mx-auto mb-20"
                    >
                        <h3 className="text-2xl font-bold uppercase tracking-widest mb-4 text-white">Besoin d'une pièce spécifique ?</h3>
                        <p className="text-indigo-200 font-medium tracking-wide mb-8 text-lg">
                            {t('mro.more_info')}
                        </p>
                        <a href="/contact" className="inline-block px-10 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors rounded-sm">
                            Contactez le stock
                        </a>
                    </motion.div>
                </div>
            </div>
        </PageTransition>
    );
};

export default Mro;
