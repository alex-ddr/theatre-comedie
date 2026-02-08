import { Routes, Route } from "react-router-dom";
import Nav from "@/components/layout/Nav";
import ScrollToTop from "@/components/layout/ScrollToTop";
import Home from "@/pages/Home";
import PlayDetail from "@/pages/PlayDetail";
import TheyPlayed from "@/pages/TheyPlayed";
import Author from "@/pages/Author";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";
import Footer from "@/components/layout/Footer";
import BlurBlob from "@/components/ui/BlurBlob";

export default function App() {
    return (
        <div className="relative min-h-screen flex flex-col">
            <BlurBlob className="pointer-events-none fixed inset-0 z-0 overflow-hidden" />
            <ScrollToTop />
            <Nav />
            <main className="relative z-10 flex-1">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/pieces/:slug" element={<PlayDetail />} />
                    <Route path="/ils-ont-joue" element={<TheyPlayed />} />
                    <Route path="/auteur" element={<Author />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}
