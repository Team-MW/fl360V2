import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import Starfield from '../components/Starfield';

const JotFormEmbed = ({ formId }: { formId: string }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (containerRef.current && !containerRef.current.querySelector('script')) {
            const script = document.createElement('script');
            script.src = `https://form.jotform.com/jsform/${formId}`;
            script.type = 'text/javascript';
            script.async = true;

            // Simple timeout to hide loader as script injection load detection is complex
            const timer = setTimeout(() => setIsLoading(false), 2500);

            containerRef.current.appendChild(script);
            return () => clearTimeout(timer);
        }
    }, [formId]);

    return (
        <div className="relative w-full min-h-[600px]">
            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm rounded-2xl"
                    >
                        <div className="relative w-20 h-20">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                className="w-full h-full border-4 border-t-violet-600 border-r-transparent border-b-indigo-600 border-l-transparent rounded-full shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                            ></motion.div>
                            <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold uppercase tracking-widest text-white/50 animate-pulse">
                                Loading
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <div ref={containerRef} className="w-full min-h-[600px] flex justify-center" />
        </div>
    );
};

const ContactUs = () => {

    return (
        <PageTransition>
            <Helmet>
                <title>Contact - fl360</title>
                <meta name="description" content="Contactez fl360 pour toute demande de renseignement." />
            </Helmet>
            <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black pt-32 pb-20 flex flex-col items-center justify-center text-white relative overflow-hidden">
                <Starfield />

                <div className="container mx-auto px-4 max-w-4xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-[0.2em] mb-4">
                            Contact
                        </h1>
                        <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
                        <p className="text-gray-400 text-lg font-light tracking-wide max-w-xl mx-auto">
                            Une question ? Un projet ? Notre équipe est à votre écoute.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="bg-black/50 backdrop-blur-xl border border-white/10 p-4 md:p-12 rounded-3xl shadow-2xl overflow-hidden"
                    >
                        <JotFormEmbed formId="261053655420349" />
                    </motion.div>
                </div>
            </div>
        </PageTransition>
    );
};

export default ContactUs;
