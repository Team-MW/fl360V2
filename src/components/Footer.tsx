import logo from '../assets/logo360.webp';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black text-white border-t border-white/10 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 justify-items-center text-center md:text-left">
                    {/* Brand Info */}
                    <div className="space-y-6 text-center md:text-left">
                        <div className="flex justify-center md:justify-start">
                            <img src={logo} alt="fl360 Logo" className="w-[120px] h-auto grayscale brightness-200" />
                        </div>
                        <p className="text-white font-light leading-relaxed whitespace-pre-line mx-auto md:mx-0 max-w-sm">
                            {t('footer.tagline')}
                        </p>
                        <div className="flex gap-4 justify-center md:justify-start">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all group">
                                    <Icon size={18} className="text-white group-hover:text-black transition-colors" />
                                </a>
                            ))}
                        </div>
                    </div>



                    {/* Contact Info */}
                    <div>
                        <h4 className="text-sm font-mono uppercase tracking-widest text-white mb-6">{t('footer.contact')}</h4>
                        <ul className="space-y-4">

                            <li className="flex items-center gap-4 text-white hover:text-gray-300 transition-colors cursor-pointer">
                                <Phone size={20} />
                                <span>+33 6 82 27 49 16</span>
                            </li>
                            <li className="flex items-center gap-4 text-white hover:text-gray-300 transition-colors cursor-pointer">
                                <Mail size={20} />
                                <span>nav@fl360aviation.com</span>
                            </li>
                            <li className="flex items-center gap-4 text-white hover:text-gray-300 transition-colors cursor-pointer">
                                <Phone size={20} />
                                <span>+33 6 28 98 48 41</span>
                            </li>
                            <li className="flex items-center gap-4 text-white hover:text-gray-300 transition-colors cursor-pointer">
                                <Mail size={20} />
                                <span>admin@fl360aviation.com</span>
                            </li>
                        </ul>
                    </div>


                </div>

            </div>

            <div className="container mx-auto px-6 border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center text-xs text-white font-mono uppercase tracking-wider text-center md:text-left">
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <p>{t('footer.rights', { year: currentYear })}</p>
                    <span className="hidden md:block text-white">|</span>
                    <a href="https://microdidact.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        Réalisé par Microdidact
                    </a>
                </div>
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-6 md:mt-0">
                    <Link to="/mentions-legales" className="hover:text-white transition-colors">{t('footer.privacy')}</Link>
                    <Link to="/mentions-legales" className="hover:text-white transition-colors">{t('footer.legal')}</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
