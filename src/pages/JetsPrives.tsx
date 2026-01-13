import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const JetsPrives = () => {
    return (
        <PageTransition>
            <Helmet>
                <title>Jets Privés - fl360 Aviation</title>
                <meta name="description" content="Location de jets privés pour vos déplacements d'affaires et personnels. Luxe, confort et discrétion absolue." />
            </Helmet>

            <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-violet-500/30">
                {/* Hero Section */}
                <div className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-slate-50">
                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-5xl md:text-7xl font-bold uppercase tracking-tight mb-6 text-slate-700"
                        >
                            Jets Privés
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl md:text-2xl text-slate-600 font-light max-w-3xl mx-auto mb-12"
                        >
                            Une optimisation du temps pour les affaires et les loisirs
                        </motion.p>
                    </div>
                </div>

                {/* Business & Leisure Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-slate-50 p-10 border border-slate-200"
                            >
                                <h2 className="text-3xl font-bold uppercase tracking-tight mb-6 text-slate-700">
                                    Avions d'affaires pour les entreprises
                                </h2>
                                <p className="text-slate-600 leading-relaxed mb-8">
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
                                className="bg-slate-50 p-10 border border-slate-200"
                            >
                                <h2 className="text-3xl font-bold uppercase tracking-tight mb-6 text-slate-700">
                                    Jets privés pour les loisirs
                                </h2>
                                <p className="text-slate-600 leading-relaxed mb-8">
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

                {/* Charter Method */}
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-700 mb-6 uppercase tracking-tight">
                                Notre méthode, affrètement privé
                            </h2>
                            <p className="text-slate-600 text-lg max-w-4xl mx-auto leading-relaxed">
                                Nous sommes les experts qui simplifient le processus d'affrètement grâce à une méthode simple, en quatre étapes.
                                Chez nous, chaque client bénéficie des services d'un consultant en affrètement dédié, un interlocuteur unique,
                                épaulé par nos équipes internationales chargées des opérations, des services à bord et de la conformité,
                                qui veillent à ce que tout se déroule sans accroc.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                            {['Demande', 'Sélection', 'Confirmation', 'Vol'].map((step, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-white p-8 border border-slate-200 text-center hover:border-violet-500 transition-all"
                                >
                                    <div className="text-5xl font-black text-slate-200 mb-4">{idx + 1}</div>
                                    <h3 className="text-xl font-bold uppercase tracking-tight text-slate-700">{step}</h3>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-700 mb-4 uppercase tracking-tight">
                                Pourquoi affréter vos vols privés avec nous ?
                            </h2>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                            {[
                                { title: 'Luxe et Confort', desc: 'Voler doit avant tout être un plaisir. Nous mettons tout en œuvre pour que votre expérience à bord soit des plus confortables et luxueuses.' },
                                { title: 'Couverture Mondiale', desc: 'Peu importe votre lieu de départ ou d\'arrivée, notre réseau mondial vous garantit une excellence connaissance des marchés locaux.' },
                                { title: 'Sécurité et Discrétion', desc: 'Voyager avec nous garantit un respect total de votre vie privée. Nous assurons votre sécurité tout au long de votre vol.' },
                                { title: 'Rentabilité', desc: 'Notre pouvoir d\'achat nous permet de dénicher des prix très compétitifs et vous offrir des solutions au meilleur prix du marché.' },
                                { title: 'Créer Votre Planning', desc: 'Vol régulier ou arrangement selon votre emploi du temps - nous affrèterons le jet privé qui vous conviendra.' },
                                { title: 'Gamme d\'Avions', desc: 'Accès à 50 000 avions et 130 modèles différents. Nous vous fournirons toujours l\'avion idéal pour vos exigences.' },
                                { title: 'Accès à Plus d\'Aéroports', desc: 'Atteignez des lieux qu\'un vol régulier ne dessert pas : endroits isolés ou localités plus proches de votre destination finale.' },
                                { title: 'Chargé de Clientèle Dédié', desc: 'Votre expert en affrètement est disponible 24h/24, 7j/7 pour vous assister à chaque étape de votre demande.' }
                            ].map((benefit, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="bg-slate-50 border border-slate-200 p-6 hover:border-violet-500 transition-all"
                                >
                                    <h3 className="text-lg font-bold uppercase tracking-tight mb-3 text-slate-700">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">{benefit.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mt-12 bg-violet-50 border border-violet-200 p-8 text-center max-w-4xl mx-auto"
                        >
                            <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 text-slate-700">Terminaux Privés</h3>
                            <p className="text-slate-600">
                                Évitez les files d'attentes et les retards inutiles. Nos passagers peuvent monter à bord jusqu'à la dernière minute avant le décollage.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Price Estimation */}
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-700 mb-6 uppercase tracking-tight">
                                Vous avez besoin d'une estimation de prix ?
                            </h2>
                            <p className="text-slate-600 text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
                                Si vous cherchez à louer un jet privé, notre guide des prix est le point de départ idéal.
                                Notre équipe vous permettra d'obtenir un tarif approximatif pour louer un jet privé spécifique
                                ou d'accéder à une sélection d'appareils disponibles aux dates que vous recherchez.
                            </p>
                            <Link
                                to="/contact"
                                className="inline-block bg-violet-600 text-white px-12 py-4 font-bold uppercase tracking-wide hover:bg-violet-700 transition-all"
                            >
                                En savoir +
                            </Link>
                        </motion.div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-700 mb-6 uppercase tracking-tight">
                                Prêt à décoller ?
                            </h2>
                            <p className="text-slate-600 text-xl mb-12 max-w-2xl mx-auto">
                                Contactez nos experts pour organiser votre prochain vol en jet privé.
                            </p>
                            <Link
                                to="/contact"
                                className="inline-block bg-violet-600 text-white px-12 py-4 font-bold uppercase tracking-wide hover:bg-violet-700 transition-all"
                            >
                                Réserver maintenant
                            </Link>
                        </motion.div>
                    </div>
                </section>
            </div>
        </PageTransition>
    );
};

export default JetsPrives;
