import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/PageTransition';
import { ArrowRight, ChevronDown, Plane, Hexagon, FileBadge, FileCheck, CheckCircle } from 'lucide-react';

import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import logo from '../assets/logo360.webp';
import acceuil from '../assets/acceuil.jpg.avif';

import PartnersMarquee from '../components/PartnersMarquee';
import { useTranslation } from 'react-i18next';
import Starfield from '../components/Starfield';

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
                {/* Background Animation */}
                <div className="absolute inset-0 z-0">
                    <img src={acceuil} alt="" className="w-full h-full object-cover opacity-90 select-none" />
                    <div className="absolute inset-0 bg-black/10"></div>
                </div>
                <Starfield />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 pointer-events-none"></div>

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
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600 blur-[120px] rounded-full"
                ></motion.div>

                <motion.div style={{ opacity: opacityHero }} className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        style={{ y: yLogo }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="flex flex-col items-center"
                    >
                        <h2 className="text-sm md:text-base font-mono uppercase tracking-[0.5em] text-violet-400 mb-8">
                            {t('hero.subtitle')}
                        </h2>
                        <img src={logo} alt="FL360" className="w-64 md:w-96 mb-8 drop-shadow-[0_0_30px_rgba(139,92,246,0.3)]" />
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
                        <Link to="/contact" className="group relative px-8 py-4 bg-white text-black font-bold uppercase tracking-widest overflow-hidden hover:bg-violet-50 transition-colors">
                            <span className="relative z-10 flex items-center gap-2 group-hover:gap-4 transition-all group-hover:text-violet-700">
                                {t('hero.primary_cta')}
                                <Plane size={18} className="transition-all duration-500 group-hover:-translate-y-2 group-hover:translate-x-2 group-hover:rotate-12" />
                            </span>
                            <div className="absolute inset-0 bg-gray-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                        </Link>
                        <Link to="/services" className="px-8 py-4 border border-white/20 text-white uppercase tracking-widest hover:border-violet-500 hover:text-violet-400 transition-colors">
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

            {/* Services Preview - Cloud White */}
            <section className="py-32 bg-white text-black border-t border-gray-100">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">
                                {t('home.services.title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">.</span>
                            </h2>
                            <div className="h-1 w-20 bg-gradient-to-r from-violet-600 to-indigo-600"></div>
                        </div>
                        <p className="text-gray-600 max-w-md text-right mt-6 md:mt-0 font-light">
                            {t('home.services.subtitle')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Plane, title: t('home.services.cards.transport.title'), desc: t('home.services.cards.transport.desc') },
                            { icon: FileCheck, title: t('home.services.cards.training.title'), desc: t('home.services.cards.training.desc') },
                            { icon: Hexagon, title: t('home.services.cards.maintenance.title'), desc: t('home.services.cards.maintenance.desc') }
                        ].map((service, idx) => (
                            <div key={idx} className="group p-10 bg-gray-50 border border-gray-200 hover:border-violet-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-violet-500/10">
                                <service.icon className="w-12 h-12 text-black mb-8 opacity-70 group-hover:text-violet-600 group-hover:opacity-100 transition-all" />
                                <h3 className="text-2xl font-bold mb-4 text-black uppercase tracking-wider group-hover:text-violet-900 transition-colors">{service.title}</h3>
                                <p className="text-gray-600 font-light leading-relaxed">{service.desc}</p>
                                <div className="mt-8 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 text-violet-600 text-sm font-mono flex items-center gap-2 font-bold uppercase tracking-widest">
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
                            <div key={idx} className="group relative bg-black border border-white/10 p-8 hover:border-violet-500/50 transition-all duration-500 rounded-sm">
                                <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 to-indigo-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="relative z-10 flex flex-col items-center text-center h-full">
                                    <div className="mb-8 relative">
                                        <div className="w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center border border-white/10 group-hover:scale-110 group-hover:border-violet-500/50 transition-all duration-500 group-hover:bg-violet-900/20">
                                            <item.icon className="w-8 h-8 text-white group-hover:text-violet-400 transition-colors" />
                                        </div>
                                        {item.badge && (
                                            <item.badge className="w-6 h-6 text-violet-400 absolute -bottom-1 -right-1 bg-black rounded-full border border-black" fill="currentColor" stroke="black" />
                                        )}
                                    </div>

                                    <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider min-h-[3.5rem] flex items-center justify-center group-hover:text-violet-300 transition-colors">
                                        {item.title}
                                    </h3>

                                    <p className="text-sm text-gray-400 font-light leading-relaxed group-hover:text-gray-300 transition-colors">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Nos Avions Section */}
            {/* Nos Avions Section - Redesigned "Truc de Fou" */}
            <section className="py-32 bg-black text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

                {/* Glowing Orbs */}
                <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-violet-600/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
                <div className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-24"
                    >
                        <h2 className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 mb-6 tracking-tighter uppercase relative inline-block">
                            Nos Avions
                            <span className="absolute -top-6 -right-12 text-lg text-violet-500 font-mono tracking-widest hidden md:block">FLEET.01</span>
                        </h2>
                        <div className="h-1 w-24 mx-auto bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                        {/* Extra EA400 */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="group relative"
                        >
                            <div className="absolute -inset-4 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-75 blur-xl transition-opacity duration-700"></div>
                            <div className="relative overflow-hidden rounded-xl bg-zinc-900 border border-white/10 aspect-[4/3] group-hover:scale-[1.02] transition-transform duration-500 ease-out shadow-2xl">
                                <img src="/extra2.avif" alt="Extra EA400" className="object-cover w-full h-full transform scale-100 group-hover:scale-110 transition-transform duration-1000" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>

                                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="text-violet-400 font-mono text-xs tracking-[0.2em] mb-2 uppercase">Performance</div>
                                    <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4">Extra EA400</h3>
                                    <p className="text-gray-300 font-light leading-relaxed max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        L'alliance parfaite entre aérodynamisme et puissance. Une expérience de vol monomoteur sans précédent pour les passionnés exigeants.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Pilatus PC6 */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="group relative lg:mt-32"
                        >
                            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-75 blur-xl transition-opacity duration-700"></div>
                            <div className="relative overflow-hidden rounded-xl bg-zinc-900 border border-white/10 aspect-[4/3] group-hover:scale-[1.02] transition-transform duration-500 ease-out shadow-2xl">
                                <img src="/pilatus6.avif" alt="Pilatus PC6 B2H4" className="object-cover w-full h-full transform scale-100 group-hover:scale-110 transition-transform duration-1000" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>

                                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="text-indigo-400 font-mono text-xs tracking-[0.2em] mb-2 uppercase">Polyvalence</div>
                                    <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4">Pilatus PC6</h3>
                                    <p className="text-gray-300 font-light leading-relaxed max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        Le légendaire "Turbo Porter". Robustesse inégalée et capacités STOL pour les missions les plus extrêmes à travers le monde.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Testimonials - Draggable Slider */}
            <section className="py-32 bg-white relative border-t border-gray-100 overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-center text-violet-500 mb-24">{t('home.testimonials.title')}</h2>

                    <motion.div
                        className="cursor-grab active:cursor-grabbing"
                    >
                        <motion.div
                            className="flex gap-12"
                            drag="x"
                            dragConstraints={{ right: 0, left: -1000 }} // Adjusted constraints based on content width
                            whileTap={{ cursor: "grabbing" }}
                        >
                            {[
                                { text: t('home.testimonials.review1.text'), author: t('home.testimonials.review1.author'), role: t('home.testimonials.review1.role') },
                                { text: t('home.testimonials.review2.text'), author: t('home.testimonials.review2.author'), role: t('home.testimonials.review2.role') },
                                { text: t('home.testimonials.review3.text'), author: t('home.testimonials.review3.author'), role: t('home.testimonials.review3.role') },
                                { text: t('home.testimonials.review4.text'), author: t('home.testimonials.review4.author'), role: t('home.testimonials.review4.role') },
                                { text: t('home.testimonials.review5.text'), author: t('home.testimonials.review5.author'), role: t('home.testimonials.review5.role') }
                            ].map((t, idx) => (
                                <motion.div
                                    key={idx}
                                    className="min-w-[400px] md:min-w-[600px] relative pl-8 border-l border-black/10 select-none"
                                >
                                    <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-violet-500 rounded-full"></div>
                                    <p className="text-2xl md:text-3xl text-black font-light italic mb-8 leading-relaxed">"{t.text}"</p>
                                    <div>
                                        <div className="font-bold text-black tracking-widest text-sm">{t.author}</div>
                                        <div className="text-xs font-mono text-gray-500 mt-1">{t.role}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    <div className="text-center mt-12 text-gray-400 text-sm font-mono flex items-center justify-center gap-2">
                        <ArrowRight className="w-4 h-4" /> {t('home.testimonials.hint')}
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
                    <Link to="/contact" className="inline-block px-12 py-5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-lg font-bold uppercase tracking-widest hover:from-violet-500 hover:to-indigo-500 transition-all shadow-2xl hover:shadow-indigo-500/30">
                        {t('home.cta.button')}
                    </Link>
                </div>
            </section>
        </PageTransition>
    );
};

export default Home;
