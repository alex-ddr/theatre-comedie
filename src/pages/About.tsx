import { about } from "@lib/content";

export default function About() {
    return (
        <main className="mx-auto max-w-3xl px-4 py-12">
            <h1 className="text-3xl font-bold tracking-tight">À propos</h1>
            <article className="prose prose-neutral dark:prose-invert mt-6">
                <p>{about.bio}</p>
                <h2>Démarche</h2>
                <p>{about.approach}</p>
                <h2>Références</h2>
                <ul>
                    {about.refs.map((r) => (
                        <li key={r}>{r}</li>
                    ))}
                </ul>
            </article>
        </main>
    );
}
