// [TheatreComedie-Vite] #3
import { site } from "@lib/content";

export default function FooterLinks() {
    const links = [
        "Accueil",
        "Les pièces",
        "Par distribution",
        "Ils ont joué",
        "Contact",
    ];
    return (
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {links.map((l) => (
                <a key={l} className="link-underline" href="#">
                    {l}
                </a>
            ))}
            <span className="text-muted-foreground ml-auto text-xs">
                {site.email} · {site.phone}
            </span>
        </div>
    );
}
