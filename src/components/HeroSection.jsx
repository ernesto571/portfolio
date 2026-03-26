import { useEffect, useState } from 'react';
import { Send } from 'lucide-react';
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(SplitText);

function HeroSection() {

    useGSAP(() => {
        const heroSplit = new SplitText("#hero-title", { type: "chars, words" });
        const subtitleSplit = new SplitText("#hero-subtitle", { type: "lines" });

        const tl = gsap.timeline();

        tl.from(heroSplit.chars, {
            opacity: 0,
            y: 20,
            duration: 0.5,
            ease: "back.out",
            stagger: 0.02,
        }).from(subtitleSplit.lines, {
            opacity: 0,
            y: 15,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.1,
        }, "-=0.2"); // slight overlap so it feels fluid
    });

    return (
        <div>
            <section className="min-h-screen w-full flex items-center justify-center overflow-hidden">
                <div className="w-[80%] md:w-[70%] lg:w-[50%] max-w-4xl text-center">

                    <h2 className="text-[2.4rem] font-bold text-gray-800 dark:text-white mb-5 transform transition-all duration-1000 ease-out">
                        <span className="flex justify-center items-center flex-wrap" id="hero-title">
                            Hi, I'm
                            <p className="text-[#7767d2] mx-2 transform transition-all duration-1200 ease-out delay-200">
                                Emmanuel
                            </p>
                            Cruz
                        </span>
                    </h2>

                    {/* Shortened text */}
                    <p id="hero-subtitle" className="text-gray-800 dark:text-gray-200  md:text-[1.2rem] font-semibold leading-relaxed transform transition-all duration-1000 ease-out delay-300">
                        Great software is invisible — it just works and gets out of the way.
                        I build digital products that bridge beautiful design with powerful functionality.
                        Have an idea? I'll bring it to life.
                    </p>

                    <button
                        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                        className="bg-[#6859ba] hover:opacity-60 ease-in transition-colors place-items-center text-white font-semibold mt-10 py-3 px-9 rounded-[15px]"
                    >
                        <span className="flex">
                            <Send size={20} className="mr-1 pt-[4px]" />
                            Let's Connect
                        </span>
                    </button>
                </div>

                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#7767d2] rounded-full opacity-5 transform transition-all duration-2000 ease-out"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-[#6859ba] rounded-full opacity-5 transform transition-all duration-2000 ease-out delay-200"></div>
                </div>

                <div
                    className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-gray-700 dark:text-gray-300 flex flex-col items-center cursor-pointer"
                    onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
                >
                    <span className="text-sm font-medium mb-1">Scroll Down</span>
                    <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </section>
        </div>
    );
}

export default HeroSection;