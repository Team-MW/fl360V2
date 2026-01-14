import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import Starfield from '../components/Starfield';
import { Shield, Lock, Eye, Database, Cookie, UserCheck, Mail, FileText } from 'lucide-react';

const PolitiqueConfidentialite = () => {
    const sections = [
        {
            id: 'introduction',
            icon: Shield,
            title: 'Introduction',
            content: `FL360 Aviation s'engage à protéger la vie privée et les données personnelles de ses utilisateurs. Cette politique de confidentialité explique comment nous collectons, utilisons, stockons et protégeons vos informations personnelles conformément au Règlement Général sur la Protection des Données (RGPD) et aux lois applicables en matière de protection des données.

En utilisant nos services, vous acceptez les pratiques décrites dans cette politique de confidentialité.`
        },
        {
            id: 'data-collection',
            icon: Database,
            title: 'Données Collectées',
            content: `Nous collectons différents types de données personnelles :

DONNÉES D'IDENTIFICATION
• Nom et prénom
• Adresse email
• Numéro de téléphone
• Adresse postale
• Entreprise et fonction

DONNÉES DE NAVIGATION
• Adresse IP
• Type de navigateur
• Pages visitées
• Durée de visite
• Données de cookies

DONNÉES DE RÉSERVATION
• Informations de vol
• Préférences de voyage
• Historique des réservations
• Informations de paiement (traitées de manière sécurisée)`
        },
        {
            id: 'data-usage',
            icon: Eye,
            title: 'Utilisation des Données',
            content: `Vos données personnelles sont utilisées pour :

GESTION DES SERVICES
• Traiter vos demandes de devis et réservations
• Gérer votre compte client
• Vous contacter concernant nos services
• Améliorer la qualité de nos prestations

COMMUNICATION
• Envoi de confirmations de réservation
• Notifications importantes concernant vos vols
• Newsletters (avec votre consentement)
• Offres personnalisées

OBLIGATIONS LÉGALES
• Conformité réglementaire aéronautique
• Obligations fiscales et comptables
• Sécurité et prévention de la fraude`
        },
        {
            id: 'data-sharing',
            icon: UserCheck,
            title: 'Partage des Données',
            content: `FL360 Aviation ne vend jamais vos données personnelles. Nous pouvons partager vos informations uniquement avec :

PARTENAIRES OPÉRATIONNELS
• Compagnies aériennes et opérateurs
• Prestataires de services aéroportuaires
• Autorités aéronautiques (DGAC, EASA)

PRESTATAIRES TECHNIQUES
• Hébergeurs de données (serveurs sécurisés EU)
• Processeurs de paiement certifiés PCI-DSS
• Outils de communication (emails, CRM)

AUTORITÉS LÉGALES
• Sur demande légale ou judiciaire
• Pour protéger nos droits et notre sécurité
• En cas d'obligation réglementaire

Tous nos partenaires sont soumis à des obligations strictes de confidentialité et de sécurité.`
        },
        {
            id: 'cookies',
            icon: Cookie,
            title: 'Cookies et Technologies',
            content: `Notre site utilise des cookies pour améliorer votre expérience :

COOKIES ESSENTIELS (obligatoires)
• Fonctionnement du site
• Sécurité et authentification
• Préférences de langue

COOKIES ANALYTIQUES (avec consentement)
• Analyse du trafic et comportement
• Amélioration de l'expérience utilisateur
• Statistiques de performance

COOKIES MARKETING (avec consentement)
• Publicités personnalisées
• Remarketing
• Mesure de campagnes

Vous pouvez gérer vos préférences de cookies à tout moment via les paramètres de votre navigateur.`
        },
        {
            id: 'rights',
            icon: FileText,
            title: 'Vos Droits RGPD',
            content: `Conformément au RGPD, vous disposez des droits suivants :

DROIT D'ACCÈS
Obtenir une copie de vos données personnelles

DROIT DE RECTIFICATION
Corriger vos données inexactes ou incomplètes

DROIT À L'EFFACEMENT
Demander la suppression de vos données (droit à l'oubli)

DROIT À LA LIMITATION
Limiter le traitement de vos données

DROIT À LA PORTABILITÉ
Recevoir vos données dans un format structuré

DROIT D'OPPOSITION
Vous opposer au traitement de vos données

DROIT DE RETRAIT DU CONSENTEMENT
Retirer votre consentement à tout moment

Pour exercer vos droits, contactez-nous à : privacy@fl360aviation.com`
        },
        {
            id: 'security',
            icon: Lock,
            title: 'Sécurité des Données',
            content: `FL360 Aviation met en œuvre des mesures de sécurité robustes :

MESURES TECHNIQUES
• Chiffrement SSL/TLS pour toutes les transmissions
• Serveurs sécurisés dans l'Union Européenne
• Sauvegardes régulières et chiffrées
• Pare-feu et systèmes anti-intrusion
• Authentification à deux facteurs

MESURES ORGANISATIONNELLES
• Accès limité aux données (principe du moindre privilège)
• Formation du personnel à la protection des données
• Audits de sécurité réguliers
• Politique de gestion des incidents
• Contrats de confidentialité avec tous les employés

CONSERVATION DES DONNÉES
Vos données sont conservées uniquement le temps nécessaire aux finalités pour lesquelles elles ont été collectées, conformément aux obligations légales (généralement 3 à 5 ans pour les données comptables et fiscales).`
        },
        {
            id: 'contact',
            icon: Mail,
            title: 'Contact et Réclamations',
            content: `Pour toute question concernant cette politique de confidentialité ou l'exercice de vos droits :

DÉLÉGUÉ À LA PROTECTION DES DONNÉES
Email : privacy@fl360aviation.com
Téléphone : +34 61 77 888 20
Adresse : FL360 Aviation

AUTORITÉ DE CONTRÔLE
Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) ou de l'autorité de protection des données de votre pays.

CNIL - 3 Place de Fontenoy
TSA 80715 - 75334 PARIS CEDEX 07
Téléphone : 01 53 73 22 22
www.cnil.fr`
        },
        {
            id: 'updates',
            icon: FileText,
            title: 'Modifications',
            content: `Cette politique de confidentialité peut être mise à jour périodiquement pour refléter les changements dans nos pratiques ou pour des raisons légales.

La date de dernière mise à jour est indiquée en haut de cette page. Nous vous encourageons à consulter régulièrement cette politique.

En cas de modification substantielle, nous vous en informerons par email ou via une notification sur notre site.

Dernière mise à jour : ${new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}`
        }
    ];

    return (
        <PageTransition>
            <Helmet>
                <title>Politique de Confidentialité - fl360</title>
                <meta name="description" content="Politique de confidentialité et protection des données personnelles de FL360 Aviation. Conformité RGPD." />
            </Helmet>

            <div className="min-h-screen bg-black text-white relative overflow-hidden">
                {/* Background FX */}
                <Starfield />
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-black to-black pointer-events-none"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-violet-900/20 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="container mx-auto px-6 py-40 relative z-10 max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-20"
                    >
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <Shield className="w-12 h-12 text-violet-400" />
                            <h1 className="text-4xl md:text-6xl font-black tracking-tight uppercase bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500">
                                Politique de Confidentialité
                            </h1>
                        </div>
                        <p className="text-gray-400 text-lg mb-6">Protection de vos données personnelles</p>
                        <div className="h-1 w-24 bg-violet-600 mx-auto rounded-full"></div>
                    </motion.div>

                    <div className="grid gap-8">
                        {sections.map((section, index) => {
                            const IconComponent = section.icon;
                            return (
                                <motion.section
                                    key={section.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group bg-zinc-900/40 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-2xl hover:border-violet-500/30 transition-all duration-500"
                                >
                                    <div className="flex flex-col gap-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-violet-900/30 rounded-xl flex items-center justify-center border border-violet-500/20 group-hover:bg-violet-900/50 transition-colors">
                                                <IconComponent className="w-6 h-6 text-violet-400" />
                                            </div>
                                            <h2 className="text-2xl font-bold text-white uppercase tracking-wider">
                                                {section.title}
                                            </h2>
                                        </div>
                                        <div className="text-gray-300 font-light leading-relaxed text-base whitespace-pre-line pl-16">
                                            {section.content}
                                        </div>
                                    </div>
                                </motion.section>
                            );
                        })}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-center mt-20 p-8 bg-violet-900/10 border border-violet-500/20 rounded-2xl"
                    >
                        <p className="text-gray-400 text-sm font-mono mb-4">
                            Cette politique de confidentialité est effective depuis le {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                        <p className="text-violet-400 text-xs">
                            © {new Date().getFullYear()} FL360 Aviation - Tous droits réservés
                        </p>
                    </motion.div>
                </div>
            </div>
        </PageTransition>
    );
};

export default PolitiqueConfidentialite;
