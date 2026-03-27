import PageLayout from "@/components/PageLayout";

const publications = [
  {
    year: "2024",
    items: [
      { authors: "Casale FP, Dalca AV, Saglietti L, Listgarten J, Fusi N", title: "Gaussian process prior variational autoencoders", journal: "NeurIPS 2024" },
      { authors: "Haan R, Casale FP", title: "Multi-trait fine-mapping with variance components", journal: "Nature Genetics, 2024" },
    ],
  },
  {
    year: "2023",
    items: [
      { authors: "Casale FP, Horta D, Rakitsch B, Stegle O", title: "Joint genetic analysis using variant sets reveals polygenic gene-context interactions", journal: "PLoS Genetics, 2023" },
      { authors: "Moore R, Casale FP, Bonder MJ, Stegle O", title: "A linear mixed model approach to study multivariate gene-environment interactions", journal: "Genome Biology, 2023" },
    ],
  },
  {
    year: "2022",
    items: [
      { authors: "Casale FP, Rakitsch B, Lippert C, Stegle O", title: "Efficient set tests for the genetic analysis of correlated traits", journal: "Nature Methods, 2022" },
    ],
  },
];

const Publications = () => (
  <PageLayout>
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-foreground">Publications</h1>
      <p className="text-sm text-muted-foreground">Selected publications. See Google Scholar for a full list.</p>
      <div className="space-y-8">
        {publications.map((group) => (
          <div key={group.year} className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">{group.year}</h2>
            <ul className="space-y-4">
              {group.items.map((p, i) => (
                <li key={i} className="space-y-0.5">
                  <p className="text-sm text-foreground font-medium">{p.title}</p>
                  <p className="text-sm text-muted-foreground">{p.authors}</p>
                  <p className="text-sm text-accent italic">{p.journal}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </PageLayout>
);

export default Publications;
