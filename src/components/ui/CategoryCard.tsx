import { motion } from "framer-motion";

type Props = {
    eyebrow?: string;
    title: string;
    bullets?: string[];
    cta?: { label: string; href: string };
    delay?: number;
};

export default function CategoryCard({
    eyebrow,
    title,
    bullets,
    cta,
    delay = 0,
}: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="glass rounded-3xl p-5"
        >
            {eyebrow && (
                <div className="mb-1 text-xs tracking-wide text-white/60 uppercase">
                    {eyebrow}
                </div>
            )}
            <h3 className="gradient-text text-lg font-semibold">{title}</h3>
            {bullets && bullets.length > 0 && (
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-white/75">
                    {bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                    ))}
                </ul>
            )}
            {cta && (
                <a href={cta.href} className="btn-primary mt-4 inline-flex">
                    {cta.label}
                </a>
            )}
        </motion.div>
    );
}
