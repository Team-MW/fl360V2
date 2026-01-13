import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import Starfield from '../components/Starfield';
import { Link } from 'react-router-dom';
import { Plane, Briefcase, TrendingUp, Wifi, Coffee } from 'lucide-react';

const AvionsAffaires = () => {
    return (
        <PageTransition>
            <Helmet>
                <title>Avions d'Affaires - fl360 Aviation</title>
                <meta name="description" content="Avions d'affaires pour vos déplacements professionnels. Productivité maximale, confort premium et efficacité." />
            </Helmet>

            <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-blue-500/30 relative">
                <Starfield />

                {/* Hero Section */}
                <div className="relative h-screen flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/extra2.avif"
                            alt="Avions d'Affaires"
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
                            <Briefcase className="w-16 h-16 mx-auto text-blue-400 mb-6" />
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-widest mb-6 leading-tight"
                        >
                            Avions d'Affaires
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto mb-12"
                        >
                            Transformez vos heures de vol en temps productif. L'outil ultime pour les dirigeants et équipes en déplacement.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <Link
                                to="/contact"
                                className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:from-blue-500 hover:to-cyan-500 transition-all shadow-2xl hover:shadow-blue-500/50"
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
                                Votre bureau volant
                            </h2>
                            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto"></div>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: TrendingUp,
                                    title: 'Productivité Maximale',
                                    desc: 'Salle de réunion volante équipée. Travaillez, négociez et décidez en toute tranquillité à 40 000 pieds.'
                                },
                                {
                                    icon: Wifi,
                                    title: 'Connectivité Totale',
                                    desc: 'Wi-Fi haut débit, visioconférence, écrans de présentation. Restez connecté où que vous soyez.'
                                },
                                {
                                    icon: Coffee,
                                    title: 'Confort Premium',
                                    desc: 'Sièges ergonomiques, espace de travail dédié, service de restauration sur mesure.'
                                }
                            ].map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group bg-zinc-900/50 border border-white/5 p-10 hover:border-blue-500/50 transition-all hover:-translate-y-2"
                                >
                                    <feature.icon className="w-12 h-12 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
                                    <h3 className="text-2xl font-bold uppercase tracking-wider mb-4 group-hover:text-blue-300 transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Use Cases Section */}
                <section className="py-24 bg-zinc-900/30 border-y border-white/5 relative z-10">
                    <div className="container mx-auto px-6">
                        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-widest mb-16 text-center">
                            Cas d'usage
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                'Réunions multi-sites en une journée',
                                'Roadshows investisseurs',
                                'Déplacements équipes commerciales',
                                'Négociations confidentielles',
                                'Événements d\'entreprise',
                                'Inspections de sites distants'
                            ].map((useCase, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="bg-zinc-950 border border-white/5 p-6 hover:border-blue-500/30 transition-all flex items-center gap-4"
                                >
                                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                                    <p className="text-gray-300 font-medium">{useCase}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-20 bg-zinc-950 relative z-10">
                    <div className="container mx-auto px-6">
                        <div className="grid md:grid-cols-3 gap-12 text-center">
                            {[
                                { number: '8-12', label: 'Passagers', unit: '' },
                                { number: '4000', label: 'Km d\'autonomie', unit: '+' },
                                { number: '24/7', label: 'Disponibilité', unit: '' }
                            ].map((stat, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <div className="text-5xl md:text-6xl font-black text-blue-400 mb-2">
                                        {stat.number}{stat.unit}
                                    </div>
                                    <div className="text-gray-400 uppercase tracking-widest text-sm">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-32 relative overflow-hidden z-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-cyan-950 to-blue-950"></div>
                    <div className="absolute inset-0 bg-[url('/extra2.avif')] bg-cover bg-center opacity-10"></div>

                    <div className="container mx-auto px-6 text-center relative z-20">
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-widest text-white mb-6">
                            Optimisez votre temps
                        </h2>
                        <p className="text-blue-200 text-xl mb-12 max-w-2xl mx-auto">
                            Découvrez comment un avion d'affaires peut transformer votre productivité.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block bg-white text-blue-950 px-12 py-5 rounded-full font-black uppercase tracking-widest hover:bg-blue-50 transition-all shadow-2xl hover:shadow-white/30"
                        >
                            Demander une étude
                        </Link>
                    </div>
                </section>
            </div>
        </PageTransition>
    );
};

export default AvionsAffaires;
