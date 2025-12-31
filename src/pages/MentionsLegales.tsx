import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/PageTransition';
import { useTranslation, Trans } from 'react-i18next';
import { motion } from 'framer-motion';

const MentionsLegales = () => {
    const { t } = useTranslation();

    return (
        <PageTransition>
            <Helmet>
                <title>{t('legal_page.title')} - fl360</title>
            </Helmet>
            <div className="min-h-screen bg-black pt-40 pb-20 text-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-12 uppercase">
                            {t('legal_page.title')}
                        </h1>

                        <div className="space-y-12 text-gray-300 leading-relaxed font-light">
                            <section>
                                <h2 className="text-xl font-mono text-white mb-4 uppercase tracking-widest">{t('legal_page.sections.editor.title')}</h2>
                                <p>
                                    <Trans i18nKey="legal_page.sections.editor.content" components={{ 0: <span />, 1: <strong />, 3: <strong /> }} />
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-mono text-white mb-4 uppercase tracking-widest">{t('legal_page.sections.director.title')}</h2>
                                <p>
                                    {t('legal_page.sections.director.content')}
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-mono text-white mb-4 uppercase tracking-widest">{t('legal_page.sections.hosting.title')}</h2>
                                <p>
                                    <Trans i18nKey="legal_page.sections.hosting.content" components={{ 0: <span />, 1: <strong /> }} />
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-mono text-white mb-4 uppercase tracking-widest">{t('legal_page.sections.ip.title')}</h2>
                                <p>
                                    {t('legal_page.sections.ip.content')}
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-mono text-white mb-4 uppercase tracking-widest">{t('legal_page.sections.privacy.title')}</h2>
                                <p>
                                    {t('legal_page.sections.privacy.content')}
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
