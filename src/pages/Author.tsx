// [theatre-comedie-vite-ts] #1
import React from "react";
import { author } from "@lib/content";

export default function Author() {
    return (
        <div className="mx-auto max-w-3xl px-4 py-10">
            <h1 className="gradient-text mb-4 text-3xl font-semibold">
                {author.headline}
            </h1>
            {author.subheadline && (
                <p className="mb-6 text-white/70">{author.subheadline}</p>
            )}
            <div className="space-y-4 leading-relaxed text-white/80">
                {author.bioBlocks.map((b, i) => (
                    <p key={i}>{b}</p>
                ))}
            </div>
        </div>
    );
}
