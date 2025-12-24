import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Plane, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: 'Accueil', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
                }`}
        >
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="relative">
                        <Plane className="w-8 h-8 text-white rotate-[-45deg] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        <div className="absolute inset-0 bg-white/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <span className="text-2xl font-bold font-mono tracking-tighter">fl360</span>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-10">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="relative text-sm uppercase tracking-widest font-medium text-gray-400 hover:text-white transition-colors group"
                        >
                            {link.name}
                            <span className={`absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`}></span>
                        </Link>
                    ))}
                    <Link
                        to="/contact"
                        className="border border-white/20 hover:border-white text-white px-6 py-2 rounded-full text-sm font-semibold transition-all hover:bg-white hover:text-black flex items-center gap-2"
                    >
                        DEMANDER UN DEVIS <ArrowRight size={14} />
                    </Link>
                </nav>

                {/* Mobile Burger Button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-white hover:text-gray-300 transition-colors"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </button>

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
                                    <span className="text-xl font-bold font-mono">MENU</span>
                                    <button onClick={toggleMenu} className="text-gray-400 hover:text-white">
                                        <X className="w-8 h-8" />
                                    </button>
                                </div>

                                <nav className="flex flex-col gap-8">
                                    {links.map((link, idx) => (
                                        <Link
                                            key={link.name}
                                            to={link.path}
                                            onClick={toggleMenu}
                                            className="text-3xl font-thin tracking-wide text-gray-400 hover:text-white hover:pl-4 transition-all"
                                        >
                                            <span className="text-xs font-mono text-gray-600 mr-4">0{idx + 1}</span>
                                            {link.name}
                                        </Link>
                                    ))}
                                    <Link
                                        to="/contact"
                                        onClick={toggleMenu}
                                        className="mt-8 w-full border border-white text-white text-center py-4 rounded-none uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
                                    >
                                        Demander un devis
                                    </Link>
                                </nav>

                                <div className="mt-auto text-gray-600 text-xs font-mono">
                                    <p>FL360 AVIATION SYSTEMS</p>
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
