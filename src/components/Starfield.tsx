import { useEffect, useRef } from 'react';

const Starfield = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let stars: { x: number; y: number; z: number; size: number }[] = [];

        const numStars = 400;
        const speed = 1.5;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initStars();
        };

        const initStars = () => {
            stars = [];
            for (let i = 0; i < numStars; i++) {
                stars.push({
                    x: Math.random() * canvas.width - canvas.width / 2,
                    y: Math.random() * canvas.height - canvas.height / 2,
                    z: Math.random() * canvas.width,
                    size: Math.random() * 2
                });
            }
        };

        const updateStars = () => {
            // Clear canvas
            ctx.fillStyle = 'black';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const cx = canvas.width / 2;
            const cy = canvas.height / 2;

            stars.forEach(star => {
                // Move star closer
                star.z -= speed;

                // Reset star if it passes the screen
                if (star.z <= 0) {
                    star.z = canvas.width;
                    star.x = Math.random() * canvas.width - canvas.width / 2;
                    star.y = Math.random() * canvas.height - canvas.height / 2;
                }

                // Project star (3D to 2D)
                const x = (star.x / star.z) * canvas.width + cx;
                const y = (star.y / star.z) * canvas.width + cy;
                const radius = (1 - star.z / canvas.width) * star.size * 2;

                // Draw star shadow (glow)
                ctx.beginPath();
                ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0, (1 - star.z / canvas.width) * 0.3)})`;
                ctx.arc(x, y, radius * 2, 0, Math.PI * 2);
                ctx.fill();

                // Draw star core
                ctx.beginPath();
                ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0, 1 - star.z / canvas.width)})`;
                ctx.arc(x, y, radius, 0, Math.PI * 2);
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(updateStars);
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        updateStars();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full opacity-60 pointer-events-none"
        />
    );
};

export default Starfield;
