import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/PageTransition';
import { useTranslation, Trans } from 'react-i18next';
import { motion } from 'framer-motion';
import Starfield from '../components/Starfield';

const MentionsLegales = () => {
    const { t } = useTranslation();

    const sections = [
        'editor',
        'director',
        'hosting',
        'ip',
        'privacy'
    ];

    return (
        <PageTransition>
            <Helmet>
                <title>{t('legal_page.title')} - fl360</title>
            </Helmet>

            <div className="min-h-screen bg-black text-white relative overflow-hidden">
                {/* Background FX */}
                <Starfield />
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-black to-black pointer-events-none"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-violet-900/20 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="container mx-auto px-6 py-40 relative z-10 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-20"
                    >
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight uppercase mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500">
                            {t('legal_page.title')}
                        </h1>
                        <div className="h-1 w-24 bg-violet-600 mx-auto rounded-full"></div>
                    </motion.div>

                    <div className="grid gap-8">
                        {sections.map((section, index) => (
                            <motion.section
                                key={section}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group bg-zinc-900/40 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-2xl hover:border-violet-500/30 transition-all duration-500"
                            >
                                <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                                    <div className="md:w-1/4">
                                        <h2 className="text-xl font-mono text-violet-400 uppercase tracking-widest break-words">
                                            {t(`legal_page.sections.${section}.title`)}
                                        </h2>
                                    </div>
                                    <div className="md:w-3/4">
                                        <div className="text-gray-300 font-light leading-relaxed text-lg whitespace-pre-line">
                                            <Trans
                                                i18nKey={`legal_page.sections.${section}.content`}
                                                components={{
                                                    0: <div />,
                                                    1: <strong className="text-white font-bold" />,
                                                    3: <span className="block mt-4 mb-2 text-white font-semibold uppercase tracking-wider text-sm" />
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </motion.section>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-center mt-20 text-gray-500 text-sm font-mono"
                    >
                        <p>{t('footer.rights', { year: new Date().getFullYear() })}</p>
                    </motion.div>
                </div>
            </div>
        </PageTransition>
    );
};

export default MentionsLegales;
