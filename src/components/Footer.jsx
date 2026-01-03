import React from "react";
import logo from "../../public/images/logo.png";
import { MailIcon, MapPin, PhoneIcon } from "lucide-react";

export default function Footer() {
    return (
        <footer>
            <div className="bg-school-secondary border-t border-red-800 px-8 py-8 md:px-32 mx-auto flex flex-col md:flex-row gap-8">
                {/* Logo & Tagline */}
                <div className="space-y-5 md:w-2/3">
                    <div className="flex items-center space-x-3">
                        <img
                            src={logo}
                            alt="logo"
                            className="h-24 w-24 object-contain drop-shadow-lg"
                        />
                        <span className="text-2xl font-bold text-red-800 uppercase leading-tight tracking-wide">
                                St. John Peter <br/> Matric High School
                            </span>
                    </div>
                    <p className="text-sm text-center md:text-left text-red-800 font-bold max-w-xs leading-relaxed">
                        Excellence in academics and character building, nurturing tomorrow’s
                        leaders with care and dedication.
                    </p>
                </div>
                <div className="flex md:w-1/3 justify-between bg-gray-50 p-8 rounded-lg shadow-lg">
                    {/* Contact Info */}
                    <div>
                        <h4 className="font-bold text-red-800 text-lg mb-5 uppercase tracking-wide">
                            Get in Touch
                        </h4>
                        <ul className="space-y-4 text-sm text-red-800">
                            <li className="flex items-start gap-3 hover:text-yellow-400 transition-colors duration-200">
                                <MapPin className="w-5 h-5 shrink-0 mt-0.5"/>
                                <span className=" font-bold">
                                  Jeevanagar 2nd St, Rathinapuram,
                                  <br/> Madurai, Tamil Nadu 625011
                                </span>
                            </li>
                            <li className="flex items-center gap-3 hover:text-yellow-400 transition-colors duration-200">
                                <MailIcon className="w-5 h-5 shrink-0"/>
                                <span className=" font-bold">info@school.edu.in</span>
                            </li>
                            <li className="flex items-center gap-3 hover:text-yellow-400 transition-colors duration-200">
                                <PhoneIcon className="w-5 h-5 shrink-0"/>
                                <span className=" font-bold">+91 8778837765, +91 8760130057, 0452-2673095</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom line */}
            <div
                className="border-t border-school-secondary bg-red-800 p-6 font-bold flex justify-between items-center gap-4 text-xs md:text-sm text-school-secondary">
                <div>
                    © {new Date().getFullYear()} St. John Peter Matriculation School. All rights reserved.
                </div>
                <div>
                    Designed & Developed by{" "}
                    <span className="text-yellow-400 hover:underline cursor-pointer transition">
                          TREND-E creations
                        </span>
                    .
                </div>
            </div>
        </footer>
    );
}
