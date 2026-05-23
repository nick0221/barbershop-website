"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  loading?: "lazy" | "eager";
}

export default function LazyImage({
  src,
  alt,
  className,
  containerClassName,
  loading = "lazy",
}: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const el = imgRef.current;
    if (!el || loading === "eager") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [loading]);

  return (
    <div
      ref={imgRef}
      className={cn(
        "relative overflow-hidden bg-dark-800/30",
        containerClassName
      )}
    >
      {/* Blur placeholder — visible while loading */}
      {!loaded && (
        <div
          className="absolute inset-0 bg-dark-800/50 animate-pulse"
          aria-hidden="true"
        />
      )}

      {/* Low-res blurred preview (tiny base64-style effect using CSS) */}
      {!loaded && (
        <div
          className="absolute inset-0 opacity-30 blur-xl scale-110"
          style={{
            backgroundColor: "#1a1a1a",
            backgroundImage: `url(${src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(20px) brightness(0.6)",
          }}
          aria-hidden="true"
        />
      )}

      {/* Actual image */}
      {(inView || loading === "eager") && (
        <img
          src={src}
          alt={alt}
          loading={loading}
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(true)} // Show image even on error
          className={cn(
            "w-full h-full object-cover transition-all duration-700",
            loaded
              ? "opacity-100 blur-0 scale-100"
              : "opacity-0 blur-sm scale-[1.02]",
            className
          )}
        />
      )}

      {/* Shimmer overlay after load */}
      {loaded && (
        <div
          className="absolute inset-0 pointer-events-none shimmer-overlay opacity-30"
          aria-hidden="true"
        />
      )}
    </div>
  );
}
