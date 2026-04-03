import PageLayout from "@/components/PageLayout";

type Reading = {
  title: string;
  authors: string;
  venue: string;
  link: string;
};

type ResearchArea = {
  title: string;
  summary: string[];
  readings: Reading[];
  placeholder: string;
};

const researchAreas: ResearchArea[] = [
  {
    title: "Multimodal Phenotypes for Genetic Discovery",
    summary: [
      "We develop methods that extract quantitative phenotypes from high-content biological data, including histology, medical imaging, and molecular profiles.",
      "By combining foundation models, representation learning, and statistical genetics, we turn raw data into structured traits that can be analyzed at population scale. These approaches increase the power of genetic studies while enabling direct interpretation of how genetic variation shapes tissue architecture and function.",
      "A central focus is the use of generative models to make these representations interpretable, allowing us to visualize how genetic variants influence biological systems.",
      "These approaches extend beyond molecular and imaging data to include environmental exposures and clinical trajectories, enabling the study of disease across real-world settings.",
    ],
    placeholder: "Histology / imaging placeholder",
    readings: [
      {
        title:
          "HistoGWAS: An AI-enabled framework for automated genetic analysis of tissue phenotypes in histology cohorts",
        authors:
          "S. Chaudhary, A. Voigts, M. Bereket, M.L. Albert, K. Schwamborn, E. Zeggini, F.P. Casale",
        venue: "Genome Biology, 2026",
        link: "https://link.springer.com/article/10.1186/s13059-026-04031-z",
      },
      {
        title:
          "GEMCONT: Genetics-based Multimodal Contrastive Learning for Disease-Focused Imaging Genetics",
        authors: "D. Sens, L. Shilova, A.V. Dalca, J. Schnabel†, F.P. Casale†",
        venue: "Medical Imaging with Deep Learning (MIDL), 2026",
        link: "https://openreview.net/pdf?id=Y8gkT7s44N",
      },
      {
        title:
          "Genetics-driven risk predictions leveraging the Mendelian randomization framework",
        authors:
          "D. Sens, L. Shilova, L. Graf, M. Grebenshchikova, B.M. Eskofier, F.P. Casale",
        venue: "Genome Research, 2024",
        link: "https://genome.cshlp.org/content/34/9/1276.long",
      },
    ],
  },
  {
    title: "Cellular and Spatial Context of Disease",
    summary: [
      "Genetic effects are mediated through specific cell types, states, and microenvironments.",
      "We build AI frameworks that integrate single-cell and spatial omics data with human genetics to identify where and how disease processes manifest. This includes models that detect disease-relevant cellular states and map genetic signals onto tissue organization.",
      "Our goal is to uncover the cellular and spatial contexts through which genetic variation drives disease, providing a foundation for more accurate disease models and experimental systems.",
    ],
    placeholder: "Single-cell / spatial placeholder",
    readings: [
      {
        title: "Mixed models with multiple instance learning",
        authors:
          "J.P. Engelmann*, A. Palma*, J.M. Tomczak, F.J. Theis†, F.P. Casale†",
        venue: "AISTATS, 2024",
        link: "https://proceedings.mlr.press/v238/engelmann24a.html",
      },
      {
        title:
          "A linear mixed-model approach to study multivariate gene-environment interactions",
        authors:
          "R. Moore*, F.P. Casale*, M.J. Bonder, D. Horta, L. Franke, I. Barroso, et al.",
        venue: "Nature Genetics, 2019",
        link: "https://www.nature.com/articles/s41588-018-0271-0",
      },
    ],
  },
  {
    title: "Modelling Perturbations Across Scales",
    summary: [
      "We develop models that describe how genetic and molecular perturbations act on biological systems and propagate across scales.",
      "This includes learning representations of genetic variation, integrating sequence-based models, and linking in vivo human genetics with in vitro experimental systems. By combining statistical genetics with modern machine learning, we aim to build models that capture how perturbations affect genes, pathways, and phenotypes.",
      "The long-term goal is to enable predictive and mechanistic models of disease, connecting molecular changes to organism-level outcomes.",
    ],
    placeholder: "Perturbation modeling placeholder",
    readings: [
      {
        title:
          "BayesRVAT enhances rare-variant association testing through Bayesian aggregation of functional annotations",
        authors: "A. Nappi, L. Shilova, T. Karaletsos, N. Cai, F.P. Casale",
        venue: "Genome Research, 2025",
        link: "https://genome.cshlp.org/content/35/12/2682",
      },
    ],
  },
];

const principles = [
  "Genetics as supervision: leveraging human variation as a natural experiment",
  "Multimodal integration: combining imaging, molecular, and clinical data",
  "Interpretable AI: using generative and statistical models to explain predictions",
  "Mechanistic focus: prioritizing understanding over prediction alone",
];

const strongFits = [
  "Think across machine learning and biology",
  "Care about mechanism, not just prediction",
  "Take ownership of problems end-to-end",
  "Embrace human-AI collaboration as a core part of scientific discovery",
];

const notFits = [
  "Work on isolated modelling tasks without biological context",
  "Focus purely on applications without methodological depth",
  "Operate in a highly structured, low-autonomy environment",
];

const ReadingItem = ({ reading }: { reading: Reading }) => (
  <li className="flex gap-2 text-xs text-muted-foreground leading-relaxed">
    <span className="shrink-0 text-foreground">•</span>
    <p>
      <a
        href={reading.link}
        target="_blank"
        rel="noreferrer"
        className="font-semibold text-foreground transition-colors hover:text-accent"
      >
        {reading.title}
      </a>
      <br />
      {reading.authors}. {reading.venue}
    </p>
  </li>
);

const ResearchAreaCard = ({ area }: { area: ResearchArea }) => (
  <section className="rounded-md border border-border bg-card p-6 space-y-5">
    <div className="space-y-2">
      <h2 className="text-xl font-semibold text-foreground">{area.title}</h2>
    </div>

    <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_240px] lg:items-start">
      <div className="space-y-3">
        {area.summary.map((paragraph) => (
          <p key={paragraph} className="text-sm text-muted-foreground leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="rounded-md border border-dashed border-border bg-muted/30 aspect-[4/3] min-h-[180px] flex items-center justify-center px-4 text-center">
        <span className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground/80">
          {area.placeholder}
        </span>
      </div>
    </div>

    <div className="space-y-2 pt-1">
      <p className="text-sm font-medium text-foreground">Selected readings</p>
      <ul className="space-y-1">
        {area.readings.map((reading) => (
          <ReadingItem key={reading.title} reading={reading} />
        ))}
      </ul>
    </div>
  </section>
);

const Research = () => (
  <PageLayout>
    <div className="space-y-10">
      <section className="space-y-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-foreground">Research</h1>
        <div className="space-y-3">
          <p className="text-muted-foreground leading-relaxed">
            We develop AI systems that transform complex data across imaging,
            molecular profiling, and clinical cohorts into quantitative
            representations of biological processes (mechanistic phenotypes).
            These representations act as intermediate phenotypes, bridging
            genetic variation and disease mechanisms.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our goal is to move beyond association toward{" "}
            <span className="font-medium text-foreground">mechanistic understanding</span>,
            enabling models that not only predict but explain how disease
            emerges across biological scales.
          </p>
        </div>
      </section>

      <section className="space-y-5">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold text-foreground">Research Areas</h2>
        </div>
        <div className="space-y-5">
          {researchAreas.map((area) => (
            <ResearchAreaCard key={area.title} area={area} />
          ))}
        </div>
      </section>

      <section className="space-y-4 max-w-4xl">
        <h2 className="text-2xl font-semibold text-foreground">How We Work</h2>
        <p className="text-muted-foreground leading-relaxed">
          <span className="font-semibold text-foreground">Common principles:</span>
        </p>
        <ul className="space-y-1">
          {principles.map((principle) => (
            <li key={principle} className="flex gap-2 text-muted-foreground leading-relaxed">
              <span className="shrink-0 text-foreground">•</span>
              <span>{principle}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="max-w-4xl">
        <p className="text-muted-foreground leading-relaxed">
          <span className="font-semibold text-foreground">AI as a Scientific Partner:</span>{" "}
          We view AI systems as active participants in the scientific process.
          Our work increasingly integrates AI agents that assist in hypothesis
          generation, data exploration, and iterative model refinement. By
          combining human expertise with AI-driven reasoning, we aim to
          accelerate the cycle of scientific discovery.
        </p>
      </section>

      <section className="space-y-3 max-w-4xl">
        <p className="text-muted-foreground leading-relaxed">
          <span className="font-semibold text-foreground">Strong fits typically:</span>
        </p>
        <ul className="space-y-1">
          {strongFits.map((item) => (
            <li key={item} className="flex gap-2 text-muted-foreground leading-relaxed">
              <span className="shrink-0 text-foreground">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  </PageLayout>
);

export default Research;
