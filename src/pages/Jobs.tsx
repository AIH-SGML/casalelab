import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import htLogo from "@/assets/logos/ht-logo.png";

// ─── Data ─────────────────────────────────────────────────────────────────────

const openings = [
  {
    title: "Postdoc in Statistical Genetics",
    deadline: (
      <>
        <span className="font-semibold text-[#4b9b63]">Applications OPEN NOW</span>
        <br />
        Application <strong>closing date:</strong> <strong>04.11.2026</strong>
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
        <span className="font-semibold text-[#4b9b63]">Applications OPEN NOW</span>
        <br />
        Application <strong>closing date:</strong> <strong>04.11.2026</strong>
        <br />
        Preferred start: <strong>January 2027</strong>
      </>
    ),
    href: "https://careers.humantechnopole.it/job/Postdoc-in-AI-for-Biomedicine-Casale-Group/871-en_GB",
    external: true,
  },
  {
    title: "Senior AI Research Scientist",
    deadline: (
      <>
        Expressions of interest: Now
        <br />
        Formal call opening soon
      </>
    ),
    href: "/jobs/ai-scientist",
  },
  {
    title: "2 Fully Funded PhD Positions",
    deadline: (
      <>
        <span className="font-semibold text-red-600">Applications CLOSED</span>
        <br />
        Closed: <strong>18 Sept 2026, 14:00 CEST</strong>
        <br />
        Start date: <strong>1 November 2026</strong>
      </>
    ),
    href: "/jobs/phd-positions",
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
          We are recruiting postdocs to join the Casale Lab team at Human Technopole. The team
          aims to advance an established research program in AI, human genetics, and disease
          biology, developing AI systems that transform population-scale human data into
          mechanistic understanding of disease. The Senior AI Research Scientist position will
          open soon.
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
            const cardClass =
              "flex min-h-[8.5rem] items-start justify-between gap-4 border border-border rounded-sm p-5 hover:bg-muted/50 transition-colors";

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

        <p className="text-sm text-foreground leading-relaxed pt-1">
          The postdoc positions are open for applications through the Human Technopole careers
          website. Preferred start is January 2027; alternative start dates can be discussed. We
          are collecting expressions of interest for the Senior AI Research Scientist position
          ahead of the formal call. For pre-enquiries, contact{" "}
          <a
            href="mailto:casalelab.jobs@gmail.com"
            className="font-semibold text-[#4b9b63] hover:text-[#34754a] hover:underline underline-offset-2 transition-colors"
          >
            casalelab.jobs@gmail.com
          </a>
          .
        </p>
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
