import React, { useState, useEffect } from "react";
import { Button } from "../components/ui/button.jsx";
import logo from "../../public/images/girl.png";
import {Link} from "react-router-dom";
import { FloatingWhatsApp } from 'react-floating-whatsapp';

function Counter({ end, label }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 2000;
        const stepTime = Math.abs(Math.floor(duration / end));
        const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= end) clearInterval(timer);
        }, stepTime);
        return () => clearInterval(timer);
    }, [end]);

    return (
        <div className="rounded-2xl bg-school-secondary p-6 text-center shadow-md hover:scale-105 transition">
            <p className="text-4xl font-bold text-red-800">{count}+</p>
            <p className="mt-1 text-xl text-red-800 uppercase font-medium">{label}</p>
        </div>
    );
}

export default function Home() {
    const [current, setCurrent] = useState(0);

    const reviews = [
        { text: `"The teachers are highly experienced and dedicated to student success. They provide a supportive learning environment and encourage students to excel in academics and extracurricular activities."` },
        { text: `"St John Peter Matriculation School offers reasonable fees and high-quality courses. Excellent institution."` },
        { text: `"The curriculum is very relevant and helps students prepare for their future. Overall, the school offers excellent support and resources for learning!"` },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % reviews.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [reviews.length]);

    const toppers = [
        { name: "MARAGATHAVEL N", mark: "492/500", image: "/images/home/toppers/maragathavel.jpeg" },
        { name: "JANANI M J", mark: "487/500", image: "/images/home/toppers/janani.jpeg" },
        { name: "JAIGOWTHAM M", mark: "480/500", image: "/images/home/toppers/jaigowtham.jpeg" },
        { name: "KAVYA P M", mark: "480/500", image: "/images/home/toppers/kavya.jpeg" },
    ];

    return (
        <main className="flex-grow font-sans text-gray-800 bg-school-secondary">
            <FloatingWhatsApp
                phoneNumber="8778837765"
                accountName="Support Team"
                chatMessage="Hi 👋 How can we help you?"
                placeholder="Type your message..."
                statusMessage="Typically replies within minutes"
                allowClickAway={true}
                notification={true}
                notificationDelay={5}
            />
            {/* Hero Section */}
            <section
                className="relative h-[90vh] bg-cover bg-center"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("./images/banner.jpg")',
                }}
            >
                <div className="absolute inset-0 flex items-center justify-around text-center text-white px-6">
                    <div className="hidden md:block md:w-96">
                        <img loading={"lazy"} src={logo} alt="students" className="mt-16 w-96"/>
                    </div>
                    <div>
                        <h1 className="text-5xl md:text-6xl font-semibold uppercase">
                            Inspiring Minds, <br/> Shaping Futures
                        </h1>
                        <p className="mt-4 max-w-2xl text-lg text-gray-100">
                            We foster a vibrant learning community where students excel
                            academically and personally, preparing them for a bright future.
                        </p>
                        <Button
                            className="mt-8 bg-red-800 text-gray-50 px-6 py-3 text-xl font-bold rounded-lg shadow hover:text-yellow-500 transition">
                            Apply Now
                        </Button>
                    </div>
                </div>
            </section>

            {/* Curriculum KG to V */}
            <section className="flex flex-col-reverse md:flex-row justify-between py-8
               bg-[url('/images/overlay.png')]
               bg-cover bg-center bg-blend-overlay">
                <div className="flex items-center py-8">
                    <div className="bg-gray-50 p-8 md:p-20 md:rounded-r-3xl shadow-2xl z-index-10">
                        <h3 className="text-2xl font-semibold text-red-800 mb-4">KG to Class V</h3>
                        <div className="flex flex-col gap-4">
                            <p className="text-gray-700 space-y-8 leading-relaxed">
                                Follows the CBSC pattern International Syllabus focused on thematic and
                                activity-based learning with English, Math, Science, and Life Skills.
                            </p>
                            <p className="text-gray-700 space-y-8 leading-relaxed">
                                Interactive lessons and small group activities, and all-round and child development with
                                regular assessments.
                            </p>
                            <p className="text-gray-700 space-y-8 leading-relaxed">
                                Integration of arts, sports, music, drama and value-based education from the early
                                years.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:w-2/3 px-8">
                    <div className="flex flex-col justify-center px-4 md:px-32 items-center">
                        <h2 className="text-4xl font-bold uppercase text-red-800 text-center">
                            Curriculum
                        </h2>
                        <h2 className="text-2xl font-semibold text-red-800 uppercase text-center">
                            at St. John Peter
                        </h2>
                    </div>
                    <div className="flex justify-center items-center">
                        <img
                            loading={"lazy"}
                            src="/images/home/12.png"
                            alt="Infrastructure"
                            className="max-h-72 md:max-h-[520px] w-full"
                        />
                    </div>
                </div>
            </section>

            {/* Curriculum VI to X */}
            <section className="bg-red-800 flex flex-col md:flex-row justify-between py-8 mx-auto
               bg-[url('/images/overlay.png')]
               bg-cover bg-center bg-blend-overlay">
                <div className="flex flex-col md:w-2/3">
                    <div className="flex flex-col justify-center px-4 md:px-32 items-center mb-12">
                        <h2 className="text-4xl font-bold uppercase text-gray-50 text-center">
                            Curriculum
                        </h2>
                        <h2 className="text-2xl font-semibold text-gray-50 uppercase text-center">
                            at St. John Peter
                        </h2>
                    </div>
                    <div className="flex justify-center items-center">
                        <img
                            loading={"lazy"}
                            src="/images/home/11.png"
                            alt="Infrastructure"
                            className="max-h-72 md:max-h-[480px] w-full"
                        />
                    </div>
                </div>
                <div className="flex py-8 items-center">
                    <div className="bg-gray-50 p-8 md:p-20 md:rounded-l-3xl shadow-2xl z-index-10">
                        <h3 className="text-2xl font-semibold text-red-800 mb-4">Class VI to X</h3>
                        <div className="flex flex-col gap-4">
                            <p className="text-gray-700 space-y-8 leading-relaxed">
                                Follows the Government Unified Syllabus focused on thematic and
                                activity-based learning with English, Math, Science, and Life Skills.
                            </p>
                            <p className="text-gray-700 space-y-8 leading-relaxed">
                                Interactive lessons and small group activities, and all-round and child development with
                                regular assessments.
                            </p>
                            <p className="text-gray-700 space-y-8 leading-relaxed">
                                Integration of arts, sports, music, drama and value-based education from the early
                                years.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Infrastructure */}
            <section className=" py-10 gap-8
               bg-[url('/images/overlay.png')]
               bg-cover bg-center bg-blend-overlay">

                <div className="flex flex-col-reverse lg:flex-row justify-between max-w-7xl mx-auto">
                    <div className="flex items-center justify-center px-4 md:px-8 lg:px-0">
                        <div className="bg-gray-50 p-6 md:p-10 lg:p-14 rounded-3xl shadow-xl w-full max-w-xl">
                            <ul className="list-disc list-inside space-y-3 text-gray-700">
                                <li>Separate, well-equipped labs for Computer and Science practicals</li>
                                <li>Audio-visual rooms for multimedia learning experiences</li>
                                <li>Dedicated play area and sports facilities</li>
                                <li>Digital classrooms with modern teaching aids</li>
                                <li>Separate block for girls ensuring safety</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col px-8">
                        <div className="flex flex-col justify-center px-4 md:px-32 items-center">
                            <h2 className="text-4xl font-bold uppercase text-red-800 text-center">
                                Infrastructure
                            </h2>
                            <h3 className="text-xl md:text-2xl font-semibold text-red-800 uppercase text-center">
                                at St. John Peter
                            </h3>
                        </div>
                        <div className="flex justify-center items-center">
                            <img
                                loading="lazy"
                                src="/images/home/13.png"
                                alt="Infrastructure"
                                className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>


            {/* Counters */}
            <section className="flex flex-col md:flex-row gap-6 px-8 py-12 bg-red-800 justify-center">
                <div className="grid grid-cols-2 md:grid-cols-1 gap-6 min-w-52">
                    <Counter end={1000} label="Students"/>
                    <Counter end={70} label="Faculty"/>
                </div>
                <div className="rounded-2xl bg-school-secondary p-6 shadow-md max-w-6xl">
                    <h2 className="text-4xl font-bold text-red-800 uppercase text-center">Quick updates & notices</h2>
                    <ul className="list-disc list-inside space-y-2 pt-4">
                        <li>Thirukkural Recitation Competition conducted on 07.01.2026.
                        </li>
                        <li>Pongal was celebrated with traditional activities, cultural programs, and student
                            participation, highlighting our rich heritage.
                        </li>
                    </ul>
                </div>
            </section>

            {/* Last Year Toppers */}
            <section className="py-16 px-8 bg-[url('/images/overlay.png')]
               bg-cover bg-center bg-blend-overlay">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-red-800 p-8 rounded-xl bg-[url('/images/overlay.png')]
               bg-cover bg-center bg-blend-overlay">
                        <h2 className="text-3xl font-bold text-center uppercase text-school-secondary mb-8">
                            Last Year’s Toppers
                        </h2>
                        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-10">
                            {toppers.map((t, i) => (
                                <div
                                    key={i}
                                    className="bg-school-secondary p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition"
                                >
                                    <div
                                        className="mx-auto h-32 w-32 rounded-full overflow-hidden border-4 border-yellow-400 mb-4">
                                        <img
                                            loading={"lazy"}
                                            src={t.image}
                                            alt={t.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold text-red-800">{t.name}</h3>
                                    <p className="text-yellow-600 font-semibold">{t.mark}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Achievements */}
            <section className="px-6 py-16 bg-red-800 bg-[url('/images/overlay.png')]
               bg-cover bg-center bg-blend-overlay">
                <div className="max-w-7xl mx-auto">
                    <h2 className="mb-12 text-3xl font-bold text-center text-school-secondary uppercase tracking-wide">
                        Achievements
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-8">
                        {[
                            {
                                icon: "🏆",
                                title: "Scouts & Guides Excellence",
                                description:
                                    "Our Kalam Scouts and Guides Group is officially registered under the Bharat Scouts and Guides, functioning under the Thirumangalam Scout District, Tamil Nadu. This registration reflects our school’s strong commitment to structured youth development and national service.",
                            },
                            {
                                icon: "🧗",
                                title: "National-Level Adventure Participation",
                                description: "A total of 15 Scouts from our school have successfully participated in National-Level Adventure Scouts programmes, showcasing courage, endurance, teamwork, and leadership skills at a national platform.",
                            },
                            {
                                icon: "🏅",
                                title: "Governor Award Achievement",
                                description:
                                    "Our institution has achieved a remarkable milestone with 24 Scouts and 24 Guides earning the prestigious Governor Award. These students were directly awarded certificates by the Hon’ble Governor of Tamil Nadu, marking proud moment for our school and the entire Scouts and Guides fraternity.",
                            },
                            {
                                icon: "🌟",
                                title: "District-Level Excellence",
                                description:
                                    "More than 70 students from our school have actively participated and excelled in District-Level Scouts and Guides programmes, demonstrating consistent involvement in community service, leadership training, and character-building activities.",
                            },
                            {
                                icon: "🌱",
                                title: "Building Responsible Citizens",
                                description:
                                    "Through Scouts and Guides, our school continues to nurture students into responsible citizens, confident leaders, and socially committed individuals, upholding the motto of service before self.",
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition"
                            >
                                <div className="flex items-center mb-4">
                                    <div className="text-3xl mr-3">{item.icon}</div>
                                    <h3 className="text-lg font-semibold text-red-800">
                                        {item.title}
                                    </h3>
                                </div>

                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Parents Review Carousel */}
            <section className="bg-[url('/images/overlay.png')]
               bg-cover bg-center bg-blend-overlay py-16 px-8 text-center text-white">
                <div className="bg-red-800 p-8 rounded-xl">
                    <h2 className="mb-6 text-3xl font-bold uppercase text-school-secondary">
                        What Parents Say
                    </h2>
                    <div className="relative mx-auto max-w-3xl">
                        <div className="rounded-lg bg-school-secondary p-6 shadow-lg">
                            <p className="italic text-red-900 text-lg">{reviews[current].text}</p>
                        </div>
                        <div className="mt-4 flex justify-center gap-2">
                            {reviews.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrent(idx)}
                                    className={`h-3 w-3 rounded-full ${
                                        idx === current ? "bg-school-secondary" : "bg-white/50"
                                    }`}
                                ></button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section className="px-8 py-16 bg-[url('/images/overlay.png')]
               bg-cover bg-center bg-blend-overlay">
                <div className="max-w-7xl mx-auto">
                    <h2 className="mb-8 text-3xl text-center font-bold text-red-800 uppercase">
                        Gallery
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            "/images/gallery/1.JPG",
                            "/images/gallery/3.jpg",
                            "/images/gallery/5.jpg",
                            "/images/gallery/7.JPG",
                            "/images/gallery/9.JPG",
                            "/images/gallery/11.JPG",
                            "/images/gallery/13.JPG",
                            "/images/gallery/14.JPG",
                        ].map((url, i) => (
                            <div
                                key={i}
                                className="aspect-square rounded-lg bg-cover bg-center shadow hover:scale-105 transition"
                                style={{backgroundImage: `url(${url})`}}
                            ></div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="bg-red-800 py-20 text-center bg-[url('/images/overlay.png')]
               bg-cover bg-center bg-blend-overlay">
                <h2 className="text-3xl font-bold text-school-secondary uppercase md:text-4xl">
                    Ready to Learn More?
                </h2>
                <p className="mt-4 text-school-secondary max-w-2xl mx-auto">
                    Reach out to our admissions team to schedule a visit or ask any questions.
                </p>
                <Link to={"/contact"}>
                    <Button
                        type="button"
                        className="mt-8 bg-school-secondary text-red-800 text-xl px-6 py-3 font-bold rounded-lg hover:bg-gray-50 transition">
                        Contact Us
                    </Button>
                </Link>
            </section>
        </main>
    );
}
