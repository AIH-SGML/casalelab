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

const PostdocAiBiomedicine = () => (
  <JobPosting title="Postdoc in AI for Biomedicine" location={LOCATION}>
    <Intro />

    <Section title="Your mission">
      <Prose>
        We are seeking an ambitious postdoctoral researcher to develop next-generation AI methods
        that uncover the biological mechanisms of human disease. You will develop machine learning
        methods for multimodal biomedical data, with projects spanning imaging, genetics, and
        clinical data, depending on your interests and expertise.
      </Prose>
      <Prose>
        Your work will sit at the intersection of machine learning, computational biology, and
        human genetics, with opportunities to lead methodological innovation and drive high-impact
        biological discoveries.
      </Prose>
    </Section>

    <WhatMakesExceptional />

    <Section title="What you'll achieve">
      <Bullets
        items={[
          "Develop next-generation AI methods integrating human genetics and multimodal biology.",
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
          "PhD in Machine Learning, Artificial Intelligence, Computational Biology, Computer Science, Bioinformatics, or a related quantitative discipline.",
          "Strong publication record in top biomedicine journals, or machine learning venues. Ideally, your work has focused on developing AI methods motivated by biological or biomedical questions using large molecular, imaging, or clinical datasets.",
          "Excellent programming skills in Python and experience developing AI systems for large-scale biomedical datasets.",
          "Strong understanding of modern machine learning and AI, including deep learning, representation learning, foundation models, and multimodal learning, with the ability to critically evaluate, develop, and apply state-of-the-art methods to biological problems.",
        ]}
      />
      <SubHead>Preferred</SubHead>
      <Bullets
        items={[
          "Experience developing deep learning models for multimodal biomedical data.",
          "Experience with imaging, single-cell, spatial transcriptomics, electronic health records, or other large-scale biomedical datasets.",
          "Experience with modern AI frameworks (e.g. PyTorch, JAX) and large-scale computing environments.",
          "Familiarity with human genetics is advantageous but not required.",
        ]}
      />
      <SubHead>Organizational and social skills</SubHead>
      <Bullets items={ORG_SOCIAL} />
    </Section>

    <HowToApply />
  </JobPosting>
);

export default PostdocAiBiomedicine;
