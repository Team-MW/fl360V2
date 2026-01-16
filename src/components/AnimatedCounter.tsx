import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

const AnimatedCounter = ({ value, className }: { value: string; className?: string }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    // Find the number to animate
    const numberMatch = value.match(/\d+/);
    const targetNumber = numberMatch ? parseInt(numberMatch[0], 10) : 0;

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        stiffness: 40,
        damping: 25,
        mass: 1,
        duration: 2.5
    });

    useEffect(() => {
        if (isInView && numberMatch) {
            motionValue.set(targetNumber);
        }
    }, [isInView, targetNumber, motionValue, numberMatch]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current && numberMatch) {
                // Ensure we don't exceed the target due to overshoot if not desired, 
                // but spring usually feels better.
                // We'll trust the spring physics, but math.round gives integers.
                const currentInt = Math.round(latest);

                // Replace only the first numeric occurrence or the specific one we found
                const formatted = value.replace(numberMatch[0], currentInt.toString());
                ref.current.innerText = formatted;
            }
        });
    }, [springValue, value, numberMatch]);

    // Initial render: replace number with "0"
    const initialText = numberMatch ? value.replace(numberMatch[0], "0") : value;

    return <span ref={ref} className={className}>{initialText}</span>;
};

export default AnimatedCounter;
