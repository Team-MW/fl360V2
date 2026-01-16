import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import Starfield from '../components/Starfield';

import flotteintegrationImg from '../assets/flotteintegration.avif';

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
                    <div className="absolute inset-0 z-0">
                        <img
                            src={flotteintegrationImg}
                            alt="Flotte & Intégration"
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

                {/* Nos Avions Section - Premium Design */}
                <section className="py-32 bg-zinc-950 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

                    {/* Glowing Orbs */}
                    <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-violet-600/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
                    <div className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>

                    <div className="container mx-auto px-6 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-24"
                        >
                            <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 mb-6 tracking-tighter uppercase relative inline-block">
                                Nos Avions
                                <span className="absolute -top-6 -right-12 text-lg text-violet-500 font-mono tracking-widest hidden md:block">FLEET.01</span>
                            </h2>
                            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full"></div>
                        </motion.div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                            {/* Extra EA400 */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="group relative"
                            >
                                <div className="absolute -inset-4 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-75 blur-xl transition-opacity duration-700"></div>
                                <div className="relative overflow-hidden rounded-xl bg-zinc-900 border border-white/10 aspect-[4/3] group-hover:scale-[1.02] transition-transform duration-500 ease-out shadow-2xl">
                                    <img src="/extra2.avif" alt="Extra EA400" className="object-cover w-full h-full transform scale-100 group-hover:scale-110 transition-transform duration-1000" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>

                                    <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <div className="text-violet-400 font-mono text-xs tracking-[0.2em] mb-2 uppercase">Performance</div>
                                        <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4">Extra EA400</h3>
                                        <p className="text-gray-300 font-light leading-relaxed max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                            L'alliance parfaite entre aérodynamisme et puissance. Une expérience de vol monomoteur sans précédent pour les passionnés exigeants.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Pilatus PC6 */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="group relative lg:mt-32"
                            >
                                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-75 blur-xl transition-opacity duration-700"></div>
                                <div className="relative overflow-hidden rounded-xl bg-zinc-900 border border-white/10 aspect-[4/3] group-hover:scale-[1.02] transition-transform duration-500 ease-out shadow-2xl">
                                    <img src="/pilatus6.avif" alt="Pilatus PC6 B2H4" className="object-cover w-full h-full transform scale-100 group-hover:scale-110 transition-transform duration-1000" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>

                                    <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <div className="text-indigo-400 font-mono text-xs tracking-[0.2em] mb-2 uppercase">Polyvalence</div>
                                        <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4">Pilatus PC6</h3>
                                        <p className="text-gray-300 font-light leading-relaxed max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                            Le légendaire "Turbo Porter". Robustesse inégalée et capacités STOL pour les missions les plus extrêmes à travers le monde.
                                        </p>
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
                        <a
                            href="https://wa.me/34617788820"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-white text-violet-950 px-12 py-5 rounded-full font-black uppercase tracking-widest hover:bg-violet-50 transition-all shadow-2xl hover:shadow-white/30"
                        >
                            Nous Contacter
                        </a>
                    </div>
                </section>
            </div>
        </PageTransition>
    );
};

export default FlotteIntegration;
