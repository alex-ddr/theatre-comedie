export default function Hero({ title, subtitle }: { title: string; subtitle?: string }) {
    return (
        <section className="relative overflow-hidden pb-12">
            <div className="relative z-10 mx-auto flex min-h-[32vh] max-w-6xl flex-col items-center justify-center px-4 py-16 text-center">
                <h1 className="gradient-text text-4xl leading-tight font-extrabold tracking-tight md:text-6xl">
                    {title}
                </h1>
                {subtitle && (
                    <p className="mt-5 text-base text-white/60 md:text-lg w-2/3">
                        {subtitle}
                    </p>
                )}
            </div>
            <svg
                className="absolute bottom-0 left-0 z-20 block h-16 w-full"
                viewBox="0 0 1440 120"
                preserveAspectRatio="none"
                aria-hidden="true"
            >
                <path 
    d="M0,60 C360,160 1080,-40 1440,60 L1440,120 L0,120 Z" 
    fill="rgba(11,11,18,0.55)" 
/>
            </svg>
        </section>
    );
}
