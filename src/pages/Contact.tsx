import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/PageTransition';
import { ArrowRight } from 'lucide-react';

const Contact = () => (
    <PageTransition>
        <Helmet><title>Contact - fl360</title></Helmet>
        <div className="min-h-screen bg-black pt-32 pb-20 flex flex-col justify-center">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20">
                <div>
                    <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter mb-8">CONTACT</h1>
                    <p className="text-xl text-gray-400 font-light mb-12">
                        Prêt à repousser les limites ? <br />
                        Discutons de votre prochain vol.
                    </p>

                    <div className="space-y-8 font-mono text-sm text-gray-500">
                        <div>
                            <span className="block text-xs uppercase tracking-widest mb-2 text-white/50">Email</span>
                            <a href="mailto:contact@fl360.com" className="text-white hover:underline">contact@fl360.com</a>
                        </div>
                        <div>
                            <span className="block text-xs uppercase tracking-widest mb-2 text-white/50">Téléphone</span>
                            <span className="text-white">+33 1 23 45 67 89</span>
                        </div>
                    </div>
                </div>

                <div className="bg-zinc-950 p-10 border border-white/10 relative">
                    <div className="absolute -top-1 -right-1 w-4 h-4 border-t border-r border-white"></div>
                    <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b border-l border-white"></div>

                    <form className="space-y-8">
                        <div className="space-y-2">
                            <label className="text-xs font-mono text-gray-500 uppercase tracking-widest">Nom</label>
                            <input type="text" className="w-full bg-black border-b border-white/20 px-0 py-3 text-white focus:border-white outline-none transition-colors" placeholder="VOTRE NOM" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-mono text-gray-500 uppercase tracking-widest">Email</label>
                            <input type="email" className="w-full bg-black border-b border-white/20 px-0 py-3 text-white focus:border-white outline-none transition-colors" placeholder="VOTRE EMAIL" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-mono text-gray-500 uppercase tracking-widest">Message</label>
                            <textarea className="w-full bg-black border-b border-white/20 px-0 py-3 text-white focus:border-white outline-none h-32 resize-none" placeholder="VOTRE MESSAGE..."></textarea>
                        </div>
                        <button type="submit" className="w-full bg-white text-black py-4 font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 group">
                            Envoyer <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </PageTransition>
);

export default Contact;
