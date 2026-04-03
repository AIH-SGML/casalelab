import PageLayout from "@/components/PageLayout";

type Publication = {
  title: string;
  authors: string;
  venue: string;
  link: string;
};

const labAuthorHighlights = [
  "D. Sens",
  "L. Shilova",
  "F.P. Casale",
  "S. Chaudhary",
  "A. Voigts",
  "A. Nappi",
  "A. Aliyeva",
  "J.P. Engelmann",
  "L. Graf",
  "M. Grebenshchikova",
];

const piAuthorHighlights = ["F.P. Casale"];

const labPublicationsByYear: { year: string; items: Publication[] }[] = [
  {
    year: "2026",
    items: [
      {
        title:
          "HistoGWAS: An AI-enabled framework for automated genetic analysis of tissue phenotypes in histology cohorts",
        authors:
          "S. Chaudhary, A. Voigts, M. Bereket, M.L. Albert, K. Schwamborn, E. Zeggini, F.P. Casale",
        venue: "Genome Biology, 2026",
        link: "https://link.springer.com/article/10.1186/s13059-026-04031-z",
      },
      {
        title:
          "GEMCONT: Genetics-based Multimodal Contrastive Learning for Disease-Focused Imaging Genetics",
        authors: "D. Sens, L. Shilova, A.V. Dalca, J. Schnabel†, F.P. Casale†",
        venue: "Medical Imaging with Deep Learning (MIDL), 2026",
        link: "https://openreview.net/pdf?id=Y8gkT7s44N",
      },
    ],
  },
  {
    year: "2025",
    items: [
      {
        title:
          "AI-based histopathology phenotyping reveals germline loci shaping breast cancer morphology",
        authors: "S. Chaudhary, A. Voigts, S. Vilov, M. Heinig, F.P. Casale",
        venue: "Machine Learning in Computational Biology, 2025",
        link: "https://proceedings.mlr.press/v311/chaudhary25a.html",
      },
      {
        title:
          "BayesRVAT enhances rare-variant association testing through Bayesian aggregation of functional annotations",
        authors: "A. Nappi, L. Shilova, T. Karaletsos, N. Cai, F.P. Casale",
        venue: "Genome Research, 2025",
        link: "https://genome.cshlp.org/content/35/12/2682",
      },
      {
        title:
          "REECAP: Contrastive learning of retinal aging reveals genetic loci linking morphology to eye disease",
        authors:
          "L. Shilova, D. Sens, A. Aliyeva, S. Chaudhary, Q. Xu, E. Salin, J. Schiefelbein, B. Asani, O.V. Amarie, E. Schneltzer, A.V. Segre, J.A. Schnabel, N. Cai, B.M. Eskofier†, F.P. Casale†",
        venue: "medRxiv, 2025",
        link: "https://www.medrxiv.org/content/10.1101/2025.11.19.25340555v2",
      },
    ],
  },
  {
    year: "2024",
    items: [
      {
        title:
          "Genetics-driven risk predictions leveraging the Mendelian randomization framework",
        authors:
          "D. Sens, L. Shilova, L. Graf, M. Grebenshchikova, B.M. Eskofier, F.P. Casale",
        venue: "Genome Research, 2024",
        link: "https://genome.cshlp.org/content/34/9/1276.long",
      },
      {
        title: "Mixed models with multiple instance learning",
        authors: "J.P. Engelmann*, A. Palma*, J.M. Tomczak, F.J. Theis†, F.P. Casale†",
        venue: "AISTATS, 2024",
        link: "https://proceedings.mlr.press/v238/engelmann24a.html",
      },
    ],
  },
];

const piPublications: Publication[] = [
  {
    title:
      "A linear mixed-model approach to study multivariate gene-environment interactions",
    authors:
      "R. Moore*, F.P. Casale*, M.J. Bonder, D. Horta, L. Franke, I. Barroso, et al.",
    venue: "Nature Genetics, 2019",
    link: "https://www.nature.com/articles/s41588-018-0271-0",
  },
  {
    title: "Probabilistic neural architecture search",
    authors: "F.P. Casale, J. Gordon, N. Fusi",
    venue: "arXiv, 2019",
    link: "https://arxiv.org/abs/1902.05116",
  },
  {
    title: "The germline genetic component of drug sensitivity in cancer cell lines",
    authors:
      "M.P. Menden*, F.P. Casale*, J. Stephan, G.R. Bignell, F. Iorio, U. McDermott, et al.",
    venue: "Nature Communications, 2018",
    link: "https://www.nature.com/articles/s41467-018-05811-3",
  },
  {
    title: "Gaussian process prior variational autoencoders",
    authors: "F.P. Casale, A. Dalca, L. Saglietti, J. Listgarten, N. Fusi",
    venue: "NeurIPS, 2018",
    link: "https://proceedings.neurips.cc/paper/2018/hash/1c336b8080f82bcc2cd2499b4c57261d-Abstract.html",
  },
  {
    title:
      "Joint genetic analysis using variant sets reveals polygenic gene-context interactions",
    authors: "F.P. Casale, D. Horta, B. Rakitsch, O. Stegle",
    venue: "PLoS Genetics, 2017",
    link: "https://journals.plos.org/plosgenetics/article?id=10.1371/journal.pgen.1006693",
  },
  {
    title:
      "Genetic drivers of epigenetic and transcriptional variation in human immune cells",
    authors:
      "L. Chen*, B. Ge*, F.P. Casale*, L. Vasquez*, T. Kwan, D. Garrido-Martin, et al.",
    venue: "Cell, 2016",
    link: "https://www.cell.com/cell/fulltext/S0092-8674(16)31446-5?_returnURL=https%3A%2F%2Flinkinghub.elsevier.com%2Fretrieve%2Fpii%2FS0092867416314465%3Fshowall%3Dtrue",
  },
  {
    title: "Efficient set tests for the genetic analysis of correlated traits",
    authors: "F.P. Casale*, B. Rakitsch*, C. Lippert, O. Stegle",
    venue: "Nature Methods, 2015",
    link: "https://www.nature.com/articles/nmeth.3439",
  },
];

const renderAuthors = (authors: string, highlights: string[]) => {
  const parts = authors.split(/(,\s+)/);

  return parts.map((part, index) => {
    const normalizedPart = part.replace(/[\*†]+$/, "");

    if (!highlights.includes(normalizedPart)) {
      return <span key={`${part}-${index}`}>{part}</span>;
    }

    return (
      <span
        key={`${part}-${index}`}
        className="underline underline-offset-2 decoration-[1px] decoration-current"
      >
        {part}
      </span>
    );
  });
};

const PublicationItem = ({
  publication,
  authorHighlights,
}: {
  publication: Publication;
  authorHighlights: string[];
}) => (
  <li className="space-y-0.5">
    <h3 className="text-base font-normal leading-snug text-foreground">
      <a
        href={publication.link}
        target="_blank"
        rel="noreferrer"
        className="transition-colors hover:text-accent"
      >
        {publication.title}
      </a>
    </h3>
    <p className="text-sm text-muted-foreground leading-relaxed">
      {renderAuthors(publication.authors, authorHighlights)}
    </p>
    <p className="text-sm text-muted-foreground italic">{publication.venue}</p>
  </li>
);

const Publications = () => (
  <PageLayout>
    <div>
      <div className="space-y-8">
        <p className="text-sm text-muted-foreground leading-relaxed">
          Full list of publications can be found on{" "}
          <a
            href="https://scholar.google.com/citations?hl=en&user=AUFp6j4AAAAJ&view_op=list_works&sortby=pubdate"
            target="_blank"
            rel="noreferrer"
            className="text-accent transition-colors hover:text-foreground"
          >
            Google Scholar
          </a>
          .
        </p>
        <h2 className="text-2xl font-semibold text-foreground">
          Selected Publications from the Lab
        </h2>

        <div className="space-y-8">
          {labPublicationsByYear.map((group) => (
            <section key={group.year} className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground">{group.year}</h2>
              <ul className="space-y-4">
                {group.items.map((publication) => (
                  <PublicationItem
                    key={publication.title}
                    publication={publication}
                    authorHighlights={labAuthorHighlights}
                  />
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>

      <div className="space-y-6 pt-8">
        <h2 className="text-2xl font-semibold text-foreground">
          Selected Publications by the PI
        </h2>
        <ul className="space-y-4">
          {piPublications.map((publication) => (
            <PublicationItem
              key={publication.title}
              publication={publication}
              authorHighlights={piAuthorHighlights}
            />
          ))}
        </ul>
      </div>
    </div>
  </PageLayout>
);

export default Publications;
