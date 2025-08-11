// [TheatreComedie-Vite] #3
import { author } from "@lib/content";
import { useReveal } from "@hooks/useReveal";

export default function About() {
    const ref = useReveal();
    return (
        <main className="mx-auto max-w-3xl px-4 py-12">
            <h1 className="text-3xl font-bold tracking-tight">L’auteur</h1>
            <article
                ref={ref as any}
                className="prose prose-neutral dark:prose-invert mt-6"
            >
                {author.bioBlocks.map((p, i) => (
                    <p key={i}>{p}</p>
                ))}
            </article>
        </main>
    );
}
