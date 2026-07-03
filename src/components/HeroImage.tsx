import { useEffect, useLayoutEffect, useRef, useState } from "react";

const IMG = `${import.meta.env.BASE_URL}home_img_light_cropped.png`;

/**
 * Interactive hero image. Each biological "scale" in the artwork
 * (cell → tissue → organ → population) is a hotspot: hovering it pops a
 * circular magnifier that enlarges that scale and sheds network particles
 * into an overlay canvas, echoing the lab's "across scales" theme.
 */

// Positions are fractions of the rendered image (aspect-preserved, so they
// map identically to the source artwork). `cx`/`cy` = scale centre,
// `sd` = scale diameter as a fraction of image width.
// A "loupe" scale magnifies a compact feature; a "glow" scale (the DNA helix)
// instead brightens a whole region of the artwork in place.
type Scale = {
  id: string;
  label: string;
  cx: number;
  cy: number;
  sd: number;
};

// Compact features magnified by the loupe, cell → population.
const SCALES: Scale[] = [
  { id: "cell", label: "Cell", cx: 0.162, cy: 0.52, sd: 0.11 },
  { id: "tissue", label: "Tissue", cx: 0.392, cy: 0.43, sd: 0.17 },
  { id: "organ", label: "Organ", cx: 0.614, cy: 0.387, sd: 0.17 },
  { id: "population", label: "Population", cx: 0.833, cy: 0.36, sd: 0.19 },
];

// The DNA helix sweeping across the lower-right. `box` is the (fractional)
// hover hit-area; `mask` reveals just the helix on the brightened overlay;
// `lx`/`ly` place the label.
const GENE = {
  id: "genetics",
  label: "Genetics",
  box: { x: 0.42, y: 0.52, w: 0.58, h: 0.46 },
  mask: "radial-gradient(46% 33% at 66% 78%, #000 60%, transparent 100%)",
  lx: 0.7,
  ly: 0.93,
  // Particles emerge from just above the helix strand (lower-left → upper-right).
  emitLine: { x1: 0.45, y1: 0.83, x2: 0.9, y2: 0.49 },
};

const ZOOM = 1.5; // magnification inside the loupe

const HeroImage = () => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const activeRef = useRef<Scale | null>(null);
  const [active, setActive] = useState<Scale | null>(null);
  const geneRef = useRef(false);
  const [geneActive, setGeneActive] = useState(false);

  const focus = (s: Scale | null) => {
    activeRef.current = s;
    setActive(s);
  };

  const focusGene = (on: boolean) => {
    geneRef.current = on;
    setGeneActive(on);
  };

  // Track the rendered image size so hotspot geometry stays accurate.
  useLayoutEffect(() => {
    const el = imgRef.current;
    if (!el) return;
    const measure = () => setSize({ w: el.clientWidth, h: el.clientHeight });
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Particle overlay.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !size.w || !size.h) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = size.w * dpr;
    canvas.height = size.h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    if (reduceMotion) {
      ctx.clearRect(0, 0, size.w, size.h);
      return;
    }

    const styles = getComputedStyle(document.documentElement);
    const primary = styles.getPropertyValue("--primary").trim() || "207 68% 28%";
    // Palette echoing the artwork: lab blue, violet cells, DNA teal.
    const palette = [primary, "262 52% 62%", "190 60% 52%"];

    type P = { x: number; y: number; vx: number; vy: number; life: number; max: number; r: number; c: string; a: number };
    let particles: P[] = [];
    let frame = 0;

    const spawn = (s: Scale) => {
      const cx = s.cx * size.w;
      const cy = s.cy * size.h;
      const edge = s.sd * size.w * 0.5;
      for (let i = 0; i < 3; i++) {
        if (particles.length > 90) break;
        const ang = Math.random() * Math.PI * 2;
        const rad = edge * (0.7 + Math.random() * 0.6); // start around the scale's rim
        const speed = 0.3 + Math.random() * 0.6;
        const max = 70 + Math.random() * 70;
        particles.push({
          x: cx + Math.cos(ang) * rad,
          y: cy + Math.sin(ang) * rad,
          vx: Math.cos(ang) * speed * 0.6 + (Math.random() - 0.5) * 0.3, // drift outward
          vy: Math.sin(ang) * speed * 0.4 - 0.25 - Math.random() * 0.4, // outward + buoyant
          life: max,
          max,
          r: 1.2 + Math.random() * 1.8,
          c: palette[Math.floor(Math.random() * palette.length)],
          a: 0.85,
        });
      }
    };

    // Particles drifting up from just above the DNA strand — sparse and faint.
    const spawnGene = () => {
      if (particles.length > 55 || Math.random() > 0.6) return;
      const { x1, y1, x2, y2 } = GENE.emitLine;
      const t = Math.random();
      const px = (x1 + (x2 - x1) * t) * size.w;
      const py = (y1 + (y2 - y1) * t) * size.h;
      const max = 55 + Math.random() * 55;
      particles.push({
        x: px + (Math.random() - 0.5) * 12,
        y: py - Math.random() * 6, // emerge just above the strand
        vx: (Math.random() - 0.5) * 0.4,
        vy: -0.12 - Math.random() * 0.4, // gently rise
        life: max,
        max,
        r: 1 + Math.random() * 1.4,
        c: palette[Math.floor(Math.random() * palette.length)],
        a: 0.42,
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, size.w, size.h);
      const s = activeRef.current;
      if (s) spawn(s);
      if (geneRef.current) spawnGene();

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 1;
      }
      particles = particles.filter((p) => p.life > 0);

      // Faint links between nearby particles for a "network" feel.
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 46) {
            const alpha =
              (1 - d / 46) * 0.16 * Math.min((a.life / a.max) * a.a, (b.life / b.max) * b.a);
            ctx.strokeStyle = `hsl(${primary} / ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const p of particles) {
        const alpha = (p.life / p.max) * p.a;
        ctx.fillStyle = `hsl(${p.c} / ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Keep animating while a scale is active or particles remain.
      if (activeRef.current || geneRef.current || particles.length) {
        frame = requestAnimationFrame(draw);
      } else {
        frame = 0;
      }
    };

    // Restart the loop whenever a scale becomes active.
    const kick = () => {
      if (!frame) frame = requestAnimationFrame(draw);
    };
    const interval = window.setInterval(() => {
      if (activeRef.current || geneRef.current) kick();
    }, 200);

    return () => {
      cancelAnimationFrame(frame);
      clearInterval(interval);
    };
  }, [size.w, size.h]);

  return (
    <div ref={wrapRef} className="group relative">
      {/* Soft fade blending the artwork's left edge into the page. */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-20 lg:w-24" />

      <img
        ref={imgRef}
        src={IMG}
        alt="Illustration of biological scales from a single cell to a population, linked by a data network and DNA helix"
        className="h-auto w-full object-contain opacity-80"
        draggable={false}
      />

      {/* Floating particles, above the image. */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20 h-full w-full"
      />

      {/* DNA "glow": a brightened, more-saturated copy of the artwork revealed
          only over the helix region while the hotspot is hovered. */}
      <img
        aria-hidden
        src={IMG}
        draggable={false}
        className="pointer-events-none absolute inset-0 z-10 h-auto w-full transition-opacity duration-500 ease-out"
        style={{
          WebkitMaskImage: GENE.mask,
          maskImage: GENE.mask,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          filter: "saturate(2) contrast(1.06)",
          opacity: geneActive ? 1 : 0,
        }}
      />
      <button
        type="button"
        aria-label={`Highlight ${GENE.label}`}
        onMouseEnter={() => focusGene(true)}
        onMouseLeave={() => focusGene(false)}
        onFocus={() => focusGene(true)}
        onBlur={() => focusGene(false)}
        className="absolute z-30 focus:outline-none"
        style={{
          left: `${GENE.box.x * 100}%`,
          top: `${GENE.box.y * 100}%`,
          width: `${GENE.box.w * 100}%`,
          height: `${GENE.box.h * 100}%`,
        }}
      />
      <span
        aria-hidden
        className={`pointer-events-none absolute z-30 -translate-x-1/2 whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.14em] text-primary transition-opacity duration-300 ${
          geneActive ? "opacity-100" : "opacity-0"
        }`}
        style={{ left: `${GENE.lx * 100}%`, top: `${GENE.ly * 100}%` }}
      >
        {GENE.label}
      </span>

      {/* Loupe hotspots. */}
      {size.w > 0 &&
        SCALES.map((s) => {
          const d = ZOOM * s.sd * size.w; // loupe diameter
          const ring = s.sd * size.w; // rest-ring diameter (circles the scale)
          const isActive = active?.id === s.id;
          return (
            <button
              key={s.id}
              type="button"
              aria-label={`Enlarge ${s.label}`}
              onMouseEnter={() => focus(s)}
              onMouseLeave={() => focus(null)}
              onFocus={() => focus(s)}
              onBlur={() => focus(null)}
              className="absolute z-30 -translate-x-1/2 -translate-y-1/2 rounded-full focus:outline-none"
              style={{ left: `${s.cx * 100}%`, top: `${s.cy * 100}%`, width: d, height: d }}
            >
              {/* Rest hint ring — appears when hovering the artwork. */}
              <span
                aria-hidden
                className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/30 transition-opacity duration-300 ${
                  isActive ? "opacity-0" : "opacity-0 group-hover:opacity-100"
                }`}
                style={{ width: ring, height: ring }}
              />

              {/* Magnifier loupe. */}
              <span
                aria-hidden
                className="absolute inset-0 rounded-full shadow-lg shadow-primary/10 ring-1 ring-primary/25 transition-all duration-500 ease-out"
                style={{
                  backgroundImage: `url(${IMG})`,
                  backgroundSize: `${size.w * ZOOM}px ${size.h * ZOOM}px`,
                  backgroundPosition: `${d / 2 - s.cx * size.w * ZOOM}px ${d / 2 - s.cy * size.h * ZOOM}px`,
                  backgroundColor: "hsl(var(--background))",
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? "scale(1)" : "scale(0.6)",
                }}
              />

              {/* Label. */}
              <span
                aria-hidden
                className={`absolute left-1/2 top-full mt-1.5 -translate-x-1/2 whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.14em] text-primary transition-opacity duration-300 ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
              >
                {s.label}
              </span>
            </button>
          );
        })}
    </div>
  );
};

export default HeroImage;
