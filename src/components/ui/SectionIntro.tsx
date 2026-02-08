export default function SectionIntro({ title, subtitle }: { title: string; subtitle?: string }) {
    return (
        <div className="mb-4">
            <h2 className="gradient-text text-2xl font-semibold">{title}</h2>
            {subtitle && <p className="mt-1 text-sm text-white/60">{subtitle}</p>}
        </div>
    );
}