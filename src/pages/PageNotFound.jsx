import React from "react";
import {Link} from "react-router-dom";

export default function NotFoundPage() {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 bg-school-secondary">
            <h1 className="text-5xl font-bold text-red-700 mb-4">404</h1>
            <h2 className="text-2xl font-semibold mb-2 text-red-800">Page Not Found</h2>
            <p className="text-gray-800 mb-6">
                Oops! The page you’re looking for doesn’t exist or has been moved.
            </p>
            <Link
                to="/"
                className="px-6 py-3 bg-red-800 text-white rounded-lg hover:bg-red-800 transition"
            >
                Go Back Home
            </Link>
        </div>
    );
}