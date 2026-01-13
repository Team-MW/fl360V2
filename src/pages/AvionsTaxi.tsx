import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import Starfield from '../components/Starfield';
import { Link } from 'react-router-dom';
import { Plane, DollarSign, Clock, MapPin, Users, Zap } from 'lucide-react';

const AvionsTaxi = () => {
    return (
        <PageTransition>
            <Helmet>
                <title>Avions Taxi - fl360 Aviation</title>
                <meta name="description" content="Service d'avions taxi économique et rapide. La solution accessible pour vos déplacements aériens régionaux." />
            </Helmet>

            <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-amber-500/30 relative">
                <Starfield />

                {/* Hero Section */}
                <div className="relative h-screen flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/pilatus6.avif"
                            alt="Avions Taxi"
                            className="w-full h-full object-cover opacity-70 select-none"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-zinc-950"></div>
                    </div>

                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="mb-6"
                        >
                            <Zap className="w-16 h-16 mx-auto text-amber-400 mb-6" />
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-widest mb-6 leading-tight"
                        >
                            Avions Taxi
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto mb-12"
                        >
                            Le transport aérien accessible. Rapide, économique et efficace pour vos déplacements régionaux.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <Link
                                to="/contact"
                                className="group inline-flex items-center gap-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:from-amber-500 hover:to-orange-500 transition-all shadow-2xl hover:shadow-amber-500/50"
                            >
                                Demander un devis
                                <Plane size={20} className="transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:rotate-12" />
                            </Link>
                        </motion.div>
                    </div>
                </div>

                {/* Features Section */}
                <section className="py-24 bg-zinc-950 relative z-10">
                    <div className="container mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-20"
                        >
                            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-widest mb-6">
                                Pourquoi l'avion taxi ?
                            </h2>
                            <div className="h-1 w-24 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto"></div>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: DollarSign,
                                    title: 'Économique',
                                    desc: 'Alternative abordable aux jets privés. Partagez les coûts avec d\'autres passagers ou optez pour un vol dédié.'
                                },
                                {
                                    icon: Clock,
                                    title: 'Gain de Temps',
                                    desc: 'Évitez les longues files d\'attente des aéroports commerciaux. Embarquement rapide et direct.'
                                },
                                {
                                    icon: MapPin,
                                    title: 'Réseau Étendu',
                                    desc: 'Accès à des centaines d\'aéroports régionaux. Rapprochez-vous de votre destination finale.'
                                }
                            ].map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group bg-zinc-900/50 border border-white/5 p-10 hover:border-amber-500/50 transition-all hover:-translate-y-2"
                                >
                                    <feature.icon className="w-12 h-12 text-amber-400 mb-6 group-hover:scale-110 transition-transform" />
                                    <h3 className="text-2xl font-bold uppercase tracking-wider mb-4 group-hover:text-amber-300 transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Destinations Section */}
                <section className="py-24 bg-zinc-900/30 border-y border-white/5 relative z-10">
                    <div className="container mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-widest mb-8">
                                    Destinations Populaires
                                </h2>
                                <div className="space-y-4">
                                    {[
                                        'Paris ↔ Côte d\'Azur',
                                        'Lyon ↔ Bordeaux',
                                        'Toulouse ↔ Marseille',
                                        'Strasbourg ↔ Nantes',
                                        'Lille ↔ Montpellier',
                                        'Biarritz ↔ Deauville'
                                    ].map((route, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.05 }}
                                            className="flex items-center gap-4 bg-zinc-950 border border-white/5 p-4 hover:border-amber-500/30 transition-all"
                                        >
                                            <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0" />
                                            <p className="text-gray-300 font-medium">{route}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-zinc-900/50 border border-white/5 p-10"
                            >
                                <h3 className="text-2xl font-bold uppercase tracking-wider mb-6 text-amber-400">
                                    Capacités
                                </h3>
                                <div className="space-y-6">
                                    {[
                                        { icon: Users, label: '4-6 passagers', value: 'Selon appareil' },
                                        { icon: Clock, label: 'Vols courts', value: '1-3 heures' },
                                        { icon: Zap, label: 'Vitesse', value: '400-600 km/h' }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-4">
                                            <div className="w-10 h-10 bg-amber-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                                                <item.icon className="w-5 h-5 text-amber-400" />
                                            </div>
                                            <div>
                                                <div className="font-bold text-white">{item.label}</div>
                                                <div className="text-gray-400 text-sm">{item.value}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Pricing Info */}
                <section className="py-20 bg-zinc-950 relative z-10">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest mb-8">
                            Tarification Transparente
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
                            Prix au siège ou affrètement complet. Devis personnalisé en moins de 2 heures.
                        </p>
                        <div className="inline-flex items-center gap-2 bg-amber-600/10 border border-amber-500/20 px-6 py-3 rounded-full">
                            <DollarSign className="w-5 h-5 text-amber-400" />
                            <span className="text-amber-300 font-medium">À partir de 150€ / passager</span>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-32 relative overflow-hidden z-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-950 via-orange-950 to-amber-950"></div>
                    <div className="absolute inset-0 bg-[url('/pilatus6.avif')] bg-cover bg-center opacity-10"></div>

                    <div className="container mx-auto px-6 text-center relative z-20">
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-widest text-white mb-6">
                            Réservez votre vol
                        </h2>
                        <p className="text-amber-200 text-xl mb-12 max-w-2xl mx-auto">
                            Obtenez un devis gratuit en quelques minutes.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block bg-white text-amber-950 px-12 py-5 rounded-full font-black uppercase tracking-widest hover:bg-amber-50 transition-all shadow-2xl hover:shadow-white/30"
                        >
                            Obtenir un devis
                        </Link>
                    </div>
                </section>
            </div>
        </PageTransition>
    );
};

export default AvionsTaxi;
