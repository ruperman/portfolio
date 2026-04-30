import { useEffect, useRef } from "react";

export default function FadeInSection({ children, className = "", id = "" }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("in-view");
          observer.unobserve(node);
        }
      },
      {
        threshold: 0.18,
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section id={id} ref={sectionRef} className={`section reveal ${className}`.trim()}>
      {children}
    </section>
  );
}
