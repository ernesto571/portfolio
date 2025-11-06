import { useEffect, useState } from 'react';

function ShootingStarsBackground() {
    const [stars, setStars] = useState([]);

    // Create shooting stars
    useEffect(() => {
        const createStar = () => ({
            id: Math.random(),
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 2 + 1,
            duration: Math.random() * 3 + 2,
            delay: Math.random() * 5,
        });

        // Generate initial stars
        const initialStars = Array.from({ length: 15 }, createStar);
        setStars(initialStars);

        // Add new stars periodically
        const interval = setInterval(() => {
            setStars(prevStars => {
                const newStar = createStar();
                const updatedStars = [...prevStars.slice(-14), newStar]; // Keep max 15 stars
                return updatedStars;
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {/* Static stars background */}
            <div className="absolute inset-0">
                {Array.from({ length: 100 }).map((_, i) => (
                    <div
                        key={`static-${i}`}
                        className="absolute rounded-full bg-white opacity-30"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            width: `${Math.random() * 2 + 1}px`,
                            height: `${Math.random() * 2 + 1}px`,
                            animationDelay: `${Math.random() * 3}s`,
                        }}
                    />
                ))}
            </div>

            {/* Shooting stars */}
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="absolute"
                    style={{
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        animationDelay: `${star.delay}s`,
                    }}
                >
                    {/* Star body */}
                    <div
                        className="shooting-star"
                        style={{
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                            '--duration': `${star.duration}s`,
                        }}
                    />
                    
                    {/* Star trail */}
                    <div
                        className="shooting-star-trail"
                        style={{
                            '--duration': `${star.duration}s`,
                            '--size': `${star.size}px`,
                        }}
                    />
                </div>
            ))}

            {/* CSS Styles */}
            <style>{`
    .shooting-star {
        position: relative;
        background: linear-gradient(45deg, #fff, #4f46e5, #7c3aed);
        border-radius: 50%;
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
        animation: shoot var(--duration, 3s) linear infinite;
    }

    .shooting-star-trail {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: var(--size, 2px);
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
        transform: translate(-50%, -50%) rotate(45deg);
        animation: trail var(--duration, 3s) linear infinite;
    }

    @keyframes shoot {
        0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
        }
        70% {
            opacity: 1;
        }
        100% {
            transform: translate(300px, 300px) scale(0);
            opacity: 0;
        }
    }

    @keyframes trail {
        0% {
            width: 0;
            opacity: 1;
        }
        30% {
            width: 50px;
            opacity: 1;
        }
        100% {
            width: 0;
            opacity: 0;
        }
    }

    @keyframes twinkle {
        0%, 100% {
            opacity: 0.3;
            transform: scale(1);
        }
        50% {
            opacity: 1;
            transform: scale(1.2);
        }
    }
`}</style>

        </div>
    );
}

export default ShootingStarsBackground