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

const AiScientist = () => (
  <JobPosting title="Senior AI Research Scientist" location={LOCATION}>
    <Intro />

    <Section title="Your mission">
      <Prose>
        We are seeking an ambitious Senior AI Research Scientist to build the computational
        foundations of the lab's research program. You will develop scalable AI systems that
        integrate multimodal biomedical data into reusable computational models for biological
        discovery.
      </Prose>
      <Prose>
        Rather than focusing on a single application, you will build AI platforms—including
        foundation models, multimodal learning frameworks, and agentic systems—that enable
        researchers across the lab to generate mechanistic insights from complex human data.
        Your work will sit at the intersection of artificial intelligence, computational biology,
        and human genetics, with opportunities to define the long-term AI strategy of the
        laboratory while contributing to high-impact scientific discoveries.
      </Prose>
    </Section>

    <WhatMakesExceptional />

    <Section title="What you'll achieve">
      <Bullets
        items={[
          "Build scalable AI platforms for multimodal biomedical data.",
          "Develop foundation models, representation learning approaches, and agentic AI systems for biological discovery.",
          "Enable scientific breakthroughs by creating computational tools and infrastructure used across multiple research programs.",
          "Shape the future of AI for science through high-impact publications, open-source software, international collaborations, and entrepreneurial initiatives.",
        ]}
      />
    </Section>

    <Section title="What you'll bring">
      <SubHead>Essential</SubHead>
      <Bullets
        items={[
          "PhD in Machine Learning, Artificial Intelligence, Computer Science, Computational Biology, or a related quantitative discipline.",
          "Strong publication record in leading AI, computational biology, or biomedical journals and conferences, demonstrating methodological innovation with real-world scientific impact.",
          "Excellent programming and software engineering skills in Python, with experience building scalable research software and AI systems.",
          "Deep understanding of modern AI, including deep learning, representation learning, foundation models, multimodal learning, and AI agents, with the ability to translate state-of-the-art research into robust scientific tools.",
        ]}
      />
      <SubHead>Preferred</SubHead>
      <Bullets
        items={[
          "Experience developing foundation models or large-scale AI systems for scientific or biomedical applications.",
          "Experience integrating multimodal biomedical datasets, including molecular, imaging, clinical, or population-scale data.",
          "Experience leading collaborative software projects and contributing to open-source scientific software.",
          "Familiarity with human genetics and computational biology is advantageous but not required.",
        ]}
      />
      <SubHead>Organizational and social skills</SubHead>
      <Bullets items={ORG_SOCIAL} />
    </Section>

    <HowToApply />
  </JobPosting>
);

export default AiScientist;
