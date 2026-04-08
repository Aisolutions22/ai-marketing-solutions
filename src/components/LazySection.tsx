import { useRef, useState, useEffect, Suspense, type ReactNode } from "react";

interface LazySectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  minHeight?: string;
}

const LazySection = ({ children, className, id, minHeight = "200px" }: LazySectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
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
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} id={id} className={className}>
      {visible ? (
        <Suspense fallback={<div style={{ minHeight }} />}>
          {children}
        </Suspense>
      ) : (
        <div style={{ minHeight }} />
      )}
    </div>
  );
};

export default LazySection;
