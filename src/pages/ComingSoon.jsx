import React from "react";
import logo from "../../public/images/logo.png";

const ComingSoon = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-red-800 px-4">
            <div className="bg-school-secondary max-w-md w-full rounded-2xl shadow-2xl p-8 text-center">

                {/* School Title */}
                <div className={"flex gap-4 justify-center items-center mb-6"}>
                    <img
                        src={logo}
                        alt="logo"
                        className="h-24 w-24 object-contain drop-shadow-lg"
                    />
                </div>

                {/* Coming Soon */}
                <h2 className="text-3xl font-extrabold text-red-800 mb-4">
                Coming Soon
                </h2>

                {/* Message */}
                <h3 className="font-bold text-gray-900">Something exciting is on the way!</h3>
                <p className="text-gray-900 mb-6 leading-relaxed">
                    Get ready to explore student achievements, upcoming events, academic updates, and everything that makes our school special — Stay tuned!
                </p>

                {/* Launch Info */}
                <div className="bg-red-800 rounded-lg py-3 mb-6">
                    <p className="text-school-secondary font-medium">
                        🚀 Launching Very Soon
                    </p>
                </div>

                {/* Contact Info */}
                <div className="space-y-2 text-gray-900">
                    <p>📞 <span className="font-medium">+91 12345 67890</span></p>
                    <p>📧 <span className="font-medium">info@ourschool.com</span></p>
                </div>

                {/* Footer */}
                <p className="mt-8 text-sm text-gray-800">
                    © {new Date().getFullYear()} St. John Peter Matriculation School. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default ComingSoon;