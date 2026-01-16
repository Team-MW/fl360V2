import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/PageTransition';
import PartnersMarquee from '../components/PartnersMarquee';
import { motion } from 'framer-motion';
import { Wrench, ArrowRight, Shield, Clock, CheckCircle, Settings, Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Starfield from '../components/Starfield';
import piecesImg from '../assets/pieces.avif';
import mroImg from '../assets/mro.avif';
import flotteintegrationImg from '../assets/flotteintegration.avif';
import AnimatedCounter from '../components/AnimatedCounter';

const EntretiensPage = () => {
    const { t } = useTranslation();
    const maintenanceServices = [
        {
            id: 1,
            title: "MRO - Maintenance & Réparation",
            slug: "/mro",
            description: "Services complets de maintenance, réparation et révision pour tous types d'aéronefs.",
            icon: Wrench,
            image: mroImg,
            features: ["Maintenance préventive", "Réparations certifiées", "Pièces d'origine"],
            services: [
                "Inspections périodiques",
                "Maintenance programmée",
                "Réparations structurelles",
                "Modifications techniques"
            ]
        },
        {
            id: 2,
            title: "Flotte Intégration",
            slug: "/flotte-integration",
            description: "Intégration et gestion complète de votre flotte aérienne avec suivi personnalisé.",
            icon: Settings,
            image: flotteintegrationImg,
            features: ["Gestion centralisée", "Optimisation", "Suivi en temps réel"],
            services: [
                "Planification maintenance",
                "Gestion documentaire",
                "Optimisation des coûts",
                "Reporting détaillé"
            ]
        }
    ];

    const advantages = [
        {
            icon: Shield,
            title: "Certifications EASA",
            description: "Tous nos ateliers et techniciens sont certifiés selon les normes EASA les plus strictes."
        },
        {
            icon: Clock,
            title: "Disponibilité Rapide",
            description: "Interventions rapides et planification flexible pour minimiser l'immobilisation de vos appareils."
        },
        {
            icon: Package,
            title: "Stock de Pièces",
            description: "Large stock de pièces détachées et consommables pour une maintenance efficace."
        }
    ];

    const capabilities = [
        {
            category: "Moteurs & Propulsion",
            items: ["Révision moteur", "Remplacement hélices", "Systèmes carburant", "Systèmes d'échappement"]
        },
        {
            category: "Structure & Cellule",
            items: ["Réparations structure", "Traitement corrosion", "Modifications STC", "Peinture & finition"]
        },
        {
            category: "Avionique & Électrique",
            items: ["Installation avionique", "Câblage électrique", "Systèmes de navigation", "Instruments de bord"]
        },
        {
            category: "Systèmes & Équipements",
            items: ["Train d'atterrissage", "Systèmes hydrauliques", "Climatisation", "Équipements de sécurité"]
        }
    ];

    const stats = [
        { number: "25+", label: "Années d'expérience" },
        { number: "1000+", label: "Interventions/an" },
        { number: "100%", label: "Conformité EASA" },
        { number: "48h", label: "Délai moyen" }
    ];

    return (
        <PageTransition>
            <Helmet>
                <title>Entretiens & Maintenance - FL360 Aviation</title>
                <meta name="description" content="Services de maintenance aéronautique MRO certifiés EASA. Entretien, réparation et gestion de flotte pour tous types d'aéronefs." />
                <meta property="og:title" content="Entretiens & Maintenance - FL360 Aviation" />
                <meta property="og:description" content="Services de maintenance aéronautique MRO certifiés EASA. Entretien, réparation et gestion de flotte pour tous types d'aéronefs." />
                <meta property="og:image" content="/mro.avif" />
                <meta property="og:url" content="https://fl360.com/entretiens" />
            </Helmet>

            <div className="min-h-screen bg-zinc-950 text-white relative">
                <Starfield />

                {/* Hero Section */}
                <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={piecesImg}
                            alt="Maintenance Aéronautique"
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
                                Entretiens & <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">Maintenance</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto mb-8">
                                Excellence en maintenance aéronautique avec des services certifiés EASA pour garantir la sécurité et la performance de votre flotte
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <span className="px-6 py-2 bg-violet-600/20 border border-violet-500/30 rounded-full text-violet-300 text-sm font-semibold">
                                    Certifié EASA Part-145
                                </span>
                                <span className="px-6 py-2 bg-violet-600/20 border border-violet-500/30 rounded-full text-violet-300 text-sm font-semibold">
                                    Techniciens Qualifiés
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
                                <div className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
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
                                className="bg-zinc-900/50 backdrop-blur-sm border border-white/5 p-8 rounded-xl hover:border-violet-500/30 transition-all group"
                            >
                                <advantage.icon className="w-12 h-12 text-violet-400 mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
                                <p className="text-gray-400">{advantage.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Maintenance Services Grid */}
                    <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-center mb-16">
                        Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">Services</span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 mb-20">
                        {maintenanceServices.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link
                                    to={service.slug}
                                    className="group block bg-zinc-900/50 backdrop-blur-sm border border-white/5 rounded-xl overflow-hidden hover:border-violet-500/50 transition-all hover:shadow-2xl hover:shadow-violet-500/10 h-full"
                                >
                                    {/* Image */}
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            src={service.image}
                                            alt={service.title}
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
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-400 mb-4 leading-relaxed">
                                            {service.description}
                                        </p>

                                        {/* Services List */}
                                        <div className="space-y-2 mb-4">
                                            {service.services.map((item, idx) => (
                                                <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                                                    <CheckCircle size={16} className="text-violet-500 flex-shrink-0" />
                                                    <span>{item}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Features */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {service.features.map((feature, idx) => (
                                                <span
                                                    key={idx}
                                                    className="text-xs px-3 py-1 bg-violet-600/10 border border-violet-500/20 rounded-full text-violet-300"
                                                >
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>

                                        {/* CTA */}
                                        <div className="flex items-center gap-2 text-violet-400 font-semibold group-hover:gap-4 transition-all">
                                            <span>En savoir plus</span>
                                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Capabilities Section */}
                    <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-center mb-16">
                        Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">Capacités</span>
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                        {capabilities.map((capability, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-zinc-900/50 backdrop-blur-sm border border-white/5 p-6 rounded-xl hover:border-violet-500/30 transition-all"
                            >
                                <h3 className="text-lg font-bold mb-4 text-violet-400">{capability.category}</h3>
                                <ul className="space-y-2">
                                    {capability.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                                            <div className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-1.5 flex-shrink-0"></div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center bg-gradient-to-br from-violet-900/30 via-purple-900/20 to-indigo-900/30 backdrop-blur-md border border-violet-500/20 p-12 rounded-2xl mb-20"
                    >
                        <h3 className="text-3xl font-bold mb-4">Besoin d'une maintenance ?</h3>
                        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                            Contactez notre équipe pour planifier l'entretien de votre aéronef et bénéficier de notre expertise certifiée EASA.
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

export default EntretiensPage;
