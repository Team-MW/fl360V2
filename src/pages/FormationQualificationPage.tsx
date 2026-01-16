import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/PageTransition';
import PartnersMarquee from '../components/PartnersMarquee';
import { motion } from 'framer-motion';
import { GraduationCap, ArrowRight, Award, BookOpen, Users, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Starfield from '../components/Starfield';
import formationQualification from '../assets/formation etqualification.avif';
import formationImg from '../assets/formation.avif';
import camoImg from '../assets/camo.avif';
import mroImg from '../assets/mro.avif';
import AnimatedCounter from '../components/AnimatedCounter';

const FormationQualificationPage = () => {
    const { t } = useTranslation();

    const formationServices = [
        {
            id: 1,
            titleKey: 'formation_qualification_page.services.pilot_training.title',
            slug: "/formation",
            descKey: 'formation_qualification_page.services.pilot_training.desc',
            icon: GraduationCap,
            image: formationImg,
            features: ['formation_qualification_page.services.pilot_training.feature1', 'formation_qualification_page.services.pilot_training.feature2', 'formation_qualification_page.services.pilot_training.feature3'],
            highlights: ['formation_qualification_page.services.pilot_training.highlight1', 'formation_qualification_page.services.pilot_training.highlight2', 'formation_qualification_page.services.pilot_training.highlight3']
        },
        {
            id: 2,
            titleKey: 'formation_qualification_page.services.cao_camo.title',
            slug: "/cao-camo",
            descKey: 'formation_qualification_page.services.cao_camo.desc',
            icon: Award,
            image: camoImg,
            features: ['formation_qualification_page.services.cao_camo.feature1', 'formation_qualification_page.services.cao_camo.feature2', 'formation_qualification_page.services.cao_camo.feature3'],
            highlights: ['formation_qualification_page.services.cao_camo.highlight1', 'formation_qualification_page.services.cao_camo.highlight2', 'formation_qualification_page.services.cao_camo.highlight3']
        },
        {
            id: 3,
            titleKey: 'formation_qualification_page.services.cap_list.title',
            slug: "/cap-list",
            descKey: 'formation_qualification_page.services.cap_list.desc',
            icon: BookOpen,
            image: mroImg,
            features: ['formation_qualification_page.services.cap_list.feature1', 'formation_qualification_page.services.cap_list.feature2', 'formation_qualification_page.services.cap_list.feature3'],
            highlights: ['formation_qualification_page.services.cap_list.highlight1', 'formation_qualification_page.services.cap_list.highlight2', 'formation_qualification_page.services.cap_list.highlight3']
        }
    ];

    const advantages = [
        {
            icon: Award,
            titleKey: 'formation_qualification_page.advantages.certifications.title',
            descKey: 'formation_qualification_page.advantages.certifications.desc'
        },
        {
            icon: Users,
            titleKey: 'formation_qualification_page.advantages.instructors.title',
            descKey: 'formation_qualification_page.advantages.instructors.desc'
        },
        {
            icon: Target,
            titleKey: 'formation_qualification_page.advantages.personalized.title',
            descKey: 'formation_qualification_page.advantages.personalized.desc'
        }
    ];

    const stats = [
        { number: "500+", labelKey: "formation_qualification_page.stats.pilots" },
        { number: "15+", labelKey: "formation_qualification_page.stats.experience" },
        { number: "98%", labelKey: "formation_qualification_page.stats.success" },
        { number: "24/7", labelKey: "formation_qualification_page.stats.support" }
    ];

    return (
        <PageTransition>
            <Helmet>
                <title>Formation et Qualification - FL360 Aviation</title>
                <meta name="description" content="Formation professionnelle pour pilotes, gestion de la navigabilité CAO/CAMO et certifications aéronautiques. ATO certifié EASA." />
                <meta property="og:title" content="Formation et Qualification - FL360 Aviation" />
                <meta property="og:description" content="Formation professionnelle pour pilotes, gestion de la navigabilité CAO/CAMO et certifications aéronautiques. ATO certifié EASA." />
                <meta property="og:image" content="/formation.avif" />
                <meta property="og:url" content="https://fl360.com/formation-qualification" />
            </Helmet>

            <div className="min-h-screen bg-zinc-950 text-white relative">
                <Starfield />

                {/* Hero Section */}
                <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={formationQualification}
                            alt="Formation et Qualification Aviation"
                            className="w-full h-full object-cover opacity-70 select-none"
                        />
                        <div className="absolute inset-0 bg-black/30"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
                    </div>

                    <div className="container mx-auto px-6 relative z-10 text-center pt-32 pb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight mb-6">
                                {t('formation_qualification_page.hero.title_prefix')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">{t('formation_qualification_page.hero.title_highlight')}</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto mb-8">
                                {t('formation_qualification_page.hero.subtitle')}
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <span className="px-6 py-2 bg-indigo-600/20 border border-indigo-500/30 rounded-full text-indigo-300 text-sm font-semibold">
                                    {t('formation_qualification_page.hero.badge_ato')}
                                </span>
                                <span className="px-6 py-2 bg-indigo-600/20 border border-indigo-500/30 rounded-full text-indigo-300 text-sm font-semibold">
                                    {t('formation_qualification_page.hero.badge_instructors')}
                                </span>
                                <span className="px-6 py-2 bg-indigo-600/20 border border-indigo-500/30 rounded-full text-indigo-300 text-sm font-semibold">
                                    {t('formation_qualification_page.hero.badge_training')}
                                </span>
                            </div>
                            <Link
                                to="/contact"
                                className="inline-block mt-8 px-10 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase tracking-wider rounded-full transition-all hover:scale-105 shadow-lg shadow-indigo-500/30"
                            >
                                {t('contact_page.form.book_flight')}
                            </Link>
                        </motion.div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="container mx-auto px-6 py-16 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400 mb-2">
                                    <AnimatedCounter value={stat.number} />
                                </div>
                                <div className="text-gray-400 text-sm uppercase tracking-wider">{t(stat.labelKey)}</div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Advantages Section */}
                    <div className="grid md:grid-cols-3 gap-8 mb-20">
                        {advantages.map((advantage, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-zinc-900/50 backdrop-blur-sm border border-white/5 p-8 rounded-xl hover:border-indigo-500/30 transition-all group"
                            >
                                <advantage.icon className="w-12 h-12 text-indigo-400 mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xl font-bold mb-3">{t(advantage.titleKey)}</h3>
                                <p className="text-gray-400">{t(advantage.descKey)}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Formation Services Grid */}
                    <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-center mb-16">
                        {t('formation_qualification_page.programs_title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">{t('formation_qualification_page.programs_highlight')}</span>
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 mb-20">
                        {formationServices.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link
                                    to={service.slug}
                                    className="group block bg-zinc-900/50 backdrop-blur-sm border border-white/5 rounded-xl overflow-hidden hover:border-indigo-500/50 transition-all hover:shadow-2xl hover:shadow-indigo-500/10 h-full"
                                >
                                    {/* Image */}
                                    <div className="relative h-56 overflow-hidden">
                                        <img
                                            src={service.image}
                                            alt={t(service.titleKey)}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent"></div>
                                        <div className="absolute top-4 right-4 w-12 h-12 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 group-hover:bg-indigo-600 group-hover:border-indigo-500 transition-colors">
                                            <service.icon size={20} className="text-white" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-400 transition-colors">
                                            {t(service.titleKey)}
                                        </h3>
                                        <p className="text-gray-400 mb-4 leading-relaxed">
                                            {t(service.descKey)}
                                        </p>

                                        {/* Highlights */}
                                        <div className="space-y-2 mb-4">
                                            {service.highlights.map((highlightKey, idx) => (
                                                <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                                                    <span>{t(highlightKey)}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Features */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {service.features.map((featureKey, idx) => (
                                                <span
                                                    key={idx}
                                                    className="text-xs px-3 py-1 bg-indigo-600/10 border border-indigo-500/20 rounded-full text-indigo-300"
                                                >
                                                    {t(featureKey)}
                                                </span>
                                            ))}
                                        </div>

                                        {/* CTA */}
                                        <div className="flex items-center gap-2 text-indigo-400 font-semibold group-hover:gap-4 transition-all">
                                            <span>{t('formation_qualification_page.discover')}</span>
                                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center bg-gradient-to-br from-indigo-900/30 via-purple-900/20 to-violet-900/30 backdrop-blur-md border border-indigo-500/20 p-12 rounded-2xl"
                    >
                        <h3 className="text-3xl font-bold mb-4">{t('formation_qualification_page.cta.title')}</h3>
                        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                            {t('formation_qualification_page.cta.subtitle')}
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block px-10 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase tracking-wider rounded-full transition-all hover:scale-105 shadow-lg shadow-indigo-500/30"
                        >
                            {t('contact_page.form.book_flight')}
                        </Link>
                    </motion.div>
                </div>

                {/* Partners Section */}
                <PartnersMarquee />
            </div>
        </PageTransition >
    );
};

export default FormationQualificationPage;
