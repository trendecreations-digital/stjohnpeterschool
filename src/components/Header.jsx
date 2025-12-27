import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../public/images/white-logo.png";
import Navbar from "./Navbar.jsx";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button.jsx";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <header className="sticky top-0 z-50 w-full bg-red-800 text-white shadow-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-12">
                {/* Logo & Title */}
                <Link
                    to="/"
                    className="flex items-center gap-3 transition-transform hover:scale-105"
                >
                    <img
                        src={logo}
                        alt="logo"
                        className="h-14 w-14 object-contain drop-shadow-lg"
                    />
                    <div className="leading-tight">
                        <h1 className="text-xl font-semibold tracking-tight">
                            ST. JOHN PETER
                        </h1>
                        <h2 className="text-lg tracking-tight">MATRIC HIGH SCHOOL</h2>
                    </div>
                </Link>

                {/* Desktop Navbar */}
                <div className="hidden md:block">
                    <Navbar />
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white p-2 rounded-md hover:bg-school-redDark transition"
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            <div
                className={`md:hidden bg-school-white text-school-gray transition-all duration-300 ease-in-out overflow-hidden ${
                    isMobileMenuOpen ? "max-h-64 py-3" : "max-h-0 py-0"
                }`}
            >
                <div className="flex flex-col items-center space-y-3">
                    {[
                        { name: "About Us", path: "/about" },
                        { name: "Curriculum", path: "/curriculum" },
                        { name: "Infrastructure", path: "/infrastructure" },
                        { name: "Gallery", path: "/gallery" },
                        { name: "Contact", path: "/contact" },
                    ].map((link, i) => (
                        <Link
                            key={i}
                            to={link.path}
                            className="text-sm font-medium uppercase text-gray-50 hover:text-yellow-400 transition-colors relative group"
                        >
                            {link.name}
                            {/* Underline animation */}
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    );
}
