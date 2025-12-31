import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import Starfield from '../components/Starfield';
import { Check, FileText, Settings, Shield, Monitor, Search } from 'lucide-react';
// import { useTranslation } from 'react-i18next';

const CaoCamo = () => {
    // const { t } = useTranslation();

    const services = [
        "Développement, révision et contrôle d’un programme de maintenance",
        "Planification et coordination de toutes les activités de maintenance programmée",
        "Évaluation des consignes de navigabilité (AD) et du bulletin de service (SB)",
        "Gestion des registres techniques des aéronefs et dossiers techniques",
        "Gestion des modifications et des réparations",
        "Coordination des défauts d’aéronefs et situations AOG",
        "Surveillance de la fiabilité",
        "Inspections avant achat (PREBUY)",
        "Immatriculation de votre aéronef",
        "Import / Export d'aéronefs"
    ];

    const progDigitalFeatures = [
        "Interface agréable et prise en main rapide",
        "Gain de temps considérable",
        "Mise à jour régulière",
        "Sécurité, transparence et conformité à la réglementation",
        "Impression de tous les documents nécessaires en quelques clics",
        "Facilité d’utilisation",
        "Compatible avec tous les systemes d’exploitation Windows"
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <PageTransition>
            <Helmet>
                <title>CAO / CAMO - Gestion de Navigabilité - fl360</title>
                <meta name="description" content="Services de gestion du maintien de la navigabilité (CAO / CAMO) pour aéronefs." />
            </Helmet>

            <div className="min-h-screen bg-zinc-950 text-white font-sans pt-32 pb-20">
                <Starfield />

                {/* Hero Section */}
                <div className="container mx-auto px-6 relative z-10 mb-24 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-widest mb-6 leading-tight"
                    >
                        Entretenez votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">Aéronef</span> de manière intelligente
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-300 font-light tracking-wide max-w-4xl mx-auto mb-8"
                    >
                        L’Organisme de Gestion du Maintien de la Navigabilité (CAO / CAMO)<br />
                        <span className="text-indigo-400 text-lg">Une approche parfaite pour la gestion de la navigabilité</span>
                    </motion.p>
                </div>

                <div className="container mx-auto px-6 relative z-10 space-y-24">

                    {/* About Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={containerVariants}
                            className="bg-zinc-900/50 backdrop-blur-sm border border-white/5 p-8 rounded-2xl"
                        >
                            <h2 className="text-2xl font-bold uppercase tracking-widest mb-6 border-l-4 border-indigo-500 pl-4">À propos</h2>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                Nous fournissons des solutions personnalisées pour la gestion du maintien de la navigabilité de votre aéronef. FL 360 Aviation répond parfaitement à vos besoins.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                Notre service CAO / CAMO vise à maintenir la navigabilité de vos aéronefs, en maximisant la disponibilité des avions de nos clients.
                            </p>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={containerVariants}
                            className="bg-zinc-900/50 backdrop-blur-sm border border-white/5 p-8 rounded-2xl"
                        >
                            <h2 className="text-2xl font-bold uppercase tracking-widest mb-6 border-l-4 border-violet-500 pl-4">Avantages</h2>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                Notre service CAO / CAMO est spécifiquement adapté à vos besoins, ce qui nous permet de vous proposer des solutions personnalisées, avec une grande souplesse répondant aux normes de l'aviation civile.
                            </p>
                            <div className="flex items-center gap-4 text-indigo-300">
                                <Shield size={24} />
                                <span className="font-semibold">Conformité OSAC garantie</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Services List */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <h2 className="text-3xl font-bold uppercase tracking-widest text-center mb-12">Surveillance & Gestion Complète</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors group"
                                >
                                    <div className="mt-1 w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center shrink-0 group-hover:bg-indigo-500/20 transition-colors">
                                        <Check size={16} className="text-indigo-400 group-hover:text-indigo-300" />
                                    </div>
                                    <span className="text-gray-300 group-hover:text-white transition-colors">{service}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Needs vs Offer Sections */}
                    <div className="space-y-16">
                        {/* Navigability Management */}
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <Settings size={32} className="text-violet-500" />
                                <h2 className="text-3xl font-bold uppercase tracking-widest">Gestion de la Navigabilité</h2>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="bg-zinc-900 border border-white/10 p-8 rounded-xl"
                                >
                                    <h3 className="text-xl font-bold text-gray-400 mb-4 uppercase">Vos besoins</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        Que vous soyez propriétaire, exploitant ou aéroclub, vous avez besoin d’un suivi rigoureux et irréprochable de votre flotte conformément à la réglementation et d’un contrôle parfait des statuts techniques.
                                    </p>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="bg-gradient-to-br from-indigo-900/40 to-violet-900/40 border border-indigo-500/30 p-8 rounded-xl"
                                >
                                    <h3 className="text-xl font-bold text-indigo-300 mb-4 uppercase">Notre offre</h3>
                                    <p className="text-gray-300 leading-relaxed mb-4">
                                        Après une minutieuse inspection préliminaire, nous initialisons votre flotte dans notre système d’information afin d’y tracer un historique complet.
                                    </p>
                                    <p className="text-gray-300 leading-relaxed">
                                        Nous assurons le suivi réglementaire, déterminons les butées de maintenance et fournissons les rapports requis pour les revues de navigabilité.
                                    </p>
                                </motion.div>
                            </div>
                        </div>

                        {/* Prebuy Inspection */}
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <Search size={32} className="text-violet-500" />
                                <h2 className="text-3xl font-bold uppercase tracking-widest">Prebuy / Inspection</h2>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="bg-zinc-900 border border-white/10 p-8 rounded-xl"
                                >
                                    <h3 className="text-xl font-bold text-gray-400 mb-4 uppercase">Vos besoins</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        Vous venez d’acheter ou de vendre un avion. Avant sa réception / livraison, vous devez être sûr de son intégrité physique et de l'exhaustivité des données techniques.
                                    </p>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="bg-gradient-to-br from-indigo-900/40 to-violet-900/40 border border-indigo-500/30 p-8 rounded-xl"
                                >
                                    <h3 className="text-xl font-bold text-indigo-300 mb-4 uppercase">Notre offre</h3>
                                    <p className="text-gray-300 leading-relaxed mb-4">
                                        Nous vous accompagnons pour l’intégration et le début d’exploitation en procédant à une étude technique approfondie et une inspection physique de l’avion.
                                    </p>
                                    <p className="text-gray-300 leading-relaxed">
                                        En fin d’exploitation, FL360 Aviation vous accompagne pour la vente de l’avion ou son retour au bailleur.
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Maintenance Program */}
                    <div className="bg-zinc-900/30 border border-white/5 p-8 md:p-12 rounded-2xl text-center">
                        <FileText size={48} className="text-violet-500 mx-auto mb-6" />
                        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-widest mb-6">Programme d'entretien</h2>
                        <p className="text-gray-300 leading-relaxed max-w-4xl mx-auto">
                            Depuis plusieurs années, nous fournissons des Programmes d'entretien personnalisés qui répondent aux exigences de la Part M selon le M.A.302. Nous avons de même l’autorisation <span className="text-white font-semibold">« Approbation Indirecte »</span> qui nous permet de vous fournir un PE APPROUVÉ par notre Responsable de la Navigabilité, évitant ainsi toute dépose auprès de l’OSAC.
                        </p>
                    </div>

                    {/* ProgDigital Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <Monitor size={32} className="text-indigo-400" />
                                <h2 className="text-3xl font-bold uppercase tracking-widest">ProgDigital</h2>
                            </div>
                            <p className="text-lg text-indigo-300 mb-6 font-light">
                                Notre outil de travail indispensable dédié à la gestion du suivi de navigabilité.
                            </p>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                Ce logiciel offre une aide au suivi des opérations d’entretien des aéronefs pour un état de navigabilité optimal. Conçu pour les organismes Part M sous Part G gérant un parc d’avions.
                            </p>
                            <ul className="space-y-3">
                                {progDigitalFeatures.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0"></div>
                                        <span className="text-gray-300 text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-8 rounded-2xl border border-white/10 flex items-center justify-center min-h-[300px]">
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-white mb-2">Interface ProgDigital</h3>
                                <p className="text-gray-500 text-sm">Capture d'écran de l'interface logicielle</p>
                                {/* Placeholder for software screenshot if available later */}
                            </div>
                        </div>
                    </div>

                    {/* Contact CTA */}
                    <div className="text-center pt-12">
                        <motion.a
                            href="/contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 bg-white text-black px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors"
                        >
                            Nous contacter
                        </motion.a>
                    </div>

                </div>
            </div>
        </PageTransition>
    );
};

export default CaoCamo;
