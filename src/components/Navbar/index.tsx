import Link from "next/link";
import ModeToggle from "../ThemeToggle";
import { Logo } from "./icons";


const Navbar: React.FC = () => {

    const menus = [
        { title: "Home", path: "/your-path" },
        { title: "Blog", path: "/your-path" },
        { title: "About Us", path: "/your-path" },
        { title: "Contact Us", path: "/your-path" },
    ]

    return (
        <nav className={`flex items-center justify-between px-32 bg-gray-100 dark:bg-gray-900`}>
            <div className="flex items-center">
                <Logo size={60} />
            </div>
            
            <div className="flex items-center">
                <ModeToggle />
            </div>
        </nav>
    )
}

export default Navbar;