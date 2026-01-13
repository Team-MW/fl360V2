import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import Starfield from '../components/Starfield';
import { Link } from 'react-router-dom';
import { Plane, Mountain, MapPin, Clock, Zap, Camera } from 'lucide-react';

const Helicopteres = () => {
    return (
        <PageTransition>
            <Helmet>
                <title>Hélicoptères - fl360 Aviation</title>
                <meta name="description" content="Services d'hélicoptères pour vos déplacements urbains, transferts et missions spéciales. Flexibilité et accès aux zones difficiles." />
            </Helmet>

            <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-emerald-500/30 relative">
                <Starfield />

                {/* Hero Section */}
                <div className="relative h-screen flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/pilatus6.avif"
                            alt="Hélicoptères"
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
                            <Plane className="w-16 h-16 mx-auto text-emerald-400 mb-6 rotate-45" />
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-widest mb-6 leading-tight"
                        >
                            Hélicoptères
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto mb-12"
                        >
                            La solution ultime pour vos déplacements urbains et l'accès aux zones les plus reculées. Rapidité, flexibilité et efficacité.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <Link
                                to="/contact"
                                className="group inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:from-emerald-500 hover:to-teal-500 transition-all shadow-2xl hover:shadow-emerald-500/50"
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
                                Avantages de l'hélicoptère
                            </h2>
                            <div className="h-1 w-24 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto"></div>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: Mountain,
                                    title: 'Accès Illimité',
                                    desc: 'Atterrissez partout : toits d\'immeubles, héliports privés, zones montagneuses. Aucune piste nécessaire.'
                                },
                                {
                                    icon: Zap,
                                    title: 'Rapidité Extrême',
                                    desc: 'Évitez les embouteillages et les aéroports bondés. Déplacement direct de point à point en un temps record.'
                                },
                                {
                                    icon: MapPin,
                                    title: 'Flexibilité Totale',
                                    desc: 'Décollage et atterrissage verticaux. Changez de destination en cours de vol selon vos besoins.'
                                }
                            ].map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group bg-zinc-900/50 border border-white/5 p-10 hover:border-emerald-500/50 transition-all hover:-translate-y-2"
                                >
                                    <feature.icon className="w-12 h-12 text-emerald-400 mb-6 group-hover:scale-110 transition-transform" />
                                    <h3 className="text-2xl font-bold uppercase tracking-wider mb-4 group-hover:text-emerald-300 transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section className="py-24 bg-zinc-900/30 border-y border-white/5 relative z-10">
                    <div className="container mx-auto px-6">
                        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-widest mb-16 text-center">
                            Nos Services
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                { icon: MapPin, title: 'Transferts VIP', desc: 'Aéroport vers hôtel, événements, réunions d\'affaires' },
                                { icon: Mountain, title: 'Héliski & Loisirs', desc: 'Accès aux sommets pour ski, randonnée et aventure' },
                                { icon: Camera, title: 'Survol & Photographie', desc: 'Prises de vues aériennes, inspections, surveillance' },
                                { icon: Clock, title: 'Urgences Médicales', desc: 'Évacuations sanitaires et transport médical d\'urgence' }
                            ].map((service, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="flex items-start gap-6 bg-zinc-950 border border-white/5 p-8 hover:border-emerald-500/30 transition-all"
                                >
                                    <div className="w-14 h-14 bg-emerald-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <service.icon className="w-7 h-7 text-emerald-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold uppercase tracking-wider mb-2">{service.title}</h3>
                                        <p className="text-gray-400">{service.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-32 relative overflow-hidden z-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-teal-950 to-emerald-950"></div>
                    <div className="absolute inset-0 bg-[url('/pilatus6.avif')] bg-cover bg-center opacity-10"></div>

                    <div className="container mx-auto px-6 text-center relative z-20">
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-widest text-white mb-6">
                            Prêt à décoller ?
                        </h2>
                        <p className="text-emerald-200 text-xl mb-12 max-w-2xl mx-auto">
                            Réservez votre vol en hélicoptère dès maintenant.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block bg-white text-emerald-950 px-12 py-5 rounded-full font-black uppercase tracking-widest hover:bg-emerald-50 transition-all shadow-2xl hover:shadow-white/30"
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
