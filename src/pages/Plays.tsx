// [theatre-comedie-vite-ts] #1
import React from "react";
import { getAllPlays } from "@lib/content";
import PlayCard from "@components/PlayCard";

export default function Plays() {
    const plays = getAllPlays();
    return (
        <div className="mx-auto max-w-6xl px-4 py-10">
            <h1 className="gradient-text mb-6 text-3xl font-semibold">
                Toutes les pièces
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {plays.map((p) => (
                    <PlayCard key={p.slug} play={p} />
                ))}
            </div>
        </div>
    );
}
