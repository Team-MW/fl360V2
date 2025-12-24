import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';


const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand Info */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <span className="text-sky-500">fl360</span>
                        </h3>
                        <p className="text-slate-400 mb-4">
                            Solutions d'aviation premium pour vos besoins professionnels et personnels.
                            L'excellence à chaque vol.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-sky-500 transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="hover:text-sky-500 transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="hover:text-sky-500 transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="hover:text-sky-500 transition-colors"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Liens Rapides</h4>
                        <ul className="space-y-2 text-slate-400">
                            <li><a href="/" className="hover:text-sky-500 transition-colors">Accueil</a></li>
                            <li><a href="/services" className="hover:text-sky-500 transition-colors">Nos Services</a></li>
                            <li><a href="/portfolio" className="hover:text-sky-500 transition-colors">Portfolio</a></li>
                            <li><a href="/contact" className="hover:text-sky-500 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li className="flex items-center gap-3">
                                <MapPin size={20} className="text-sky-500" />
                                <span>123 Avenue de l'Aviation, Paris</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={20} className="text-sky-500" />
                                <span>+33 1 23 45 67 89</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={20} className="text-sky-500" />
                                <span>contact@fl360.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
                        <p className="text-slate-400 mb-4 text-sm">Inscrivez-vous pour recevoir nos actualités.</p>
                        <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Votre email"
                                className="bg-slate-800 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
                            />
                            <button
                                type="submit"
                                className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded transition-colors font-medium"
                            >
                                S'inscrire
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} fl360. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
