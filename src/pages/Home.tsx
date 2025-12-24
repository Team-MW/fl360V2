import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/PageTransition';
import { ArrowRight, Shield, Clock, Award, ChevronDown, Plane, Hexagon, FileBadge, FileCheck, CheckCircle } from 'lucide-react';

import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import logo from '../assets/logo360.webp';

import PartnersMarquee from '../components/PartnersMarquee';
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation();
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const yLogo = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const yText = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <PageTransition>
            <Helmet>
                <title>fl360 - Excellence Aéronautique & Ingénierie</title>
                <meta name="description" content="Leader en gestion de navigabilité, certification CAMO/SPO/ATO et consulting aéronautique. FL360 redéfinit les standards de sécurité et d'efficacité pour votre flotte." />
                <meta property="og:title" content="fl360 - Excellence Aéronautique & Ingénierie" />
                <meta property="og:description" content="Leader en gestion de navigabilité, certification CAMO/SPO/ATO et consulting aéronautique. Des solutions d'élite pour l'avenir de vos opérations." />
                <meta property="og:image" content="/favicon.webp" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://fl360.com/" />
            </Helmet>

            {/* Hero Section */}
            <section ref={heroRef} className="relative h-screen flex items-center justify-center bg-black overflow-hidden perspective-1000">
                {/* Background Grid Animation */}
                <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-[0.05]"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50"></div>

                {/* Abstract Breathing Glow */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.03, 0.06, 0.03]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white blur-[120px] rounded-full"
                ></motion.div>

                <motion.div style={{ opacity: opacityHero }} className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        style={{ y: yLogo }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="flex flex-col items-center"
                    >
                        <h2 className="text-sm md:text-base font-mono uppercase tracking-[0.5em] text-gray-400 mb-8">
                            {t('hero.subtitle')}
                        </h2>
                        <img src={logo} alt="FL360" className="w-64 md:w-96 mb-8 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]" />
                    </motion.div>

                    <motion.p
                        style={{ y: yText }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="text-lg md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
                    >
                        {t('hero.description')} <br />
                        <span className="text-white">{t('hero.tagline')}</span>
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-col md:flex-row gap-6 justify-center items-center"
                    >
                        <Link to="/contact" className="group relative px-8 py-4 bg-white text-black font-bold uppercase tracking-widest overflow-hidden">
                            <span className="relative z-10 flex items-center gap-2 group-hover:gap-4 transition-all">
                                {t('hero.primary_cta')} <ArrowRight size={18} />
                            </span>
                            <div className="absolute inset-0 bg-gray-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                        </Link>
                        <Link to="/services" className="px-8 py-4 border border-white/20 text-white uppercase tracking-widest hover:border-white transition-colors">
                            {t('hero.secondary_cta')}
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/30"
                >
                    <ChevronDown size={32} />
                </motion.div>
            </section>

            {/* Partners Marquee */}
            <PartnersMarquee />

            {/* Services Preview - Dark Gray Grid */}
            <section className="py-32 bg-zinc-950 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">{t('home.services.title')}</h2>
                            <div className="h-1 w-20 bg-white"></div>
                        </div>
                        <p className="text-gray-400 max-w-md text-right mt-6 md:mt-0 font-light">
                            {t('home.services.subtitle')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Shield, title: t('home.services.cards.security.title'), desc: t('home.services.cards.security.desc') },
                            { icon: Clock, title: t('home.services.cards.timing.title'), desc: t('home.services.cards.timing.desc') },
                            { icon: Award, title: t('home.services.cards.quality.title'), desc: t('home.services.cards.quality.desc') }
                        ].map((service, idx) => (
                            <div key={idx} className="group p-10 bg-black/50 border border-white/10 hover:border-white/50 transition-all duration-500 hover:-translate-y-2">
                                <service.icon className="w-12 h-12 text-white mb-8 opacity-50 group-hover:opacity-100 transition-opacity" />
                                <h3 className="text-2xl font-bold mb-4 text-white uppercase tracking-wider">{service.title}</h3>
                                <p className="text-gray-400 font-light leading-relaxed">{service.desc}</p>
                                <div className="mt-8 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 text-white text-sm font-mono flex items-center gap-2">
                                    {t('home.services.more')} <ArrowRight size={14} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Notre ADN - Premium Cards */}
            <section className="py-32 bg-zinc-950 border-t border-white/5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-24 tracking-tight uppercase">
                        {t('home.dna.title')}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: Plane,
                                badge: CheckCircle,
                                title: t('home.dna.cards.navigability.title'),
                                desc: t('home.dna.cards.navigability.desc')
                            },
                            {
                                icon: Hexagon,
                                title: t('home.dna.cards.camo.title'),
                                desc: t('home.dna.cards.camo.desc')
                            },
                            {
                                icon: FileBadge,
                                title: t('home.dna.cards.spo.title'),
                                desc: t('home.dna.cards.spo.desc')
                            },
                            {
                                icon: FileCheck,
                                title: t('home.dna.cards.ato.title'),
                                desc: t('home.dna.cards.ato.desc')
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="group relative bg-black border border-white/10 p-8 hover:border-white/30 transition-all duration-500 rounded-sm">
                                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="relative z-10 flex flex-col items-center text-center h-full">
                                    <div className="mb-8 relative">
                                        <div className="w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-500">
                                            <item.icon className="w-8 h-8 text-white" />
                                        </div>
                                        {item.badge && (
                                            <item.badge className="w-6 h-6 text-white absolute -bottom-1 -right-1 bg-black rounded-full border border-black" fill="white" stroke="black" />
                                        )}
                                    </div>

                                    <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider min-h-[3.5rem] flex items-center justify-center">
                                        {item.title}
                                    </h3>

                                    <p className="text-sm text-gray-400 font-light leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials - Stark Black */}
            <section className="py-32 bg-black relative">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800/20 via-black to-black"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-center text-gray-500 mb-24">{t('home.testimonials.title')}</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        {[
                            { text: t('home.testimonials.review1.text'), author: t('home.testimonials.review1.author'), role: t('home.testimonials.review1.role') },
                            { text: t('home.testimonials.review2.text'), author: t('home.testimonials.review2.author'), role: t('home.testimonials.review2.role') }
                        ].map((t, idx) => (
                            <div key={idx} className="relative pl-8 border-l border-white/20">
                                <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-white rounded-full"></div>
                                <p className="text-2xl md:text-3xl text-white font-light italic mb-8 leading-relaxed">"{t.text}"</p>
                                <div>
                                    <div className="font-bold text-white tracking-widest text-sm">{t.author}</div>
                                    <div className="text-xs font-mono text-gray-500 mt-1">{t.role}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA - White Section for Contrast */}
            <section className="py-32 bg-white text-black">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8">{t('home.cta.title')}</h2>
                    <p className="text-xl text-gray-600 mb-12 max-w-xl mx-auto font-light">
                        {t('home.cta.subtitle')}
                    </p>
                    <Link to="/contact" className="inline-block px-12 py-5 bg-black text-white text-lg font-bold uppercase tracking-widest hover:bg-gray-900 transition-colors shadow-2xl">
                        {t('home.cta.button')}
                    </Link>
                </div>
            </section>
        </PageTransition>
    );
};

export default Home;
