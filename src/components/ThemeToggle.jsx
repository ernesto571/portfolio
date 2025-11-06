import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(false);

    // Check for saved theme preference or default to light mode
    useEffect(() => {
        const savedTheme = document.documentElement.getAttribute('data-theme');
        if (savedTheme === 'dark') {
            setIsDark(true);
        }
    }, []);

    // Apply theme changes to the document
    useEffect(() => {
        if (isDark) {
            document.documentElement.setAttribute('data-theme', 'dark');
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    return (
        <button
            onClick={toggleTheme}
            className={`
                relative py-[2px] px-2 rounded-lg transition-all duration-300 ease-in-out
                ${isDark
                    ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }
            `}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            <div className="relative w-6 h-6">
                {/* Sun icon */}
                <Sun
                    className={`
                        absolute inset-0 w-6 h-6 transition-all duration-300 ease-in-out
                        ${isDark
                            ? 'opacity-0 rotate-90 scale-50'
                            : 'opacity-100 rotate-0 scale-100'
                        }
                    `}
                />
                {/* Moon icon */}
                <Moon
                    className={`
                        absolute inset-0 w-6 h-6 transition-all duration-300 ease-in-out
                        ${isDark
                            ? 'opacity-100 rotate-0 scale-100'
                            : 'opacity-0 -rotate-90 scale-50'
                        }
                    `}
                />
            </div>
        </button>
    );
};

export default ThemeToggle;