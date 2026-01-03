import React from 'react';
import CardSection from "../components/CardSection.jsx";
import { FloatingWhatsApp } from 'react-floating-whatsapp';

export default function CurriculumPage() {
    const academicCards = [
        {
            title: "Skills of Calligraphy, Reading & Communication",
            description:
                "We recognize the importance of reading, writing, and communication skills as essential life assets. Our RRR (Rapid Reading Rebel) program focuses on enhancing these skills for lifelong success.",
            image:
                "/images/curriculum/reading.JPG",
        },
        {
            title: "AMIR (Academic Management Individual Report)",
            description:
                "Our AMIR initiative evaluates each student's academic performance and discipline every three months, ensuring personalized support and holistic development.",
            image:
                "/images/curriculum/pta.JPG",
        },
        {
            title: "Club Activities",
            description:
                "Subject-specific clubs enrich students’ knowledge beyond textbooks, encouraging creativity and deeper understanding.",
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
            title: "Pattam Paper — Extensive Reading",
            description:
                "Weekly once, our students receive Pattam paper from Dinamalar Daily, promoting extensive reading. They engage with special question papers and participate in Pattam Magazine Quiz competitions.",
            image:
                "/images/curriculum/newspaper.JPG",
        },
        {
            title: "Thirukkural Recitation",
            description:
                "Thirukkural, a universal guide for ethical living, is integral to our curriculum. Through daily recitations and competitions, students im bibe its timeless wisdom and values.",
            image:
                "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1000&q=60",
        },
        {
            title: "Sports Activity",
            description:
                "Sports are more than just physical activities; they instill discipline and promote proactive fitness among our students. Our dedicated Physical Education staff ensures comprehensive training in various sports and games, cultivating skills and fostering a spirit of sportsmanship. The success of our school in zonal and district-level competitions attests to our commitment to excellence in sports.\n" +
                "\nThrough participation in sports activities, students develop teamwork, resilience, and leadership skills, essential for their holistic development. Beyond the physical benefits, sports teach valuable life lessons such as dedication, perseverance, and fair play.",
            image:
                "/images/curriculum/sports.JPG",
        },
        {
            title: "Emboldens",
            description:
                "\"Emboldens\" signifies our commitment to nurturing confidence, resilience, and leadership qualities in our students. Through mentorship, encouragement, and diverse opportunities, we empower them to embrace challenges, express themselves boldIy, and become agents of positive change in their communities. Our holistic approach fosters self-assurance, ena bling students to navigate complexities with courage, integrity, and creativity.",
            image:
                "/images/curriculum/spl.jpg",
        },
        {
            title: "Election & Badges",
            description:
                "We conduct Student Pupil Leader elections to let the students get introduced and practiced into the basic political system and to become a socially responsible citizen of the country in future. The Student Pupil Leader\n" +
                "will be enriched with the leadership qualities. We provide I CARD badges for the student discipline and Speech Master badge for good communication skill.",
            image:
                "/images/curriculum/badge.JPG",
        },
        {
            title: "Cultural Activities & Field Trips",
            description:
                "our carefully curated field trips offer students immersive learning experiences outside the classroom, allowing them to explore new environments, interact with experts, and gain hands-on knowledge in various fields. Whether visiting historical landmarks, scientific institutions, or natural wonders, each excursion is desig ned to ignite curiosity, stimulate creativity, and foster a lifelong love for learning. At our school, cultural activities and field trips are more than just educational outings—they are opportunities for students to broaden their horizons, forge lasting memories, and cultivate a deep appreciation for the world around them.",
            image:
                "/images/curriculum/culturals.JPG",
        },
    ];

    return (
        <main className="bg-school-secondary text-gray-800">
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
            <section className="text-red-800 py-8 md:py-16 px-6 text-center">
                <h1 className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-wide">
                    Academic
                </h1>
                <p className="max-w-3xl mx-auto text-lg opacity-90 text-gray-800">
                    Our school offers a comprehensive educational journey from Pre- KG to Grade X.<br/>
                    We integrate a specialized combined curriculum, combining CBSC standards up to Grade IV with a
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
                        className="rounded-2xl shadow-lg max-h-64 object-cover md:max-h-[520px] w-full"
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
                            Our school administration is committed to providing students with
                            comprehensive learning experiences that go beyond academics. We
                            emphasize co-curricular programs that nurture creativity, leadership,
                            and life skills essential for holistic growth.
                        </p>
                    </div>

                    <img
                        loading={"lazy"}
                        src="/images/curriculum/non-academic.JPG"
                        alt="Non Academic Activities"
                        className="order-1 md:order-2 rounded-2xl shadow-lg max-h-64 object-cover md:max-h-[520px] w-full"
                    />
                </section>

                {/* Skills Section */}
                <CardSection
                    sectionTitle="Non-Academic Activities"
                    sectionSubtitle="Beyond academics, we emphasize holistic development through creative, cultural, and leadership programs that build life skills and confidence."
                    cards={nonAcademicCards}
                />
            </div>
        </main>
    );
}


