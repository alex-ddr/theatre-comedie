// [TheatreComedie-Vite] #3
export default function InfoCard({ title, content }: { title: string; content: string }) {
  return (
    <div className="card p-6">
      <h3 className="mb-2 text-base font-semibold">{title}</h3>
      <pre className="whitespace-pre-wrap text-sm text-muted-foreground">{content}</pre>
    </div>
  );
}
