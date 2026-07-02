import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import teamImg1 from "@/assets/team/team-group-1.jpg";
import teamImg2 from "@/assets/team/team-group-2.png";
import teamImg3 from "@/assets/team/team-group-3.png";
import teamImg4 from "@/assets/team/team-group-4.png";
import teamImg5 from "@/assets/team/team-group-5.jpg";
import teamImg6 from "@/assets/team/team-group-6.png";
import abhinavImg from "@/assets/people/abhinav_jain.png";
import antonioImg from "@/assets/people/antonio_nappi.png";
import ayshanImg from "@/assets/people/ayshan_alyneva.png";
import benediktImg from "@/assets/people/benedikt_roth.png";
import danielImg from "@/assets/people/daniel_sens.png";
import diyuanImg from "@/assets/people/diyuan_lu.png";
import emanueleImg from "@/assets/people/emanuele_ruoppolo.png";
import jamisonImg from "@/assets/people/jamison_burks.png";
import janImg from "@/assets/people/jan_engelman.png";
import liubovImg from "@/assets/people/liubov_shilova.png";
import mairiImg from "@/assets/people/mairi_mcclean.png";
import martinImg from "@/assets/people/martin_meinel.png";
import niklasImg from "@/assets/people/niklas_stotzem.png";
import paoloImg from "@/assets/people/paolo_casale.png";
import shubhamImg from "@/assets/people/shubham_chaudhary.png";
import xiaotongImg from "@/assets/people/xiaotong_fu.png";

// ─── Carousel ─────────────────────────────────────────────────────────────────

const groupImages = [teamImg1, teamImg2, teamImg3, teamImg4, teamImg5, teamImg6];

const GroupCarousel = () => {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i - 1 + groupImages.length) % groupImages.length);
  const next = () => setIndex((i) => (i + 1) % groupImages.length);

  return (
    <div className="space-y-3">
      <div className="relative flex items-center gap-3">
        <button
          onClick={prev}
          aria-label="Previous image"
          className="shrink-0 p-1 text-foreground/40 hover:text-foreground transition-colors"
        >
          <ChevronLeft size={22} />
        </button>

        {/* Fixed-size box — image centers inside, never upscaled, shrinks only when needed */}
        <div className="flex-1 h-80 bg-muted rounded-sm flex items-center justify-center overflow-hidden">
          <img
            key={index}
            src={groupImages[index]}
            alt={`Research group photo ${index + 1}`}
            className="max-w-full max-h-full w-auto h-auto"
          />
        </div>

        <button
          onClick={next}
          aria-label="Next image"
          className="shrink-0 p-1 text-foreground/40 hover:text-foreground transition-colors"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-1.5">
        {groupImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to image ${i + 1}`}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${
              i === index ? "bg-foreground" : "bg-foreground/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const pi = {
  name: "Francesco Paolo Casale",
  role: "Principal Investigator",
  bio: "After training in Physics at the University of Naples Federico II, Paolo completed a PhD in human genetics and statistical modeling at the University of Cambridge and EMBL-EBI, followed by postdoctoral work in AI for biology at Microsoft Research in Boston. He then led an interdisciplinary team at insitro in the San Francisco Bay Area, applying machine learning and human genetics to target discovery. Since 2022, he has been a Principal Investigator at Helmholtz Munich, where he leads a research program focused on modelling human disease across scales, integrating AI, genetics, and multimodal data to uncover the mechanisms linking genetic variation to health outcomes.",
  photo: paoloImg,
};

const postdocs = [
  {
    name: "Abhinav Jain",
    role: "Postdoctoral Researcher",
    description: "Builds AI methods to model how rare and common genetic variants perturb biological pathways and function to drive disease.",
    photo: abhinavImg,
  },
  {
    name: "Diyuan Lu",
    role: "Postdoctoral Researcher",
    description: "Develops machine learning methods across clinical, imaging, and molecular data to predict disease, stratify subtypes, and map underlying mechanisms.",
    photo: diyuanImg,
  },
  {
    name: "Jamison Burks",
    role: "Postdoctoral Researcher",
    coSupervisor: "Fabian Theis, HGMU",
    description: "Applies clinical machine learning to large-scale cohort data to build digital health solutions in infectious diseases.",
    photo: jamisonImg,
  },
];

const phdStudents = [
  {
    name: "Antonio Nappi",
    role: "PhD Student",
    coSupervisor: "Na Cai, ETH",
    description: "Designs Bayesian methods that integrate functional annotations to improve rare variant association testing and gene discovery.",
    photo: antonioImg,
  },
  {
    name: "Ayshan Aliyeva",
    role: "PhD Student",
    coSupervisor: "Na Cai, ETH",
    description: "Maps disease-associated genetic signals to specific cell types and contexts using single-cell and disease genetics data.",
    photo: ayshanImg,
  },
  {
    name: "Benedikt Roth",
    role: "PhD Student",
    coSupervisor: "Fabian Theis, HGMU",
    description: "Learns multimodal representations of patient health from large biobanks for multi-disease risk prediction and stratification.",
    photo: benediktImg,
  },
  {
    name: "Daniel Sens",
    role: "PhD Student",
    coSupervisor: "Julia Schnabel, HGMU",
    description: "Applies genetics-guided AI to derive intermediate disease phenotypes from medical imaging and quantitative traits.",
    photo: danielImg,
  },
  {
    name: "Emanuele Ruoppolo",
    role: "PhD Student",
    description: "Extends rare variant association analysis to non-coding regions using genomic language models.",
    photo: emanueleImg,
  },
  {
    name: "Jan Engelmann",
    role: "PhD Student",
    coSupervisor: "Fabian Theis, HGMU",
    description: "Identifies disease-relevant functional cell states using large-scale single-cell and genetic cohorts.",
    photo: janImg,
  },
  {
    name: "Liubov Shilova",
    role: "PhD Student",
    coSupervisor: "Bjoern Eskofier, LMU",
    description: "Uses representation learning to derive intermediate phenotypes linking genetic variation to tissue processes and disease.",
    photo: liubovImg,
  },
  {
    name: "Mairi McClean",
    role: "PhD Student",
    coSupervisor: "Norbert Heinrich, LMU",
    description: "Builds clinical machine learning models to predict long-term treatment outcomes in infectious disease trials, focusing on tuberculosis.",
    photo: mairiImg,
  },
  {
    name: "Martin Meinel",
    role: "PhD Student",
    coSupervisor: "Michael Menden, UniMelb",
    description: "Uses machine learning to map genetic effects to cellular states and discover transcriptomic biomarkers of disease.",
    photo: martinImg,
  },
  {
    name: "Niklas Stotzem",
    role: "PhD Student",
    description: "Develops population-level methods for spatial transcriptomics to map disease signals to genes and tissue regions.",
    photo: niklasImg,
  },
  {
    name: "Xiaotong Fu",
    role: "PhD Student",
    coSupervisor: "Fabian Theis, HGMU",
    description: "Integrates retinal imaging and genetic data with machine learning to discover biomarkers and model disease progression in eye diseases.",
    photo: xiaotongImg,
  },
];

const alumni = [
  {
    name: "Shubham Chaudhary",
    role: "PhD Student (2022–2026)",
    description: "Developed AI methods linking genetic variation to tissue morphology through histology-derived phenotypes. Currently a Postdoctoral Researcher in the Luecken Lab (LMU).",
    photo: shubhamImg,
  },
];

// ─── Components ───────────────────────────────────────────────────────────────

type Member = { name: string; role: string; description: string; photo: string; coSupervisor?: string };

const MemberCard = ({ name, role, description, photo, coSupervisor }: Member) => (
  <div className="flex items-start gap-5 bg-muted/50 rounded-sm p-4">
    <img
      src={photo}
      alt={name}
      className="w-20 h-20 rounded-sm object-cover shrink-0"
    />
    <div className="space-y-0.5 min-w-0">
      <p className="font-medium text-foreground text-sm">{name}</p>
      <p className="text-xs text-foreground/60">{role}{coSupervisor && ` (co-sup. ${coSupervisor})`}</p>
      <p className="text-sm text-foreground leading-relaxed pt-1">{description}</p>
    </div>
  </div>
);

// ─── Page ─────────────────────────────────────────────────────────────────────

const People = () => (
  <PageLayout>
    <div className="space-y-16">

      <h1 className="text-4xl font-bold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
        Team
      </h1>

      {/* PI */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
          Principal Investigator
        </h2>
        <div className="flex gap-6 items-start flex-col sm:flex-row">
          <img
            src={pi.photo}
            alt={pi.name}
            className="rounded-sm object-cover w-36 h-36 shrink-0"
          />
          <div className="space-y-1.5">
            <p className="font-semibold text-foreground">{pi.name}</p>
            <p className="text-sm text-foreground leading-relaxed pt-1 max-w-2xl">{pi.bio}</p>
          </div>
        </div>
      </section>

      <hr className="border-t border-border" />

      {/* Lab pictures carousel */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
          Lab Pictures
        </h2>
        <GroupCarousel />
      </section>

      <hr className="border-t border-border" />

      {/* Team members — postdocs + PhD students, sorted by last name */}
      <section className="space-y-8">
        <h2 className="text-xl font-semibold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
          Team Members
        </h2>
        <div className="grid sm:grid-cols-2 gap-8">
          {[...postdocs, ...phdStudents]
            .sort((a, b) => {
              const lastName = (name: string) => name.split(" ").slice(-1)[0];
              return lastName(a.name).localeCompare(lastName(b.name));
            })
            .map((m) => <MemberCard key={m.name} {...m} />)}
        </div>
      </section>

      <hr className="border-t border-border" />

      {/* Alumni */}
      <section className="space-y-8">
        <h2 className="text-xl font-semibold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
          Alumni
        </h2>
        <div className="grid sm:grid-cols-2 gap-8">
          {alumni
            .sort((a, b) => {
              const lastName = (name: string) => name.split(" ").slice(-1)[0];
              return lastName(a.name).localeCompare(lastName(b.name));
            })
            .map((m) => <MemberCard key={m.name} {...m} />)}
        </div>
      </section>

    </div>
  </PageLayout>
);

export default People;
