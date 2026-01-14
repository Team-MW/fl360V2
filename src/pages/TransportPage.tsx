import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/PageTransition';
import PartnersMarquee from '../components/PartnersMarquee';
import { motion } from 'framer-motion';
import { Plane, ArrowRight, Users, Globe, Clock, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import Starfield from '../components/Starfield';

const TransportPage = () => {
    const transportServices = [
        {
            id: 1,
            title: "Jets Privés",
            slug: "/jets-prives",
            description: "Solutions de transport aérien haut de gamme pour vos déplacements professionnels et privés.",
            icon: Plane,
            image: "/jet1.avif",
            features: ["Vol direct", "Confort premium", "Flexibilité totale"]
        },
        {
            id: 2,
            title: "Hélicoptères",
            slug: "/helicopteres",
            description: "Déplacements rapides et flexibles pour accéder aux zones difficiles d'accès.",
            icon: Plane,
            image: "/helico1.avif",
            features: ["Accès partout", "Rapidité", "Vue panoramique"]
        },
        {
            id: 3,
            title: "Avions d'Affaires",
            slug: "/avions-affaires",
            description: "Transport professionnel adapté aux besoins des entreprises et dirigeants.",
            icon: Plane,
            image: "/jet2.avif",
            features: ["Productivité", "Confidentialité", "Efficacité"]
        },
        {
            id: 4,
            title: "Avions Taxi",
            slug: "/avions-taxi",
            description: "Solution économique pour vos vols courts et moyens courriers.",
            icon: Plane,
            image: "/jet3.avif",
            features: ["Prix compétitifs", "Vols réguliers", "Simplicité"]
        },
        {
            id: 5,
            title: "Hand Carry",
            slug: "/hand-carry",
            description: "Transport sécurisé de documents et colis sensibles partout dans le monde.",
            icon: Globe,
            image: "/jet4.avif",
            features: ["Sécurité maximale", "Livraison express", "Traçabilité"]
        }
    ];

    const advantages = [
        {
            icon: Clock,
            title: "Disponibilité 24/7",
            description: "Notre équipe est à votre disposition à tout moment pour organiser vos vols."
        },
        {
            icon: Shield,
            title: "Sécurité Maximale",
            description: "Tous nos appareils sont certifiés et maintenus selon les normes les plus strictes."
        },
        {
            icon: Users,
            title: "Service Personnalisé",
            description: "Chaque vol est adapté à vos besoins spécifiques et préférences."
        }
    ];

    return (
        <PageTransition>
            <Helmet>
                <title>Transport Aérien - FL360 Aviation</title>
                <meta name="description" content="Solutions de transport aérien sur mesure : jets privés, hélicoptères, avions d'affaires et hand carry. Service premium disponible 24/7." />
            </Helmet>

            <div className="min-h-screen bg-zinc-950 text-white relative">
                <Starfield />

                {/* Hero Section */}
                <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/jet1.avif"
                            alt="Transport Aérien"
                            className="w-full h-full object-cover opacity-40"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-zinc-950"></div>
                    </div>

                    <div className="container mx-auto px-6 relative z-10 text-center pt-32 pb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight mb-6">
                                Solutions de <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">Transport Aérien</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto mb-8">
                                Voyagez selon vos conditions avec nos solutions de transport aérien sur mesure
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <span className="px-6 py-2 bg-violet-600/20 border border-violet-500/30 rounded-full text-violet-300 text-sm font-semibold">
                                    Service 24/7
                                </span>
                                <span className="px-6 py-2 bg-violet-600/20 border border-violet-500/30 rounded-full text-violet-300 text-sm font-semibold">
                                    Flotte Moderne
                                </span>
                                <span className="px-6 py-2 bg-violet-600/20 border border-violet-500/30 rounded-full text-violet-300 text-sm font-semibold">
                                    Sécurité Certifiée
                                </span>
                            </div>
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
                                <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
                                <p className="text-gray-400">{advantage.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Transport Services Grid */}
                    <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-center mb-16">
                        Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">Services</span>
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

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center bg-gradient-to-br from-violet-900/30 via-purple-900/20 to-indigo-900/30 backdrop-blur-md border border-violet-500/20 p-12 rounded-2xl"
                    >
                        <h3 className="text-3xl font-bold mb-4">Prêt à décoller ?</h3>
                        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                            Contactez notre équipe pour organiser votre prochain vol et découvrir nos solutions sur mesure.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block px-10 py-4 bg-violet-600 hover:bg-violet-700 text-white font-bold uppercase tracking-wider rounded-full transition-all hover:scale-105 shadow-lg shadow-violet-500/30"
                        >
                            Demander un devis
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
