import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/PageTransition';
import { ArrowUpRight } from 'lucide-react';

const Services = () => (
    <PageTransition>
        <Helmet><title>Nos Services - fl360</title></Helmet>
        <div className="pt-32 pb-20 bg-black min-h-screen">
            <div className="container mx-auto px-6 font-light">
                <h1 className="text-6xl md:text-8xl font-bold mb-16 text-white tracking-tighter">SERVICES</h1>

                <div className="grid grid-cols-1 gap-px bg-white/10 border border-white/10">
                    {[
                        { id: "01", title: "Gestion Aérienne", desc: "Optimisation de flotte et logistique de vol avancée." },
                        { id: "02", title: "Maintenance", desc: "Protocoles prédictifs et ingénierie de précision." },
                        { id: "03", title: "Consulting", desc: "Stratégie d'acquisition et analyse de marché." },
                        { id: "04", title: "Formation", desc: "Programmes d'excellence pour pilotes et équipages." }
                    ].map((service) => (
                        <div key={service.id} className="bg-black p-12 hover:bg-zinc-950 transition-colors group relative cursor-pointer">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                <div className="flex items-start gap-8">
                                    <span className="text-sm font-mono text-gray-500 pt-2">{service.id}</span>
                                    <div>
                                        <h2 className="text-3xl md:text-4xl text-white font-bold mb-2 group-hover:text-gray-200 transition-colors uppercase tracking-wide">{service.title}</h2>
                                        <p className="text-gray-400 max-w-xl">{service.desc}</p>
                                    </div>
                                </div>
                                <ArrowUpRight className="text-white opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-2 group-hover:-translate-y-2" size={32} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </PageTransition>
);

export default Services;
