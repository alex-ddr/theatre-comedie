// [TheatreComedie-Vite-Bold] #3
import { theyPlayed } from "@lib/content";

export default function IlsOntJoue() {
    return (
        <main className="mx-auto max-w-3xl px-4 py-12">
            <h1 className="text-3xl font-bold tracking-tight">Ils ont joué</h1>
            <article className="prose prose-neutral dark:prose-invert mt-6">
                <p>{theyPlayed.intro}</p>
                <p>{theyPlayed.body}</p>
                <ul>
                    {theyPlayed.links.map((l, i) => (
                        <li key={i}>{l}</li>
                    ))}
                </ul>
            </article>
        </main>
    );
}
