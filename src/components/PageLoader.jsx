import React from "react";

export default function PageLoader() {
    return (
        <div className="min-h-[100vh] flex items-center justify-center bg-school-secondary">
            <div className="flex flex-col items-center gap-4">
                {/* Spinner */}
                <div className="h-12 w-12 rounded-full border-4 border-red-200 border-t-red-800 animate-spin" />

                {/* Text */}
                <span className="text-red-800 font-medium tracking-wide">
          Loading…
        </span>
            </div>
        </div>
    );
}