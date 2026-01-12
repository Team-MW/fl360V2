import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface WhatsAppButtonProps {
    isMobileMenuOpen?: boolean;
}

const WhatsAppButton = ({ isMobileMenuOpen = false }: WhatsAppButtonProps) => {
    const phoneNumber = "+34617788820"; // Updated number per user request
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}`;
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const toggleVisibility = () => {
            // Hide button when near the bottom of the page (footer area)
            const scaffoldHeight = document.body.offsetHeight;
            const scrollPosition = window.scrollY + window.innerHeight;
            const footerThreshold = 400; // Approximate footer height triggering point

            if (scaffoldHeight - scrollPosition < footerThreshold || isMobileMenuOpen) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        // Also run toggle logic when isMobileMenuOpen changes
        toggleVisibility();

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, [isMobileMenuOpen]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0, transition: { duration: 0.2 } }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.5)] flex items-center justify-center hover:bg-[#20ba5a] transition-colors"
                    title="Chat on WhatsApp"
                >
                    <MessageCircle size={32} fill="white" className="text-white" />
                </motion.a>
            )}
        </AnimatePresence>
    );
};

export default WhatsAppButton;
