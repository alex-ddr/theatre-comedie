import { useMemo } from "react";
import { motion } from "framer-motion";

type BlobSeed = {
    size: string;
    color: string;
    blur: string;
    range: number;
    dur: [number, number];
    scaleAmp: number;
};

const large: BlobSeed[] = [
    { size: "h-[30rem] w-[26rem]", color: "bg-violet-500/35", blur: "blur-2xl", range: 60, dur: [45, 60], scaleAmp: 0.03 },
];

const medium: BlobSeed[] = [
    { size: "h-[18rem] w-[18rem]", color: "bg-purple-400/45", blur: "blur-xl", range: 50, dur: [40, 50], scaleAmp: 0.06 },
    { size: "h-[20rem] w-[20rem]", color: "bg-amber-400/40", blur: "blur-xl", range: 55, dur: [42, 52], scaleAmp: 0.05 },
];

const small: BlobSeed[] = [
    { size: "h-24 w-24", color: "bg-orange-400/60", blur: "blur-lg", range: 35, dur: [28, 36], scaleAmp: 0.15 },
    { size: "h-20 w-20", color: "bg-pink-400/60", blur: "blur-md", range: 30, dur: [26, 34], scaleAmp: 0.12 },
];

// Particules lumineuses optimisées
const particles: BlobSeed[] = [
    { size: "h-3 w-3", color: "bg-white/90", blur: "blur-sm", range: 80, dur: [8, 12], scaleAmp: 0.4 },
    { size: "h-2 w-2", color: "bg-yellow-300/90", blur: "blur-[2px]", range: 70, dur: [7, 11], scaleAmp: 0.5 },
    { size: "h-4 w-4", color: "bg-orange-300/80", blur: "blur-sm", range: 90, dur: [9, 13], scaleAmp: 0.3 },
    { size: "h-2.5 w-2.5", color: "bg-pink-300/85", blur: "blur-[3px]", range: 75, dur: [8, 12], scaleAmp: 0.4 },
    { size: "h-3 w-3", color: "bg-amber-200/90", blur: "blur-sm", range: 85, dur: [10, 14], scaleAmp: 0.35 },
    { size: "h-2 w-2", color: "bg-rose-300/85", blur: "blur-[2px]", range: 65, dur: [7, 11], scaleAmp: 0.45 },
    { size: "h-3.5 w-3.5", color: "bg-white/85", blur: "blur-sm", range: 80, dur: [9, 13], scaleAmp: 0.35 },
    { size: "h-2 w-2", color: "bg-yellow-200/90", blur: "blur-[2px]", range: 70, dur: [8, 12], scaleAmp: 0.5 },
    { size: "h-4 w-4", color: "bg-fuchsia-300/75", blur: "blur-sm", range: 75, dur: [10, 14], scaleAmp: 0.3 },
    { size: "h-2.5 w-2.5", color: "bg-orange-200/85", blur: "blur-[3px]", range: 85, dur: [9, 13], scaleAmp: 0.4 },
    { size: "h-3 w-3", color: "bg-pink-200/90", blur: "blur-sm", range: 90, dur: [11, 15], scaleAmp: 0.35 },
    { size: "h-2 w-2", color: "bg-amber-300/85", blur: "blur-[2px]", range: 80, dur: [8, 12], scaleAmp: 0.45 },
];

function rand(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

function randWaypoints(range: number, n: number) {
    const pts = [0];
    for (let i = 0; i < n; i++) pts.push(rand(-range, range));
    pts.push(0);
    return pts;
}

function breathe(steps: number) {
    const pts: number[] = [0.8];
    for (let i = 0; i < steps; i++) {
        pts.push(rand(0.3, 0.6), rand(0.7, 1), rand(0.2, 0.45));
    }
    pts.push(0.8);
    return pts;
}

function edgeBias() {
    const v = Math.random();
    return v < 0.5 ? rand(-30, 15) : rand(75, 115);
}

function buildBlobs() {
    const allSeeds = [...large, ...medium, ...small];
    const nL = large.length;
    const nM = medium.length;
    const nS = small.length;

    const result = allSeeds.map((s, i) => {
        let top: number, left: number;

        if (i < nL) {
            top = edgeBias();
            left = edgeBias();
        } else if (i < nL + nM) {
            top = rand(-5, 95);
            left = rand(-5, 95);
        } else {
            top = rand(5, 90);
            left = rand(5, 90);
        }

        const dur = rand(s.dur[0], s.dur[1]);
        const x = randWaypoints(s.range, 2);
        const y = randWaypoints(s.range, 2);
        const scale = [1, 1 + rand(-s.scaleAmp, s.scaleAmp), 1];
        const opacity = breathe(2);
        const breathDur = rand(35, 60);

        return {
            cls: `absolute rounded-full ${s.size} ${s.color} ${s.blur}`,
            style: { top: `${Math.round(top)}%`, left: `${Math.round(left)}%`, opacity: 0.7 },
            x, y, scale, dur, opacity, breathDur,
        };
    });

    // Ajouter les particules lumineuses dispersées
    particles.forEach((p) => {
        const top = rand(0, 100);
        const left = rand(0, 100);
        const dur = rand(p.dur[0], p.dur[1]);
        const x = randWaypoints(p.range, 2);
        const y = randWaypoints(p.range, 2);
        const scale = [1, 1 + rand(-p.scaleAmp, p.scaleAmp), 1];
        const opacity = [rand(0.4, 0.8), rand(0.6, 1), rand(0.3, 0.7), rand(0.5, 0.9), rand(0.4, 0.8)];
        
        result.push({
            cls: `absolute rounded-full ${p.size} ${p.color} ${p.blur}`,
            style: { top: `${Math.round(top)}%`, left: `${Math.round(left)}%`, opacity: 0.6 },
            x, y, scale, dur, opacity, breathDur: dur * 2,
        });
    });

    // Gros blob orange statique (précalculé)
    result.push({
        cls: "absolute rounded-full h-[55rem] w-[55rem] bg-orange-500/55 blur-[100px]",
        style: { top: "5%", left: "-12%", opacity: 0.6 },
        x: [0, 10, 0],
        y: [0, 8, 0],
        scale: [1],
        dur: 80,
        opacity: [0.65],
        breathDur: 80,
    });

    // Gros blob rose statique (précalculé)
    result.push({
        cls: "absolute rounded-full h-[60rem] w-[60rem] bg-rose-500/55 blur-[100px]",
        style: { top: "30%", right: "-15%", left: "auto", opacity: 0.6 },
        x: [0, -12, 0],
        y: [0, 10, 0],
        scale: [1],
        dur: 90,
        opacity: [0.65],
        breathDur: 90,
    });

    // Blob d'accentuation centrale (subtil)
    result.push({
        cls: "absolute rounded-full h-[40rem] w-[40rem] bg-indigo-400/20 blur-3xl",
        style: { top: "-8%", left: "50%", opacity: 0.55 },
        x: [0, 12, 0],
        y: [0, 8, 0],
        scale: [1],
        dur: 70,
        opacity: [0.655],
        breathDur: 70,
    });

    return result;
}

export default function BlurBlob({ className, animation = true }: { className?: string; animation?: boolean }) {
    const blobs = useMemo(buildBlobs, []);

    return (
        <div className={className}>
            {blobs.map((b, i) => (
                <motion.div
                    key={i}
                    className={b.cls}
                    style={{ ...b.style, willChange: animation ? 'transform, opacity' : 'auto' }}
                    animate={animation ? { x: b.x, y: b.y, scale: b.scale, opacity: b.opacity } : undefined}
                    transition={animation ? {
                        x: { duration: b.dur, repeat: Infinity, ease: "linear" },
                        y: { duration: b.dur, repeat: Infinity, ease: "linear" },
                        scale: { duration: b.dur, repeat: Infinity, ease: "linear" },
                        opacity: { duration: b.breathDur, repeat: Infinity, ease: "linear" },
                    } : undefined}
                />
            ))}
        </div>
    );
}
