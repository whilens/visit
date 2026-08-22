export function setupMotion() {
  const root = document.documentElement;
  const reveals = document.querySelectorAll<HTMLElement>('.reveal');
  const layers = document.querySelectorAll<HTMLElement>('[data-depth]');

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    reveals.forEach((el) => el.classList.add('is-in'));
    return () => undefined;
  }

  let mx = 0;
  let my = 0;
  let tx = 0;
  let ty = 0;
  let sy = 0;
  let targetY = window.scrollY;
  let raf = 0;

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) entry.target.classList.add('is-in');
      }
    },
    { threshold: 0.14, rootMargin: '0px 0px -10% 0px' },
  );
  reveals.forEach((el) => io.observe(el));

  const onPointer = (e: PointerEvent) => {
    tx = e.clientX / window.innerWidth - 0.5;
    ty = e.clientY / window.innerHeight - 0.5;
    root.style.setProperty('--px', `${e.clientX}px`);
    root.style.setProperty('--py', `${e.clientY}px`);
  };

  const onScroll = () => {
    targetY = window.scrollY;
  };

  const tick = () => {
    mx += (tx - mx) * 0.12;
    my += (ty - my) * 0.12;
    sy += (targetY - sy) * 0.1;

    const max = Math.max(root.scrollHeight - window.innerHeight, 1);
    root.style.setProperty('--mx', mx.toFixed(4));
    root.style.setProperty('--my', my.toFixed(4));
    root.style.setProperty('--sy', sy.toFixed(2));
    root.style.setProperty('--sp', (sy / max).toFixed(4));

    const mid = window.innerHeight / 2;
    layers.forEach((el) => {
      const box = el.getBoundingClientRect();
      const depth = Number(el.dataset.depth);
      const shift = (box.top + box.height / 2 - mid) * depth;
      el.style.setProperty('--shift', `${shift.toFixed(2)}px`);
    });

    raf = requestAnimationFrame(tick);
  };

  window.addEventListener('pointermove', onPointer, { passive: true });
  window.addEventListener('scroll', onScroll, { passive: true });
  raf = requestAnimationFrame(tick);

  return () => {
    window.removeEventListener('pointermove', onPointer);
    window.removeEventListener('scroll', onScroll);
    cancelAnimationFrame(raf);
    io.disconnect();
  };
}
