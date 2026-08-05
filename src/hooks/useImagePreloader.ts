import { useEffect, useState } from 'react';

export function useImagePreloader(imageSrcs: string[], concurrency = 4) {
    const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

    useEffect(() => {
        if (!imageSrcs || imageSrcs.length === 0) {
            setLoadedImages(new Set());
            return;
        }

        let cancelled = false;

        async function run() {
            const loaded = new Set<string>();

            // Process images in batches to avoid launching too many parallel loads
            for (let i = 0; i < imageSrcs.length; i += concurrency) {
                const batch = imageSrcs.slice(i, i + concurrency).map(src => {
                    return new Promise<string>((resolve, reject) => {
                        const img = new Image();
                        img.onload = () => resolve(src);
                        img.onerror = () => reject(src);
                        img.src = src;
                    });
                });

                // wait for the batch to settle before continuing
                // eslint-disable-next-line no-await-in-loop
                const results = await Promise.allSettled(batch);
                results.forEach((res, idx) => {
                    if (res.status === 'fulfilled') {
                        loaded.add(imageSrcs[i + idx]);
                    }
                });

                if (cancelled) return;
                // update state incrementally to allow progressive rendering
                setLoadedImages(new Set(loaded));
            }
        }

        run().catch(() => {});

        return () => {
            cancelled = true;
        };
    }, [imageSrcs, concurrency]);

    return loadedImages;
}

export function preloadImage(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = reject;
        img.src = src;
    });
}