import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import Starfield from '../components/Starfield';
import { Link } from 'react-router-dom';
import { Plane, Clock, ShieldCheck, Crown, Wifi, Users, MapPin } from 'lucide-react';

const JetsPrives = () => {
    return (
        <PageTransition>
            <Helmet>
                <title>Jets Privés - fl360 Aviation</title>
                <meta name="description" content="Location de jets privés pour vos déplacements d'affaires et personnels. Luxe, confort et discrétion absolue." />
            </Helmet>

            <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-violet-500/30 relative">
                <Starfield />

                {/* Hero Section */}
                <div className="relative h-screen flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/extra2.avif"
                            alt="Jets Privés"
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
                            <Crown className="w-16 h-16 mx-auto text-violet-400 mb-6" />
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-widest mb-6 leading-tight"
                        >
                            Jets Privés
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto mb-12"
                        >
                            L'excellence du voyage aérien privé. Luxe, confort et discrétion pour vos déplacements d'affaires et personnels.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <Link
                                to="/contact"
                                className="group inline-flex items-center gap-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:from-violet-500 hover:to-indigo-500 transition-all shadow-2xl hover:shadow-violet-500/50"
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
                                Pourquoi choisir un jet privé ?
                            </h2>
                            <div className="h-1 w-24 bg-gradient-to-r from-violet-600 to-indigo-600 mx-auto"></div>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: Clock,
                                    title: 'Flexibilité Totale',
                                    desc: 'Décollez quand vous le souhaitez. Aucune contrainte horaire, aucune file d\'attente. Votre emploi du temps dicte votre vol.'
                                },
                                {
                                    icon: ShieldCheck,
                                    title: 'Confidentialité Absolue',
                                    desc: 'Vos conversations restent privées. Voyagez en toute discrétion avec vos collaborateurs ou votre famille.'
                                },
                                {
                                    icon: Crown,
                                    title: 'Luxe & Confort',
                                    desc: 'Intérieurs sur mesure, sièges en cuir, espace de travail premium. Le summum du confort aérien.'
                                }
                            ].map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group bg-zinc-900/50 border border-white/5 p-10 hover:border-violet-500/50 transition-all hover:-translate-y-2"
                                >
                                    <feature.icon className="w-12 h-12 text-violet-400 mb-6 group-hover:scale-110 transition-transform" />
                                    <h3 className="text-2xl font-bold uppercase tracking-wider mb-4 group-hover:text-violet-300 transition-colors">
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
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-widest mb-8">
                                    Services Premium
                                </h2>
                                <div className="space-y-6">
                                    {[
                                        { icon: Wifi, text: 'Wi-Fi haute vitesse à bord' },
                                        { icon: Users, text: 'Service de conciergerie 24/7' },
                                        { icon: MapPin, text: 'Accès à 5000+ aéroports privés' },
                                        { icon: Crown, text: 'Restauration gastronomique sur demande' }
                                    ].map((service, idx) => (
                                        <div key={idx} className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-violet-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                                                <service.icon className="w-6 h-6 text-violet-400" />
                                            </div>
                                            <p className="text-lg text-gray-300">{service.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
                                    <img
                                        src="/pilatus6.avif"
                                        alt="Intérieur jet privé"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-32 relative overflow-hidden z-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-950 via-purple-950 to-indigo-950"></div>
                    <div className="absolute inset-0 bg-[url('/extra2.avif')] bg-cover bg-center opacity-10"></div>

                    <div className="container mx-auto px-6 text-center relative z-20">
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-widest text-white mb-6">
                            Prêt à décoller ?
                        </h2>
                        <p className="text-violet-200 text-xl mb-12 max-w-2xl mx-auto">
                            Contactez nos experts pour organiser votre prochain vol en jet privé.
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

export default JetsPrives;
