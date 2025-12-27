import goalsImage from '../assets/goals.jpg';
import React from "react";

export default function Stats() {
    const stats = [
        { label: "Certified Teachers", value: 50 },
        { label: "Students Enrolled", value: 1200 },
        { label: "Satisfied Parents", value: 950 },
    ];

    return (
        <section
            className="py-12 bg-cover bg-center"
            style={{backgroundImage: `url(${goalsImage})`}}
        >
            <h2 className="text-lg font-semibold mb-2 p-6 text-center text-white">Current Strength</h2>
            <div className="max-w-6xl min-h-56 mx-auto grid grid-cols-1 sm:grid-cols-3 items-center text-center gap-8">
                {stats.map((item, i) => (
                    <div key={i}>
                        <h2 className="text-4xl font-bold text-blue-600">{item.value}+</h2>
                        <p className="mt-2 text-white">{item.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
