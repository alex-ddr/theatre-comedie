// [TheatreComedie-Vite-Bold] #3
import { useState } from "react";
import { site } from "@lib/content";

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("idle");
        try {
            await new Promise((r) => setTimeout(r, 400));
            setStatus("ok");
        } catch {
            setStatus("err");
        }
    }

    return (
        <main className="mx-auto max-w-xl px-4 py-12">
            <h1 className="text-3xl font-bold tracking-tight">Contact</h1>
            <p className="text-muted-foreground mt-2">
                {site.name} — {site.email} — {site.phone}
            </p>

            <form onSubmit={onSubmit} className="mt-6 space-y-4">
                <input
                    name="name"
                    required
                    placeholder="Votre nom"
                    className="w-full rounded-full border px-5 py-2 dark:border-neutral-700"
                />
                <input
                    name="email"
                    type="email"
                    required
                    placeholder="Votre email"
                    className="w-full rounded-full border px-5 py-2 dark:border-neutral-700"
                />
                <textarea
                    name="message"
                    required
                    placeholder="Votre message"
                    rows={5}
                    className="w-full rounded-2xl border px-4 py-2 dark:border-neutral-700"
                />
                <button className="btn btn-primary">Envoyer</button>
                {status === "ok" && (
                    <p className="text-sm text-green-600">Message envoyé.</p>
                )}
                {status === "err" && (
                    <p className="text-sm text-red-600">Erreur. Réessayez.</p>
                )}
            </form>
        </main>
    );
}
