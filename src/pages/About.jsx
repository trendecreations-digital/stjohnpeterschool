import React, {lazy, Suspense} from "react";

const FloatingWhatsApp = lazy(() =>
    import("react-floating-whatsapp").then((m) => ({
        default: m.FloatingWhatsApp,
    }))
);

export default function AboutPage() {
    return (
        <main className="flex-1 bg-school-secondary">
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
            <div>
                <div className="text-center py-12">
                    <h2 className="text-4xl font-bold tracking-tight text-red-800 uppercase sm:text-5xl">Our History</h2>
                </div>

                <div className="space-y-16">
                    <div className="flex flex-col-reverse md:flex-row gap-8 lg:gap-12 px-6 items-center">
                        <div className="md:w-2/3 md:p-6">
                            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-red-800 uppercase text-center md:text-left">
                                A Legacy of Excellence</h3>
                            <p className="mt-4 text-lg text-gray-800">
                                Since our inception in 1991, St. John Peter Matriculation School has been dedicated to
                                providing quality education and shaping future leaders.<br/><br/>
                                Founded by Mrs. Marykutty Baburajan and supported by Chairman Lion Mr. Baburajan, our
                                school has grown to become a pillar of academic empowerment in Madurai.<br/><br/>
                                Over the years, we have upheld a steadfast commitment to our founding principles,
                                fostering a culture of innovation, inclusivity, and excellence. With a strong emphasis
                                on holistic development, we strive to nurture the individual talents and skills of each
                                student, preparing them for success in an ever- changing world.<br/><br/>
                                Through the dedication of our faculty, the support of our community, and the hard work
                                of our students, we have achieved numerous milestones and accolades. As we continue to
                                build on our heritage of educational excellence, we remain steadfast in our mission to
                                empower the next generation of leaders and make a positive impact on society.
                            </p>
                        </div>
                        <div className="md:w-1/3 mx-auto w-full">
                            <div
                                className="w-full aspect-[4/3] rounded-xl shadow-lg bg-cover bg-center"
                                style={{backgroundImage: 'url("./images/banner.jpg")'}}
                            />
                        </div>
                    </div>
                    <div className="md:w-2/3 mx-auto bg-white/80 backdrop-blur-lg p-8 md:p-12 rounded-3xl shadow-xl border border-gray-200 hover:shadow-2xl transition duration-300">
                        <div className="text-center mb-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-red-800 uppercase tracking-wide">
                                Dean's Message
                            </h2>
                        </div>

                        {/* Content */}
                        <p className="text-gray-700 text-lg leading-relaxed text-justify">
                            With a proud <span className="font-semibold text-red-700">35 years of legacy</span>,
                            St. John Peter Matric High School has consistently upheld superior discipline
                            and delivered enriched education to shape confident and responsible learners.
                            Our institution believes that discipline and values form the strong foundation
                            for academic excellence and character development.
                        </p>

                        <p className="mt-4 text-gray-700 text-lg leading-relaxed text-justify">
                            We embrace innovative teaching methods that make learning engaging, meaningful,
                            and future-ready. By integrating modern technology and creative approaches, we
                            ensure that every child experiences quality education that nurtures knowledge,
                            skills, and confidence.
                        </p>

                        <p className="mt-4 text-gray-700 text-lg leading-relaxed text-justify">
                            We are committed to developing highly socially responsible students through
                            value-based education. By nurturing empathy, integrity, leadership, and respect
                            for society, we guide our students to become responsible citizens who contribute
                            positively to the community and the nation.
                        </p>

                        {/* Signature */}
                        <div className="mt-8 flex justify-end">
                            <div className="text-right">
                                <p className="font-semibold text-gray-900 text-lg">Dr. B. Vinod, PhD</p>
                                <p className="text-gray-600">Dean of Academics</p>
                                <p className="text-gray-500 text-sm">
                                    St. John Peter Matric High School
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-red-800 py-12 px-6">
                        <div className="text-center py-6">
                            <h2 className="text-3xl font-bold tracking-tight text-school-secondary uppercase sm:text-5xl">
                                About Us</h2>
                        </div>
                        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-center bg-red-800">
                            <div className="md:w-1/3 mx-auto w-full">
                                <div
                                    className="w-full aspect-[4/3] rounded-xl shadow-lg bg-cover bg-center"
                                    style={{backgroundImage: 'url("/images/gallery/21.JPG")'}}
                                />
                            </div>
                            <div className="md:w-2/3 md:p-6">
                                <h3 className="text-2xl md:text-2xl font-bold tracking-tight text-school-secondary
                                uppercase text-center md:text-left">
                                    St. John Peter Matriculation School - House of Knowledge</h3>
                                <p className="mt-4 text-lg text-gray-50">
                                    St. John Peter Matriculation School, established in 1991, is a beacon of educational
                                    excellence in Madurai. Founded with a vision to empower future generations through
                                    education, we prioritize holistic development, academic excellence, and the
                                    cultivation
                                    of human values.<br/><br/>
                                    Our dedicated faculty, state-of-the-art facilities, and commitment to nurturing
                                    individual talents make us a trusted institution. join us as we continue to shape
                                    tomorrow's leaders with passion and purpose.<br/><br/>
                                </p>
                                <ul className="space-y-4 text-gray-800">
                                <li className="flex items-baseline gap-4 text-gray-50">
                                        <span className="text-2xl font-bold">&#8227;</span>
                                        <span className="text-lg">Fostering unique talents and skills..</span>
                                    </li>
                                    <li className="flex items-baseline gap-4 text-gray-50">
                                        <span className="text-2xl font-bold">&#8227;</span>
                                        <span>Quality education with human values.</span>
                                    </li>
                                    <li className="flex items-baseline gap-4 text-gray-50">
                                        <span className="text-2xl font-bold">&#8227;</span>
                                        <span>Cultivating excellence in the community.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 items-center px-6">
                        <div className="text-center">
                            <h2 className="text-4xl font-bold tracking-tight text-red-800 uppercase sm:text-5xl">
                                Vision & Mission</h2>
                        </div>
                        <div className="md:w-2/3">
                            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-red-800 uppercase text-center">
                                Shaping Bright Future</h3>
                            <p className="mt-4 text-lg text-gray-800 text-center">
                                Guiding Brilliance, Shaping Futures: Meet Dr. Vinod B MS(EDU), MBA, MHRM, B.Ed, M.Phil,
                                Ph.D. Our dedicated Dean/Correspondent, committed to fostering innovation and excellence
                                among students. Continuing the rich legacy and vision of our founders, Dr. Vinod ensures
                                every student thrives in an environment of limitless possibilities.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 p-6 items-center">
                            <div className="bg-gray-50 p-8 md:p-20 rounded-3xl shadow-2xl h-full">
                                <h3 className="text-2xl font-semibold text-red-800 mb-4">Our Vision</h3>
                                <ul className="space-y-4 text-gray-800">
                                    <li className="flex items-baseline gap-4">
                                        <span className="text-2xl font-bold">&#8227;</span>
                                        <span className="text-lg">To make our students earnest citizen with all values and knowledge to form a
                                    holy society.</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-gray-50 p-8 md:p-20 rounded-3xl shadow-2xl">
                                <h3 className="text-2xl font-semibold text-red-800 mb-4">Our Mission</h3>
                                <ul className="list-disc list-inside space-y-2">
                                    <li className="flex items-baseline gap-4">
                                        <span className="text-2xl font-bold">&#8227;</span>
                                        <span className="text-lg">To make our students sustain in the competitive future through value-based education
                                    and the curriculum.</span>
                                    </li>
                                    <li className="flex items-baseline gap-4">
                                        <span className="text-2xl font-bold">&#8227;</span>
                                        <span className="text-lg">To make our students self-reliant and confident, following our school motto "Think
                                    beyond. "</span>
                                    </li>
                                    <li className="flex items-baseline gap-4">
                                        <span className="text-2xl font-bold">&#8227;</span>
                                        <span className="text-lg">To enable students to be self-disciplined through refined skills and enriched
                                    knowledge.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div
                        className="flex flex-col-reverse md:flex-row gap-8 lg:gap-12 items-center bg-red-800 py-16 px-6">
                        <div className="md:w-2/3 md:p-6">
                            <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-school-secondary uppercase text-center md:text-left">Igniting
                                Minds, Shaping Futures</h3>
                            <p className="mt-4 text-lg text-gray-50">
                                Discover our dynamic curriculum designed to inspire curiosity, critical thinking, and
                                creativity. Our comprehensive program integrates innovative teaching methods and modern
                                resources to ensure students receive a well- rounded education tailored to their
                                individual needs and aspirations.<br/>
                            </p>
                        </div>
                        <div className="md:w-1/3 mx-auto w-full">
                            <div
                                className="w-full aspect-[4/3] rounded-xl shadow-lg bg-cover bg-center"
                                style={{backgroundImage: 'url("/images/gallery/22.JPG")'}}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}