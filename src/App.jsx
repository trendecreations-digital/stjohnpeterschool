import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense, memo } from "react";

import ScrollToTop from "./components/ui/ScrollToTop.jsx";

// Memoized static layout components
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import PageLoader from "./components/PageLoader.jsx";

const MemoHeader = memo(Header);
const MemoFooter = memo(Footer);

// Lazy-loaded static pages (route-based splitting)
const Home = lazy(() => import("./pages/Home.jsx"));
const AboutPage = lazy(() => import("./pages/About.jsx"));
const CurriculumPage = lazy(() => import("./pages/Curriculum.jsx"));
const InfrastructurePage = lazy(() => import("./pages/Infrastructure.jsx"));
const GalleryPage = lazy(() => import("./pages/Gallery.jsx"));
const ContactPage = lazy(() => import("./pages/Contact.jsx"));
const NotFoundPage = lazy(() => import("./pages/PageNotFound.jsx"));

// Lightweight loader (no layout shift)


export default function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />

            <MemoHeader />

            {/* Single Suspense for all static routes */}
            <Suspense fallback={<PageLoader />}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/curriculum" element={<CurriculumPage />} />
                    <Route path="/infrastructure" element={<InfrastructurePage />} />
                    <Route path="/gallery" element={<GalleryPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Suspense>

            <MemoFooter />
        </BrowserRouter>
    );
}