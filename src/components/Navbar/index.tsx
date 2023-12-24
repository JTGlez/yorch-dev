'use client'
import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getLocaleStrings } from "@/localization";
import LangToggle from '../LangToggle/index';
import ModeToggle from "../ThemeToggle";
import { Logo } from "./icons";

interface NavbarProps {
    lang: string;
}

const Navbar: React.FC<NavbarProps> = ({ lang }) => {

    const [isClicked, setIsClicked] = useState(false);
    const strings = getLocaleStrings(lang);

    const menus = [
        { title: strings.Navbar.home, path: "/" },
        { title: strings.Navbar.aboutme, path: "/about-me" },
        { title: strings.Navbar.projects, path: "/projects" },
        { title: strings.Navbar.blog, path: "/blog" },
    ];

    const variants = {
        open: { opacity: 1, height: "auto", transition: { when: "beforeChildren" } },
        closed: { opacity: 0, height: 0, transition: { when: "afterChildren" } },
    };

    const childVariants = {
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: -20 },
    };

    return (
        <nav className="bg-gray-100 dark:bg-gray-900 border-b">
            <div className="flex items-center container justify-between mx-auto md:px-8">
                <div>
                    <Logo size={60} />
                </div>
                <div className="flex items-center gap-5 flex-row-reverse md:flex-row">
                    <div className={`hidden md:flex md:space-x-6 ${isClicked ? "block" : "hidden"}`}>
                        {menus.map((menu, index) => (
                            <Link key={index} href={`/${lang}${menu.path}`}>
                                {menu.title}
                            </Link>
                        ))}
                    </div>
                    <div className="md:hidden">
                        <button
                            className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                            onClick={() => setIsClicked(!isClicked)}
                        >
                            <Menu />
                        </button>
                    </div>
                    <ModeToggle />
                </div>
            </div>
            <AnimatePresence>
                {isClicked && (
                    <motion.div
                        className={`container flex flex-col md:hidden`}
                        variants={variants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        transition={{ duration: 0.5 }}
                    >
                        <motion.div
                            className={`flex flex-col md:hidden`}
                            variants={childVariants}
                        >
                            <ul className="justify-center items-center my-6 space-y-6 md:flex md:space-x-6 md:space-y-6">
                                {menus.map((menu, index) => (
                                    <li key={index} className="text-gray-600 hover:text-gray-100">
                                        <Link href={`/${lang}${menu.path}`}>
                                            {menu.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <LangToggle />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;