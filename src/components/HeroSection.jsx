import { useEffect, useState } from 'react';
import { Send } from 'lucide-react';

function HeroSection() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger animation after component mounts
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {/* Add some content to see the theme changes better */}
            <section className="min-h-screen w-full flex items-center justify-center overflow-hidden">
                <div className="w-[80%] md:w-[70%] lg:w-[60%] max-w-4xl text-center">
                    {/* Animated Heading */}
                    <h2 className={`
                        text-[2.4rem] font-bold text-gray-800 dark:text-white mb-5
                        transform transition-all duration-1000 ease-out
                        ${isVisible 
                            ? 'translate-y-0 opacity-100' 
                            : 'translate-y-8 opacity-0'
                        }
                    `}>
                        <span className="flex justify-center items-center flex-wrap">
                            Hi, I'm
                            <p className={`
                                text-[#7767d2] mx-2 transform transition-all duration-1200 ease-out delay-200
                                ${isVisible 
                                    ? 'translate-x-0 opacity-100 scale-100' 
                                    : 'translate-x-4 opacity-0 scale-95'
                                }
                            `}>
                                Ernesto
                            </p>
                            Cruz
                        </span>
                    </h2>

                    {/* Animated Paragraph */}
                    <p className={`
                        text-gray-800 dark:text-gray-200 text-[1.2rem] font-semibold leading-relaxed
                        transform transition-all duration-1000 ease-out delay-300
                        ${isVisible 
                            ? 'translate-y-0 opacity-100' 
                            : 'translate-y-6 opacity-0'
                        }
                    `}>
                        I design and develop web experiences that drive results.
                        Specializing in user-centered design and performance optimization,
                        I create digital solutions that engage and convert.
                    </p>


                    {/* Animated Button */}
                    <button
                        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                        className="bg-[#6859ba] hover:opacity-60 ease-in transition-colors place-items-center text-white font-semibold mt-7 py-3 px-9 rounded-[15px]"
                        >
                        <span className="flex">
                            <Send size={20} className="mr-1 pt-[4px]" />
                            Let's Connect
                        </span>
                    </button>

                </div>

                {/* Optional: Floating background elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className={`
                        absolute top-1/4 left-1/4 w-32 h-32 bg-[#7767d2] rounded-full opacity-5
                        transform transition-all duration-2000 ease-out
                        ${isVisible 
                            ? 'translate-x-0 translate-y-0 scale-100' 
                            : '-translate-x-20 -translate-y-20 scale-0'
                        }
                    `}></div>
                    <div className={`
                        absolute bottom-1/4 right-1/4 w-24 h-24 bg-[#6859ba] rounded-full opacity-5
                        transform transition-all duration-2000 ease-out delay-200
                        ${isVisible 
                            ? 'translate-x-0 translate-y-0 scale-100' 
                            : 'translate-x-20 translate-y-20 scale-0'
                        }
                    `}></div>
                </div>

                {/* Scroll Down Indicator */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-gray-700 dark-text-[#6859ba] dark:text-gray-300 flex flex-col items-center cursor-pointer"
                    onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
                >
                    <span className="text-sm font-medium mb-1">Scroll Down</span>
                    <svg
                        className="w-6 h-6 animate-bounce"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>

            </section>
        </div>
    );
}

export default HeroSection;