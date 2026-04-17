import React, { useState, useEffect, lazy, Suspense } from "react";
import galleryData from "../utils/gallery.json";

const FloatingWhatsApp = lazy(() =>
    import("react-floating-whatsapp").then((m) => ({
        default: m.FloatingWhatsApp,
    }))
);

export default function GalleryPage() {
    const [openIndex, setOpenIndex] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [filteredImages, setFilteredImages] = useState([]);

    // Initial load (all images)
    useEffect(() => {
        const allImages = Object.values(galleryData.images).flat();
        setFilteredImages(allImages);
    }, []);

    // Filter logic
    useEffect(() => {
        if (selectedCategory === "all") {
            setFilteredImages(Object.values(galleryData.images).flat());
        } else {
            setFilteredImages(galleryData.images[selectedCategory] || []);
        }
        setOpenIndex(null);
    }, [selectedCategory]);

    // Keyboard navigation
    useEffect(() => {
        function onKey(e) {
            if (openIndex === null) return;
            if (e.key === "Escape") setOpenIndex(null);
            if (e.key === "ArrowRight")
                setOpenIndex((i) => (i + 1) % filteredImages.length);
            if (e.key === "ArrowLeft")
                setOpenIndex(
                    (i) => (i - 1 + filteredImages.length) % filteredImages.length
                );
        }
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [openIndex, filteredImages]);

    const openLightbox = (idx) => setOpenIndex(idx);
    const closeLightbox = () => setOpenIndex(null);

    const prev = () =>
        setOpenIndex((i) => (i - 1 + filteredImages.length) % filteredImages.length);

    const next = () =>
        setOpenIndex((i) => (i + 1) % filteredImages.length);

    return (
        <main className="min-h-screen bg-school-secondary text-red-800 py-12">
            {/* WhatsApp */}
            <Suspense fallback={null}>
                <FloatingWhatsApp
                    phoneNumber="+918778837765"
                    accountName="Support Team"
                />
            </Suspense>

            <div className="container mx-auto px-6 lg:px-8">
                {/* Header */}
                <header className="mb-10 text-center">
                    <h1 className="text-4xl sm:text-5xl uppercase font-bold">
                        Gallery
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-700">
                        Explore snapshots from our academic and co-curricular life.
                    </p>
                </header>

                {/* FILTERS */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {galleryData.categories.map((cat) => (
                        <button
                            key={cat.key}
                            onClick={() => setSelectedCategory(cat.key)}
                            className={`px-8 py-2 rounded-xl border transition ${
                                selectedCategory === cat.key
                                    ? "bg-red-800 text-school-secondary shadow-2xl"
                                    : "bg-gray-50 text-gray-800 hover:bg-red-800 hover:text-school-secondary hover:shadow-black"
                            }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* GRID */}
                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredImages.map((img, idx) => (
                        <article
                            key={idx}
                            className="relative bg-red-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
                        >
                            <button
                                onClick={() => openLightbox(idx)}
                                className="group block w-full"
                            >
                                <div className="w-full h-56 overflow-hidden">
                                    <img
                                        src={img}
                                        alt={`gallery-${idx}`}
                                        loading="lazy"
                                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                    />
                                </div>

                                {/* overlay */}
                                <div className="absolute inset-0 flex items-start justify-end p-3">
                  <span className="bg-white/80 text-gray-800 text-xs px-3 py-1 rounded-full">
                    View
                  </span>
                                </div>
                            </button>
                        </article>
                    ))}
                </section>

                {/* LIGHTBOX MODAL */}
                {openIndex !== null && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
                        role="dialog"
                        aria-modal="true"
                        onClick={closeLightbox}
                    >
                        <div
                            className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close */}
                            <button
                                onClick={closeLightbox}
                                className="absolute top-4 right-4 z-20 bg-white/90 hover:bg-white rounded-full p-2 shadow"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414L11.414 10l2.293 2.293a1 1 0 01-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 10 6.293 7.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>

                            {/* Prev */}
                            <button
                                onClick={prev}
                                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white rounded-full p-2 shadow"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-gray-800"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 19l-7-7 7-7"
                                    />
                                </svg>
                            </button>

                            {/* Next */}
                            <button
                                onClick={next}
                                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white rounded-full p-2 shadow"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-gray-800"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </button>

                            {/* Image */}
                            <div className="w-full bg-black/90 flex items-center justify-center">
                                <img
                                    src={filteredImages[openIndex]}
                                    alt={`preview-${openIndex}`}
                                    className="max-h-[75vh] object-contain"
                                />
                            </div>

                            {/* Counter */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
                                {openIndex + 1} / {filteredImages.length}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}