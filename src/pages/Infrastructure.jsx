import React from "react";
import {
    ShieldCheck,
    Microscope,
    Droplets,
    Monitor,
    Volume2,
    Activity,
    Users,
} from "lucide-react";
import { FloatingWhatsApp } from 'react-floating-whatsapp';

export default function InfrastructurePage() {
    return (
        <main className="bg-school-secondary text-gray-800 py-12">
              <FloatingWhatsApp
                    phoneNumber="916384945201"
                    accountName="Support Team"
                    chatMessage="Hi 👋 How can we help you?"
                    placeholder="Type your message..."
                    statusMessage="Typically replies within minutes"
                    allowClickAway={true}
                    notification={true}
                    notificationDelay={5}
                  />
            <div className="space-y-16">
                {/* Header */}
                <header className="text-center">
                    <h1 className="text-4xl md:text-5xl uppercase font-bold text-red-800">
                        Infrastructure
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gary-800">
                        Our school’s infrastructure is designed to provide a secure, clean,
                        and technologically advanced environment that nurtures learning and
                        creativity.
                    </p>
                </header>

                {/* CCTV Section */}
                <section className="grid md:grid-cols-2 gap-10 py-8 md:py-16 px-6 lg:px-12 items-center bg-red-800">
                    <div>
                        <h2 className="text-2xl font-semibold text-school-secondary flex items-center gap-2 mb-3 uppercase">
                            <ShieldCheck className="text-school-secondary" /> CCTV Surveillance
                        </h2>
                        <p className="leading-relaxed text-gray-50">
                            At our school, student safety and discipline are top priorities.
                            To ensure a secure environment, we’ve implemented a comprehensive
                            CCTV surveillance system across the entire campus, covering every
                            classroom. These surveillance cameras enable continuous monitoring
                            of student activities, promoting safety and fostering a
                            disciplined atmosphere conducive to learning.
                        </p>
                    </div>
                    <img
                        loading={"lazy"}
                        src="/images/infrastructure/cctv.JPG"
                        alt="CCTV Surveillance"
                        className="rounded-2xl shadow-lg w-full h-80 object-cover"
                    />
                </section>

                {/* Laboratory Section */}
                <section className="grid md:grid-cols-2 gap-10 items-center md:py-8 px-6 lg:px-12">
                    <img
                        loading={"lazy"}
                        src="/images/infrastructure/cs_lab.JPG"
                        alt="Laboratories"
                        className="rounded-2xl shadow-lg w-full h-80 object-cover md:order-1 order-2"
                    />
                    <div className="order-1 md:order-2">
                        <h2 className="text-2xl font-semibold text-red-800 flex items-center gap-2 mb-3 uppercase">
                            <Microscope className="text-red-800" /> Laboratory Facilities
                        </h2>
                        <ul className="list-disc list-inside text-gray-800 mb-3 space-y-1">
                            <li>Physics Laboratory</li>
                            <li>Chemistry Laboratory</li>
                            <li>Biology Laboratory</li>
                            <li>Computer Science Laboratory</li>
                            <li>Communication Laboratory</li>
                        </ul>
                        <p className="leading-relaxed text-gray-800">
                            We provide well-equipped laboratory facilities that empower
                            students to learn through hands-on experience and strengthen their
                            subject knowledge through practical application.
                        </p>
                    </div>
                </section>

                {/* Cleanliness Section */}
                <section className="grid md:grid-cols-2 gap-10 py-8 md:py-16 px-6 lg:px-12 items-center bg-red-800">
                    <div>
                        <h2 className="text-2xl font-semibold text-school-secondary flex items-center gap-2 mb-3 uppercase">
                            <Droplets className="text-school-secondary" /> Cleanliness & Hygiene
                        </h2>
                        <p className="leading-relaxed text-gray-50">
                            Maintaining cleanliness and hygiene is paramount at our school, ensuring a safe and healthy environment for all students. With a dedicated team of 25+ maintenance staff members, we uphold rigorous standards in cleanliness and hygiene throughout our restroom facilities.
                        </p>
                    </div>
                    <img
                        loading={"lazy"}
                        src="/images/gallery/7.JPG"
                        alt="Clean Campus"
                        className="rounded-2xl shadow-lg w-full h-72 object-cover"
                    />
                </section>

                {/* LED Plasmas Section */}
                <section className="grid md:grid-cols-2 md:py-8 px-6 gap-10 items-center">
                    <img
                        loading={"lazy"}
                        src="/images/infrastructure/LED.JPG"
                        alt="Smart Classroom"
                        className="rounded-2xl shadow-lg w-full h-80 object-cover order-2 md:order-1"
                    />
                    <div className="order-1 md:order-2">
                        <h2 className="text-2xl font-semibold text-red-800 flex items-center gap-2 mb-3 uppercase">
                            <Monitor className="text-red-800 min-w-6" /> LED PLASMAS AND PROTECTORS WITH SOUND SYSTEM
                        </h2>
                        <p className="leading-relaxed text-gray-800">
                            To enhance academic engagement and foster innovation, we've integrated state-of-the-art LED plasma TVs and projectors with sound systems
                            throughout our school. These cutting-edge technologies stimulate students' IQ levels, encourage critical thinking, and facilitate interactive learning experiences.
                        </p>
                    </div>
                </section>

                {/* Audio Visual Room */}
                <section className="grid md:grid-cols-2 gap-10 py-8 md:py-16 px-6 lg:px-12 items-center bg-red-800">
                    <div>
                        <h2 className="text-2xl font-semibold text-school-secondary flex items-center gap-2 mb-3 uppercase">
                            <Volume2 className="text-school-secondary" /> Audio & Visual Room
                        </h2>
                        <p className="leading-relaxed text-gray-50">
                            At our school, we've established an Audio & Visual Room to ignite students' imagination and enhance their learning experiences. This dedicated space is designed to immerse students in multimedia content, stimulating their creativity and critical thinking skills. Through interactive audio and visual presentations, students embark on a journey of joyful learning, gaining a deeper understanding of complex concepts and fostering a love for exploration and discovery.
                        </p>
                    </div>
                    <img
                        loading={"lazy"}
                        src="/images/gallery/9.JPG"
                        alt="Audio Visual Room"
                        className="rounded-2xl shadow-lg w-full h-72 object-cover"
                    />
                </section>

                {/* Activity Room */}
                <section className="grid md:grid-cols-2 px-6 md:py-8 gap-10 items-center">
                    <img
                        loading={"lazy"}
                        src="/images/infrastructure/activity.JPG"
                        alt="Activity Room"
                        className="rounded-2xl shadow-lg w-full h-80 object-cover order-2 md:order-1"
                    />
                    <div className="order-1 md:order-2">
                        <h2 className="text-2xl font-semibold text-red-800 flex items-center gap-2 mb-3 uppercase">
                            <Activity className="text-red-700" /> Activity Room
                        </h2>
                        <p className="leading-relaxed text-gray-800">
                            The Activity Room at our school serves as a vibrant hub for indoor sports and recreational activities, catering to the diverse interests of our students. With separate sessions and schedules for boys and giris, we ensure inclusivity and
                            provide tailored opportunities for participation.
                        </p>
                    </div>
                </section>

                {/* Separate Block Section */}
                <section className="grid md:grid-cols-2 gap-10 py-8 md:py-16 px-6 lg:px-12 items-center bg-red-800">
                    <div>
                        <h2 className="text-2xl font-semibold text-school-secondary flex items-center gap-2 mb-3 uppercase">
                            <Users className="text-school-secondary min-w-6" /> Separate Blocks for Boys & Girls
                        </h2>
                        <p className="leading-relaxed text-gray-50">
                            Additionally, separate blocks enable us to address the unique needs and preferences of male and female students, enhancing their overall educational experience. Our commitment to providing a safe and conducive learning environment is reflected in the thoughtful design and management of these separate blocks, ensuring that all students feel valued, respected, and supported in their academic journey.
                        </p>
                    </div>
                    <img
                        loading={"lazy"}
                        src="./images/banner.jpg"
                        alt="Separate Blocks"
                        className="rounded-2xl shadow-lg w-full h-72 object-cover"
                    />
                </section>
            </div>
        </main>
    );
}
