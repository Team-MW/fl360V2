import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import Starfield from '../components/Starfield';
import { Link } from 'react-router-dom';

const Helicopteres = () => {
    return (
        <PageTransition>
            <Helmet>
                <title>Hélicoptères - fl360 Aviation</title>
                <meta name="description" content="Services d'hélicoptères pour vos déplacements urbains, transferts et missions spéciales. Flexibilité et accès aux zones difficiles." />
            </Helmet>

            <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-violet-500/30 relative">
                <Starfield />

                {/* Hero Section */}
                <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-5xl md:text-7xl font-bold uppercase tracking-tight mb-6"
                        >
                            Hélicoptères
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto mb-12"
                        >
                            La solution la plus adaptée pour les vols de courte distance
                        </motion.p>
                    </div>
                </div>

                {/* Content Grid */}
                <section className="py-20 bg-zinc-950 relative z-10">
                    <div className="container mx-auto px-6">
                        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                            {[
                                {
                                    title: 'Accès Illimité',
                                    desc: 'Atterrissez partout : toits d\'immeubles, héliports privés, zones montagneuses. Aucune piste nécessaire.'
                                },
                                {
                                    title: 'Rapidité Extrême',
                                    desc: 'Évitez les embouteillages et les aéroports bondés. Déplacement direct de point à point en un temps record.'
                                },
                                {
                                    title: 'Flexibilité Totale',
                                    desc: 'Décollage et atterrissage verticaux. Changez de destination en cours de vol selon vos besoins.'
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

                {/* Services Section */}
                <section className="py-20 bg-zinc-900/30 border-y border-white/5 relative z-10">
                    <div className="container mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tight">
                                Nos Services
                            </h2>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {[
                                { title: 'Transferts VIP', desc: 'Aéroport vers hôtel, événements, réunions d\'affaires' },
                                { title: 'Héliski & Loisirs', desc: 'Accès aux sommets pour ski, randonnée et aventure' },
                                { title: 'Survol & Photographie', desc: 'Prises de vues aériennes, inspections, surveillance' },
                                { title: 'Urgences Médicales', desc: 'Évacuations sanitaires et transport médical d\'urgence' }
                            ].map((service, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-zinc-900/50 border border-white/5 p-8 hover:border-violet-500/50 transition-all"
                                >
                                    <h3 className="text-xl font-bold text-violet-300 mb-3 uppercase tracking-tight">{service.title}</h3>
                                    <p className="text-gray-400">{service.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-32 relative overflow-hidden z-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-950 via-purple-950 to-indigo-950"></div>

                    <div className="container mx-auto px-6 text-center relative z-20">
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-widest text-white mb-6">
                            Prêt à décoller ?
                        </h2>
                        <p className="text-violet-200 text-xl mb-12 max-w-2xl mx-auto">
                            Réservez votre vol en hélicoptère dès maintenant.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block bg-white text-violet-950 px-12 py-5 rounded-full font-black uppercase tracking-widest hover:bg-violet-50 transition-all shadow-2xl hover:shadow-white/30"
                        >
                            Réserver maintenant
                        </Link>
                    </div>
                </section>
            </div>
        </PageTransition>
    );
};

export default Helicopteres;
