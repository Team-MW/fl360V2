import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import Starfield from '../components/Starfield';
import { Link } from 'react-router-dom';
import jetprive from '../assets/jetprié.jpg';

const HandCarry = () => {
    return (
        <PageTransition>
            <Helmet>
                <title>Colis accompagné – Hand Carry – - fl360 Aviation</title>
                <meta name="description" content="Service de transport de colis accompagné par avion. Livraison express et sécurisée partout dans le monde." />
            </Helmet>

            <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-violet-500/30 relative">
                <Starfield />

                {/* Hero Section */}
                <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={jetprive}
                            alt="Hand Carry - Colis accompagné"
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
                            Colis accompagné – Hand Carry –
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto mb-12"
                        >
                            Colis accompagné par avion - Livraison express et sécurisée
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
                                Demander un devis
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
                                    title: 'Livraison Express',
                                    desc: 'Votre colis voyage en cabine avec un convoyeur professionnel. Livraison de porte à porte en 24-48h partout dans le monde.'
                                },
                                {
                                    title: 'Sécurité Maximale',
                                    desc: 'Surveillance permanente de votre envoi. Aucun risque de perte, vol ou dommage. Traçabilité complète en temps réel.'
                                },
                                {
                                    title: 'Sans Limite',
                                    desc: 'Documents confidentiels, pièces urgentes, échantillons médicaux, œuvres d\'art. Nous transportons tout type de colis.'
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
                                { title: 'Documents Urgents', desc: 'Contrats, dossiers juridiques, documents officiels nécessitant une livraison immédiate et confidentielle' },
                                { title: 'Pièces Industrielles', desc: 'Composants critiques pour arrêt de production. Livraison express pour minimiser les temps d\'arrêt' },
                                { title: 'Échantillons Médicaux', desc: 'Transport sécurisé d\'échantillons biologiques, médicaments, vaccins avec respect de la chaîne du froid' },
                                { title: 'Œuvres d\'Art & Objets de Valeur', desc: 'Transport d\'objets précieux, bijoux, antiquités avec assurance tous risques et surveillance constante' },
                                { title: 'Prototypes & Échantillons', desc: 'Livraison de prototypes pour salons, présentations clients, tests urgents' },
                                { title: 'Pièces Détachées AOG', desc: 'Aircraft On Ground - Pièces aéronautiques critiques pour remettre un avion en service rapidement' }
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

                {/* Process Section */}
                <section className="py-20 bg-zinc-950 relative z-10">
                    <div className="container mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-tight">
                                Notre Processus
                            </h2>
                            <p className="text-gray-400 text-lg max-w-4xl mx-auto leading-relaxed">
                                Un service clé en main pour vos envois les plus critiques
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                            {[
                                { step: '1', title: 'Enlèvement', desc: 'Collecte à votre adresse' },
                                { step: '2', title: 'Vol', desc: 'Transport en cabine' },
                                { step: '3', title: 'Douanes', desc: 'Dédouanement express' },
                                { step: '4', title: 'Livraison', desc: 'Remise en main propre' }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-zinc-900/50 border border-white/5 p-8 text-center hover:border-violet-500/50 transition-all"
                                >
                                    <div className="text-5xl font-black text-violet-600/30 mb-4">{item.step}</div>
                                    <h3 className="text-xl font-bold uppercase tracking-tight text-violet-300 mb-2">{item.title}</h3>
                                    <p className="text-gray-400 text-sm">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-20 bg-zinc-900/30 border-y border-white/5 relative z-10">
                    <div className="container mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tight">
                                Pourquoi Choisir Notre Service Colis accompagné – Hand Carry – ?
                            </h2>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {[
                                { title: 'Disponibilité 24/7', desc: 'Service disponible jour et nuit, weekends et jours fériés inclus' },
                                { title: 'Couverture Mondiale', desc: 'Livraison dans plus de 180 pays à travers le monde' },
                                { title: 'Traçabilité Temps Réel', desc: 'Suivez votre colis à chaque étape du transport' },
                                { title: 'Assurance Tous Risques', desc: 'Couverture complète de la valeur de votre envoi' },
                                { title: 'Convoyeurs Professionnels', desc: 'Personnel formé et expérimenté pour tous types de colis' },
                                { title: 'Délais Garantis', desc: 'Engagement sur les délais de livraison avec pénalités en cas de retard' }
                            ].map((benefit, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="bg-zinc-900/50 border border-white/5 p-6 hover:border-violet-500/50 transition-all"
                                >
                                    <h3 className="text-lg font-bold uppercase tracking-tight mb-3 text-violet-300">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{benefit.desc}</p>
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
                            Besoin d'un envoi urgent ?
                        </h2>
                        <p className="text-violet-200 text-xl mb-12 max-w-2xl mx-auto">
                            Contactez-nous pour un devis immédiat et une prise en charge rapide.
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

export default HandCarry;
