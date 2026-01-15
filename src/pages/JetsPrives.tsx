import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import Starfield from '../components/Starfield';
import { Link } from 'react-router-dom';
import jetprive from '../assets/jetprié.jpg';

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
                <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={jetprive}
                            alt="Jets Privés"
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
                            Jets Privés
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto mb-12"
                        >
                            Une optimisation du temps pour les affaires et les loisirs
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

                {/* Business & Leisure Section */}
                <section className="py-20 bg-zinc-950 relative z-10">
                    <div className="container mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-zinc-900/50 border border-white/5 p-10 hover:border-violet-500/50 transition-all"
                            >
                                <h2 className="text-3xl font-bold uppercase tracking-tight mb-6 text-violet-300">
                                    Avions d'affaires pour les entreprises
                                </h2>
                                <p className="text-gray-400 leading-relaxed mb-8">
                                    Emplois du temps serrés, réunions multiples, visites de plusieurs sites en une seule journée...
                                    Nous permettons aux femmes et hommes d'affaires d'optimiser leur temps tout en utilisant la méthode
                                    la plus sûre et confortable pour leurs déplacements professionnels.
                                </p>
                                <Link
                                    to="/contact"
                                    className="inline-block bg-violet-600 text-white px-8 py-3 font-bold uppercase tracking-wide hover:bg-violet-700 transition-all"
                                >
                                    Demandez un devis rapide
                                </Link>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-zinc-900/50 border border-white/5 p-10 hover:border-violet-500/50 transition-all"
                            >
                                <h2 className="text-3xl font-bold uppercase tracking-tight mb-6 text-violet-300">
                                    Jets privés pour les loisirs
                                </h2>
                                <p className="text-gray-400 leading-relaxed mb-8">
                                    Weekend de ski à Courchevel, escapade gourmande en Sardaigne, farniente dans les Caraïbes…
                                    Voyager dans le confort d'un jet privé vous permettra d'arriver à destination avec vos amis et
                                    votre famille sans stress, en toute sécurité, tout en préservant votre vie privée.
                                </p>
                                <Link
                                    to="/contact"
                                    className="inline-block bg-violet-600 text-white px-8 py-3 font-bold uppercase tracking-wide hover:bg-violet-700 transition-all"
                                >
                                    Demandez un devis rapide
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Fleet Section */}
                <section className="py-20 bg-zinc-900/30 border-y border-white/5 relative z-10">
                    <div className="container mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tight">
                                Notre Flotte
                            </h2>
                            <p className="text-gray-400 text-lg">Jets et avions à votre disposition</p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {[
                                { name: 'Pilatus PC-12', subtitle: 'Turbopropulseur' },
                                { name: 'Pilatus PC-24', subtitle: 'Super Versatile Jet' },
                                { name: 'Pilatus PC-6', subtitle: 'Porter' },
                                { name: 'Daher TBM 840', subtitle: 'Turbopropulseur' },
                                { name: 'Learjet 35A', subtitle: 'Business Jet' }
                            ].map((aircraft, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-zinc-900/50 border border-white/5 p-8 hover:border-violet-500/50 transition-all text-center"
                                >
                                    <h3 className="text-2xl font-bold text-violet-300 mb-2 uppercase tracking-tight">{aircraft.name}</h3>
                                    <p className="text-gray-500 text-sm uppercase tracking-wider">{aircraft.subtitle}</p>
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
