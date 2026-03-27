import PageLayout from "@/components/PageLayout";

const sections = [
  {
    title: "AI for Biology",
    text: "We develop deep learning and probabilistic models to extract meaningful patterns from high-dimensional biological data, including single-cell transcriptomics and spatial omics.",
  },
  {
    title: "Statistical Genetics",
    text: "Our group builds scalable methods for genome-wide association studies, variance component models, and multi-trait analyses to dissect the genetic architecture of complex traits.",
  },
  {
    title: "Multiscale Biology",
    text: "We integrate data across molecular, cellular, and population scales to create unified frameworks that link genotype to phenotype through intermediate molecular layers.",
  },
];

const Research = () => (
  <PageLayout>
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-foreground">Research</h1>
      <p className="text-muted-foreground leading-relaxed max-w-2xl">
        Our work lies at the interface of machine learning and genetics. We
        build methods that are both statistically principled and computationally
        scalable, with applications across human genetics and genomics.
      </p>
      <div className="space-y-8 pt-2">
        {sections.map((s) => (
          <div key={s.title} className="space-y-2">
            <h2 className="text-xl font-semibold text-foreground">{s.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  </PageLayout>
);

export default Research;
