

const glows = document.querySelectorAll('.glow');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion && glows.length) {
  const strength = [18, 24, 14];

  window.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;

    glows.forEach((glow, i) => {
      const s = strength[i] || 16;
      glow.style.transform = `translate(${x * s}px, ${y * s}px)`;
    });
  });
}
