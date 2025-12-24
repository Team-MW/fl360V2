import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Plane } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);

    const links = [
        { name: 'Accueil', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-slate-900">
                    <Plane className="w-8 h-8 text-sky-600 rotate-[-45deg]" />
                    <span>fl360</span>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex gap-8">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-lg font-medium transition-colors hover:text-sky-600 ${location.pathname === link.path ? 'text-sky-600' : 'text-slate-600'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Burger Button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-slate-800 hover:text-sky-600 transition-colors"
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
                                className="fixed inset-0 bg-black/50 z-40 md:hidden"
                            />

                            {/* Slide-in Panel */}
                            <motion.div
                                initial={{ x: '100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '100%' }}
                                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                                className="fixed inset-y-0 right-0 w-64 bg-white shadow-xl z-50 md:hidden flex flex-col p-6"
                            >
                                <div className="flex justify-end mb-8">
                                    <button onClick={toggleMenu} className="text-slate-500 hover:text-sky-600">
                                        <X className="w-8 h-8" />
                                    </button>
                                </div>
                                <nav className="flex flex-col gap-6">
                                    {links.map((link) => (
                                        <Link
                                            key={link.name}
                                            to={link.path}
                                            onClick={toggleMenu}
                                            className={`text-xl font-medium transition-colors hover:text-sky-600 ${location.pathname === link.path ? 'text-sky-600' : 'text-slate-600'
                                                }`}
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                    <Link
                                        to="/contact"
                                        onClick={toggleMenu}
                                        className="mt-4 w-full bg-sky-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-sky-700 transition-colors"
                                    >
                                        Demander un devis
                                    </Link>
                                </nav>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};

export default Header;
