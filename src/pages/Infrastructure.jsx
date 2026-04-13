import React, {lazy, Suspense} from "react";
import {
    ShieldCheck,
    Microscope,
    Droplets,
    Monitor,
    Volume2,
    Activity,
    Users,
    Lightbulb
} from "lucide-react";

const FloatingWhatsApp = lazy(() =>
    import("react-floating-whatsapp").then((m) => ({
        default: m.FloatingWhatsApp,
    }))
);

export default function InfrastructurePage() {
    return (
        <main className="bg-school-secondary text-gray-800 py-12">
            <Suspense fallback={null}>
                <FloatingWhatsApp
                    phoneNumber="+918778837765"
                    accountName="Support Team"
                    chatMessage="Hi 👋 How can we help you?"
                    placeholder="Type your message..."
                    statusMessage="Typically replies within minutes"
                    allowClickAway={true}
                    notification={true}
                    notificationDelay={5}
                />
            </Suspense>
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
                            At our school, student safety and discipline are top priorities. To ensure a secure
                            environment, we've implemented a comprehensive CCTV surveillance system across the entire
                            campus, covering every classroom. These surveillance cameras enable continuous monitoring
                            of student activities, promoting safety and fostering a disciplined atmosphere conducive to
                            learning. <br/><br/>
                            With real-time monitoring capabilities, we can swiftly address any issues that may arise,
                            ensuring the well-being of all students and staff. This proactive approach to security not
                            only enhances the overall safety of our school but also instills a sense of accountability
                            and responsibility among our student body. We believe that a safe and disciplined
                            environment is essential for academic success and personal development, and our CCTV system
                            plays a crucial role in maintaining these standards.
                        </p>
                    </div>
                    <img
                        loading={"lazy"}
                        src="/images/infrastructure/CCTV.webp"
                        alt="CCTV Surveillance"
                        className="rounded-2xl shadow-lg w-full h-90 object-cover"
                    />
                </section>

                {/* Laboratory Section */}
                <section className="grid md:grid-cols-2 gap-10 items-center md:py-8 px-6 lg:px-12">
                    <img
                        loading={"lazy"}
                        src="/images/infrastructure/Laboratory.jpg"
                        alt="Laboratories"
                        className="rounded-2xl shadow-lg w-full h-90 object-cover md:order-1 order-2"
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
                            We provide well equipped proper laboratory facilities to our students to make them strong in
                            their subjects through practical learning method.
                        </p>
                    </div>
                </section>

                {/* Cleanliness Section */}
                <section className="grid md:grid-cols-2 gap-10 py-8 md:py-16 px-6 lg:px-12 items-center bg-red-800">
                    <div>
                        <h2 className="text-2xl font-semibold text-school-secondary flex items-center gap-2 mb-3 uppercase">
                            <Droplets className="text-school-secondary" /> Maintenance of Cleanliness & Hygiene
                        </h2>
                        <p className="leading-relaxed text-gray-50">
                            Maintaining cleanliness and hygiene is paramount at our school, ensuring a safe and healthy
                            environment for all students. With a dedicated team of 25+ maintenance staff members, we
                            uphold rigorous standards in cleanliness and hygiene throughout our restroom facilities. Our
                            staff members work diligently to ensure that restrooms are regularly cleaned, sanitized, and
                            stocked with essential supplies, such as soap and toilet paper By prioritizing cleanliness,
                            we aim to prevent the spread of germs and bacteria, reducing the risk of illness and
                            promoting overall well-being. Additionally, we conduct regular inspections and maintenance
                            checks to address any issues promptly and ensure that our restroom facilities meet the
                            highest standards of cleanliness and hygiene. At our school, we believe that a clean and
                            hygienic environment is essential for creating a conducive learning environment where
                            students can thrive academically and socially.
                        </p>
                    </div>
                    <img
                        loading={"lazy"}
                        src="/images/gallery/7.JPG"
                        alt="Clean Campus"
                        className="rounded-2xl shadow-lg w-full h-90 object-cover"
                    />
                </section>

                {/* LED Plasmas Section */}
                <section className="grid md:grid-cols-2 md:py-8 px-6 gap-10 items-center">
                    <img
                        loading={"lazy"}
                        src="/images/infrastructure/LED.JPG"
                        alt="Smart Classroom"
                        className="rounded-2xl shadow-lg w-full h-90 object-cover order-2 md:order-1"
                    />
                    <div className="order-1 md:order-2">
                        <h2 className="text-2xl font-semibold text-red-800 flex items-center gap-2 mb-3 uppercase">
                            <Monitor className="text-red-800 min-w-6" /> LED PLASMAS AND PROJECTORS WITH SOUND SYSTEM
                        </h2>
                        <p className="leading-relaxed text-gray-800">
                            To enhance academic engagement and foster innovation, we've integrated state-of-the-art LED
                            plasma TVs and projectors with sound systems throughout our school. These cutting-edge
                            technologies stimulate students' IQ levels, encourage critical thinking, and facilitate
                            interactive learning experiences <br/><br/>
                            By leveraging these advanced tools, we empower students to explore concepts dynamically,
                            engage with multimedia resources, and develop essential skills for academic success in the
                            digital age. Through immersive learning experiences facilitated by LED plasma TVs and
                            projectors, we cultivate a dynamic and stimulating educational environment where students
                            can unleash their full potential and thrive academically.
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
                            At our school, we've established an Audio & Visual Room to ignite students' imagination and
                            enhance their learning experiences. This dedicated space is designed to immerse students in
                            multimedia content, stimulating their creativity and critical thinking skills. Through
                            interactive audio and visual presentations, students embark on a journey of joyful learning,
                            gaining a deeper understanding of complex concepts and fostering a love for exploration and
                            discovery. <br/><br/>
                            Whether it's through educational videos, documentaries, or virtual simulations, the Audio &
                            Visual Room offers students a dynamic and engaging environment where they can engage their
                            senses and broaden their perspectives. By incorporating multimedia resources into the
                            curriculum, we aim to provide students with a comprehensive and enriching educational
                            experience that prepares them for success in the modern world.
                        </p>
                    </div>
                    <img
                        loading={"lazy"}
                        src="/images/gallery/9.JPG"
                        alt="Audio Visual Room"
                        className="rounded-2xl shadow-lg w-full h-90 object-cover"
                    />
                </section>

                {/* Activity Room */}
                <section className="grid md:grid-cols-2 px-6 md:py-8 gap-10 items-center">
                    <img
                        loading={"lazy"}
                        src="/images/infrastructure/activity.JPG"
                        alt="Activity Room"
                        className="rounded-2xl shadow-lg w-full h-90 object-cover order-2 md:order-1"
                    />
                    <div className="order-1 md:order-2">
                        <h2 className="text-2xl font-semibold text-red-800 flex items-center gap-2 mb-3 uppercase">
                            <Activity className="text-red-700" /> Activity Room
                        </h2>
                        <p className="leading-relaxed text-gray-800">
                            The Activity Room at our school serves as a vibrant hub for indoor sports and recreational
                            activities, catering to the diverse interests of our students. With separate sessions and
                            schedules for boys and girls, we ensure inclusive and provide tailored opportunities for
                            participation. From friendly matches to skill- building exercises, our Activity Room fosters
                            teamwork, sportsmanship, and physical fitness among students. Whether it's basketball,
                            badminton, or table tennis, students have the chance to engage in a variety of activities
                            that promote holistic development and well-being. Under the guidance of experienced coaches
                            and supervisors, students can explore their passions, develop new skills, and cultivate a
                            love for an active lifestyle. At our school, the Activity Room is not just a space for
                            recreation but also a place where students learn valuable lessons about cooperation,
                            resilience, and healthy competition.
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
                            To uphold a conducive learning environment and ensure disciplinary maintenance, our school
                            has designated separate blocks for boys and girls. This seqrelation allows for focused
                            supervision and promotes a sense of security and privacy for students. By having distinct
                            facilities for each gender, we aim to mitigate distractions and foster a respectful
                            atmosphere conducive to academic focus and personal development. <br/><br/>
                            Additionally, separate blocks enable us to address the unique needs and preferences of male
                            and female students, enhancing their overall educational experience. Our commitment to
                            providing a safe and conducive learning environment is reflected in the thoughtful design
                            and management of these separate blocks, ensuring that all students feel valued, respected,
                            and supported in their academic journey.
                        </p>
                    </div>
                    <img
                        loading={"lazy"}
                        src="./images/banner.jpg"
                        alt="Separate Blocks"
                        className="rounded-2xl shadow-lg w-full h-90 object-cover"
                    />
                </section>

                {/* UPS POWER BACKUP */}
                {/*<section className="grid md:grid-cols-2 px-6 md:py-8 gap-10 items-center">*/}
                {/*    <img*/}
                {/*        loading={"lazy"}*/}
                {/*        src="/images/infrastructure/activity.JPG"*/}
                {/*        alt="Activity Room"*/}
                {/*        className="rounded-2xl shadow-lg w-full h-90 object-cover order-2 md:order-1"*/}
                {/*    />*/}
                {/*    <div className="order-1 md:order-2">*/}
                {/*        <h2 className="text-2xl font-semibold text-red-800 flex items-center gap-2 mb-3 uppercase">*/}
                {/*            <Lightbulb className="text-red-700" /> UPS POWER BACKUP*/}
                {/*        </h2>*/}
                {/*        <p className="leading-relaxed text-gray-800">*/}
                {/*            To ensure uninterrupted learning and comfort for our students, our school has implemented a*/}
                {/*            UPS power backup system across select areas, including Pre-KG to Grade II classrooms and*/}
                {/*            certain sections of the campus. This proactive measure safeguards against power outages,*/}
                {/*            allowing teaching and learning activities to proceed seamlessly. <br/><br/>*/}
                {/*            With UPS power backup in place, students can continue their studies without disruptions,*/}
                {/*            maintaining focus and engagement in their lessons. Our priority is to provide a reliable and*/}
                {/*            conducive learning environment where students can thrive academically and feel supported in*/}
                {/*            their educational journey. By investing in UPS power backup technology, we demonstrate our*/}
                {/*            commitment to delivering quality education and prioritizing the well-being and comfort of*/}
                {/*            our students throughout their school day.*/}
                {/*        </p>*/}
                {/*    </div>*/}
                {/*</section>*/}
            </div>
        </main>
    );
}
