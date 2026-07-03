import PageLayout from "@/components/PageLayout";
import HeroImage from "@/components/HeroImage";

const Index = () => (
  <PageLayout mainClassName="py-12 sm:py-16 lg:py-24" background>
    <div className="grid sm:grid-cols-[3fr_2fr] gap-8 sm:gap-12 lg:gap-16 items-center">

      <div className="space-y-6">
        <h1
          className="text-[2.2rem] font-bold leading-[1.08] tracking-[-0.03em] text-foreground sm:text-[2.6rem] lg:text-[3rem]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Towards mechanistic models of human disease
        </h1>
        <p className="text-base leading-7 text-muted-foreground sm:text-lg">
          We develop AI systems that connect population-scale human data to biological mechanisms across scales
        </p>
      </div>

      <HeroImage />

    </div>
  </PageLayout>
);

export default Index;
