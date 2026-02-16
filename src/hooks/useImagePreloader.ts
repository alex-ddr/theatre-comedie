import { useEffect, useState } from 'react';

export function useImagePreloader(imageSrcs: string[]) {
    const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

    useEffect(() => {
        const preloadImages = imageSrcs.map(src => {
            return new Promise<string>((resolve, reject) => {
                const img = new Image();
                img.onload = () => resolve(src);
                img.onerror = () => reject(src);
                img.src = src;
            });
        });

        Promise.allSettled(preloadImages).then(results => {
            const loaded = new Set<string>();
            results.forEach((result, index) => {
                if (result.status === 'fulfilled') {
                    loaded.add(imageSrcs[index]);
                }
            });
            setLoadedImages(loaded);
        });
    }, [imageSrcs]);

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