import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/PageTransition';
import { ArrowRight, Shield, Clock, Award, ChevronDown } from 'lucide-react';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/logo360.webp';

import PartnersMarquee from '../components/PartnersMarquee';

const Home = () => {
    return (
        <PageTransition>
            <Helmet>
                <title>fl360 - Le Futur de l'Aviation</title>
                <meta name="description" content="Services d'aviation ultra-modernes." />
            </Helmet>

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
                {/* ... existing hero code ... */}
                {/* Background Grid Animation */}
                <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-[0.05]"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50"></div>

                {/* Abstract Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white opacity-[0.03] blur-[120px] rounded-full"></div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="flex flex-col items-center"
                    >
                        <h2 className="text-sm md:text-base font-mono uppercase tracking-[0.5em] text-gray-400 mb-8">
                            Aviation Systems
                        </h2>
                        <img src={logo} alt="FL360" className="w-64 md:w-96 mb-8 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]" />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="text-lg md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
                    >
                        Redéfinir les standards de l'altitude. <br />
                        <span className="text-white">Sécurité. Innovation. Silence.</span>
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-col md:flex-row gap-6 justify-center items-center"
                    >
                        <Link to="/contact" className="group relative px-8 py-4 bg-white text-black font-bold uppercase tracking-widest overflow-hidden">
                            <span className="relative z-10 flex items-center gap-2 group-hover:gap-4 transition-all">
                                Demander un devis <ArrowRight size={18} />
                            </span>
                            <div className="absolute inset-0 bg-gray-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                        </Link>
                        <Link to="/services" className="px-8 py-4 border border-white/20 text-white uppercase tracking-widest hover:border-white transition-colors">
                            Découvrir nos services
                        </Link>
                    </motion.div>
                </div>

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
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Nos Expertises</h2>
                            <div className="h-1 w-20 bg-white"></div>
                        </div>
                        <p className="text-gray-400 max-w-md text-right mt-6 md:mt-0 font-light">
                            Des solutions d'ingénierie et de service conçues pour l'avenir de l'aéronautique.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Shield, title: "Sécurité Avancée", desc: "Protocoles prédictifs basés sur l'IA et audits en temps réel." },
                            { icon: Clock, title: "Précision Temporelle", desc: "Synchronisation absolue pour une efficacité opérationnelle maximale." },
                            { icon: Award, title: "Excellence Certifiée", desc: "Standards surpassant les normes internationales les plus strictes." }
                        ].map((service, idx) => (
                            <div key={idx} className="group p-10 bg-black/50 border border-white/10 hover:border-white/50 transition-all duration-500 hover:-translate-y-2">
                                <service.icon className="w-12 h-12 text-white mb-8 opacity-50 group-hover:opacity-100 transition-opacity" />
                                <h3 className="text-2xl font-bold mb-4 text-white uppercase tracking-wider">{service.title}</h3>
                                <p className="text-gray-400 font-light leading-relaxed">{service.desc}</p>
                                <div className="mt-8 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 text-white text-sm font-mono flex items-center gap-2">
                                    EN SAVOIR PLUS <ArrowRight size={14} />
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
                    <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-center text-gray-500 mb-24">Témoignages Clients</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        {[
                            { text: "Une rigueur absolue. FL360 incarne la perfection technique que nous recherchions.", author: "JEAN DUPONT", role: "CEO, TechCorp" },
                            { text: "L'approche minimaliste et efficace de leurs opérations est tout simplement révolutionnaire.", author: "MARIE MARTIN", role: "Director, Luxury Travel" }
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
                    <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8">READY?</h2>
                    <p className="text-xl text-gray-600 mb-12 max-w-xl mx-auto font-light">
                        Commencez votre voyage vers l'excellence. N'attendez plus.
                    </p>
                    <Link to="/contact" className="inline-block px-12 py-5 bg-black text-white text-lg font-bold uppercase tracking-widest hover:bg-gray-900 transition-colors shadow-2xl">
                        Initialiser le contact
                    </Link>
                </div>
            </section>
        </PageTransition>
    );
};

export default Home;
