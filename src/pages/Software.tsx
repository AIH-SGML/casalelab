import PageLayout from "@/components/PageLayout";

const tools = [
  {
    name: "LIMIX",
    description: "A flexible and efficient framework for linear mixed models in quantitative genetics.",
    link: "https://github.com/limix/limix",
  },
  {
    name: "CellRegMap",
    description: "A tool for mapping gene-context interactions at single-cell resolution.",
    link: "https://github.com/limix/CellRegMap",
  },
  {
    name: "StructLMM",
    description: "Structured linear mixed models for multi-environment GWAS.",
    link: "https://github.com/limix/struct-lmm",
  },
];

const Software = () => (
  <PageLayout>
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-foreground">Software</h1>
      <p className="text-muted-foreground leading-relaxed max-w-2xl">
        We develop open-source tools for statistical genetics and computational biology.
        All software is available on GitHub.
      </p>
      <div className="space-y-4">
        {tools.map((t) => (
          <div key={t.name} className="p-4 rounded-md bg-card border border-border space-y-1">
            <a
              href={t.link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent hover:underline"
            >
              {t.name} ↗
            </a>
            <p className="text-sm text-muted-foreground">{t.description}</p>
          </div>
        ))}
      </div>
    </div>
  </PageLayout>
);

export default Software;
