import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/PageTransition';
import PartnersMarquee from '../components/PartnersMarquee';
import { motion } from 'framer-motion';
import { Plane, ArrowRight, Users, Globe, Clock, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Starfield from '../components/Starfield';
import jetprive from '../assets/jetprié.jpg';
import helicoptereImg from '../assets/hélicoptère AS350 B2.jpg';
import avionsaffairesImg from '../assets/avionsd\'affaire.jpg.webp';
import helico4Img from '../assets/helico4.avif';

const TransportPage = () => {
    const { t } = useTranslation();

    const transportServices = [
        {
            id: 1,
            titleKey: 'transport_page.services.private_jets.title',
            slug: "/jets-prives",
            descKey: 'transport_page.services.private_jets.desc',
            icon: Plane,
            image: jetprive,
            features: ['transport_page.services.private_jets.feature1', 'transport_page.services.private_jets.feature2', 'transport_page.services.private_jets.feature3']
        },
        {
            id: 2,
            titleKey: 'transport_page.services.helicopters.title',
            slug: "/helicopteres",
            descKey: 'transport_page.services.helicopters.desc',
            icon: Plane,
            image: helicoptereImg,
            features: ['transport_page.services.helicopters.feature1', 'transport_page.services.helicopters.feature2', 'transport_page.services.helicopters.feature3']
        },
        {
            id: 3,
            titleKey: 'transport_page.services.business_jets.title',
            slug: "/avions-affaires",
            descKey: 'transport_page.services.business_jets.desc',
            icon: Plane,
            image: avionsaffairesImg,
            features: ['transport_page.services.business_jets.feature1', 'transport_page.services.business_jets.feature2', 'transport_page.services.business_jets.feature3']
        },
        {
            id: 4,
            titleKey: 'transport_page.services.taxi_planes.title',
            slug: "/avions-taxi",
            descKey: 'transport_page.services.taxi_planes.desc',
            icon: Plane,
            image: jetprive,
            features: ['transport_page.services.taxi_planes.feature1', 'transport_page.services.taxi_planes.feature2', 'transport_page.services.taxi_planes.feature3']
        },
        {
            id: 5,
            titleKey: 'transport_page.services.hand_carry.title',
            slug: "/hand-carry",
            descKey: 'transport_page.services.hand_carry.desc',
            icon: Globe,
            image: helico4Img,
            features: ['transport_page.services.hand_carry.feature1', 'transport_page.services.hand_carry.feature2', 'transport_page.services.hand_carry.feature3']
        }
    ];

    const advantages = [
        {
            icon: Clock,
            titleKey: 'transport_page.advantages.availability.title',
            descKey: 'transport_page.advantages.availability.desc'
        },
        {
            icon: Shield,
            titleKey: 'transport_page.advantages.security.title',
            descKey: 'transport_page.advantages.security.desc'
        },
        {
            icon: Users,
            titleKey: 'transport_page.advantages.personalized.title',
            descKey: 'transport_page.advantages.personalized.desc'
        }
    ];

    return (
        <PageTransition>
            <Helmet>
                <title>Transport Aérien - FL360 Aviation</title>
                <meta name="description" content="Solutions de transport aérien sur mesure : jets privés, hélicoptères, avions d'affaires et hand carry. Service premium disponible 24/7." />
                <meta property="og:title" content="Transport Aérien - FL360 Aviation" />
                <meta property="og:description" content="Solutions de transport aérien sur mesure : jets privés, hélicoptères, avions d'affaires et hand carry. Service premium disponible 24/7." />
                <meta property="og:image" content="/jetprié.jpg" />
                <meta property="og:url" content="https://fl360.com/transport-page" />
            </Helmet>

            <div className="min-h-screen bg-zinc-950 text-white relative">
                <Starfield />

                {/* Hero Section */}
                <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={jetprive}
                            alt="Transport Aérien"
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
                                {t('transport_page.hero.title_prefix')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">{t('transport_page.hero.title_highlight')}</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto mb-8">
                                {t('transport_page.hero.subtitle')}
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <span className="px-6 py-2 bg-violet-600/20 border border-violet-500/30 rounded-full text-violet-300 text-sm font-semibold">
                                    {t('transport_page.hero.badge_247')}
                                </span>
                                <span className="px-6 py-2 bg-violet-600/20 border border-violet-500/30 rounded-full text-violet-300 text-sm font-semibold">
                                    {t('transport_page.hero.badge_fleet')}
                                </span>
                                <span className="px-6 py-2 bg-violet-600/20 border border-violet-500/30 rounded-full text-violet-300 text-sm font-semibold">
                                    {t('transport_page.hero.badge_security')}
                                </span>
                            </div>
                            <Link
                                to="/contact"
                                className="inline-block mt-8 px-10 py-4 bg-violet-600 hover:bg-violet-700 text-white font-bold uppercase tracking-wider rounded-full transition-all hover:scale-105 shadow-lg shadow-violet-500/30"
                            >
                                {t('contact_page.form.book_flight')}
                            </Link>
                        </motion.div>
                    </div>
                </div>

                {/* Advantages Section */}
                <div className="container mx-auto px-6 py-20 relative z-10">
                    <div className="grid md:grid-cols-3 gap-8 mb-20">
                        {advantages.map((advantage, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-zinc-900/50 backdrop-blur-sm border border-white/5 p-8 rounded-xl hover:border-violet-500/30 transition-all group"
                            >
                                <advantage.icon className="w-12 h-12 text-violet-400 mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xl font-bold mb-3">{t(advantage.titleKey)}</h3>
                                <p className="text-gray-400">{t(advantage.descKey)}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Transport Services Grid */}
                    <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-center mb-16">
                        {t('transport_page.services_title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">{t('transport_page.services_highlight')}</span>
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        {transportServices.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link
                                    to={service.slug}
                                    className="group block bg-zinc-900/50 backdrop-blur-sm border border-white/5 rounded-xl overflow-hidden hover:border-violet-500/50 transition-all hover:shadow-2xl hover:shadow-violet-500/10"
                                >
                                    {/* Image */}
                                    <div className="relative h-56 overflow-hidden">
                                        <img
                                            src={service.image}
                                            alt={t(service.titleKey)}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent"></div>
                                        <div className="absolute top-4 right-4 w-12 h-12 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 group-hover:bg-violet-600 group-hover:border-violet-500 transition-colors">
                                            <service.icon size={20} className="text-white" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="text-2xl font-bold mb-3 group-hover:text-violet-400 transition-colors">
                                            {t(service.titleKey)}
                                        </h3>
                                        <p className="text-gray-400 mb-4 leading-relaxed">
                                            {t(service.descKey)}
                                        </p>

                                        {/* Features */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {service.features.map((featureKey, idx) => (
                                                <span
                                                    key={idx}
                                                    className="text-xs px-3 py-1 bg-violet-600/10 border border-violet-500/20 rounded-full text-violet-300"
                                                >
                                                    {t(featureKey)}
                                                </span>
                                            ))}
                                        </div>

                                        {/* CTA */}
                                        <div className="flex items-center gap-2 text-violet-400 font-semibold group-hover:gap-4 transition-all">
                                            <span>{t('transport_page.learn_more')}</span>
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
                        className="text-center bg-gradient-to-br from-violet-900/30 via-purple-900/20 to-indigo-900/30 backdrop-blur-md border border-violet-500/20 p-12 rounded-2xl"
                    >
                        <h3 className="text-3xl font-bold mb-4">{t('transport_page.cta.title')}</h3>
                        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                            {t('transport_page.cta.subtitle')}
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block px-10 py-4 bg-violet-600 hover:bg-violet-700 text-white font-bold uppercase tracking-wider rounded-full transition-all hover:scale-105 shadow-lg shadow-violet-500/30"
                        >
                            {t('contact_page.form.book_flight')}
                        </Link>
                    </motion.div>
                </div>

                {/* Partners Section */}
                <PartnersMarquee />
            </div>
        </PageTransition>
    );
};

export default TransportPage;
