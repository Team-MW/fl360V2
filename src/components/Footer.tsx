import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black text-white border-t border-white/10 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
                    <div className="space-y-6">
                        <h3 className="text-3xl font-bold font-mono tracking-tighter">fl360</h3>
                        <p className="text-gray-400 font-light leading-relaxed whitespace-pre-line">
                            {t('footer.tagline')}
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-sm font-mono uppercase tracking-widest text-gray-500 mb-6">{t('footer.links')}</h4>
                        <ul className="space-y-4">
                            {[
                                { name: t('header.nav.home'), path: '/' },
                                { name: t('header.nav.services'), path: '/services' },
                                { name: t('header.nav.portfolio'), path: '/portfolio' },
                                { name: t('header.nav.contact'), path: '/contact' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <a href={item.path} className="text-gray-300 hover:text-white flex items-center gap-2 group transition-colors">
                                        <span className="w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-sm font-mono uppercase tracking-widest text-gray-500 mb-6">{t('footer.contact')}</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4 text-gray-300">
                                <MapPin size={20} className="mt-1 flex-shrink-0" />
                                <span>123 Avenue de l'Avenir,<br />75000 Paris, France</span>
                            </li>
                            <li className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors cursor-pointer">
                                <Phone size={20} />
                                <span>+33 1 00 00 00 00</span>
                            </li>
                            <li className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors cursor-pointer">
                                <Mail size={20} />
                                <span>contact@fl360.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-sm font-mono uppercase tracking-widest text-gray-500 mb-6">{t('footer.newsletter.title')}</h4>
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder={t('footer.newsletter.placeholder')}
                                    className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-gray-600 focus:border-white outline-none transition-colors uppercase font-mono text-sm"
                                />
                                <button type="submit" className="absolute right-0 top-3 text-gray-400 hover:text-white">
                                    <ArrowUpRight size={20} />
                                </button>
                            </div>
                            <p className="text-xs text-gray-600">{t('footer.newsletter.sub')}</p>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-mono uppercase tracking-wider">
                    <p>{t('footer.rights', { year: currentYear })}</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">{t('footer.privacy')}</a>
                        <a href="#" className="hover:text-white transition-colors">{t('footer.legal')}</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
