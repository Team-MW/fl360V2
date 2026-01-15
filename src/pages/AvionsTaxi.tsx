import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import Starfield from '../components/Starfield';
import { Link } from 'react-router-dom';
import jetprive from '../assets/jetprié.jpg';

const AvionsTaxi = () => {
    return (
        <PageTransition>
            <Helmet>
                <title>Avions Taxi - fl360 Aviation</title>
                <meta name="description" content="Service d'avions taxi économique et rapide. La solution accessible pour vos déplacements aériens régionaux." />
            </Helmet>

            <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-violet-500/30 relative">
                <Starfield />

                {/* Hero Section */}
                <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={jetprive}
                            alt="Avions Taxi"
                            className="w-full h-full object-cover opacity-70 select-none"
                        />
                        <div className="absolute inset-0 bg-black/30"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
                    </div>
                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-5xl md:text-7xl font-bold uppercase tracking-tight mb-6"
                        >
                            Avion Taxi
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto mb-12"
                        >
                            La réponse économique à vos déplacements sur courte distance
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <Link
                                to="/contact"
                                className="inline-block bg-violet-600 hover:bg-violet-700 text-white px-10 py-4 rounded-full font-bold uppercase tracking-wider transition-all hover:scale-105 shadow-2xl shadow-violet-500/50 hover:shadow-violet-500/70"
                            >
                                Réserver un vol
                            </Link>
                        </motion.div>
                    </div>
                </div>

                {/* Content Grid */}
                <section className="py-20 bg-zinc-950 relative z-10">
                    <div className="container mx-auto px-6">
                        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                            {[
                                {
                                    title: 'Économique',
                                    desc: 'Alternative abordable aux jets privés. Partagez les coûts avec d\'autres passagers ou optez pour un vol dédié.'
                                },
                                {
                                    title: 'Gain de Temps',
                                    desc: 'Évitez les longues files d\'attente des aéroports commerciaux. Embarquement rapide et direct.'
                                },
                                {
                                    title: 'Réseau Étendu',
                                    desc: 'Accès à des centaines d\'aéroports régionaux. Rapprochez-vous de votre destination finale.'
                                }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="text-center"
                                >
                                    <h3 className="text-2xl font-bold text-violet-300 mb-4 uppercase tracking-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Destinations Section */}
                <section className="py-20 bg-zinc-900/30 border-y border-white/5 relative z-10">
                    <div className="container mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tight">
                                Destinations Populaires
                            </h2>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="bg-zinc-900/50 border border-white/5 p-6 hover:border-violet-500/50 transition-all text-center"
                                >
                                    <p className="text-gray-300 font-semibold">{route}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pricing Section */}
                <section className="py-20 bg-zinc-950 relative z-10">
                    <div className="container mx-auto px-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-tight">
                                Tarification Transparente
                            </h2>
                            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
                                Prix au siège ou affrètement complet. Devis personnalisé en moins de 2 heures.
                            </p>
                            <div className="inline-block bg-violet-950/50 border border-violet-500/30 px-8 py-4 mb-12">
                                <span className="text-violet-300 font-bold text-xl">À partir de 150€ / passager</span>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-32 relative overflow-hidden z-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-950 via-purple-950 to-indigo-950"></div>

                    <div className="container mx-auto px-6 text-center relative z-20">
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-widest text-white mb-6">
                            Réservez votre vol
                        </h2>
                        <p className="text-violet-200 text-xl mb-12 max-w-2xl mx-auto">
                            Obtenez un devis gratuit en quelques minutes.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block bg-white text-violet-950 px-12 py-5 rounded-full font-black uppercase tracking-widest hover:bg-violet-50 transition-all shadow-2xl hover:shadow-white/30"
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
