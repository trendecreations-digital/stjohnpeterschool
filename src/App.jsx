import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import AboutPage from "./pages/About.jsx";
import CurriculumPage from "./pages/Curriculum.jsx";
import InfrastructurePage from "./pages/Infrastructure.jsx";
import GalleryPage from "./pages/Gallery.jsx";
import NotFoundPage from "./pages/PageNotFound.jsx";
import ContactPage from "./pages/Contact.jsx";
import ScrollToTop from "./components/ui/ScrollToTop.jsx";
import ComingSoon from './pages/ComingSoon.jsx';

const SportsActivities = () => <div>Sports Activities</div>;

export default function App() {
    return (
        <ComingSoon/>
        
        // <BrowserRouter>
        //     <ScrollToTop/>
        //     <Header/>
        //     <div>
        //         <Routes>
        //             <Route path="/" element={<Home />} />
        //             <Route path="/about" element={<AboutPage/>} />
        //             <Route path="/curriculum" element={<CurriculumPage/>} />
        //             <Route path="/infrastructure" element={<InfrastructurePage />} />
        //             <Route path="/gallery" element={<GalleryPage />} />
        //             <Route path="/contact" element={<ContactPage />} />
        //             {/* 404 Not Found Route */}
        //             <Route path="*" element={<NotFoundPage />} />
        //         </Routes>
        //     </div>
        //     <Footer/>
        // </BrowserRouter>
    );
}