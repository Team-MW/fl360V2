import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo360.webp';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const { t } = useTranslation();

    const toggleMenu = () => setIsOpen(!isOpen);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: t('header.nav.home'), path: '/' },
        { name: t('header.nav.formation'), path: '/formation' },
        { name: 'CAO / CAMO', path: '/cao-camo' },
        { name: 'CAP LIST', path: '/cap-list' },
        { name: 'MRO', path: '/mro' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black border-b border-white/10' : 'bg-transparent'
                }`}
        >
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="relative">
                        <img src={logo} alt="fl360 Logo" className="w-12 h-12 object-contain transition-transform group-hover:scale-105" />
                    </div>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-10">
                    {links.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className="relative text-sm uppercase tracking-widest font-medium text-gray-400 hover:text-white transition-colors group"
                        >
                            {link.name}
                            <span className={`absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`}></span>
                        </Link>
                    ))}
                    <div className="flex items-center gap-6">
                        <LanguageSwitcher />
                        <Link
                            to="/contact"
                            className="border border-white/20 hover:border-white text-white px-6 py-2 rounded-full text-sm font-semibold transition-all hover:bg-white hover:text-black flex items-center gap-2"
                        >
                            {t('header.nav.quote')} <ArrowRight size={14} />
                        </Link>
                        <a
                            href="https://gestion.progdigital.fr/login"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full border border-white/20 hover:border-white hover:bg-white hover:text-black flex items-center justify-center transition-all"
                            title="Accès Clients"
                        >
                            <User size={18} />
                        </a>
                    </div>
                </nav>

                {/* Mobile Burger Button */}
                <div className="md:hidden flex items-center gap-4">
                    <LanguageSwitcher />
                    <button
                        onClick={toggleMenu}
                        className="text-white hover:text-gray-300 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                    </button>
                </div>

                {/* Mobile Side Panel */}
                <AnimatePresence>
                    {isOpen && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={toggleMenu}
                                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
                            />

                            {/* Slide-in Panel */}
                            <motion.div
                                initial={{ x: '100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '100%' }}
                                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                                className="fixed inset-y-0 right-0 w-full sm:w-80 bg-black border-l border-white/10 z-50 md:hidden flex flex-col p-8"
                            >
                                <div className="flex justify-between items-center mb-12">
                                    <span className="text-xl font-bold font-mono">{t('header.mobile.menu')}</span>
                                    <button onClick={toggleMenu} className="text-gray-400 hover:text-white">
                                        <X className="w-8 h-8" />
                                    </button>
                                </div>

                                <nav className="flex flex-col gap-8">
                                    {links.map((link, idx) => (
                                        <Link
                                            key={link.path}
                                            to={link.path}
                                            onClick={toggleMenu}
                                            className="text-3xl font-thin tracking-wide text-gray-400 hover:text-white hover:pl-4 transition-all"
                                        >
                                            <span className="text-xs font-mono text-gray-600 mr-4">0{idx + 1}</span>
                                            {link.name}
                                        </Link>
                                    ))}
                                    <a
                                        href="https://gestion.progdigital.fr/login"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={toggleMenu}
                                        className="text-3xl font-thin tracking-wide text-gray-400 hover:text-white hover:pl-4 transition-all flex items-center gap-4"
                                    >
                                        <span className="text-xs font-mono text-gray-600 mr-4">06</span>
                                        Accès Clients <User size={24} />
                                    </a>
                                    <Link
                                        to="/contact"
                                        onClick={toggleMenu}
                                        className="mt-8 w-full border border-white text-white text-center py-4 rounded-none uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
                                    >
                                        {t('header.mobile.quote')}
                                    </Link>
                                </nav>

                                <div className="mt-auto text-gray-600 text-xs font-mono">
                                    <p>{t('header.mobile.copyright')}</p>
                                    <p>© 2025</p>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};

export default Header;
