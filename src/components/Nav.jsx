import { Link, useLocation } from "wouter";
import Hamburger from "hamburger-react";
import { useState } from "react";

export default function Nav() {
    const [location] = useLocation();
    const [isOpen, setOpen] = useState(false);

    return (
        <nav className="flex flex-col md:flex-row items-center font-custom">
            <div className="md:hidden">
                <Hamburger toggled={isOpen} toggle={setOpen}/>
            </div>
            <ul className={`flex flex-col md:flex-row md:items-center justify-end transition-transform duration-300 ${isOpen ? "block" : "hidden"} md:flex`}>
                <li className="mb-2 md:mb-0"><Link className={`block py-2 px-4 rounded-lg ${
                            location === "/" ? "text-teal-500" : "text-black"
                        } hover:text-teal-400`} href="/">Home</Link></li>
                <li className="mb-2 md:mb-0"><Link className={`block py-2 px-4 rounded-lg ${
                            location === "/projects" ? "text-teal-500" : "text-black"
                        } hover:text-teal-400`} href="/projects">Projects</Link></li>
                <li className="mb-2 md:mb-0"><Link className={`block py-2 px-4 rounded-lg ${
                            location === "/about" ? "text-teal-500" : "text-black"
                        } hover:text-teal-400`} href="/about">About</Link></li>
                <li className="mb-2 md:mb-0"><Link className={`block py-2 px-4 rounded-lg ${
                            location === "/contact" ? "text-teal-500" : "text-black"
                        } hover:text-teal-400`} href="/contact">Contact</Link></li>
            </ul>
        </nav>

    );
   
}