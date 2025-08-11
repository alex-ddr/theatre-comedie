// [TheatreComedie-Vite] #3
import { author, highlights } from "@lib/content";
import { Link } from "react-router-dom";
import { useReveal } from "@hooks/useReveal";

export default function Hero() {
    const ref = useReveal();
    return (
        <section className="relative overflow-hidden text-[color:var(--foreground)]">
            <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 sm:py-24">
                <div ref={ref as any} className="max-w-3xl">
                    <p className="mb-3 text-sm tracking-widest text-[color:var(--brand-2)] uppercase">
                        Théâtre contemporain
                    </p>
                    <h1 className="h1">{author.headline}</h1>
                    <p className="text-muted-foreground mt-3 text-lg">
                        {author.subheadline}
                    </p>
                    <p className="text-muted-foreground mt-4">
                        {highlights.tagline}
                    </p>
                    <div className="mt-6 flex gap-3">
                        <Link
                            to="/pieces"
                            className="rounded-xl bg-[color:var(--brand-1)] px-4 py-2 text-white transition hover:opacity-90"
                        >
                            Explorer les pièces
                        </Link>
                        <Link
                            to="/contact"
                            className="rounded-xl border border-[color:var(--brand-1)] px-4 py-2 text-[color:var(--brand-1)] transition hover:bg-[color:var(--brand-1)]/10"
                        >
                            Nous contacter
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
