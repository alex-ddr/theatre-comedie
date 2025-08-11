export default function InfoCard({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <div className="rounded-2xl border bg-white/50 p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/60">
      <h3 className="mb-2 text-base font-semibold">{title}</h3>
      <pre className="text-muted-foreground text-sm whitespace-pre-wrap">
        {content}
      </pre>
    </div>
  );
}
