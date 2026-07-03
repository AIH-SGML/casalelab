import { useEffect, useRef } from "react";

/**
 * Subtle animated constellation of drifting nodes connected by lines.
 * Nodes near the cursor brighten and link to it, echoing the lab's
 * "connected biology across scales" motif. Purely decorative and
 * disabled for users who prefer reduced motion.
 */
const NetworkBackground = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    type Node = { x: number; y: number; vx: number; vy: number };
    let nodes: Node[] = [];
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    const mouse = { x: -9999, y: -9999 };
    const LINK_DIST = 130;
    const MOUSE_DIST = 170;

    // Read the theme's primary color so lines match the palette.
    const primary = getComputedStyle(document.documentElement)
      .getPropertyValue("--primary")
      .trim() || "207 68% 28%";

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width || canvas.clientWidth || window.innerWidth;
      height = rect.height || canvas.clientHeight || window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Scale node count to area, capped for performance.
      const target = Math.min(70, Math.round((width * height) / 14000));
      nodes = Array.from({ length: target }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
        n.x = Math.max(0, Math.min(width, n.x));
        n.y = Math.max(0, Math.min(height, n.y));
      }

      // Links between nearby nodes.
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < LINK_DIST) {
            const alpha = (1 - dist / LINK_DIST) * 0.22;
            ctx.strokeStyle = `hsl(${primary} / ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Links to the cursor + node dots.
      for (const n of nodes) {
        const dxm = n.x - mouse.x;
        const dym = n.y - mouse.y;
        const dm = Math.hypot(dxm, dym);
        const near = dm < MOUSE_DIST;

        if (near) {
          const alpha = (1 - dm / MOUSE_DIST) * 0.45;
          ctx.strokeStyle = `hsl(${primary} / ${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }

        ctx.fillStyle = `hsl(${primary} / ${near ? 0.6 : 0.34})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, near ? 2.6 : 1.7, 0, Math.PI * 2);
        ctx.fill();
      }

      frame = requestAnimationFrame(draw);
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    let frame = 0;
    resize();

    if (reduceMotion) {
      draw();
      cancelAnimationFrame(frame); // render a single static frame
    } else {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseout", onMouseLeave);
      frame = requestAnimationFrame(draw);
    }

    const onResize = () => resize();
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseout", onMouseLeave);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
    />
  );
};

export default NetworkBackground;
