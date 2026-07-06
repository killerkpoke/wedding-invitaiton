"use client";

import { useEffect, useRef, useState } from "react";

export default function FadeInOnScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.10,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`max-w-[350px] sm:max-w-[380px] md:max-w-[900px] justify-center ${visible ? "animate-fade-in-up" : "opacity-0"}`}
    >
      {children}
    </div>
  );
}