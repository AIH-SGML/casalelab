import {
  JobPosting,
  Prose,
  Section,
} from "./JobPosting";

const linkClass =
  "font-semibold text-[#4b9b63] hover:text-[#34754a] hover:underline underline-offset-2 transition-colors";

const projects = [
  {
    title: "Mechanistic Discovery from Multimodal Human Cohorts Using AI",
    href: "https://www.polimi.it/fileadmin/user_upload/dottorato/bandi/bandi_aggiuntivi/ciclo42/2_lug26/bandi/SCHEDA_5693_DADS_MECHANISTIC_DISCOVERY_FROM_MULTIMODAL_HUMAN.PDF",
  },
  {
    title: "AI for Computational Pathology of the Human Pancreas",
    href: "https://www.polimi.it/fileadmin/user_upload/dottorato/bandi/bandi_aggiuntivi/ciclo42/2_lug26/bandi/SCHEDA_5694_DADS_AI_FOR_COMPUTATIONAL_PATHOLOGY_OF_THE_HUMAN.PDF",
  },
];

const PhdPositions = () => (
  <JobPosting
    title="2 Fully Funded PhD Positions"
    location="Politecnico di Milano / Human Technopole"
    status={<span className="font-semibold text-[#4b9b63]">Applications are OPEN NOW</span>}
  >
    <Section title="Overview">
      <Prose>
        We are recruiting two fully funded PhD students to join the Casale Lab at{" "}
        <strong>Human Technopole in Milan</strong>, through the{" "}
        <a
          href="https://www.polimi.it/en/phd/prospective-phd-candidates/admission/calls-and-open-positions/ciclo-42/2nd-call"
          target="_blank"
          rel="noreferrer"
          className={linkClass}
        >
          PhD Programme in Data Analytics and Decision Sciences (DADS) at Politecnico di Milano
        </a>
        .
      </Prose>
      <Prose>
        The students will be enrolled in the DADS PhD programme at Politecnico di Milano, with
        their research carried out in our group at Human Technopole.
      </Prose>
    </Section>

    <Section title="Application Information">
      <ul className="space-y-1.5 text-sm text-foreground leading-relaxed">
        <li className="flex gap-2">
          <span className="shrink-0 text-foreground/40 select-none">•</span>
          <span>
            <strong>Application deadline:</strong> 18 September 2026, 14:00 CEST
          </span>
        </li>
        <li className="flex gap-2">
          <span className="shrink-0 text-foreground/40 select-none">•</span>
          <span>
            <strong>Starting date:</strong> 1 November 2026
          </span>
        </li>
        <li className="flex gap-2">
          <span className="shrink-0 text-foreground/40 select-none">•</span>
          <span>
            <strong>Duration:</strong> 3 years, with potential for a 1-year extension
          </span>
        </li>
        <li className="flex gap-2">
          <span className="shrink-0 text-foreground/40 select-none">•</span>
          <span>
            <strong>Official call:</strong>{" "}
            <a
              href="https://www.polimi.it/en/phd/prospective-phd-candidates/admission/calls-and-open-positions/ciclo-42/2nd-call"
              target="_blank"
              rel="noreferrer"
              className={linkClass}
            >
              42nd PhD cycle — 2nd call
            </a>
          </span>
        </li>
        <li className="flex gap-2">
          <span className="shrink-0 text-foreground/40 select-none">•</span>
          <span>
            <strong>Data Analytics and Decision Sciences (DADS):</strong>{" "}
            <a
              href="https://www.polimi.it/en/phd/prospective-phd-candidates/admission/calls-and-open-positions/ciclo-42/2nd-call#c35111"
              target="_blank"
              rel="noreferrer"
              className={linkClass}
            >
              full project list
            </a>
          </span>
        </li>
      </ul>
    </Section>

    <Section title="Casale Lab projects in DADS call">
      <div className="grid gap-4">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="block border border-border rounded-sm p-5 hover:bg-muted/50 transition-colors"
          >
            <h3 className="font-semibold text-foreground leading-snug transition-colors hover:text-[#4b9b63]">
              {project.title}
            </h3>
            <p className="text-xs text-foreground/50 mt-1.5">Project description PDF</p>
          </a>
        ))}
      </div>
    </Section>

    <Section title="Apply">
      <div className="space-y-4">
        <a
          href="https://www.polimi.it/en/phd/prospective-phd-candidates/admission/how-to-apply"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-sm bg-[#4b9b63] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#34754a]"
        >
          Apply Now
        </a>
      </div>
    </Section>
  </JobPosting>
);

export default PhdPositions;
