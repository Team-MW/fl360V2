import logo from '../assets/logo360.webp';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black text-white border-t border-white/10 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    {/* Brand Info */}
                    <div className="space-y-6 text-center md:text-left lg:col-span-1">
                        <div className="flex justify-center md:justify-start">
                            <img src={logo} alt="fl360 Logo" className="w-[100px] h-auto grayscale brightness-200" />
                        </div>
                        <p className="text-gray-400 text-sm font-light leading-relaxed">
                            Excellence aéronautique et innovation au service de vos vols.
                        </p>
                        <div className="flex gap-3 justify-center md:justify-start">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:bg-violet-600 hover:border-violet-600 transition-all group">
                                    <Icon size={16} className="text-gray-400 group-hover:text-white transition-colors" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation - Transport */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Transport</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/jets-prives" className="text-gray-400 text-sm hover:text-violet-400 transition-colors">
                                    Jets Privés
                                </Link>
                            </li>
                            <li>
                                <Link to="/helicopteres" className="text-gray-400 text-sm hover:text-violet-400 transition-colors">
                                    Hélicoptères
                                </Link>
                            </li>
                            <li>
                                <Link to="/avions-affaires" className="text-gray-400 text-sm hover:text-violet-400 transition-colors">
                                    Avions d'Affaires
                                </Link>
                            </li>
                            <li>
                                <Link to="/avions-taxi" className="text-gray-400 text-sm hover:text-violet-400 transition-colors">
                                    Avions Taxi
                                </Link>
                            </li>
                            <li>
                                <Link to="/hand-carry" className="text-gray-400 text-sm hover:text-violet-400 transition-colors">
                                    Hand Carry
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Navigation - Services */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Services</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/formation" className="text-gray-400 text-sm hover:text-violet-400 transition-colors">
                                    Formation
                                </Link>
                            </li>
                            <li>
                                <Link to="/cao-camo" className="text-gray-400 text-sm hover:text-violet-400 transition-colors">
                                    CAO / CAMO
                                </Link>
                            </li>
                            <li>
                                <Link to="/cap-list" className="text-gray-400 text-sm hover:text-violet-400 transition-colors">
                                    CAP LIST
                                </Link>
                            </li>
                            <li>
                                <Link to="/mro" className="text-gray-400 text-sm hover:text-violet-400 transition-colors">
                                    MRO
                                </Link>
                            </li>
                            <li>
                                <Link to="/flotte-integration" className="text-gray-400 text-sm hover:text-violet-400 transition-colors">
                                    Flotte Intégration
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Navigation - Company */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Entreprise</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/" className="text-gray-400 text-sm hover:text-violet-400 transition-colors">
                                    Accueil
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-gray-400 text-sm hover:text-violet-400 transition-colors">
                                    Nos Services
                                </Link>
                            </li>
                            <li>
                                <Link to="/portfolio" className="text-gray-400 text-sm hover:text-violet-400 transition-colors">
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-400 text-sm hover:text-violet-400 transition-colors">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link to="/mentions-legales" className="text-gray-400 text-sm hover:text-violet-400 transition-colors">
                                    Mentions Légales
                                </Link>
                            </li>
                            <li>
                                <Link to="/politique-confidentialite" className="text-gray-400 text-sm hover:text-violet-400 transition-colors">
                                    Confidentialité
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Contact</h4>
                        <ul className="space-y-4">
                            <li>
                                <div className="flex items-start gap-3">
                                    <Phone size={18} className="text-violet-400 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Téléphone</p>
                                        <a href="tel:+34617788820" className="text-gray-300 text-sm hover:text-violet-400 transition-colors">
                                            +34 61 77 888 20
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-start gap-3">
                                    <Mail size={18} className="text-violet-400 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Email</p>
                                        <a href="mailto:nav@fl360aviation.com" className="text-gray-300 text-sm hover:text-violet-400 transition-colors break-all">
                                            nav@fl360aviation.com
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>

            <div className="container mx-auto px-6 border-t border-white/5 pt-8 mt-4">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 text-center md:text-left">
                    <p className="mb-4 md:mb-0">
                        © {currentYear} FL360 Aviation Systems. Tous droits réservés.
                    </p>
                    <a href="https://microdidact.com/" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition-colors">
                        Développé par Microdidact
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
