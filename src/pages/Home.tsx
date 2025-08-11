// [TheatreComedie-Vite-Bold] #3
import Hero from "@components/Hero";
import PlayCard from "@components/PlayCard";
import { plays } from "@lib/content";

export default function Home() {
    console.log(plays);
    return (
        <main>
            <Hero />
            <section className="section mx-auto max-w-6xl px-4 py-14">
                <header className="mb-6 flex items-end justify-between">
                    <h2 className="h2">À l’affiche</h2>
                </header>
                <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {plays.slice(0, 9).map((p) => (
                        <PlayCard key={p.slug} p={p} />
                    ))}
                </ul>
            </section>
        </main>
    );
}
