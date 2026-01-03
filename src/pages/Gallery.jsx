import React, { useState, useEffect } from "react";
import { FloatingWhatsApp } from 'react-floating-whatsapp';

/**
 * GalleryPage.jsx
 * Professional responsive image gallery with Tailwind CSS.
 *
 * Usage: <GalleryPage />
 *
 * Make sure tailwind is configured in your project.
 */

const IMAGES = [
    "/images/gallery/1.JPG",
    "/images/gallery/2.jpg",
    "/images/gallery/3.jpg",
    "/images/gallery/4.jpg",
    "/images/gallery/5.jpg",
    "/images/gallery/6.JPG",
    "/images/gallery/7.JPG",
    "/images/gallery/8.JPG",
    "/images/gallery/9.JPG",
    "/images/gallery/10.JPG",
    "/images/gallery/11.JPG",
    "/images/gallery/12.JPG",
    "/images/gallery/13.JPG",
    "/images/gallery/14.JPG",
    "/images/gallery/15.JPG",
    "/images/gallery/16.JPG",
    "/images/gallery/17.JPG",
    "/images/gallery/18.JPG",
    "/images/gallery/19.JPG",
    "/images/gallery/20.JPG",
    "/images/gallery/21.JPG",
    "/images/gallery/22.JPG",
    "/images/gallery/23.JPG",
    "/images/gallery/24.jpg",
    "/images/gallery/25.png",
    "/images/gallery/26.png",
    "/images/gallery/27.png",
    "/images/gallery/28.jpeg",
];

export default function GalleryPage() {
    const [openIndex, setOpenIndex] = useState(null);

    useEffect(() => {
        function onKey(e) {
            if (openIndex === null) return;
            if (e.key === "Escape") setOpenIndex(null);
            if (e.key === "ArrowRight") setOpenIndex((i) => (i + 1) % IMAGES.length);
            if (e.key === "ArrowLeft")
                setOpenIndex((i) => (i - 1 + IMAGES.length) % IMAGES.length);
        }
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [openIndex]);

    const openLightbox = (idx) => setOpenIndex(idx);
    const closeLightbox = () => setOpenIndex(null);
    const prev = () =>
        setOpenIndex((i) => (i - 1 + IMAGES.length) % IMAGES.length);
    const next = () => setOpenIndex((i) => (i + 1) % IMAGES.length);

    return (
        <main className="min-h-screen bg-school-secondary text-red-800 py-12">
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
            <div className="container mx-auto px-6 lg:px-8">
                <header className="mb-10 text-center">
                    <h1 className="text-4xl sm:text-5xl uppercase font-bold text-red-800"    >
                        Gallery
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gary-800">
                        Explore snapshots from our academic and co-curricular life —
                        classrooms, clubs, sports, events and field trips.
                    </p>
                </header>

                {/* Grid */}
                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {IMAGES.map((img, idx) => (
                        <article
                            key={idx}
                            className="relative bg-red-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                        >
                            <button
                                type="button"
                                onClick={() => openLightbox(idx)}
                                className="group block w-full text-left"
                                aria-label={`Open image: ${img}`}
                            >
                                <div className="w-full h-56 sm:h-48 md:h-44 lg:h-52 overflow-hidden">
                                    <img
                                        src={img}
                                        alt={img}
                                        loading="lazy"
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                {/* overlay icon */}
                                <div className="absolute inset-0 flex items-start justify-end p-3 pointer-events-none">
                  <span className="bg-white/80 text-gray-800 text-xs font-medium px-3 py-1 rounded-full shadow-sm pointer-events-none">
                    View
                  </span>
                                </div>
                            </button>
                        </article>
                    ))}
                </section>

                {/* Lightbox Modal */}
                {openIndex !== null && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Image preview"
                        onClick={closeLightbox}
                    >
                        <div
                            className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close */}
                            <button
                                onClick={closeLightbox}
                                aria-label="Close"
                                className="absolute top-4 right-4 z-20 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow"
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
                                aria-label="Previous"
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
                                aria-label="Next"
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
                                    src={IMAGES[openIndex]}
                                    alt={IMAGES[openIndex]}
                                    loading="lazy"
                                    className="max-h-[75vh] w-auto object-contain"
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
