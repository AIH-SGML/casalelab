import PageLayout from "@/components/PageLayout";
import HeroImage from "@/components/HeroImage";
import htLogo from "@/assets/logos/ht-logo.png";
import helmholtzMunichLogo from "@/assets/logos/helmholtz-munich.jpg";
import helmholtzAiLogo from "@/assets/logos/helmholtz-ai.png";
import hightechLogo from "@/assets/logos/hightech.png";
import cziLogo from "@/assets/logos/Chan_Zuckerberg_Initiative.svg";

const InfoCard = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="rounded-sm p-5 space-y-4 text-center">
    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground/50">{label}</p>
    <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">{children}</div>
  </div>
);

const Index = () => (
  <PageLayout mainClassName="py-12 sm:py-16 lg:py-24" background>
    <div className="space-y-12 lg:space-y-16">
      <div className="grid sm:grid-cols-[3fr_2fr] gap-8 sm:gap-12 lg:gap-16 items-center">

        <div className="space-y-6">
          <h1
            className="text-[2.2rem] font-bold leading-[1.08] tracking-[-0.03em] text-foreground sm:text-[2.6rem] lg:text-[3rem]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Towards mechanistic models of human disease
          </h1>
          <p className="text-base leading-7 text-muted-foreground sm:text-lg">
            We develop computational frameworks that transform population-scale human data into mechanistic models of disease, generating testable hypotheses that accelerate biological discovery and therapeutic innovation.
          </p>
        </div>

        <HeroImage />

      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <InfoCard label="Locations">
          <img src={helmholtzMunichLogo} alt="Helmholtz Munich" className="h-9 w-auto" />
          <span className="inline-flex flex-col items-center gap-1">
            <img src={htLogo} alt="Human Technopole" className="h-9 w-auto" />
            <span className="text-[10px] uppercase tracking-[0.14em] text-foreground/45">
              from Sept 2026
            </span>
          </span>
        </InfoCard>
        <InfoCard label="Funding">
          <img src={helmholtzAiLogo} alt="Helmholtz AI" className="h-8 w-auto" />
          <img src={hightechLogo} alt="HIGHTECH Agenda Bavaria" className="h-9 w-auto" />
          <img src={cziLogo} alt="Chan Zuckerberg Initiative" className="h-8 w-auto" />
        </InfoCard>
      </div>
    </div>
  </PageLayout>
);

export default Index;
