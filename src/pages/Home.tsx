import Hero from "@components/Hero";
import InfoCard from "@components/InfoCard";
import PlayCard from "@components/PlayCard";
import { plays, site } from "@lib/content";
import { useReveal } from "@hooks/useReveal";

export default function Home() {
    const refInfo = useReveal();

    return (
        <main>
            <Hero />

            <section className="mx-auto max-w-6xl px-4 py-12">
                <header className="mb-6 flex items-end justify-between">
                    <h2 className="text-2xl font-semibold tracking-tight">
                        À l’affiche
                    </h2>
                </header>
                <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {plays.slice(0, 6).map((p) => (
                        <PlayCard key={p.slug} p={p} />
                    ))}
                </ul>
            </section>

            <section
                ref={refInfo as any}
                className="mx-auto max-w-6xl rounded-3xl px-4 pb-16"
            >
                <h2 className="mb-4 text-2xl font-semibold tracking-tight">
                    Infos pratiques
                </h2>
                <div className="grid gap-6 lg:grid-cols-3">
                    <InfoCard title="Adresse" content={site.address} />
                    <InfoCard
                        title="Horaires billetterie"
                        content={site.boxOffice}
                    />
                    <InfoCard
                        title="Contact"
                        content={`${site.phone}\n${site.email}`}
                    />
                </div>
            </section>
        </main>
    );
}
