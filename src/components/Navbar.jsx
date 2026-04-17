import { NavLink } from "react-router-dom";
import React from "react";

export default function Navbar() {
    const links = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Curriculum", path: "/curriculum" },
        { name: "Infrastructure", path: "/infrastructure" },
        { name: "Gallery", path: "/gallery" },
        { name: "Uniform Service", path: "/uniform-service" },
        { name: "Magazines", path: "/magazines" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <nav className="hidden md:flex flex-wrap items-center gap-8">
            {links.map((link, i) => (
                <NavLink
                    key={i}
                    to={link.path}
                    end
                    className={({ isActive }) =>
                        `relative text-sm font-medium uppercase transition-colors duration-200
                        ${
                            isActive
                                ? "text-yellow-400"
                                : "text-gray-50 hover:text-yellow-400"
                        }`
                    }
                >
                    {({ isActive }) => (
                        <>
                            {link.name}

                            {/* Underline */}
                            <span
                                className={`absolute left-0 -bottom-1 h-[2px] bg-yellow-400 transition-all duration-200
                                ${
                                    isActive
                                        ? "w-full"
                                        : "w-0 group-hover:w-full"
                                }`}
                            />
                        </>
                    )}
                </NavLink>
            ))}
        </nav>
    );
}
