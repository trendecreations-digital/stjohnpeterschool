import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
export default function AboutPage() {
    return (
        <main className="flex-1 bg-school-secondary">
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
            <div className="container">
                <div className="">
                    <div className="text-center py-12">
                        <h2 className="text-4xl font-bold tracking-tight text-red-800 uppercase sm:text-5xl">Our History, Vision, and Mission</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-gary-800">
                            Guiding principles that shape our educational journey and define our commitment to excellence.
                        </p>
                    </div>

                    <div className="space-y-16">
                        <div className="flex flex-col-reverse md:flex-row gap-8 lg:gap-12 px-6 items-center">
                            <div className="md:w-2/3 md:p-6">
                                <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-red-800 uppercase text-center md:text-left">A Legacy of
                                    Excellence</h3>
                                <p className="mt-4 text-lg text-gray-800">
                                    Since our inception in 1991, St. John Peter Matriculation School has been dedicated to
                                    providing quality education and shaping future leaders.<br/><br/>
                                    Founded by Mrs. Marykutty Baburajan and supported by Chairman Lion Mr. S.Baburajan, our
                                    school has grown to become a pillar of academic empowerment in Madurai.<br/><br/>
                                    Over the years, we have upheld a steadfast commitment to our founding principles,
                                    fostering a culture of innovation, inclusivity, and excellence. With a strong emphasis
                                    on holistic development, we strive to nurture the individual talents and skills of each
                                    student, preparing them for success in an ever-changing world<br/><br/>
                                    Through the dedication of our faculty, the support of our community, and the hard work
                                    of our students, we have achieved numerous milestones and accolades. As we continue to
                                    build on our heritage of educational excellence, we remain steadfast in our mission to
                                    empower the next generation of leaders and make a positive impact on society.<br/>
                                    <ul className="mt-4 space-y-4 text-gray-800">
                                        <li className="flex items-baseline gap-4">
                                            <span className="text-2xl font-bold">&#8227;</span>
                                            <span className="text-lg">Fostering unique talents and skills..</span>
                                        </li>
                                        <li className="flex items-baseline gap-4">
                                            <span className="text-2xl font-bold">&#8227;</span>
                                            <span>Quality education with human values.</span>
                                        </li>
                                        <li className="flex items-baseline gap-4">
                                            <span className="text-2xl font-bold">&#8227;</span>
                                            <span>Cultivating excellence in the community.</span>
                                        </li>
                                    </ul>
                                </p>
                            </div>
                            <div className="md:w-1/3 mx-auto w-full">
                                <div
                                    className="w-full aspect-[4/3] rounded-xl shadow-lg bg-cover bg-center"
                                    style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCruSnpW_VLGr4UzXAMKp0jjqj37CEI4arR7lqbOF8hXglkZFT8AHed6fzTCam9uk9XqxDLPiOfUFSjPZYQkXoMfXQSVKsP9bnWkexwX-8aRvgzPVvYFGAirSaAinFvvGSflJRlC3o0ePB_emq4xHWNlak0p4wYLtUsYo4kpU6OPPn6gRmZVCGQYOR2-BWENROXqs5V2YaamYjQdAEHXlcI_nqC4OcYfsmKNOK_4udopNuURNZfjjRenF_ShjshcYVs4syNvW-Soxg")'}}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-center bg-red-800 py-16 px-6">
                            <div className="md:w-1/3 mx-auto w-full">
                                <div
                                    className="w-full aspect-[4/3] rounded-xl shadow-lg bg-cover bg-center"
                                    style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCLZ6INLNEgwKI3BwdAoPjw0TtN5iDTpSFMgp0apYFEeTIxUTM3O9pwqPN9YOEgdIE2MWJKjnSoSMNIgrtTGJFOg-KkPAgZ9CexRPJuqc0WzmK0HtE9JtTcwHPeZpKvyvAhpo3on_ctWT-0vYz2PEIxLs7B5knp5EPrZ-BgqCSD_cXJI2GrfEKYpDoKIhOTtZ1o5lo6sTnwvrSqHijc1CyMAnBLkxq8PJqOUoOmPW9L274VNt79QV8dcgcZ6mJ8A6Sopm_P-QoFESc")'}}
                                />
                            </div>
                            <div className="md:w-2/3 md:p-6">
                                <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-school-secondary uppercase text-center md:text-left">Shaping
                                    Bright Futures</h3>
                                <p className="mt-4 text-lg text-gray-50">
                                    Guiding Brilliance, Shaping Futures: Meet Dr. B.Vinod MS(EDU), MBA, MHRM, B.Ed.,
                                    M.Phil., Ph.D. Our dedicated Dean/Correspondent, committed to fostering innovation and
                                    excellence among students. Continuing the rich legacy and vision of our founders, Dr.
                                    B.Vinod ensures every student thrives in an environment of limitless possibilities..<br/>
                                </p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 px-6 items-center">
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

                        <div className="flex flex-col-reverse md:flex-row gap-8 lg:gap-12 items-center bg-red-800 py-16 px-6">
                            <div className="md:w-2/3 md:p-6">
                                <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-school-secondary uppercase text-center md:text-left">Igniting Minds, Shaping Futures</h3>
                                <p className="mt-4 text-lg text-gray-50">
                                    Discover our dynamic curriculum design to inspire curiosity, critical thinking, and creativity. Our comprehensive program integrates innovative teaching methods and modern resources to ensure students receive a well- rounded education tailored to their individual needs and aspirations.<br/>
                                </p>
                            </div>
                            <div className="md:w-1/3 mx-auto w-full">
                                <div
                                    className="w-full aspect-[4/3] rounded-xl shadow-lg bg-cover bg-center"
                                    style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCLZ6INLNEgwKI3BwdAoPjw0TtN5iDTpSFMgp0apYFEeTIxUTM3O9pwqPN9YOEgdIE2MWJKjnSoSMNIgrtTGJFOg-KkPAgZ9CexRPJuqc0WzmK0HtE9JtTcwHPeZpKvyvAhpo3on_ctWT-0vYz2PEIxLs7B5knp5EPrZ-BgqCSD_cXJI2GrfEKYpDoKIhOTtZ1o5lo6sTnwvrSqHijc1CyMAnBLkxq8PJqOUoOmPW9L274VNt79QV8dcgcZ6mJ8A6Sopm_P-QoFESc")'}}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}