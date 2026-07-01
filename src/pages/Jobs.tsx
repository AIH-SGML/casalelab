import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";

// ─── Data ─────────────────────────────────────────────────────────────────────

const openings = [
  {
    title: "Postdoctoral Researcher in AI for Genomics",
    deadline: "October 2026",
    href: "/jobs/postdoc-human-genetics",
  },
  {
    title: "Postdoctoral Researcher in AI for Health",
    deadline: "October 2026",
    href: "/jobs/postdoc-ml-health",
  },
  {
    title: "Senior AI Research Scientist",
    deadline: "October 2026",
    href: "/jobs/ai-scientist",
  },
  {
    title: "PhD Student Positions (2)",
    deadline: "October 2026",
    href: "/jobs/phd-students",
  },
  {
    title: "Open Application",
    deadline: "Always Open",
    href: "/jobs/open-application",
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
          We are building an interdisciplinary research group at the intersection of AI,
          human genetics, and disease biology. Our goal is to develop AI systems that
          transform population-scale human data into mechanistic understanding of disease.
          We welcome researchers who enjoy fundamental scientific questions, thrive across
          disciplines, and want to build methods with lasting scientific impact.
        </p>
      </header>

      {/* Current openings */}
      <section className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          {openings.map((job) => (
            <Link
              key={job.href}
              to={job.href}
              target="_blank"
              rel="noreferrer"
              className="block border border-border rounded-sm p-5 hover:bg-muted/50 transition-colors"
            >
              <p className="font-semibold text-foreground leading-snug">{job.title}</p>
              <p className="text-xs text-foreground/50 mt-1.5">Deadline: {job.deadline}</p>
            </Link>
          ))}
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
