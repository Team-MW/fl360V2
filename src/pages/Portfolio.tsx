import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/PageTransition';

const Portfolio = () => (
    <PageTransition>
        <Helmet><title>Portfolio - fl360</title></Helmet>
        <div className="pt-32 pb-20 bg-black min-h-screen">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-end mb-16">
                    <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter">PORTFOLIO</h1>
                    <p className="text-gray-400 font-mono text-sm hidden md:block">/// PROJETS RÉCENTS</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="group relative aspect-[4/3] bg-zinc-900 border border-white/10 overflow-hidden cursor-pointer">
                            <div className="absolute inset-0 bg-zinc-800 group-hover:bg-zinc-700 transition-colors duration-500"></div>
                            {/* Placeholder for images */}
                            <div className="absolute inset-0 flex items-center justify-center text-zinc-600 font-mono text-xs uppercase tracking-widest">
                                Image Projet {item}
                            </div>

                            <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-xs font-mono text-white mb-2">CATÉGORIE</span>
                                <h3 className="text-2xl font-bold text-white">Nom du Projet {item}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </PageTransition>
);

export default Portfolio;
