import React, { lazy, Suspense } from "react";
import {
    Shield,
    Tent,
    Users,
    Star,
    Award,
    CheckCircle,
    Heart,
    Activity,
} from "lucide-react";

const FloatingWhatsApp = lazy(() =>
    import("react-floating-whatsapp").then((m) => ({
        default: m.FloatingWhatsApp,
    }))
);

export default function UniformService() {
    const wings = [
        {
            title: "Bunny Wing",
            gender: "Boys & Girls",
            desc: "Introduces discipline, sharing, caring, and moral values through fun games, rhymes, storytelling, and joyful activities.",
            img: "/images/uniform/Bunny.jpg",
        },
        {
            title: "Cub Wing",
            gender: "Boys",
            desc: "Builds good habits, teamwork, courage, and responsibility via jungle games, drills, nature study, and character activities.",
            img: "/images/uniform/CUB.jpg",
        },
        {
            title: "Bulbul Wing",
            gender: "Girls",
            desc: "Nurtures creativity, confidence, kindness, and leadership with songs, action games, group activities, and value-based learning.",
            img: "/images/uniform/Bulbul.jpg",
        },
        {
            title: "Scout Wing",
            gender: "Boys",
            desc: "Focuses on leadership, camping, hiking, pioneering, first aid, parade, and community service for disciplined citizenship.",
            img: "/images/uniform/Scout.jpg",
        },
        {
            title: "Guide Wing",
            gender: "Girls",
            desc: "Empowers with confidence, service mindset, and leadership through camps, social service, skill programs, and national observances.",
            img: "/images/uniform/Guide.jpg",
        },
    ];

    const activities = [
        "Flag Hoisting & Flag Lowering Ceremony",
        "Promise & Law Practice",
        "Knotting and Pioneering",
        "Camping & Hiking",
        "First Aid Training",
        "Community Service Programs",
        "Parade & Drill",
        "Thinking Day Celebration",
    ];

    const achievements = [
        "Participation in District Camps",
        "Badge Examinations",
        "Community Outreach Activities",
        "Leadership Training Programs",
        "National Camps / National Level Youth Adventure Programme, Jamburee Camps",
    ];

    const jrcActivities = [
        "JRC Prayer Meetings",
        "First Aid & Disaster Management Training",
        "Health & Hygiene Awareness Campaigns",
        "Cleanliness Drives",
        "Blood Donation Camp Support",
        "Social Service Visits",
    ];

    return (
        <main className="bg-school-secondary text-gray-800">

            {/* WhatsApp */}
            <Suspense fallback={null}>
                <FloatingWhatsApp
                    phoneNumber="+918778837765"
                    accountName="Support Team"
                    chatMessage="Hi 👋 How can we help you?"
                    placeholder="Type your message..."
                    statusMessage="Typically replies within minutes"
                    allowClickAway
                    notification
                    notificationDelay={5}
                />
            </Suspense>

            <div className="py-8 space-y-16">
                <section className="space-y-16">

                    {/* Title */}
                    <div className="text-red-800 py-8 md:py-8 px-6 text-center">
                        <h1 className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-wide">
                            BSG Wing
                        </h1>
                        <p className="max-w-3xl mx-auto text-xl opacity-90 mb-2 text-yellow-600">
                            Kalam Scouts and Guides Group
                        </p>

                        <p className="max-w-3xl mx-auto text-lg mb-2 text-gray-800">
                            (Under Bharat Scouts and Guides)
                        </p>

                        <p className="max-w-3xl mx-auto text-lg mb-2 text-gray-800">
                            The Scout Wing of St. John Peter Matric High School operates actively under the Kalam
                            Scouts and Guides Group, registered with the Thirumangalam Scout District Association,
                            Madurai Revenue District.
                        </p>
                    </div>

                    {/* Content */}
                    <div className="px-6 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">

                        <div className="space-y-5 text-lg leading-relaxed">

                            <div className="bg-red-50 border text-center border-red-100 rounded-xl p-5">
                                <h2 className="font-semibold text-2xl text-red-800 mb-1">
                                    About Scouts
                                </h2>
                                <p className="text-md text-gray-800">
                                    The Scout movement builds character, discipline, leadership, and a spirit of service.
                                    Scouts train to become responsible, physically strong, mentally alert, and morally upright citizens.
                                </p>
                            </div>

                            <div className="bg-red-800 border text-center border-yellow-100 rounded-xl p-5">
                                <h4 className="font-semibold text-lg text-school-secondary mb-1">Scout & Guide Motto</h4>
                                <p className="font-bold text-gray-50 text-3xl">" Be Prepared "</p>
                            </div>
                        </div>

                        <img
                            src="/images/uniform/scoutmain.jpg"
                            alt="Scouts"
                            loading="lazy"
                            className="rounded-xl shadow-md h-80 w-full object-cover"
                        />
                    </div>

                    {/* Wings Grid */}
                    <div className="bg-red-800 text-gray-50 py-16 px-8">
                        <h3 className="text-4xl font-bold text-center text-school-secondary uppercase tracking-wide mb-4">
                            Our Aim
                        </h3>
                        <p className="text-lg text-center text-gray-50 mb-12">
                            From KG to Grade IX, we provide structured growth through discipline, service, and character development.
                        </p>

                        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-7xl mx-auto">
                            {wings.map((wing, idx) => (
                                <div
                                    key={idx}
                                    className="group bg-school-secondary rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
                                >
                                    <img
                                        src={wing.img}
                                        alt={wing.title}
                                        loading="lazy"
                                        className="w-full h-56 object-cover group-hover:scale-105 transition"
                                    />
                                    <div className="p-6 bg-school-secondary flex flex-col flex-grow">
                                        <div className="flex justify-between items-center mb-1">
                                            <h4 className="text-xl font-semibold text-red-800 mb-3 text-center uppercase">
                                                {wing.title}
                                            </h4>
                                            <span className="text-xs bg-gray-50 px-2 rounded-2xl text-gray-800 py-1">
                                                {wing.gender}
                                            </span>
                                        </div>

                                        <div className="text-gray-800 whitespace-pre-line leading-relaxed text-sm">
                                            {wing.desc}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Activities */}
                    <div className="px-6 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-8 rounded-xl shadow border">
                            <h4 className="flex gap-4 items-center justify-center text-2xl font-semibold text-red-800 mb-4">
                                <Activity className="mr-2 text-yellow-500"/>
                                Major Activities
                            </h4>
                            <ul className="list-disc list-inside space-y-2">
                                {activities.map((item, i) => (
                                <li key={i}  className="flex items-baseline gap-4">
                                    <span className="text-2xl font-bold">&#8227;</span>
                                    <span className="text-lg">{item}</span>
                                </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow border">
                            <h4 className="flex gap-4 items-center justify-center text-2xl font-semibold text-red-800 mb-4">
                                <Award className="mr-2 text-4xl font-bold text-yellow-500"/>
                                Achievements & Training
                            </h4>

                            <ul className="list-disc list-inside space-y-2">
                                {achievements.map((item, i) => (
                                    <li key={i} className="flex items-baseline gap-4">
                                        <span className="text-2xl font-bold">&#8227;</span>
                                        <span className="text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>

                </section>

                {/* ================= JRC ================= */}
                <section className="space-y-12 bg-red-800 p-16">
                    <div className="text-center space-y-3 mb-8">
                        <h2 className="text-2xl text-school-secondary sm:text-3xl font-bold">
                            Junior Red Cross (JRC)
                        </h2>

                        <p className="text-lg text-gray-50">
                            (Under Melur Education District) <br/>
                            The Junior Red Cross (JRC) Unit of St. John Peter Matric High School focuses on humanitarian
                            values, health awareness, and voluntary service among students.
                        </p>
                    </div>

                    <div className="px-6 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
                        <div className="space-y-5">
                            <img
                                src="/images/uniform/JRC.jpg"
                                alt="JRC"
                                loading="lazy"
                                className="rounded-xl shadow h-80 w-full object-cover"
                            />
                        </div>

                        <div className="flex flex-col gap-8">
                            <div className="bg-school-secondary border text-center border-red-100 rounded-xl p-5">
                                <h2 className="font-semibold text-2xl text-red-800 mb-1">
                                    About JRC
                                </h2>
                                <p className="text-md text-gray-800">
                                    JRC aims to cultivate kindness, compassion, and a helping nature in students. It
                                    trains students in health, hygiene, disaster response, and social service.
                                </p>
                            </div>

                            <div className="bg-red-800 border text-center border-yellow-100 rounded-xl p-5">
                                <h4 className="font-semibold text-lg text-school-secondary mb-1">JRC Motto</h4>
                                <p className="font-bold text-gray-50 text-3xl">" Health Service Friendship "</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="space-y-12 px-6 sm:px-6 lg:px-8 pb-8">
                    <div className="bg-white p-5 rounded-xl shadow border max-w-2xl mx-auto">
                        <h4 className="flex gap-4 items-center justify-center text-2xl font-semibold text-red-800 mb-4">
                            <Users className="mr-2 text-4xl font-bold text-yellow-500"/>
                            Major Activities
                        </h4>

                        <ul className="list-disc list-inside space-y-2">
                            {jrcActivities.map((item, i) => (
                                <li key={i} className="flex items-center gap-4">
                                    <CheckCircle className="text-red-500 w-4"/>
                                    <span className="text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

            </div>
        </main>
    );
}