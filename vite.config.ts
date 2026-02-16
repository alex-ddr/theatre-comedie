import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": "/src",
        },
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom'],
                    router: ['react-router-dom'],
                    motion: ['framer-motion']
                }
            }
        },
        chunkSizeWarningLimit: 1000
    },
    optimizeDeps: {
        include: ['react', 'react-dom', 'react-router-dom', 'framer-motion']
    }
});
