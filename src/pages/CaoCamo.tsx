import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import Starfield from '../components/Starfield';

const CaoCamo = () => {
    return (
        <PageTransition>
            <Helmet>
                <title>CAO / CAMO - fl360</title>
                <meta name="description" content="Services CAO / CAMO en aviation." />
            </Helmet>

            <div className="min-h-screen bg-zinc-950 text-white font-sans pt-32 pb-20">
                <Starfield />
                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold uppercase tracking-widest mb-8"
                    >
                        CAO / CAMO
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 font-light"
                    >
                        Page en construction. Contenu à venir.
                    </motion.p>
                </div>
            </div>
        </PageTransition>
    );
};

export default CaoCamo;
