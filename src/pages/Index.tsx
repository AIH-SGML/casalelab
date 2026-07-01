import PageLayout from "@/components/PageLayout";

const Index = () => (
  <PageLayout mainClassName="py-12 sm:py-16 lg:py-24">
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

      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-16 sm:w-20 lg:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <img
          src="/home_img_light_cropped.png"
          alt="Cell and DNA illustration"
          className="w-full h-auto object-contain opacity-80"
        />
      </div>

    </div>
  </PageLayout>
);

export default Index;
