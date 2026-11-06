import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import htLogo from "@/assets/logos/ht-logo.png";
import type { ReactNode } from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────

type Opening = {
  title: string;
  deadline: ReactNode;
  href?: string;
  external?: boolean;
};

const openings: Opening[] = [
  {
    title: "AI Scientist",
    deadline: (
      <>
        <span className="font-semibold text-[#4b9b63]">Applications OPEN NOW</span>
        <br />
        Application <strong>closing date:</strong> <strong>11.11.2026</strong>
        <br />
        Preferred start: <strong>January 2027</strong>
      </>
    ),
    href: "https://careers.humantechnopole.it/job/AI-Scientist/875-en_GB",
    external: true,
  },
  {
    title: "PhD Position",
    deadline: (
      <>
        <span className="font-semibold text-amber-600">Applications OPENING SOON</span>
        <br />
        Applications <strong>open:</strong> <strong>14.12.2026</strong>
      </>
    ),
  },
  {
    title: "Postdoc in Statistical Genetics",
    deadline: (
      <>
        <span className="font-semibold text-red-600">Applications CLOSED</span>
        <br />
        Closed: <strong>04.11.2026</strong>
        <br />
        Preferred start: <strong>January 2027</strong>
      </>
    ),
    href: "https://careers.humantechnopole.it/job/Postdoc-in-Statistical-Genetics-Casale-Group/869-en_GB",
    external: true,
  },
  {
    title: "Postdoc in AI for Biomedicine",
    deadline: (
      <>
        <span className="font-semibold text-red-600">Applications CLOSED</span>
        <br />
        Closed: <strong>04.11.2026</strong>
        <br />
        Preferred start: <strong>January 2027</strong>
      </>
    ),
    href: "https://careers.humantechnopole.it/job/Postdoc-in-AI-for-Biomedicine-Casale-Group/871-en_GB",
    external: true,
  },
];

const principles = [
  {
    title: "Genetics as a causal anchor",
    description:
      "We view human genetic variation as a naturally randomized experiment for understanding human biology.",
  },
  {
    title: "AI for scientific discovery",
    description:
      "We build AI systems that generate interpretable representations and mechanistic hypotheses—not just predictions.",
  },
  {
    title: "Biology across scales",
    description:
      "We connect population-scale human data with molecular, cellular, tissue, and clinical measurements to understand disease from genes to patients.",
  },
];

const lookingFor = [
  "Curious scientists motivated by fundamental questions in human biology and disease.",
  "Excited to build AI and statistical methods that integrate population-scale, multimodal datasets into unified models of human biology.",
  "Motivated by biological discovery and real-world impact, using AI as a scientific instrument rather than an end in itself.",
  "Driven to lead ambitious research projects from conception to publication and beyond.",
  "Collaborative, intellectually humble, and excited to learn from other disciplines.",
];

// ─── Page ─────────────────────────────────────────────────────────────────────

const Jobs = () => (
  <PageLayout>
    <div className="space-y-8">

      <header className="space-y-3">
        <h1 className="text-4xl font-bold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
          Open Positions
        </h1>
        <p className="text-base text-foreground leading-relaxed">
          The Casale Lab team at Human Technopole aims to develop AI systems that transform
          population-scale human data into mechanistic understanding of disease. Our research
          program is interdisciplinary, spanning AI, human genetics, and disease biology.
        </p>
      </header>

      {/* Current openings */}
      <section className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          {openings.map((job) => {
            const cardContent = (
              <>
                <div className="min-w-0">
                  <p className="font-semibold text-foreground leading-snug">{job.title}</p>
                  <p className="text-xs text-foreground/50 mt-1.5">{job.deadline}</p>
                </div>
                <img
                  src={htLogo}
                  alt="Human Technopole"
                  className="h-8 w-auto shrink-0"
                />
              </>
            );
            const staticCardClass =
              "flex min-h-[8.5rem] items-start justify-between gap-4 border border-border rounded-sm p-5";
            const cardClass = `${staticCardClass} hover:bg-muted/50 transition-colors`;

            if (!job.href) {
              return (
                <div key={job.title} className={staticCardClass}>
                  {cardContent}
                </div>
              );
            }

            return job.external ? (
              <a
                key={job.href}
                href={job.href}
                target="_blank"
                rel="noreferrer"
                className={cardClass}
              >
                {cardContent}
              </a>
            ) : (
              <Link
                key={job.href}
                to={job.href}
                target="_blank"
                rel="noreferrer"
                className={cardClass}
              >
                {cardContent}
              </Link>
            );
          })}
        </div>
      </section>


      {/* Core principles + What we look for — compact, same level */}
      <div className="grid sm:grid-cols-2 gap-10 max-w-3xl">
        <section className="space-y-3">
          <h2 className="text-base font-semibold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
            How We Think
          </h2>
          <ul className="space-y-1.5">
            {principles.map((p) => (
              <li key={p.title} className="flex gap-2 text-sm text-foreground leading-relaxed">
                <span className="shrink-0 text-foreground/40 select-none">•</span>
                <span>
                  <span className="font-semibold">{p.title}</span>
                  <br />
                  {p.description}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
            Who Thrives Here
          </h2>
          <ul className="space-y-1.5">
            {lookingFor.map((item) => (
              <li key={item} className="flex gap-2 text-sm text-foreground leading-relaxed">
                <span className="shrink-0 text-foreground/40 select-none">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

    </div>
  </PageLayout>
);

export default Jobs;
