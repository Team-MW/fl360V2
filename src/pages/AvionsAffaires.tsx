import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import Starfield from '../components/Starfield';
import { Link } from 'react-router-dom';

const AvionsAffaires = () => {
    return (
        <PageTransition>
            <Helmet>
                <title>Avions d'Affaires - fl360 Aviation</title>
                <meta name="description" content="Location d'avions d'affaires pour vos déplacements professionnels. Productivité et confort en vol." />
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
                            Avions d'Affaires
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto mb-12"
                        >
                            Une solution prestigieuse pour voyager sur tous les continents
                        </motion.p>
                    </div>
                </div>

                {/* Content Grid */}
                <section className="py-20 bg-zinc-950 relative z-10">
                    <div className="container mx-auto px-6">
                        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                            {[
                                {
                                    title: 'Productivité',
                                    desc: 'Transformez votre temps de vol en temps de travail. Cabine équipée, connexion Wi-Fi, espace de réunion.'
                                },
                                {
                                    title: 'Confort Premium',
                                    desc: 'Sièges en cuir, espace généreux, service à bord personnalisé. Voyagez dans les meilleures conditions.'
                                },
                                {
                                    title: 'Longue Distance',
                                    desc: 'Parcourez de grandes distances sans escale. Atteignez n\'importe quelle destination intercontinentale.'
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

                {/* Use Cases Section */}
                <section className="py-20 bg-zinc-900/30 border-y border-white/5 relative z-10">
                    <div className="container mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tight">
                                Cas d'Usage
                            </h2>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {[
                                { title: 'Réunions Internationales', desc: 'Assistez à plusieurs réunions dans différentes villes en une seule journée' },
                                { title: 'Déplacements Executives', desc: 'Transport de dirigeants et équipes pour événements stratégiques' },
                                { title: 'Roadshows Investisseurs', desc: 'Tournées de présentation auprès d\'investisseurs dans plusieurs pays' },
                                { title: 'Visites de Sites', desc: 'Inspection de sites industriels, usines, bureaux régionaux' }
                            ].map((useCase, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-zinc-900/50 border border-white/5 p-8 hover:border-violet-500/50 transition-all"
                                >
                                    <h3 className="text-xl font-bold text-violet-300 mb-3 uppercase tracking-tight">{useCase.title}</h3>
                                    <p className="text-gray-400">{useCase.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Fleet Section */}
                <section className="py-20 bg-zinc-950 relative z-10">
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
                            <p className="text-gray-400 text-lg">Avions d'affaires à votre disposition</p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {[
                                { name: 'Pilatus PC-12', subtitle: 'Turbopropulseur' },
                                { name: 'Pilatus PC-24', subtitle: 'Super Versatile Jet' },
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
                            Organisez vos déplacements professionnels avec nos avions d'affaires.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block bg-white text-violet-950 px-12 py-5 rounded-full font-black uppercase tracking-widest hover:bg-violet-50 transition-all shadow-2xl hover:shadow-white/30"
                        >
                            Demander un devis
                        </Link>
                    </div>
                </section>
            </div>
        </PageTransition>
    );
};

export default AvionsAffaires;
