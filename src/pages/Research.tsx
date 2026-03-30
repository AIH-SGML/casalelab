import PageLayout from "@/components/PageLayout";

const directions = [
  {
    title: "Linking Genetic Variation to Disease Mechanisms",
    question:
      "How do rare and common variants drive disease through biological pathways and systems?",
    points: [
      "Develop AI and statistical methods to model genetic effects across molecular, cellular, and tissue levels.",
      "Extend association studies beyond loci discovery toward mechanistic interpretation.",
    ],
  },
  {
    title: "Rare Variant Analysis and Functional Interpretation",
    question:
      "How can we improve power and interpretability of rare variant association studies?",
    points: [
      "Introduce Bayesian frameworks integrating functional annotations.",
      "Extend methods to non-coding regions using genomic language models.",
    ],
  },
  {
    title: "Intermediate Phenotypes and Representation Learning",
    question:
      "How can we bridge the gap between genetic variation and disease outcomes?",
    points: [
      "Learn intermediate phenotypes from imaging, histology, and molecular data.",
      "Use representation learning to capture biologically meaningful variation.",
    ],
  },
  {
    title: "Imaging Genetics and Tissue-Level Phenotyping",
    question:
      "How does genetic variation shape tissue morphology and structure?",
    points: [
      "Develop AI frameworks, including HistoGWAS, for GWAS on imaging-derived phenotypes.",
      "Combine foundation models and generative models for interpretable biology.",
    ],
  },
  {
    title: "Single-Cell and Spatial Genomics",
    question:
      "Which cell types and states mediate genetic effects on disease?",
    points: [
      "Map disease-associated signals to cellular and spatial contexts.",
      "Develop probabilistic and machine learning methods for population-level spatial transcriptomics.",
    ],
  },
  {
    title: "Multimodal Integration Across Biological Scales",
    question:
      "How can we jointly model clinical, imaging, and molecular data?",
    points: [
      "Learn unified representations of patient health from large-scale cohorts.",
      "Enable cross-modal discovery of disease mechanisms and biomarkers.",
    ],
  },
  {
    title: "Clinical Machine Learning and Translational Impact",
    question:
      "How can models improve prediction and decision-making in real-world settings?",
    points: [
      "Build models for disease prediction, subtype stratification, and outcome forecasting.",
      "Focus on applications in infectious disease and longitudinal clinical trials.",
    ],
  },
  {
    title: "Biomarker Discovery and Disease Progression Modeling",
    question:
      "What measurable features predict disease onset, progression, and treatment response?",
    points: [
      "Identify transcriptomic, imaging, and genetic biomarkers.",
      "Model longitudinal disease dynamics and treatment effects.",
    ],
  },
  {
    title: "Foundations of Scalable and Interpretable AI in Biology",
    question:
      "How can AI models remain interpretable while scaling to large datasets?",
    points: [
      "Combine probabilistic modeling with deep learning.",
      "Use generative models to visualize and explain learned biological effects.",
    ],
  },
];

const ResearchCard = ({
  title,
  question,
  points,
}: {
  title: string;
  question: string;
  points: string[];
}) => (
  <div className="p-6 rounded-md bg-card border border-border space-y-4">
    <div className="space-y-2">
      <h2 className="text-xl font-semibold text-foreground">{title}</h2>
      <p className="text-sm text-accent font-medium">{question}</p>
    </div>
    <div className="space-y-3">
      {points.map((point) => (
        <p key={point} className="text-sm text-muted-foreground leading-relaxed">
          {point}
        </p>
      ))}
    </div>
  </div>
);

const Research = () => (
  <PageLayout>
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-foreground">Research</h1>
        <p className="text-muted-foreground leading-relaxed max-w-3xl">
          Across projects, the unifying goal is to move from{" "}
          <span className="font-medium text-foreground">association to mechanism</span> by
          developing machine learning and statistical methods that connect
          genetic variation to biological function, cellular context, and
          ultimately disease.
        </p>
      </div>

      <div className="space-y-5">
        {directions.map((direction) => (
          <ResearchCard key={direction.title} {...direction} />
        ))}
      </div>
    </div>
  </PageLayout>
);

export default Research;
