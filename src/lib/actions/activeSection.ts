let intersectionObserver: IntersectionObserver;
const threshold = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9];
let elements: Set<Element>;

function visibleArea(e: Element): number {
  const rect = e.getBoundingClientRect();
  const elementTop = rect.top;
  const elementBottom = rect.bottom;
  const elementLeft = rect.left;
  const elementRight = rect.right;
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  const visibleWidth = Math.min(elementRight, viewportWidth) - Math.max(elementLeft, 0);
  const visibleHeight = Math.min(elementBottom, viewportHeight) - Math.max(elementTop, 0);
  if (visibleWidth <= 0 || visibleHeight <= 0) {
    return 0;
  }
  return visibleWidth * visibleHeight;
}

type AreaAccumulator = { e: Element; area: number };

export function activeArticle(node: Element) {
  if (!intersectionObserver) {
    elements = new Set();
    intersectionObserver = new IntersectionObserver(
      () => {
        const sizes = [...elements]
          .map<AreaAccumulator>((e) => {
            return { e, area: visibleArea(e) };
          })
          .sort((a, b) => b.area - a.area);
        if (sizes.length) {
          sizes[0].e.dispatchEvent(new CustomEvent("active"));
        }
      },
      { threshold }
    );
  }
  elements.add(node);
  intersectionObserver.observe(node);
  return {
    destroy() {
      elements.delete(node);
      intersectionObserver.unobserve(node);
    }
  };
}
