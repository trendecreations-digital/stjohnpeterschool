import React, {lazy, Suspense} from 'react';
import CardSection from "../components/CardSection.jsx";

const FloatingWhatsApp = lazy(() =>
    import("react-floating-whatsapp").then((m) => ({
        default: m.FloatingWhatsApp,
    }))
);

export default function CurriculumPage() {
    const academicCards = [
        {
            title: "Skills of Calligraphy, Reading & Communication",
            description:
                "At our school, we recognize the paramount importance of reading, writing, and communication skills as fundamental assets for every student. These skills are essential for navigating the demands of a globalized society in everyday life. Understanding their significance, we prioritize these skills in our academic coaching, exemplified by our RRR (Rapid Reading Rebel) program.",
            image:
                "/images/curriculum/reading.JPG",
        },
        {
            title: "AMIR (Academic Management Individual Report)",
            description:
                "Introducing our latest initiative, the Academic Management Individual Report (AMIR). This method meticulously evaluates each student's academic performance and overall discipline every three months. AMIR ensures comprehensive monitoring and personalized support for every student's growth and development.",
            image:
                "/images/curriculum/pta.JPG",
        },
        {
            title: "Zero Hours",
            description:
                "At our school, we implement the Zero Hour system, offering students\n" +
                "additional subject knowledge beyond the academic syllabus. This dedicated time allows for deeper exploration of topics, fostering a well-rounded understanding and promoting academic enrichment.",
            image:
                "/images/curriculum/pta.JPG",
        },
        {
            title: "Club Activities",
            description:
                "We've established subject-specific clubs and conduct regular activities to enrich students with extensive subject knowledge beyond the academic syllabus. These creative and enthusiastic sessions promote holistic learning experiences and foster a deeper understanding of various subjects.",
            points: [
                "Tamil - முத்தமிழ் மன்றம்",
                "English - Robert Frost English Club",
                "Mathematics - Aryabhata Math Club",
                "Science - Einstein Club",
                "Social - Alexander the Great Social Club",
            ],
            image:
                "/images/curriculum/club.JPG",
        },
    ];

    const nonAcademicCards = [
        {
            title: "Abacus & Speed Maths",
            description:
                "Abacus is a classic method to do mathematics fast. We conduct the classes every Thursdays and we encourage our students to use it as a life skill.",
            image:
                "/images/curriculum/abacus.JPG",
        },
        {
            title: "Pattam Paper - Extensive Reading",
            description:
                "Weekly, our students receive Pattam paper by Dinamalar Daily, promoting extensive reading. They engage with special question papers and participate in Pattam Magazine competitions.",
            image:
                "/images/curriculum/newspaper.JPG",
        },
        {
            title: "Thirukkural - Recitation",
            description:
                "Thirukkural, a universal guide for ethical living, is integral to our curriculum. Through daily recitations and competitions, students imbibe its timeless wisdom and values.",
            image:
                "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1000&q=60",
        },
        {
            title: "Sports Activity",
            description:
                "Sports are more than just physical activities; they instill discipline and promote proactive fitness among our students. Our dedicated Physical Education staff ensures comprehensive training in various sports and games, cultivating skills and fostering a spirit of sportsmanship. The success of our school in zonal and district-level competitions attests to our commitment to excellence in sports" +
                "\n\n Through participation in sports activities, students develop teamwork, resilience, and leadership skills, essential for their holistic development. Beyond the physical benefits, sports teach valuable life lessons such as dedication, perseverance, and fair play." +
                "\n\n We believe that a robust sports program not only enhances physical health but also nurtures character and instills values that students carry with them throughout their lives. At our school, sports serve as a cornerstone of our educational philosophy, empowering students to excel both on and off the field.",
            image:
                "/images/curriculum/sports.JPG",
        },
        {
            title: "Emboldens",
            description:
                "\"Emboldens\" signifies our commitment to nurturing confidence, resilience, and leadership qualities in our students. Through mentorship, encouragement, and diverse opportunities, we empower them to embrace challenges, express themselves boldly, and become agents of positive change in their communities. Our holistic approach fosters self-assurance, enabling students to navigate complexities with courage, integrity, and creativity." +
                "\n\n Whether in academics, extracurricular activities, or personal endeavors, we strive to instill a sense of empowerment that fuels their aspirations and propels them towards success. At our school, \"Emboldens\" encapsulates our dedication to equipping students with the skills and mindset needed to\n" +
                "thrive in an ever-evolving world. SPL ",
            image:
                "/images/curriculum/spl.jpg",
        },
        {
            title: "Election & Badges",
            description:
                "We conduct Student Pupil Leader elections to let the students get introduced and practiced into the basic political system and to become a socially responsible citizen of the country in future. The Student Pupil Leader will be enriched with the leadership qualities. We provide I CARD badges for the student discipline and Speech Master badge for good communication skill.",
            image:
                "/images/curriculum/badge.JPG",
        },
        {
            title: "Cultural Activities & Field Trips",
            description:
                "At our school, we believe in the transformative power of cultural activities and field trips to enrich the educational experience. Through vibrant cultural" +
                "programs and activities, we celebrate diversity and honor the rich tapestry of social and cultural backgrounds within our community. From traditional dances and music performances to art exhibitions and culinary festivals, these events provide students with a platform to showcase their talents and learn from one another." +
                "\n\n Additionally, our carefully curated field trips offer students immersive learning experiences outside the classroom, allowing them to explore new environments, interact with experts, and gain hands-on knowledge in various fields. Whether visiting historical landmarks, scientific institutions, or natural wonders, each excursion is designed to ignite curiosity, stimulate creativity, and foster a lifelong love for learning. At our school, cultural activities and field trips are more than just educational outings they are opportunities for students to broaden their horizons, forge lasting memories, and cultivate a deep appreciation for the world around them.",
            image:
                "/images/curriculum/culturals.JPG",
        },
    ];

    return (
        <main className="bg-school-secondary text-gray-800">
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
            {/* Hero Section */}
            <section className="text-red-800 py-8 md:py-16 px-6 text-center">
                <h1 className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-wide">
                    Academic
                </h1>
                <p className="max-w-3xl mx-auto text-lg opacity-90 text-gray-800">
                    Our school offers a comprehensive educational journey from Pre- KG to Grade
                    X. We integrate a specialized combined curriculum, combining CBSC standards up to Grade IV with a
                    unified syllabus from Grade V to Grade X.
                </p>
            </section>

            <div className="mx-auto md:space-y-20">
                {/* Academic Excellence */}
                <section className="px-6 lg:px-16 py-8 md:py-4 grid md:grid-cols-2 gap-12 items-center">
                    <img
                        loading={"lazy"}
                        src="/images/curriculum/academic.JPG"
                        alt="Academic Excellence"
                        className="rounded-2xl shadow-lg max-h-64 object-cover md:max-h-[320px] w-full"
                    />
                    <div>
                        <h2 className="text-3xl font-semibold text-red-800 mb-4 uppercase text-center">
                            The Excellent Academic Coaching
                        </h2>
                        <p className="leading-relaxed text-gray-800">
                            We are dedicated to enhancing our curriculum and staying abreast of the latest developments
                            in education to ensure academic excellence for all students. Our personalized approach
                            extends to supporting slow learners, resulting in a 100% success rate in academic
                            achievements annually.
                        </p>
                    </div>
                </section>

                {/* Skills Section */}
                <CardSection
                    sectionTitle="Academic Skills & Clubs"
                    sectionSubtitle="Empowering students with essential communication, academic excellence, and creative collaboration through our unique programs and clubs."
                    cards={academicCards}
                />
            </div>

            <section className="text-red-800 py-8 md:py-16 px-6 text-center">
                <h1 className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-wide">
                    Non-Academic
                </h1>
                <p className="max-w-3xl mx-auto text-lg opacity-90 text-gray-800">
                    Our school administration always desires about providing comprehensive knowledge to our students other than academic coaching based on the curriculum.
                </p>
            </section>

            <div className="mx-auto md:space-y-20">
                {/* Non-Academic Excellence */}
                <section className="px-6 lg:px-16 py-4 grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <h2 className="text-3xl font-semibold text-red-800 mb-4 uppercase text-center md:text-left">
                            The Excellent Non-Academic Development
                        </h2>
                        <p className="leading-relaxed text-gray-800 mb-4">
                            Our school administration always desires about providing comprehensive knowledge to our
                            students other than academic coaching based on the curriculum.
                        </p>
                    </div>

                    <img
                        loading={"lazy"}
                        src="/images/curriculum/non-academic.JPG"
                        alt="Non Academic Activities"
                        className="order-1 md:order-2 rounded-2xl shadow-lg max-h-64 object-cover md:max-h-[320px] w-full"
                    />
                </section>

                {/* Skills Section */}
                <CardSection
                    sectionTitle="Non-Academic Activities"
                    sectionSubtitle="Our school administration always desires a bout providing comprehensive knowledge to our students other than academic coaching based on the curriculum."
                    cards={nonAcademicCards}
                />
            </div>
        </main>
    );
}


