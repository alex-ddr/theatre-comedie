// [TheatreComedie-Vite-Bold] #3
import { author } from "@lib/content";
import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <section className="hero section angle-bottom">
            <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-20 sm:py-28">
                <div className="max-w-3xl">
                    <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs tracking-widest uppercase">
                        <span>Théâtre contemporain</span> <span>•</span>{" "}
                        <span>Diffusion internationale</span>
                    </p>
                    <h1 className="h1">Pièces & comédies à jouer</h1>
                    <p className="lead mt-4">{author.subheadline}</p>
                    <div className="mt-7 flex gap-3">
                        <Link to="/pieces" className="btn btn-primary">
                            Explorer les pièces
                        </Link>
                        <Link to="/par-distribution" className="btn btn-ghost">
                            Par distribution
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
