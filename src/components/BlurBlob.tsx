// [theatre-comedie-vite-ts] #1
import React from "react";
import { motion } from "framer-motion";

type Props = { className?: string; animation?: boolean };

export default function BlurBlob({ className, animation = true }: Props) {
    return (
        <div className={className}>
            {/* Grand blob orange */}
            <motion.div
                className="absolute -top-32 -left-24 h-[40rem] w-[40rem] rounded-full bg-orange-500/20 blur-3xl"
                animate={
                    animation
                        ? {
                              x: [0, 80, -60, 40, -20, 0],
                              y: [0, -50, 70, -30, 40, 0],
                              scale: [1, 1.05, 0.98, 1.03, 0.96, 1],
                              rotate: [0, 10, -8, 6, -4, 0],
                          }
                        : undefined
                }
                transition={
                    animation
                        ? {
                              duration: 35,
                              repeat: Infinity,
                              ease: "easeInOut",
                          }
                        : undefined
                }
            />

            {/* Blob rose moyen */}
            <motion.div
                className="absolute -top-10 right-0 h-[30rem] w-[30rem] rounded-full bg-pink-500/20 blur-3xl"
                animate={
                    animation
                        ? {
                              x: [0, -70, 90, -40, 30, 0],
                              y: [0, 60, -80, 50, -25, 0],
                              scale: [1, 0.94, 1.08, 0.97, 1.04, 1],
                              rotate: [0, -7, 12, -9, 5, 0],
                          }
                        : undefined
                }
                transition={
                    animation
                        ? {
                              duration: 42,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 3,
                          }
                        : undefined
                }
            />

            {/* Blob rose bas */}
            <motion.div
                className="absolute -bottom-50 -left-10 h-[35rem] w-[30rem] rounded-full bg-rose-500/15 blur-3xl"
                animate={
                    animation
                        ? {
                              x: [0, 100, -45, 75, -80, 0],
                              y: [0, -40, 85, -60, 25, 0],
                              scale: [1, 1.06, 0.92, 1.02, 0.99, 1],
                              rotate: [0, 8, -10, 7, -6, 0],
                          }
                        : undefined
                }
                transition={
                    animation
                        ? {
                              duration: 38,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 7,
                          }
                        : undefined
                }
            />
            <motion.div
                className="absolute top-20 right-32 h-[18rem] w-[18rem] rounded-full bg-purple-500/15 blur-2xl"
                animate={
                    animation
                        ? {
                              x: [0, -55, 65, -30, 85, 0],
                              y: [0, 75, -45, 90, -35, 0],
                              scale: [1, 1.12, 0.88, 1.07, 0.95, 1],
                              rotate: [0, -12, 9, -7, 4, 0],
                          }
                        : undefined
                }
                transition={
                    animation
                        ? {
                              duration: 28,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 2,
                          }
                        : undefined
                }
            />

            {/* Très petit blob orange-jaune */}
            <motion.div
                className="absolute top-1/3 left-1/4 h-[12rem] w-[12rem] rounded-full bg-amber-400/10 blur-xl"
                animate={{
                    x: [0, 95, -70, 40, -85, 0],
                    y: [0, -65, 100, -40, 55, 0],
                    scale: [1, 0.85, 1.15, 0.93, 1.09, 1],
                    rotate: [0, 6, -11, 8, -5, 0],
                }}
                transition={{
                    duration: 31,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 12,
                }}
            />

            {/* Blob moyen rouge en bas à droite */}
            <motion.div
                className="absolute right-20 bottom-32 h-[25rem] w-[25rem] rounded-full bg-red-500/12 blur-2xl"
                animate={{
                    x: [0, -85, 60, -90, 45, 0],
                    y: [0, 50, -95, 70, -30, 0],
                    scale: [1, 1.04, 0.91, 1.08, 0.96, 1],
                    rotate: [0, -9, 13, -8, 7, 0],
                }}
                transition={{
                    duration: 45,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 18,
                }}
            />

            {/* Mini blob rose intense */}
            <motion.div
                className="absolute bottom-1/4 left-5/6 h-[8rem] w-[8rem] rounded-full bg-pink-400/18 blur-lg"
                animate={{
                    x: [0, 24, -18, 15, -10, 0],
                    y: [0, 22, -16, 13, -9, 0],
                    scale: [1, 1.08, 0.93, 1.06, 0.91, 1],
                    rotate: [0, 5, -4, 3, -2, 0],
                }}
                transition={{
                    duration: 26,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 9,
                }}
            />
            <motion.div
                className="absolute top-3/5 left-20 h-[35rem] w-[45rem] rounded-full bg-violet-500/10 blur-3xl"
                animate={{
                    x: [0, 110, -90, 120, -70, 0],
                    y: [0, -100, 130, -80, 95, 0],
                    scale: [1, 1.13, 0.89, 1.11, 0.92, 1],
                    rotate: [0, 14, -18, 13, -11, 0],
                }}
                transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 15,
                }}
            />

            {/* Gros blob orange au centre-droit */}
            <motion.div
                className="absolute top-2/5 right-1 h-[38rem] w-[38rem] rounded-full bg-orange-400/12 blur-3xl"
                animate={{
                    x: [0, -85, 60, -70, 45, 0],
                    y: [0, 70, -90, 50, -35, 0],
                    scale: [1, 0.93, 1.08, 0.97, 1.05, 1],
                    rotate: [0, -10, 7, -11, 6, 0],
                }}
                transition={{
                    duration: 37,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 22,
                }}
            />

            {/* Très gros blob rose au centre */}
            <motion.div
                className="absolute top-1/3 left-1/8 h-[45rem] w-[25rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-400/8 blur-3xl"
                animate={{
                    x: [0, 40, -80, 60, -25, 0],
                    y: [0, -70, 45, -55, 85, 0],
                    scale: [1, 1.03, 0.96, 1.06, 0.94, 1],
                    rotate: [0, 12, -9, 13, -8, 0],
                }}
                transition={{
                    duration: 50,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 30,
                }}
            />
        </div>
    );
}
