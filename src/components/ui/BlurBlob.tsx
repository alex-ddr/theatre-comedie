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
    { size: "h-[34rem] w-[34rem]", color: "bg-orange-500/40", blur: "blur-3xl", range: 120, dur: [30, 45], scaleAmp: 0.06 },
    { size: "h-[28rem] w-[28rem]", color: "bg-pink-500/35", blur: "blur-3xl", range: 110, dur: [35, 48], scaleAmp: 0.08 },
    { size: "h-[30rem] w-[26rem]", color: "bg-violet-500/30", blur: "blur-3xl", range: 100, dur: [32, 42], scaleAmp: 0.07 },
    { size: "h-[32rem] w-[32rem]", color: "bg-rose-500/30", blur: "blur-3xl", range: 110, dur: [34, 44], scaleAmp: 0.06 },
    { size: "h-[36rem] w-[30rem]", color: "bg-fuchsia-500/25", blur: "blur-3xl", range: 130, dur: [36, 50], scaleAmp: 0.05 },
    { size: "h-[26rem] w-[32rem]", color: "bg-purple-500/30", blur: "blur-3xl", range: 100, dur: [30, 42], scaleAmp: 0.07 },
];

const medium: BlobSeed[] = [
    { size: "h-[16rem] w-[16rem]", color: "bg-purple-400/35", blur: "blur-2xl", range: 90, dur: [24, 36], scaleAmp: 0.12 },
    { size: "h-[20rem] w-[20rem]", color: "bg-amber-400/30", blur: "blur-2xl", range: 100, dur: [26, 38], scaleAmp: 0.1 },
    { size: "h-[22rem] w-[22rem]", color: "bg-fuchsia-500/25", blur: "blur-2xl", range: 80, dur: [28, 42], scaleAmp: 0.09 },
    { size: "h-[18rem] w-[18rem]", color: "bg-rose-400/28", blur: "blur-2xl", range: 85, dur: [25, 37], scaleAmp: 0.11 },
    { size: "h-[14rem] w-[20rem]", color: "bg-orange-400/25", blur: "blur-2xl", range: 95, dur: [27, 40], scaleAmp: 0.1 },
];

const small: BlobSeed[] = [
    { size: "h-24 w-24", color: "bg-orange-300/50", blur: "blur-xl", range: 60, dur: [14, 22], scaleAmp: 0.3 },
    { size: "h-20 w-20", color: "bg-pink-300/50", blur: "blur-lg", range: 55, dur: [12, 20], scaleAmp: 0.25 },
    { size: "h-16 w-16", color: "bg-rose-300/45", blur: "blur-lg", range: 65, dur: [15, 24], scaleAmp: 0.25 },
    { size: "h-28 w-28", color: "bg-violet-300/40", blur: "blur-xl", range: 50, dur: [16, 26], scaleAmp: 0.2 },
    { size: "h-14 w-14", color: "bg-amber-300/50", blur: "blur-md", range: 45, dur: [12, 20], scaleAmp: 0.35 },
    { size: "h-20 w-20", color: "bg-fuchsia-300/45", blur: "blur-lg", range: 55, dur: [14, 22], scaleAmp: 0.3 },
    { size: "h-16 w-16", color: "bg-purple-300/45", blur: "blur-lg", range: 50, dur: [13, 21], scaleAmp: 0.28 },
    { size: "h-24 w-24", color: "bg-rose-300/40", blur: "blur-xl", range: 55, dur: [15, 23], scaleAmp: 0.25 },
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
        const x = randWaypoints(s.range, 4);
        const y = randWaypoints(s.range, 4);
        const scale = [1, 1 + rand(-s.scaleAmp, s.scaleAmp), 1 - rand(0, s.scaleAmp), 1 + rand(-s.scaleAmp, s.scaleAmp), 1];
        const opacity = breathe(3);
        const breathDur = rand(25, 50);

        return {
            cls: `absolute rounded-full ${s.size} ${s.color} ${s.blur}`,
            style: { top: `${Math.round(top)}%`, left: `${Math.round(left)}%`, opacity: 0.8 },
            x, y, scale, dur, opacity, breathDur,
        };
    });

    result.push({
        cls: "absolute rounded-full h-[44rem] w-[50rem] bg-indigo-400/15 blur-[120px]",
        style: { top: "-10%", left: "50%", opacity: 0.8 },
        x: [0, 20, -15, 10, 0],
        y: [0, 15, -10, 12, 0],
        scale: [1, 1.03, 0.97, 1.02, 1],
        dur: 50,
        opacity: [0.8, 0.6, 0.9, 0.5, 0.85, 0.7, 0.8],
        breathDur: 40,
    });

    result.push({
        cls: "absolute rounded-full h-[50rem] w-[60rem] bg-orange-500/[0.5] blur-[200px]",
        style: { top: "10%", left: "-15%", opacity: 0.2 },
        x: [0, 30, -20, 15, 0],
        y: [0, -20, 25, -15, 0],
        scale: [1, 1.02, 0.98, 1.01, 1],
        dur: 60,
        opacity: [0.6, 0.45, 0.65, 0.4, 0.6],
        breathDur: 55,
    });

    result.push({
        cls: "absolute rounded-full h-[50rem] w-[60rem] bg-rose-500/[0.5] blur-[200px]",
        style: { top: "40%", left: "auto", opacity: 0.2 },
        x: [0, -25, 20, -10, 0],
        y: [0, 15, -20, 10, 0],
        scale: [1, 1.01, 0.99, 1.02, 1],
        dur: 65,
        opacity: [0.6, 0.4, 0.55, 0.35, 0.6],
        breathDur: 60,
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
                    style={b.style}
                    animate={animation ? { x: b.x, y: b.y, scale: b.scale, opacity: b.opacity } : undefined}
                    transition={animation ? {
                        x: { duration: b.dur, repeat: Infinity, ease: "easeInOut" },
                        y: { duration: b.dur, repeat: Infinity, ease: "easeInOut" },
                        scale: { duration: b.dur, repeat: Infinity, ease: "easeInOut" },
                        opacity: { duration: b.breathDur, repeat: Infinity, ease: "easeInOut" },
                    } : undefined}
                />
            ))}
        </div>
    );
}
