import { motion } from 'framer-motion';

// Import all partner images
import p1 from '../assets/partner1.webp';
import p2 from '../assets/partner2.webp';
import p3 from '../assets/partner3.webp';
import p4 from '../assets/partner4.webp';
import p5 from '../assets/partner5.webp';
import p6 from '../assets/partner6.webp';
import p7 from '../assets/partner7.webp';

const partners = [p1, p2, p3, p4, p5, p6, p7];

const PartnersMarquee = () => {
    return (
        <div className="py-12 bg-black border-y border-white/5 overflow-hidden relative">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>

            <div className="flex w-full">
                <motion.div
                    className="flex space-x-16 items-center flex-shrink-0"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 20,
                        ease: "linear",
                    }}
                >
                    {/* Quadruple the list to ensure smooth looping for wider screens */}
                    {[...partners, ...partners, ...partners, ...partners].map((logo, index) => (
                        <div key={index} className="w-40 h-20 flex-shrink-0 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
                            <img
                                src={logo}
                                alt={`Partner ${index}`}
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default PartnersMarquee;
