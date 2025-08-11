// [theatre-comedie-vite-ts] #1
import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "@components/Nav";
import Footer from "@components/Footer";
import Home from "@pages/Home";
import Plays from "@pages/Plays";
import PlayDetail from "@pages/PlayDetail";
import Author from "@pages/Author";
import Contact from "@pages/Contact";
import NotFound from "@pages/NotFound";

export default function App() {
    return (
        <div className="bg-radial-orange-pink min-h-screen">
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pieces" element={<Plays />} />
                <Route path="/pieces/:slug" element={<PlayDetail />} />
                <Route path="/auteur" element={<Author />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    );
}
