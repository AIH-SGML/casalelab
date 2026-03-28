import PageLayout from "@/components/PageLayout";
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

const pi = {
  name: "Francesco Paolo Casale",
  role: "Principal Investigator",
  bio: "Leads the Casale Lab, developing AI and statistical methods for causal discovery in human disease. He trained in human genetics at the University of Cambridge and EMBL-EBI, advanced AI for biology at Microsoft Research in Boston, and led Statistical Genetics at Insitro in the San Francisco Bay Area, applying AI to drug discovery. Since 2022, he has been a Principal Investigator at Helmholtz Munich, where he builds and directs a research program focused on interpretable multi-scale models linking genetic variation to disease mechanisms.",
  photo: paoloImg,
};

const postdocs = [
  {
    name: "Diyuan Lu",
    role: "Postdoctoral Researcher",
    description: "Develops machine learning methods across clinical, imaging, and molecular data to predict disease, stratify subtypes, and map underlying mechanisms.",
    photo: diyuanImg,
  },
  {
    name: "Abhinav Jain",
    role: "Postdoctoral Researcher",
    description: "Builds AI methods to model how rare and common genetic variants perturb biological pathways and function to drive disease.",
    photo: abhinavImg,
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
    name: "Shubham Chaudhary",
    role: "PhD Student",
    description: "Links genetic variation to tissue morphology through AI-driven genome-wide association studies of histology-derived phenotypes.",
    photo: shubhamImg,
  },
  {
    name: "Xiaotong Fu",
    role: "PhD Student",
    coSupervisor: "Fabian Theis, HGMU",
    description: "Integrates retinal imaging and genetic data with machine learning to discover biomarkers and model disease progression in eye diseases.",
    photo: xiaotongImg,
  },
];

const members = [...postdocs, ...phdStudents].sort((a, b) => a.name.localeCompare(b.name));

type Member = {
  name: string;
  role: string;
  description: string;
  photo: string;
  coSupervisor?: string;
};

const MemberCard = ({ name, role, description, photo, coSupervisor }: Member) => (
  <div className="p-5 rounded-md bg-card border border-border flex items-start gap-5 min-h-48">
    <img
      src={photo}
      alt={name}
      width={132}
      height={132}
      className="w-32 h-32 rounded-md object-cover shrink-0"
    />
    <div className="space-y-1 flex-1 min-w-0">
      <p className="font-medium text-foreground">{name}</p>
      <div className="space-y-0">
        <p className="text-sm text-accent font-medium">{role}</p>
        {coSupervisor ? (
          <p className="text-[11px] font-normal text-accent/80">co-sup. {coSupervisor}</p>
        ) : null}
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  </div>
);

const People = () => (
  <PageLayout>
    <div className="space-y-10">
      <h1 className="text-3xl font-bold text-foreground">People</h1>

      <div className="flex gap-6 items-start flex-col sm:flex-row">
        <img
          src={pi.photo}
          alt={pi.name}
          width={160}
          height={160}
          className="rounded-md object-cover w-40 h-40 shrink-0"
        />
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-foreground">{pi.name}</h2>
          <p className="text-sm text-accent font-medium">{pi.role}</p>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">{pi.bio}</p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="grid xl:grid-cols-2 gap-5">
          {members.map((m) => <MemberCard key={m.name} {...m} />)}
        </div>
      </div>
    </div>
  </PageLayout>
);

export default People;
