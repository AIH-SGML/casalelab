import PageLayout from "@/components/PageLayout";
import histogwas from "@/assets/research/histogwas.png";
import spacedx from "@/assets/research/spacedx.png";
import repquery from "@/assets/research/repquery.png";
import type { ReactNode } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type Reference = {
  title: string;
  authors: string;
  venue: string;
  link: string;
};

type ResearchSectionProps = {
  title: string;
  description: ReactNode;
  references: Reference[];
  image?: string;
  figureRef?: number;   // local 1-based index within this section's references
  refOffset?: number;   // how many references came before this section
};

// ─── Figure ───────────────────────────────────────────────────────────────────

const Figure = ({ image, figureRef, title }: { image?: string; figureRef?: number; title: string }) => (
  <figure className="space-y-1.5">
    {image ? (
      <img src={image} alt={title} className="w-full rounded-sm object-cover" />
    ) : (
      <div className="aspect-[4/3] w-full rounded-sm bg-muted border border-border flex items-center justify-center">
        <span className="text-[10px] uppercase tracking-[0.18em] text-foreground/30 select-none">
          Figure
        </span>
      </div>
    )}
    {figureRef !== undefined && (
      <figcaption className="text-xs text-foreground leading-relaxed text-center">
        Figure from [{figureRef}]
      </figcaption>
    )}
  </figure>
);

// ─── References ───────────────────────────────────────────────────────────────

const References = ({ refs, offset = 0 }: { refs: Reference[]; offset?: number }) => (
  <div className="space-y-2 pt-1">
    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-foreground">
      References
    </p>
    <ol className="space-y-1.5">
      {refs.map((ref, i) => (
        <li key={i} className="flex gap-2 text-xs text-foreground leading-relaxed">
          <span className="shrink-0 tabular-nums select-none">[{offset + i + 1}]</span>
          <span>
            {ref.authors}.{" "}
            {ref.link ? (
              <a
                href={ref.link}
                target="_blank"
                rel="noreferrer"
                className="hover:underline underline-offset-2 transition-colors"
              >
                {ref.title}
              </a>
            ) : (
              <span>{ref.title}</span>
            )}
            . <em>{ref.venue}</em>.
          </span>
        </li>
      ))}
    </ol>
  </div>
);

// ─── ResearchSection ──────────────────────────────────────────────────────────

const ResearchSection = ({ title, description, references, image, figureRef, refOffset = 0 }: ResearchSectionProps) => (
  <section className="space-y-4">
    <h2
      className="text-lg font-bold leading-snug text-foreground"
      style={{ fontFamily: "var(--font-heading)" }}
    >
      {title}
    </h2>

    <div className="clearfix">
      {/* Desktop only: floated right so text wraps alongside it */}
      <div className="hidden md:block md:float-right md:w-[55%] md:ml-12 mb-6 md:mt-[0.35rem]">
        <Figure
          image={image}
          figureRef={figureRef !== undefined ? refOffset + figureRef : undefined}
          title={title}
        />
      </div>
      <div className="text-[0.95rem] text-foreground leading-[1.8] mb-8 text-justify">{description}</div>
      {/* Mobile only: between text and references */}
      <div className="md:hidden mb-8">
        <Figure
          image={image}
          figureRef={figureRef !== undefined ? refOffset + figureRef : undefined}
          title={title}
        />
      </div>
      <References refs={references} offset={refOffset} />
    </div>
  </section>
);

// ─── Data ─────────────────────────────────────────────────────────────────────

const researchAreas: ResearchSectionProps[] = [
  {
    title: "Learning Biological Phenotypes",
    description:
      "Genetic variation influences disease through a cascade of molecular, cellular, and tissue-level changes, many of which remain invisible to conventional phenotyping. We develop AI methods that extract quantitative phenotypes from high-content biological data, including histology, medical imaging, and molecular profiles, and use these as intermediate representations to study how genetic variation propagates across biological scales. By combining foundation models, representation learning, and statistical genetics, we transform raw data into structured biological traits that bridge genotype to cellular and tissue-level phenotypes, enabling more powerful and interpretable genetic discovery. A central focus is the use of generative models to make these representations biologically interpretable, allowing us to visualize how genetic variants influence biological systems across scales. Looking ahead, we are building population-scale organ atlases that integrate histology, spatial biology, imaging, and genetics to understand tissue-specific mechanisms of disease.",
    image: histogwas,
    figureRef: 1,
    references: [
      {
        title: "HistoGWAS: An AI-enabled framework for automated genetic analysis of tissue phenotypes in histology cohorts",
        authors: "S. Chaudhary, A. Voigts, M. Bereket, M.L. Albert, K. Schwamborn, E. Zeggini, F.P. Casale",
        venue: "Genome Biology, 2026",
        link: "https://link.springer.com/article/10.1186/s13059-026-04031-z",
      },
      {
        title: "GEMCONT: Genetics-based Multimodal Contrastive Learning for Disease-Focused Imaging Genetics",
        authors: "D. Sens, L. Shilova, A.V. Dalca, J. Schnabel†, F.P. Casale†",
        venue: "Medical Imaging with Deep Learning (MIDL), 2026",
        link: "https://openreview.net/pdf?id=Y8gkT7s44N",
      },
      {
        title: "Genetics-driven risk predictions leveraging the Mendelian randomization framework",
        authors: "D. Sens, L. Shilova, L. Gräf, M. Grebenshchikova, B.M. Eskofier, F.P. Casale",
        venue: "Genome Research, 2024",
        link: "https://genome.cshlp.org/content/34/9/1276.long",
      },
      {
        title: "REECAP: Contrastive learning of retinal aging reveals genetic loci linking morphology to eye disease",
        authors: "L. Shilova, D. Sens, A. Aliyeva, S. Chaudhary, Q. Xu, E. Salin, J. Schiefelbein, B. Asani, O.V. Amarie, E. Schneltzer, A.V. Segre, J.A. Schnabel, N. Cai, B.M. Eskofier†, F.P. Casale†",
        venue: "medRxiv, 2025",
        link: "https://www.medrxiv.org/content/10.1101/2025.11.19.25340555v2",
      },
    ],
  },
  {
    title: "Localizing Disease Mechanisms",
    description: (
      <>
        Genetic associations identify genomic loci linked to disease, but understanding mechanism requires determining <strong>where</strong> these effects act. We develop AI frameworks that integrate human genetics with single-cell and spatial omics to identify the cell types, cellular states, and tissue microenvironments through which genetic variation drives disease. Our methods map genetic signals onto tissue organization, revealing the biological context in which disease processes emerge and generating mechanistic hypotheses for downstream experimental validation. Looking ahead, we are leveraging emerging population-scale spatial and single-cell data, developed with collaborators across Europe, to systematically map disease mechanisms in human tissues and cell states.
      </>
    ),
    image: spacedx,
    figureRef: 3,
    references: [
      {
        title: "Mixed models with multiple instance learning",
        authors: "J.P. Engelmann*, A. Palma*, J.M. Tomczak, F.J. Theis†, F.P. Casale†",
        venue: "AISTATS, 2024",
        link: "https://proceedings.mlr.press/v238/engelmann24a.html",
      },
      {
        title: "A linear mixed-model approach to study multivariate gene-environment interactions",
        authors: "R. Moore*, F.P. Casale*, M.J. Bonder, D. Horta, L. Franke, I. Barroso, et al.",
        venue: "Nature Genetics, 2019",
        link: "https://www.nature.com/articles/s41588-018-0271-0",
      },
      {
        title: "SpaceDX: A Bayesian test for localized differential expression in population-level spatial transcriptomics datasets",
        authors: "N. Stotzem, S. Chang, N. Cai, F.P. Casale",
        venue: "ICLR Workshop on Machine Learning for Genomics Explorations, 2025",
        link: "",
      },
    ],
  },
  {
    title: "Integrating Human Health",
    description: (
      <>
        Human health emerges from the interaction of genetics, molecular processes, environment, lifestyle, and clinical history over time. We develop statistical and AI frameworks that learn integrative representations of human health by combining genetics with multimodal clinical records, molecular measurements, imaging, environmental exposures, and longitudinal health trajectories. Rather than modelling diseases independently, our methods capture the shared structure linking diseases, populations, and time, enabling improved patient stratification, disease prediction, and biological discovery, as exemplified by our work on <strong>RisQ</strong>. We further leverage naturally occurring genetic variation as perturbations of human biology, providing a causal anchor for interpreting these representations and connecting population-scale observations to biological mechanisms. Looking ahead, we are building foundation models of human health that integrate increasingly rich multimodal data across populations.
      </>
    ),
    image: repquery,
    figureRef: 1,
    references: [
      {
        title: "Learning the shared structure of human health across diseases, modalities, and time",
        authors: "P. Hager*, B. Roth*, N. Bühler*, D. Lu*, J.H. Burks, L. Shilova, R. Kfuri-Rubens, E. Roellin, J. Pan, M. Di Folco, E. Chan, J.A. Schnabel, L. Adams, D. Rueckert†, F.J. Theis†, F.P. Casale†",
        venue: "medRxiv, 2026",
        link: "",
      },
      {
        title: "BayesRVAT enhances rare-variant association testing through Bayesian aggregation of functional annotations",
        authors: "A. Nappi, L. Shilova, T. Karaletsos, N. Cai, F.P. Casale",
        venue: "Genome Research, 2025",
        link: "https://genome.cshlp.org/content/35/12/2682",
      },
    ],
  },
];

const researchDirections = [
  {
    title: "Learning biological phenotypes.",
    description:
      "Developing quantitative intermediate phenotypes that reveal how genetic variation propagates across biological scales.",
  },
  {
    title: "Localizing disease mechanisms.",
    description:
      "Identifying the cells, cellular states, and tissue microenvironments through which genetic effects act.",
  },
  {
    title: "Integrating human health.",
    description:
      "Learning unified representations that connect genetics with clinical, molecular, and environmental data to uncover disease mechanisms across populations.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

const Research = () => (
  <PageLayout>
    <div className="space-y-16">

      <header className="space-y-3">
        <h1 className="text-4xl font-bold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
          Research
        </h1>
        <p className="text-base text-foreground leading-relaxed">
          We develop AI systems that transform population-scale human data into
          mechanistic understanding of disease. By combining machine learning,
          statistical genetics, and multimodal biological data, we connect genetic
          variation with biological processes across scales, from cells and tissues to
          human health. Our research is organized around three complementary directions:
        </p>
        <ol className="space-y-2 pt-2">
          {researchDirections.map((direction, i) => (
            <li key={direction.title} className="flex gap-3 text-sm text-foreground leading-relaxed">
              <span className="shrink-0 tabular-nums text-foreground/50">{i + 1}.</span>
              <span>
                <strong>{direction.title}</strong>{" "}
                <span className="text-muted-foreground">{direction.description}</span>
              </span>
            </li>
          ))}
        </ol>
      </header>

      <hr className="border-t border-border" />

      <div className="space-y-16">
        {researchAreas.map((area, i) => {
          const refOffset = researchAreas.slice(0, i).reduce((sum, a) => sum + a.references.length, 0);
          return (
            <div key={area.title} className="space-y-16">
              <ResearchSection {...area} refOffset={refOffset} />
              {i < researchAreas.length - 1 && <hr className="border-t border-border" />}
            </div>
          );
        })}
      </div>

    </div>
  </PageLayout>
);

export default Research;
