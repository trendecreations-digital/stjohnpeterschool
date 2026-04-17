import React, { useState, lazy, Suspense } from "react";
import { BookOpen, Download, Calendar, FileText, X, ChevronLeft, ChevronRight } from "lucide-react";

const FloatingWhatsApp = lazy(() =>
    import("react-floating-whatsapp").then((m) => ({
        default: m.FloatingWhatsApp,
    }))
);

export default function Magazines() {
    const [gallery, setGallery] = useState(null);
    const [index, setIndex] = useState(0);

    // ✅ Echo Events → now IMAGE GALLERIES
    const echoEvents = [
        {
            title: "Echo Events",
            subtitle: "Edition 1",
            images: [
                "/images/magazines/Echo_Events-Edition_1/1.jpg",
                "/images/magazines/Echo_Events-Edition_1/2.jpg",
                "/images/magazines/Echo_Events-Edition_1/3.jpg",
                "/images/magazines/Echo_Events-Edition_1/4.jpg",
                "/images/magazines/Echo_Events-Edition_1/5.jpg",
                "/images/magazines/Echo_Events-Edition_1/6.jpg",
                "/images/magazines/Echo_Events-Edition_1/7.jpg",
                "/images/magazines/Echo_Events-Edition_1/8.jpg",
            ],
            cover: "/images/magazines/Echo_Events-Edition_1/1.jpg",
        },
        {
            title: "Echo Events",
            subtitle: "Edition 2",
            images: [
                "/images/magazines/Echo_Events-Edition_2/1.jpg",
                "/images/magazines/Echo_Events-Edition_2/2.jpg",
                "/images/magazines/Echo_Events-Edition_2/3.jpg",
                "/images/magazines/Echo_Events-Edition_2/4.jpg",
                "/images/magazines/Echo_Events-Edition_2/5.jpg",
                "/images/magazines/Echo_Events-Edition_2/6.jpg",
                "/images/magazines/Echo_Events-Edition_2/7.jpg",
                "/images/magazines/Echo_Events-Edition_2/8.jpg",
            ],
            cover: "/images/magazines/Echo_Events-Edition_2/1.jpg",
        },
    ];

    // ✅ PDF downloads only here
    const eTidbits = [
        { month: "February 2026", file: "https://drive.google.com/file/d/1ebwJajkD_nOKRtw03kWcNR4Bse8GD2Qh/view?usp=sharing" },
        { month: "December 2025", file: "https://drive.google.com/file/d/1FYZRDzfxFV4aNJBEPNAv3DpsqPY12Iwo/view?usp=sharing" },
        { month: "November 2025", file: "https://drive.google.com/file/d/1nkuvSnocJeOjenrhQp52TQqP4_kXfkHU/view?usp=sharing" },
        { month: "October 2025", file: "https://drive.google.com/file/d/1DccFHwrja5JwNpXcllU0kvl-bH4VUZX3/view?usp=sharing" },
        { month: "September 2025", file: "https://drive.google.com/file/d/1s1EGrYSOVJUlRLkv2cnSPb2xGFdW94KO/view?usp=sharing" },
        { month: "July 2025", file: "https://drive.google.com/file/d/1afzojpwTGU3u28iyKgRDY_jpbPxzEcjI/view?usp=sharing" },
        { month: "June 2025", file: "https://drive.google.com/file/d/126l5Ub_SO1cARmsZL0OywXEBeFtrpE8o/view?usp=sharing" },
        { month: "January 2024", file: "https://drive.google.com/file/d/1FWBGiZTMgbVWbc17pKPbq8r-LqLYFUKd/view?usp=sharing" },
    ];

    const openGallery = (images) => {
        setGallery(images);
        setIndex(0);
    };

    const next = () => setIndex((prev) => (prev + 1) % gallery.length);
    const prev = () => setIndex((prev) => (prev - 1 + gallery.length) % gallery.length);

    return (
        <main className="bg-school-secondary text-gray-800">

            {/* WhatsApp */}
            <Suspense fallback={null}>
                <FloatingWhatsApp
                    phoneNumber="+918778837765"
                    accountName="Support Team"
                    chatMessage="Hi 👋 How can we help you?"
                />
            </Suspense>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-20">

                {/* ================= ECHO EVENTS ================= */}
                <section>
                    <div className="text-center mb-12 max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-red-800 text-uppercase mb-6">
                            ECHO EVENTS (Term Edition)
                        </h2>
                        <p className="text-lg text-gray-800">
                            Echo Events is our Term-Based Magazine Edition that captures the major events, celebrations, competitions, and achievements of each academic term.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 bg-red-800 p-16 rounded-2xl">

                        {echoEvents.map((item, idx) => (
                            <div
                                key={idx}
                                onClick={() => openGallery(item.images)}
                                className="cursor-pointer bg-school-secondary max-w-2xl rounded-xl shadow border overflow-hidden group"
                            >
                                <img
                                    src={item.cover}
                                    className="h-96 w-full object-cover group-hover:scale-105 transition"
                                />

                                <div className="p-4 text-center">
                                    <h4 className="font-bold text-xl text-red-800">{item.title}</h4>
                                    <p className="text-lg text-gray-800">{item.subtitle}</p>
                                    <p className="text-md text-blue-600 mt-2">Click to view gallery</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </section>

                {/* ================= E-TIDBITS ================= */}
                <section>

                    <div className="text-center mb-12 max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-red-800 text-uppercase mb-6">
                            E- Tidbits (Monthly Edition)
                        </h2>
                        <p className="text-lg text-gray-800">
                            E-Tidbits is our Monthly Digital Newsletter that shares quick updates and highlights of ongoing activities in the school.
                        </p>
                    </div>

                    <div className="bg-red-800 p-16 rounded-xl shadow border">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

                            {eTidbits.map((item, idx) => (
                                <a href={item.file} download>
                                    <div key={idx} className="flex justify-between items-center p-4 bg-school-secondary rounded-lg">
                                        <div className="flex items-center gap-3">
                                            <Calendar className="text-red-800"/>
                                            <span>{item.month}</span>
                                        </div>

                                        <Download className="text-red-600 hover:text-yellow-500" />
                                    </div>
                                </a>
                            ))}

                        </div>
                    </div>
                </section>

            </div>

            {/* ================= GALLERY MODAL ================= */}
            {gallery && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">

                    <button
                        onClick={() => setGallery(null)}
                        className="absolute top-5 right-5 text-white"
                    >
                        <X />
                    </button>

                    {/* Prev */}
                    <button onClick={prev} className="absolute left-5 text-white">
                        <ChevronLeft size={30} />
                    </button>

                    {/* Image */}
                    <img
                        src={gallery[index]}
                        alt="Gallery Image"
                        className="max-h-[80vh] max-w-[90%] rounded-lg"
                    />

                    {/* Next */}
                    <button onClick={next} className="absolute right-5 text-white">
                        <ChevronRight size={30} />
                    </button>

                </div>
            )}

        </main>
    );
}