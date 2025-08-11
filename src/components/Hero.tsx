import { highlights } from "@lib/content";
import { Link } from "react-router-dom";
import { useReveal } from "@hooks/useReveal";

export default function Hero() {
    const ref = useReveal();

    return (
        <section className="gradient-hero relative overflow-hidden text-white">
            <div
                ref={ref as any}
                className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 sm:py-24"
            >
                <div className="max-w-2xl">
                    <p className="mb-2 text-sm tracking-widest text-neutral-300 uppercase">
                        Théâtre contemporain
                    </p>
                    <h1 className="text-4xl leading-tight font-extrabold sm:text-5xl">
                        Programmation vive. Comédies qui claquent. Rires qui
                        restent.
                    </h1>
                    <p className="mt-4 text-neutral-200">
                        {highlights.tagline}
                    </p>
                    <div className="mt-6 flex gap-3">
                        <Link
                            to="/pieces"
                            className="rounded-xl bg-white px-4 py-2 text-neutral-900 transition hover:opacity-90"
                        >
                            Explorer les pièces
                        </Link>
                        <Link
                            to="/contact"
                            className="rounded-xl border border-white px-4 py-2 transition hover:bg-white/10"
                        >
                            Nous contacter
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
