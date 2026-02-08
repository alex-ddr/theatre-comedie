export default function Tag({ children }: { children: React.ReactNode }) {
    return (
        <span className="shadow-sm rounded-full border border-pink-700/40 bg-pink-800/30 px-3 py-1 font-medium text-white transition-colors hover:border-pink-600/60 hover:bg-pink-800/50 hover:text-white">{children}</span>
    );
}
