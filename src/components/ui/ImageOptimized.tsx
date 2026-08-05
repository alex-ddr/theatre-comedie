import { useState } from "react";

type Props = {
    src: string;
    webp?: string | null;
    webpSmall?: string | null;
    alt: string;
    className?: string;
    width?: number;
    height?: number;
    sizes?: string;
    priority?: boolean;
    preferSmall?: boolean; // when true, use webp small as img src when available
    onError?: () => void;
};

export default function ImageOptimized({ src, webp, webpSmall, alt, className, width, height, sizes, priority = false, preferSmall = false, onError }: Props) {
    const [ok, setOk] = useState(true);

    if (!ok) {
        return (
            <div className={`bg-gradient-to-br from-amber-700/25 via-rose-600/15 to-purple-700/20 ${className ?? ""}`} />
        );
    }

    // Use <source> for webp variants and keep the <img> src as the original
    // so browsers that don't support WebP still display the fallback PNG/JPG.
    return (
        <picture>
            {preferSmall && webpSmall && (
                <source srcSet={webpSmall} type="image/webp" />
            )}
            {webp && <source srcSet={webp} type="image/webp" />}
            <img
                src={src}
                alt={alt}
                className={className}
                loading={priority ? "eager" : "lazy"}
                decoding="async"
                width={width}
                height={height}
                sizes={sizes}
                fetchPriority={priority ? "high" : undefined}
                onError={(e) => {
                    setOk(false);
                    if (onError) onError();
                    // hide broken image element to avoid ugly broken icon
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
            />
        </picture>
    );
}
