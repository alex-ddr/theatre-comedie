// [TheatreComedie-Vite] #3
// Minimal marquee style banner for soft prestige cues
export default function Marquee({ items }: { items: string[] }) {
  return (
    <div className="overflow-hidden border-y bg-white/60 dark:bg-neutral-900/60 dark:border-neutral-800">
      <div className="animate-[marquee_28s_linear_infinite] whitespace-nowrap py-2 text-xs sm:text-sm">
        {items.concat(items).map((t, i) => (
          <span key={i} className="mx-4 text-neutral-600 dark:text-neutral-300">
            {t}
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { 0%{ transform: translateX(0) } 100%{ transform: translateX(-50%) } }`}</style>
    </div>
  );
}
