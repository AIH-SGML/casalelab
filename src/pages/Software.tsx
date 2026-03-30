import PageLayout from "@/components/PageLayout";

const tools = [
  {
    name: "BayesRVAT",
    description:
      "A framework for rare variant association testing that improves power by aggregating multiple functional annotations within a Bayesian model.",
    codeLink: "https://github.com/AIH-SGML/BayesRVAT",
    paperLink: "https://genome.cshlp.org/content/35/12/2682",
  },
  {
    name: "HistoGWAS",
    description:
      "An AI-enabled framework for genetic analysis of tissue phenotypes in histology cohorts, spanning slide preprocessing, feature learning, genome-wide association, and downstream characterization.",
    codeLink: "https://github.com/AIH-SGML/HistoGWAS",
    paperLink: "https://doi.org/10.1186/s13059-026-04031-z",
  },
  {
    name: "MixMIL",
    description:
      "A multiple-instance learning framework with mixed effects for modeling single-cell data from microscopy and scRNA-seq.",
    codeLink: "https://github.com/AIH-SGML/mixmil",
    paperLink: "https://proceedings.mlr.press/v238/engelmann24a.html",
  },
  {
    name: "PRiMeR",
    description:
      "A framework for genetics-driven risk prediction using Mendelian randomization, with example workflows and notebooks for running the method on synthetic or cohort-style data.",
    codeLink: "https://github.com/AIH-SGML/PRiMeR",
    paperLink: "https://www.genome.org/cgi/doi/10.1101/gr.279252.124",
  },
];

const Software = () => (
  <PageLayout>
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-foreground">Software</h1>
        <p className="text-muted-foreground leading-relaxed max-w-3xl">
          We develop open-source software for statistical genetics,
          multimodal modeling, and interpretable AI in biology.
        </p>
      </div>

      <div className="space-y-5">
        {tools.map((tool) => (
          <div key={tool.name} className="p-5 rounded-md bg-card border border-border space-y-2">
            <h2 className="text-lg font-semibold text-foreground">{tool.name}</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {tool.description}
            </p>
            <p className="text-sm text-muted-foreground">
              <a
                href={tool.codeLink}
                target="_blank"
                rel="noreferrer"
                className="text-accent transition-colors hover:text-foreground"
              >
                Code
              </a>
              {" · "}
              <a
                href={tool.paperLink}
                target="_blank"
                rel="noreferrer"
                className="text-accent transition-colors hover:text-foreground"
              >
                Paper
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  </PageLayout>
);

export default Software;
