import React from "react";

export default function CardSection({ sectionTitle, sectionSubtitle, cards }) {
    return (
        <section className="bg-red-800 py-16 px-6 lg:px-16">
            {/* Section Header */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-school-secondary uppercase tracking-wide">
                    {sectionTitle}
                </h2>
                <p className="text-gray-100 max-w-2xl mx-auto mt-3 leading-relaxed">
                    {sectionSubtitle}
                </p>
            </div>

            {/* Cards Grid */}
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-7xl mx-auto">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 flex flex-col"
                    >
                        {/* Image */}
                        <img
                            loading="lazy"
                            src={card.image}
                            alt={card.title}
                            className="w-full h-56 object-cover"
                        />

                        {/* Content */}
                        <div className="p-6 bg-school-secondary flex flex-col flex-grow">
                            <h3 className="text-xl font-semibold text-red-800 mb-3 text-center uppercase">
                                {card.title}
                            </h3>

                            <div className="text-gray-800 whitespace-pre-line leading-relaxed text-sm">
                                {card.description}
                            </div>

                            {/* Points */}
                            {card.points && (
                                <ul className="mt-4 space-y-2">
                                    {card.points.map((point, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="text-red-700 font-bold">•</span>
                                            <span className="text-gray-800 text-sm">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}