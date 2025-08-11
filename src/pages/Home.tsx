/* [TheatreDynamic] #3 */
import StageHeader from "@components/StageHeader";
import PlayStrip from "@components/PlayStrip";
import { plays } from "@lib/plays";
import { useReveal } from "@hooks/useReveal";

export default function Home() {
    const refStrip = useReveal();
    return (
        <main>
            <StageHeader />
            <section
                ref={refStrip as any}
                className="section mx-auto max-w-6xl px-4 py-14"
            >
                <header className="mb-6">
                    <h2 className="h2">Programmation</h2>
                    <p className="mt-2 max-w-prose text-neutral-700 dark:text-neutral-300">
                        Une sélection vivante : survolez pour révéler les
                        détails, cliquez pour plonger dans la pièce.
                    </p>
                </header>
                <PlayStrip items={plays.slice(0, 12)} />
            </section>
        </main>
    );
}
