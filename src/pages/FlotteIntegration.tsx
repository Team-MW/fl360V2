import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import Starfield from '../components/Starfield';
import { Link } from 'react-router-dom';

const FlotteIntegration = () => {
    return (
        <PageTransition>
            <Helmet>
                <title>Flotte & Intégration - fl360 Aviation</title>
                <meta name="description" content="Mise en liste de flotte de votre aéronef sous SPO. Découvrez nos avions Extra EA400 et Pilatus PC-6 B2H4." />
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
                            Flotte & Intégration
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto mb-12"
                        >
                            Vol avion amateur, volant privé & agrément SPO
                        </motion.p>
                    </div>
                </div>

                {/* SPO Service Section */}
                <section className="py-20 bg-zinc-950 relative z-10">
                    <div className="container mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="max-w-4xl mx-auto text-center mb-16"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-tight">
                                Agrément SPO
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Mise en liste de flotte de votre aéronef sous SPO (Specialised Operations).
                                Nous vous accompagnons dans toutes les démarches administratives pour l'intégration
                                de votre avion privé ou amateur dans notre flotte certifiée.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {[
                                {
                                    title: 'Certification SPO',
                                    desc: 'Obtention et gestion de votre agrément SPO pour opérations spécialisées'
                                },
                                {
                                    title: 'Intégration Flotte',
                                    desc: 'Mise en liste de votre aéronef dans notre flotte certifiée'
                                },
                                {
                                    title: 'Support Administratif',
                                    desc: 'Accompagnement complet dans toutes les démarches réglementaires'
                                }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-zinc-900/50 border border-white/5 p-8 hover:border-violet-500/50 transition-all"
                                >
                                    <h3 className="text-xl font-bold text-violet-300 mb-3 uppercase tracking-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Our Aircraft Section */}
                <section className="py-20 bg-zinc-900/30 border-y border-white/5 relative z-10">
                    <div className="container mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tight">
                                Nos Avions
                            </h2>
                            <p className="text-gray-400 text-lg">Flotte d'avions amateurs et privés</p>
                        </motion.div>

                        <div className="space-y-12 max-w-5xl mx-auto">
                            {/* Extra EA400 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-zinc-900/50 border border-white/5 p-10 hover:border-violet-500/50 transition-all"
                            >
                                <h3 className="text-3xl font-bold text-violet-300 mb-4 uppercase tracking-tight">
                                    Extra EA400
                                </h3>
                                <p className="text-gray-400 leading-relaxed mb-6">
                                    L'Extra EA400 est un avion monomoteur hautes performances conçu pour les passionnés d'aviation
                                    qui recherchent une expérience de vol extraordinaire. Alliant performances, fiabilité et esthétique,
                                    l'Extra EA400 est véritablement un bijou parmi les avions monomoteurs modernes.
                                </p>
                                <div className="grid md:grid-cols-3 gap-4 text-sm">
                                    <div className="bg-zinc-950/50 p-4 border border-white/5">
                                        <div className="text-violet-300 font-bold mb-1">Type</div>
                                        <div className="text-gray-400">Monomoteur hautes performances</div>
                                    </div>
                                    <div className="bg-zinc-950/50 p-4 border border-white/5">
                                        <div className="text-violet-300 font-bold mb-1">Usage</div>
                                        <div className="text-gray-400">Aviation de loisir & privée</div>
                                    </div>
                                    <div className="bg-zinc-950/50 p-4 border border-white/5">
                                        <div className="text-violet-300 font-bold mb-1">Caractéristique</div>
                                        <div className="text-gray-400">Performances exceptionnelles</div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Pilatus PC-6 B2H4 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-zinc-900/50 border border-white/5 p-10 hover:border-violet-500/50 transition-all"
                            >
                                <h3 className="text-3xl font-bold text-violet-300 mb-4 uppercase tracking-tight">
                                    Pilatus PC-6 B2H4
                                </h3>
                                <p className="text-gray-400 leading-relaxed mb-6">
                                    Le Pilatus PC-6 B2H4 est un avion utilitaire polyvalent, reconnu pour sa robustesse et sa fiabilité
                                    dans les environnements les plus difficiles. Avec sa capacité à transporter jusqu'à 10 passagers,
                                    le Pilatus PC-6 B2H4 demeure un choix privilégié pour les missions aériennes exigeantes dans des
                                    régions éloignées et hostiles.
                                </p>
                                <div className="grid md:grid-cols-3 gap-4 text-sm">
                                    <div className="bg-zinc-950/50 p-4 border border-white/5">
                                        <div className="text-violet-300 font-bold mb-1">Type</div>
                                        <div className="text-gray-400">Avion utilitaire</div>
                                    </div>
                                    <div className="bg-zinc-950/50 p-4 border border-white/5">
                                        <div className="text-violet-300 font-bold mb-1">Capacité</div>
                                        <div className="text-gray-400">Jusqu'à 10 passagers</div>
                                    </div>
                                    <div className="bg-zinc-950/50 p-4 border border-white/5">
                                        <div className="text-violet-300 font-bold mb-1">Spécialité</div>
                                        <div className="text-gray-400">Zones difficiles & éloignées</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-32 relative overflow-hidden z-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-950 via-purple-950 to-indigo-950"></div>

                    <div className="container mx-auto px-6 text-center relative z-20">
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-widest text-white mb-6">
                            Intégrez votre avion
                        </h2>
                        <p className="text-violet-200 text-xl mb-12 max-w-2xl mx-auto">
                            Contactez-nous pour intégrer votre aéronef dans notre flotte SPO.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block bg-white text-violet-950 px-12 py-5 rounded-full font-black uppercase tracking-widest hover:bg-violet-50 transition-all shadow-2xl hover:shadow-white/30"
                        >
                            Nous Contacter
                        </Link>
                    </div>
                </section>
            </div>
        </PageTransition>
    );
};

export default FlotteIntegration;
