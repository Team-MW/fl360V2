import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/PageTransition';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const MentionsLegales = () => {
    const { t } = useTranslation();

    return (
        <PageTransition>
            <Helmet>
                <title>{t('legal_page.title', 'Mentions Légales')} - fl360</title>
            </Helmet>
            <div className="min-h-screen bg-black pt-40 pb-20 text-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-12 uppercase">
                            {t('legal_page.title', 'Mentions Légales')}
                        </h1>

                        <div className="space-y-12 text-gray-300 leading-relaxed font-light">
                            <section>
                                <h2 className="text-xl font-mono text-white mb-4 uppercase tracking-widest">1. Éditeur du site</h2>
                                <p>
                                    Le site internet <strong>fl360.com</strong> est édité par la société <strong>FL360 AVIATION SYSTEMS</strong>,
                                    société par actions simplifiée (SAS) au capital de 100 000 euros.<br />
                                    Immatriculée au Registre du Commerce et des Sociétés de Paris sous le numéro 123 456 789.<br />
                                    <br />
                                    <strong>Siège social :</strong><br />
                                    123 Avenue de l'Avenir<br />
                                    75000 Paris, France<br />
                                    <br />
                                    <strong>Email :</strong> contact@fl360.com<br />
                                    <strong>Téléphone :</strong> +33 1 00 00 00 00
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-mono text-white mb-4 uppercase tracking-widest">2. Directeur de la publication</h2>
                                <p>
                                    Le Directeur de la publication est Monsieur Jean Dupont, en qualité de Président de FL360 AVIATION SYSTEMS.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-mono text-white mb-4 uppercase tracking-widest">3. Hébergement</h2>
                                <p>
                                    Le site est hébergé par la société <strong>Vercel Inc.</strong><br />
                                    340 S Lemon Ave #4133<br />
                                    Walnut, CA 91789<br />
                                    États-Unis
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-mono text-white mb-4 uppercase tracking-widest">4. Propriété intellectuelle</h2>
                                <p>
                                    L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle.
                                    Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-mono text-white mb-4 uppercase tracking-widest">5. Données personnelles</h2>
                                <p>
                                    Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant.
                                    Pour exercer ce droit, veuillez nous contacter à l'adresse : privacy@fl360.com.
                                </p>
                            </section>
                        </div>
                    </motion.div>
                </div>
            </div>
        </PageTransition>
    );
};

export default MentionsLegales;
