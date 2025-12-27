import React from "react";

export default function CardSection({ sectionTitle, sectionSubtitle, cards }) {
    return (
        <section className="bg-red-800 py-16 px-6 lg:px-16">
            {/* Section Header */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-school-secondary uppercase tracking-wide">
                    {sectionTitle}
                </h2>
                <p className="text-gray-100 max-w-2xl mx-auto mt-3">{sectionSubtitle}</p>
            </div>

            {/* Cards */}
            <div className="flex flex-wrap mx-auto gap-4">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="w-full sm:w-[22rem] md:w-[28rem] bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition duration-300"
                    >
                        <img
                            loading={"lazy"}
                            src={card.image}
                            alt={card.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6 bg-school-secondary h-full">
                            <h3 className="text-2xl font-semibold text-red-800 mb-3 text-center uppercase">
                                {card.title}
                            </h3>
                            <div className="text-gray-800">{card.description}</div>
                            {card.points && (
                                <ul className="list-disc list-inside">
                                    {card.points.map((point, i) => (
                                        <li className="flex items-baseline gap-4">
                                        <span className="text-2xl font-bold">&#8227;</span>
                                        <span className="text-lg">{point}</span>
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
