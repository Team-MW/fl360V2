import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';

const CursorSpotlight = () => {
    const [isMobile, setIsMobile] = useState(false);

    // Performance optimization: don't render on mobile touch devices
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.matchMedia("(pointer: coarse)").matches);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth physics-based spring animation for the cursor delay
    const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    const background = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(255, 255, 255, 0.05), transparent 80%)`;

    useEffect(() => {
        if (isMobile) return;

        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [isMobile, mouseX, mouseY]);

    if (isMobile) return null;

    return (
        <motion.div
            className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
            style={{
                background
            }}
        >
            {/* Inner intense glow - keeping color neutral/white for broad appeal or matching User's "bleu bizarre" avoidance, but let's stick to subtle white/zinc for premium feel */}
            <motion.div
                className="absolute w-96 h-96 bg-zinc-500/10 rounded-full blur-3xl pointer-events-none mix-blend-screen"
                style={{
                    left: x,
                    top: y,
                    x: "-50%",
                    y: "-50%"
                }}
            />
        </motion.div>
    );
};

export default CursorSpotlight;
