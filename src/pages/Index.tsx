import PageLayout from "@/components/PageLayout";

const ambientDots = [
  { left: "8%", top: "14%", size: "0.75rem", duration: "17s", delay: "-3s" },
  { left: "20%", top: "64%", size: "0.55rem", duration: "19s", delay: "-8s" },
  { left: "36%", top: "24%", size: "0.9rem", duration: "22s", delay: "-6s" },
  { left: "48%", top: "76%", size: "0.6rem", duration: "16s", delay: "-11s" },
  { left: "62%", top: "18%", size: "0.7rem", duration: "21s", delay: "-4s" },
  { left: "72%", top: "56%", size: "1rem", duration: "24s", delay: "-14s" },
  { left: "84%", top: "26%", size: "0.65rem", duration: "18s", delay: "-9s" },
  { left: "88%", top: "72%", size: "0.8rem", duration: "20s", delay: "-12s" },
  { left: "56%", top: "42%", size: "0.5rem", duration: "15s", delay: "-7s" },
  { left: "14%", top: "40%", size: "0.68rem", duration: "23s", delay: "-5s" },
];

const ambientGlows = [
  { left: "2%", top: "8%", width: "16rem", height: "16rem", duration: "14s", delay: "-4s" },
  { left: "58%", top: "10%", width: "18rem", height: "18rem", duration: "18s", delay: "-9s" },
  { left: "68%", top: "54%", width: "14rem", height: "14rem", duration: "16s", delay: "-6s" },
];

const Index = () => (
  <PageLayout mainClassName="max-w-none px-0 py-0">
    <section className="relative min-h-[calc(100vh-7.75rem)] overflow-hidden flex flex-col justify-center bg-[linear-gradient(135deg,#071019_0%,#0b1822_28%,#123044_62%,#0f2433_100%)] pb-0 pt-0">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(111,155,170,0.16),transparent_22%),radial-gradient(circle_at_76%_28%,rgba(78,126,145,0.22),transparent_24%),radial-gradient(circle_at_60%_74%,rgba(92,139,155,0.10),transparent_24%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.025),transparent_22%,transparent_78%,rgba(255,255,255,0.015))]" />
      <div className="pointer-events-none absolute inset-0">
        {ambientGlows.map((glow) => (
          <div
            key={`${glow.left}-${glow.top}`}
            className="home-ambient-glow"
            style={{
              left: glow.left,
              top: glow.top,
              width: glow.width,
              height: glow.height,
              animationDuration: glow.duration,
              animationDelay: glow.delay,
            }}
          />
        ))}
        {ambientDots.map((dot) => (
          <div
            key={`${dot.left}-${dot.top}`}
            className="home-ambient-dot"
            style={{
              left: dot.left,
              top: dot.top,
              width: dot.size,
              height: dot.size,
              animationDuration: dot.duration,
              animationDelay: dot.delay,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 px-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)]">
        <div className="space-y-8 pt-6 lg:-translate-y-4 lg:pt-10">
          <h1
            className="max-w-[12ch] text-[3.3rem] font-bold leading-[0.95] tracking-[-0.04em] text-slate-50 sm:text-[3.8rem]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Towards mechanistic models of human disease
          </h1>
          <p className="max-w-[38rem] text-[1.05rem] leading-7 text-slate-300 sm:text-lg">
            Our research develops AI frameworks that link genetic variation to
            cellular states, tissue function, and organismal physiology. By
            modeling how perturbations propagate across biological scales, we
            aim to uncover the mechanisms driving human disease.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[32rem] overflow-hidden">
          <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(102,148,162,0.08),transparent_58%),linear-gradient(135deg,rgba(8,20,30,0.20),transparent_34%,transparent_72%,rgba(11,33,47,0.24))]" />
          <div className="pointer-events-none absolute inset-0 z-10 mix-blend-multiply bg-[linear-gradient(180deg,rgba(8,21,31,0.14),rgba(19,50,68,0.12))]" />
          <img
            src="/home_img.png"
            alt="Abstract virtual human illustration"
            className="aspect-[4/5] w-full object-cover opacity-95 [filter:saturate(0.82)_hue-rotate(6deg)_brightness(0.86)_contrast(1.03)]"
          />
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Index;
