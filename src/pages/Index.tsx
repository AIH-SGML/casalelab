import PageLayout from "@/components/PageLayout";

const Index = () => (
  <PageLayout mainClassName="max-w-7xl px-8 py-0">
    <section className="min-h-[calc(100vh-8.5rem)] flex flex-col justify-center py-16 lg:py-24">
      <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)]">
        <div className="space-y-8">
          <h1
            className="max-w-[12ch] text-[3.75rem] font-bold leading-[0.95] tracking-[-0.04em] text-foreground sm:text-[4.25rem]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Building causal models of human disease
          </h1>
          <p className="max-w-[38rem] text-[1.05rem] leading-7 text-muted-foreground sm:text-lg">
            We use human genetics and AI to uncover causal disease mechanisms
            across biological scales. Our goal is to build interpretable models
            that connect genetic variation to cellular and tissue-level
            processes, enabling mechanistic understanding of human disease.
          </p>
        </div>

        <div className="relative mx-auto flex aspect-[4/5] w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-[2rem] border border-border/60 bg-[radial-gradient(circle_at_top,_hsl(var(--card))_0%,_hsl(215_18%_12%)_58%,_hsl(220_22%_8%)_100%)] shadow-[0_40px_120px_rgba(12,18,28,0.18)]">
          <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(255,255,255,0.10),transparent_28%,transparent_72%,rgba(255,255,255,0.05))]" />
          <div className="absolute inset-[10%] rounded-[1.75rem] border border-white/10" />
          <div className="absolute left-[12%] top-[16%] h-[68%] w-[68%] rounded-[1.75rem] border border-white/8" />
          <div className="absolute right-[12%] top-[14%] h-[72%] w-[1px] bg-gradient-to-b from-transparent via-white/18 to-transparent" />
          <div className="absolute left-[18%] top-[18%] h-[64%] w-[1px] bg-gradient-to-b from-transparent via-white/12 to-transparent" />
          <div className="absolute left-[14%] right-[20%] top-[26%] h-[1px] bg-gradient-to-r from-transparent via-white/14 to-transparent" />
          <div className="absolute left-[20%] right-[12%] bottom-[24%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="absolute left-[26%] top-[22%] h-[56%] w-[56%] -rotate-12 rounded-[1.25rem] border border-cyan-100/12 bg-[linear-gradient(180deg,rgba(112,155,168,0.18),rgba(33,49,64,0.08))] backdrop-blur-[1px]" />
          <div className="absolute left-[32%] top-[30%] h-[40%] w-[40%] rotate-6 rounded-[1rem] border border-cyan-50/12 bg-[radial-gradient(circle_at_30%_30%,rgba(150,193,202,0.22),rgba(22,31,43,0.08)_55%,transparent_72%)]" />
          <div className="absolute inset-x-[22%] bottom-[18%] h-[18%] rounded-full bg-[radial-gradient(circle,rgba(138,174,182,0.18)_0%,rgba(138,174,182,0.04)_45%,transparent_72%)] blur-2xl" />
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Index;
