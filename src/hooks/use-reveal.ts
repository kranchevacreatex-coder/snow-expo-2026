import { useEffect } from "react";

/**
 * Global scroll-reveal hook.
 *
 * Observes any element with `data-reveal` and toggles `data-revealed="true"`
 * the first time it crosses the viewport threshold. Pair with the CSS
 * utilities in `styles.css` (`[data-reveal]` / `[data-revealed]`) to drive
 * fade / slide / clip reveals.
 *
 * Optional attributes on the target element:
 *   data-reveal              — marks the element for observation
 *   data-reveal-delay="120"  — ms delay before the reveal class flips
 *
 * Honors `prefers-reduced-motion`: elements are revealed immediately.
 */
export function useReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    if (targets.length === 0) return;

    if (prefersReduced) {
      targets.forEach((el) => el.setAttribute("data-revealed", "true"));
      return;
    }

    const reveal = (el: HTMLElement) => {
      const delay = Number(el.dataset.revealDelay ?? "0");
      if (delay > 0) {
        window.setTimeout(() => el.setAttribute("data-revealed", "true"), delay);
      } else {
        el.setAttribute("data-revealed", "true");
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            reveal(entry.target as HTMLElement);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    targets.forEach((el) => observer.observe(el));

    // Pick up nodes added after mount (e.g. lazily-rendered sections).
    const mutationObserver = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;
          if (node.matches?.("[data-reveal]") && !node.hasAttribute("data-revealed")) {
            observer.observe(node);
          }
          node.querySelectorAll?.<HTMLElement>("[data-reveal]:not([data-revealed])").forEach(
            (el) => observer.observe(el),
          );
        });
      }
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}
