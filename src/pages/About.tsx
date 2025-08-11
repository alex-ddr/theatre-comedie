// [TheatreComedie-Vite-Bold] #3
import { author } from "@lib/content";

export default function About() {
    return (
        <main className="mx-auto max-w-3xl px-4 py-12">
            <h1 className="text-3xl font-bold tracking-tight">L’auteur</h1>
            <article className="prose prose-neutral dark:prose-invert mt-6">
                {author.bioBlocks.map((p, i) => (
                    <p key={i}>{p}</p>
                ))}
            </article>
        </main>
    );
}
