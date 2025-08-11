// [TheatreDynamic] #3
import { Link } from "react-router-dom";
import { author } from "@lib/content";

export default function StageHeader() {
    return (
        <section className="stage section diag-bot">
            <div className="lights"></div>
            <div className="mx-auto max-w-6xl px-4 py-24 sm:py-32">
                <div className="max-w-3xl">
                    <p className="mb-3 text-xs tracking-widest text-white/80 uppercase">
                        Théâtre contemporain • Diffusion internationale
                    </p>
                    <h1 className="h1 text-white">
                        Une scène. Des voix. Vos pièces.
                    </h1>
                    <p className="mt-4 max-w-prose text-white/80">
                        {author.subheadline}
                    </p>
                    <div className="mt-7 flex gap-3">
                        <Link to="/pieces" className="btn btn-primary">
                            Explorer les pièces
                        </Link>
                        <Link
                            to="/par-distribution"
                            className="btn btn-ghost border-white/40 text-white"
                        >
                            Par distribution
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
