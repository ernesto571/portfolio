import ThemeToggle from "./ThemeToggle";
import { Send, Zap, User, Folder, Home } from "lucide-react";

function Navbar() {
    return (
        <div className="border-b-[1px] border-solid border-gray-300  dark:border-gray-600 bg-white dark:bg-gray-800 transition-colors duration-300">
            <nav className="flex justify-between w-[100%]  fixed z-10 bg-white dark:bg-gray-800 place-items-center ">
                <h1 className="flex text-[1.4rem] font-bold pl-5 text-gray-800 dark:text-white gap-1">
                    {/* portfolio title */}
                    Ernesto's <p className="text-[#6859ba]">Portfolio</p>
                </h1>
                <div className="flex place-items-center lg:gap-9 md:gap-5 my-1.5 font-semibold text-[1.1rem]">
                    <a href="#home" className="text-gray-800  dark:text-white hover:text-[#6859ba] dark:hover:text-[#6859ba] transition-colors hidden md:flex lg:flex">Home</a>
                    <a href="#about " className="text-gray-800 dark:text-white hover:text-[#6859ba] dark:hover:text-[#6859ba] transition-colors hidden md:flex lg:flex">About</a>
                    <a href="#skills" className="text-gray-800 dark:text-white hover:text-[#6859ba] dark:hover:text-[#6859ba] transition-colors hidden md:flex lg:flex">Skills</a>
                    <a href="#project" className="text-gray-800 dark:text-white hover:text-[#6859ba] dark:hover:text-[#6859ba] transition-colors hidden md:flex lg:flex">Projects</a>
                    <a href="#contact" className="text-gray-800 dark:text-white hover:text-[#6859ba] dark:hover:text-[#6859ba] transition-colors hidden md:flex lg:flex">Contact</a>
                    <ThemeToggle className="pr-6" />
                </div>
            </nav>

            {/* available for small screens */}
            <nav className="flex justify-around w-full dark:bg-[#272149] bg-white fixed z-10 bottom-0 px-2 py-2 md:hidden lg:hidden">
            <a
                href="#home"
                className="flex flex-col items-center gap-1 px-3 py-1.5 rounded-md text-sm font-medium text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-[#7767d2] transition">
                <Home className="w-5 h-5" />
                Home
            </a>

            <a
                href="#about"
                className="flex flex-col items-center gap-1 px-3 py-1.5 rounded-md text-sm font-medium text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-[#7767d2] transition"
            >
                <User className="w-5 h-5" />
                About
            </a>

            <a
                href="#skills"
                className="flex flex-col items-center gap-1 px-3 py-1.5 rounded-md text-sm font-medium text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-[#7767d2] transition"
            >
                <Zap className="w-5 h-5" />
                Skills
            </a>

            <a
                href="#project"
                className="flex flex-col items-center gap-1 px-3 py-1.5 rounded-md text-sm font-medium text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-[#7767d2] transition"
            >
                <Folder className="w-5 h-5" />
                Projects
            </a>

            <a
                href="#contact"
                className="flex flex-col items-center gap-1 px-3 py-1.5 rounded-md text-sm font-medium text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-[#7767d2] transition"
            >
                <Send className="w-5 h-5" />
                Contact
            </a>
            </nav>

        </div>
    );
}

export default Navbar;