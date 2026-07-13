import {
  JobPosting,
  Section,
  Prose,
  SubHead,
  Bullets,
  Intro,
  WhatMakesExceptional,
  HowToApply,
  ORG_SOCIAL,
  LOCATION,
} from "./JobPosting";

const PostdocStatisticalGenetics = () => (
  <JobPosting title="Postdoc in Statistical Genetics" location={LOCATION}>
    <Intro />

    <Section title="Your mission">
      <Prose>
        We are seeking an ambitious postdoctoral researcher to develop computational methods that
        connect human genetic variation to biological function. Using population-scale human
        genetics together with single-cell, spatial, and multimodal molecular data, you will
        identify the cells, cellular states, and biological programs through which genetic
        variation influences disease.
      </Prose>
      <Prose>
        Your work will sit at the intersection of statistical genetics, machine learning, and
        mechanistic biology, with opportunities to lead methodological innovation and drive
        high-impact biological discoveries.
      </Prose>
    </Section>

    <WhatMakesExceptional />

    <Section title="What you'll achieve">
      <Bullets
        items={[
          "Develop next-generation methods integrating human genetics and multimodal biology.",
          "Drive biological discovery across population-scale, molecular, and clinical data.",
          "Build an internationally recognized research profile through top publications and conferences.",
          "Shape the future of AI for science across academia, industry, and entrepreneurship.",
        ]}
      />
    </Section>

    <Section title="What you'll bring">
      <SubHead>Essential</SubHead>
      <Bullets
        items={[
          "PhD in Statistical Genetics, Computational Biology, Bioinformatics, Biostatistics, Machine Learning, or a related quantitative discipline.",
          "Strong publication record in leading computational biology, genetics, or biomedical journals. Ideally, your work has focused on developing computational methods motivated by biological questions using population-scale human genetics or multimodal molecular data.",
          "Excellent programming skills in Python and experience developing research software for large-scale genomic or molecular datasets.",
          "Strong understanding of modern machine learning and AI, including deep learning and representation learning, with the ability to critically evaluate, develop, and apply state-of-the-art methods to biological problems.",
        ]}
      />
      <SubHead>Preferred</SubHead>
      <Bullets
        items={[
          "Experience with GWAS, biobanks, or population-scale genetics.",
          "Experience with single-cell, spatial transcriptomics, or functional genomics.",
          "Background in Bayesian statistics, causal inference, or probabilistic modelling.",
          "Familiarity with modern AI architectures and foundation models.",
        ]}
      />
      <SubHead>Organizational and social skills</SubHead>
      <Bullets items={ORG_SOCIAL} />
    </Section>

    <HowToApply />
  </JobPosting>
);

export default PostdocStatisticalGenetics;
