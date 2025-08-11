// [TheatreComedie-Vite-Bold] #3
import { distribution } from "@lib/content";

export default function ParDistribution() {
    return (
        <main className="mx-auto max-w-6xl px-4 py-12">
            <h1 className="mb-6 text-3xl font-bold tracking-tight">
                Par distribution
            </h1>
            <p className="text-muted-foreground mb-6 text-sm">
                Choisissez en fonction de votre distribution.
            </p>
            <div className="overflow-x-auto rounded-2xl border">
                <table className="min-w-full text-sm">
                    <thead style={{ background: "var(--mist)" }}>
                        <tr>
                            <th className="px-4 py-2 text-left">Femmes</th>
                            <th className="px-4 py-2 text-left">Hommes</th>
                            <th className="px-4 py-2 text-left">Pièce</th>
                        </tr>
                    </thead>
                    <tbody>
                        {distribution.map((d, i) => (
                            <tr
                                key={i}
                                className="odd:bg-white even:bg-neutral-50 dark:odd:bg-neutral-950 dark:even:bg-neutral-900"
                            >
                                <td className="px-4 py-2">{d.women}</td>
                                <td className="px-4 py-2">{d.men}</td>
                                <td className="px-4 py-2">{d.title}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    );
}
