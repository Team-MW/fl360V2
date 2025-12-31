import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';

const Formation = () => {

    return (
        <PageTransition>
            <Helmet>
                <title>Formation - fl360</title>
                <meta name="description" content="Découvrez nos programmes de formation aéronautique d'élite." />
            </Helmet>

            <div className="min-h-screen bg-black pt-32 pb-20 text-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold font-mono tracking-tighter mb-8">FORMATION</h1>
                        <p className="text-xl text-gray-400 font-light leading-relaxed">
                            Page en construction. Nos programmes de formation seront bientôt disponibles.
                        </p>
                    </motion.div>
                </div>
            </div>
        </PageTransition>
    );
};

export default Formation;
