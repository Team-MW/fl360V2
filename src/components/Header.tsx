import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, User, ChevronDown, Plane } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo360.webp';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

interface HeaderProps {
    isMobileMenuOpen: boolean;
    setIsMobileMenuOpen: (isOpen: boolean) => void;
}

const Header = ({ isMobileMenuOpen, setIsMobileMenuOpen }: HeaderProps) => {
    // const [isOpen, setIsOpen] = useState(false); // Validated removal
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const { t } = useTranslation();

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: t('header.nav.home'), path: '/' },
        {
            name: t('header.nav.transport'),
            path: '/transport-page',
            children: [
                { name: t('header.nav.submenu.private_jets'), path: '/jets-prives' },
                { name: t('header.nav.submenu.helicopters'), path: '/helicopteres' },
                { name: t('header.nav.submenu.business_jets'), path: '/avions-affaires' },
                { name: t('header.nav.submenu.taxi_planes'), path: '/avions-taxi' },
                { name: t('header.nav.submenu.hand_carry'), path: '/hand-carry' }
            ]
        },
        {
            name: t('header.nav.formation'),
            path: '/formation-qualification',
            children: [
                { name: t('header.nav.submenu.pilot_training'), path: '/formation' },
                { name: t('header.nav.submenu.cao_camo'), path: '/cao-camo' },
                { name: t('header.nav.submenu.cap_list'), path: '/cap-list' },
                { name: t('header.nav.submenu.fleet_integration'), path: '/flotte-integration' }
            ]
        },
        {
            name: t('header.nav.maintenance'),
            path: '/entretiens',
            children: [
                { name: t('header.nav.submenu.mro'), path: '/mro' },
                { name: t('header.nav.submenu.fleet_integration'), path: '/flotte-integration' }
            ]
        },
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
                        <div key={link.name} className="relative group">
                            {link.children ? (
                                <>
                                    <Link
                                        to={link.path}
                                        className="flex items-center gap-1 text-sm uppercase tracking-widest font-medium text-gray-400 hover:text-white transition-colors py-4"
                                    >
                                        {link.name} <ChevronDown size={14} />
                                    </Link>
                                    <div className="absolute top-full left-0 w-80 bg-zinc-950 border border-white/10 rounded-xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-xl z-50">
                                        {link.children.map(child => (
                                            <Link key={child.path} to={child.path} className="block py-3 px-4 text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors border-b border-white/5 last:border-0">
                                                {child.name}
                                            </Link>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <Link
                                    to={link.path}
                                    className="relative text-sm uppercase tracking-widest font-medium text-gray-400 hover:text-white transition-colors py-4"
                                >
                                    {link.name}
                                    <span className={`absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`}></span>
                                </Link>
                            )}
                        </div>
                    ))}
                    <div className="flex items-center gap-6">
                        <Link
                            to="/contact"
                            className="group border border-white/20 hover:border-white text-white px-6 py-2 rounded-full text-sm font-semibold transition-all hover:bg-white hover:text-black flex items-center gap-2"
                        >
                            {t('header.nav.quote')}
                            <Plane size={14} className="transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:rotate-12" />
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
                        <LanguageSwitcher />
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
                        {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                    </button>
                </div>

                {/* Mobile Side Panel */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={toggleMenu}
                                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                            />

                            {/* Slide-in Panel */}
                            <motion.div
                                initial={{ x: '100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '100%' }}
                                transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                                className="fixed inset-y-0 right-0 w-full md:w-[500px] bg-zinc-950 border-l border-white/10 z-[60] md:hidden flex flex-col p-8 sm:p-12 overflow-y-auto"
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-600 to-indigo-600"></div>

                                <div className="flex justify-between items-center mb-16">
                                    <span className="text-sm font-bold font-mono tracking-widest text-violet-400">MENU</span>
                                    <button onClick={toggleMenu} className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
                                        <X className="w-8 h-8" />
                                    </button>
                                </div>

                                <nav className="flex flex-col gap-6">
                                    {links.map((link, idx) => (
                                        <div key={link.name}>
                                            {link.children ? (
                                                <div className="space-y-4">
                                                    <Link
                                                        to={link.path}
                                                        onClick={toggleMenu}
                                                        className="text-2xl font-thin tracking-wide text-white hover:text-violet-400 flex items-center gap-4 transition-colors"
                                                    >
                                                        <span className="text-xs font-mono text-gray-600">0{idx + 1}</span>
                                                        {link.name}
                                                    </Link>
                                                    <div className="pl-10 flex flex-col gap-4 border-l border-white/10 ml-2">
                                                        {link.children.map(child => (
                                                            <Link
                                                                key={child.path}
                                                                to={child.path}
                                                                onClick={toggleMenu}
                                                                className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors py-2"
                                                            >
                                                                {child.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            ) : (
                                                <Link
                                                    to={link.path}
                                                    onClick={toggleMenu}
                                                    className="text-2xl font-thin tracking-wide text-gray-400 hover:text-white hover:pl-4 transition-all block"
                                                >
                                                    <span className="text-xs font-mono text-gray-600 mr-4">0{idx + 1}</span>
                                                    {link.name}
                                                </Link>
                                            )}
                                        </div>
                                    ))}
                                    <a
                                        href="https://gestion.progdigital.fr/login"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={toggleMenu}
                                        className="text-2xl font-thin tracking-wide text-gray-400 hover:text-white hover:pl-4 transition-all flex items-center gap-4"
                                    >
                                        <span className="text-xs font-mono text-gray-600 mr-4">07</span>
                                        {t('header.nav.submenu.client_access')} <User size={20} />
                                    </a>
                                    <Link
                                        to="/contact"
                                        onClick={toggleMenu}
                                        className="mt-8 mb-4 w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-center py-5 rounded-xl font-bold uppercase tracking-widest hover:from-violet-500 hover:to-indigo-500 transition-all shadow-lg hover:shadow-indigo-500/25 flex items-center justify-center gap-3"
                                    >
                                        {t('header.mobile.quote')} <ArrowRight size={18} />
                                    </Link>
                                </nav>

                                <div className="mt-auto pt-4 text-gray-600 text-xs font-mono border-t border-white/5">
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
