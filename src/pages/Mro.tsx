import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import Starfield from '../components/Starfield';
import { Zap, Link, Battery, Disc, Settings, Package, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Mro = () => {
    const { t } = useTranslation();

    const categories = [
        {
            title: t('mro.categories.spark_plugs'),
            icon: Zap,
            items: ["Champion"]
        },
        {
            title: t('mro.categories.fittings'),
            icon: Link,
            items: t('mro.items.fittings', { returnObjects: true }) as string[]
        },
        {
            title: t('mro.categories.batteries'),
            icon: Battery,
            items: [
                "Gill",
                "Concorde",
                "True blue power"
            ]
        },
        {
            title: t('mro.categories.tires'),
            icon: Disc,
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
            items: [
                "Bendix",
                "Champion Slick Magneto"
            ]
        },
        {
            title: t('mro.categories.others'),
            icon: Package,
            items: t('mro.items.others', { returnObjects: true }) as string[]
        }
    ];

    return (
        <PageTransition>
            <Helmet>
                <title>{t('mro.title')}</title>
                <meta name="description" content={t('mro.meta_desc')} />
            </Helmet>

            <div className="min-h-screen bg-zinc-950 text-white font-sans pt-32 pb-20">
                <Starfield />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16 max-w-4xl mx-auto">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-widest mb-6 leading-tight"
                        >
                            {t('mro.hero.title_prefix')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">{t('mro.hero.title_highlight')}</span> {t('mro.hero.title_suffix')}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-2xl text-gray-400 font-light tracking-wide uppercase border-b border-white/10 pb-8 inline-block"
                        >
                            {t('mro.hero.subtitle')}
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {categories.map((category, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 + 0.3 }}
                                className="bg-zinc-900/50 backdrop-blur-sm border border-white/5 p-8 rounded-none hover:border-indigo-500/30 transition-all group"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                                        <category.icon size={24} className="text-gray-300 group-hover:text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold uppercase tracking-widest text-white group-hover:text-indigo-400 transition-colors">{category.title}</h3>
                                </div>
                                <ul className="space-y-3">
                                    {category.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-gray-400 group-hover:text-gray-300 transition-colors">
                                            <Check size={16} className="mt-1 text-indigo-500/50 group-hover:text-indigo-500 shrink-0" />
                                            <span className="text-sm font-medium tracking-wide">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="text-center bg-indigo-900/10 border border-indigo-500/20 p-8 rounded-lg max-w-2xl mx-auto"
                    >
                        <p className="text-indigo-200 font-medium tracking-wide">
                            {t('mro.more_info')}
                        </p>
                    </motion.div>
                </div>
            </div>
        </PageTransition>
    );
};

export default Mro;
