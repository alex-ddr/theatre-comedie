export default function Tag({ children, genre }: { children: React.ReactNode; genre?: boolean }) {
    const base = "shadow-sm rounded-full px-3 py-1 font-medium text-white transition-colors";
    const pink = "border border-pink-500/80 bg-pink-800/50 hover:border-pink-600/60 hover:bg-pink-800/70 hover:text-white";
    const orange = "border border-orange-500/80 gradient-background-tag hover:border-orange-600/60 hover:bg-orange-800/60 hover:text-white";
    return (
        <span className={base + ' ' + (genre ? orange : pink)}>{children}</span>
    );
}
