import { Helmet } from 'react-helmet-async';

import PageTransition from '../components/PageTransition';
import { ArrowRight, Star, Shield, Clock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <PageTransition>
            <Helmet>
                <title>fl360 - Excellence en Aviation</title>
                <meta name="description" content="Services d'aviation premium, portfolio et expertise." />
            </Helmet>

            {/* Hero Section - Section 1 (Dark/Image) */}
            <section className="relative h-[90vh] flex items-center justify-center bg-slate-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 opacity-90 z-0"></div>
                {/* Abstract shapes or image could go here */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-30"></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        Voler vers <span className="text-sky-400">l'Excellence</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto">
                        Votre partenaire privilégié pour tous vos projets aéronautiques. Expertise, sécurité et innovation.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link to="/contact" className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2">
                            Demander un devis <ArrowRight size={20} />
                        </Link>
                        <Link to="/services" className="bg-transparent border border-white hover:bg-white hover:text-slate-900 text-white px-8 py-4 rounded-full font-semibold transition-all">
                            Nos Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* Services Preview - Section 2 (Light) */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Nos Expertises</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">Des solutions sur mesure adaptées à vos exigences les plus élevées.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Shield, title: "Sécurité", desc: "Protocoles rigoureux et audits conformes aux standards internationaux." },
                            { icon: Clock, title: "Ponctualité", desc: "Respect absolu des délais pour optimiser votre temps précieux." },
                            { icon: Award, title: "Qualité", desc: "Un service irréprochable et une attention aux moindres détails." }
                        ].map((service, idx) => (
                            <div key={idx} className="p-8 rounded-2xl bg-slate-50 hover:shadow-xl transition-shadow border border-slate-100">
                                <service.icon className="w-12 h-12 text-sky-600 mb-6" />
                                <h3 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h3>
                                <p className="text-slate-600">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 text-center">
                        <Link to="/services" className="text-sky-600 font-semibold hover:text-sky-700 flex items-center justify-center gap-2">
                            Voir tous nos services <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonials - Section 3 (Dark) */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-500 to-transparent opacity-30"></div>
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-16 text-center">Ce que disent nos clients</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {[
                            { text: "Une expérience de vol inégalée. L'équipe de fl360 a su répondre à toutes nos attentes avec professionnalisme.", author: "Jean Dupont, CEO", company: "TechCorp" },
                            { text: "Réactivité et excellence sont les maîtres mots. Je recommande vivement pour tous vos déplacements d'affaires.", author: "Marie Martin, Directrice", company: "Luxury Travel" }
                        ].map((t, idx) => (
                            <div key={idx} className="bg-slate-800/50 p-8 rounded-2xl backdrop-blur-sm border border-slate-700">
                                <div className="flex gap-1 mb-4 text-amber-400">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                                </div>
                                <p className="text-slate-300 italic mb-6">"{t.text}"</p>
                                <div>
                                    <div className="font-bold">{t.author}</div>
                                    <div className="text-sm text-sky-400">{t.company}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA/Contact Preview - Section 4 (Light) */}
            <section className="py-24 bg-sky-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-slate-900 mb-6">Prêt à décoller ?</h2>
                    <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
                        Discutons de votre projet et trouvons ensemble la meilleure solution aérienne.
                    </p>
                    <Link to="/contact" className="inline-block bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        Nous Contacter
                    </Link>
                </div>
            </section>

        </PageTransition>
    );
};

export default Home;
