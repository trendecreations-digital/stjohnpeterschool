import { Link } from "react-router-dom";
import React from "react";

export default function Navbar() {
    return (
        <nav className="hidden md:flex items-center gap-8">
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
        </nav>
    );
}
