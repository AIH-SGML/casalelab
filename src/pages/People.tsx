import PageLayout from "@/components/PageLayout";
import francescoImg from "@/assets/people/francesco-casale.jpg";
import annaImg from "@/assets/people/anna-muller.jpg";
import lucaImg from "@/assets/people/luca-rossi.jpg";
import sarahImg from "@/assets/people/sarah-chen.jpg";
import davidImg from "@/assets/people/david-park.jpg";

const pi = {
  name: "Francesco Paolo Casale",
  role: "Principal Investigator",
  bio: "Assistant Professor, Department of Computational Biology, University of Lausanne (UNIL). Previously at Microsoft Research and the European Bioinformatics Institute (EMBL-EBI).",
  photo: francescoImg,
};

const members = [
  { name: "Anna Müller", role: "PhD Student", focus: "Deep generative models for single-cell data", photo: annaImg },
  { name: "Luca Rossi", role: "PhD Student", focus: "Statistical methods for GWAS", photo: lucaImg },
  { name: "Sarah Chen", role: "Postdoctoral Researcher", focus: "Multi-omics integration", photo: sarahImg },
  { name: "David Park", role: "MSc Student", focus: "Variational inference for genetics", photo: davidImg },
];

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
        <h2 className="text-lg font-semibold text-foreground">Team</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {members.map((m) => (
            <div key={m.name} className="p-4 rounded-md bg-card border border-border flex gap-4 items-start">
              <img
                src={m.photo}
                alt={m.name}
                width={80}
                height={80}
                loading="lazy"
                className="rounded-md object-cover w-20 h-20 shrink-0"
              />
              <div className="space-y-1">
                <p className="font-medium text-foreground">{m.name}</p>
                <p className="text-sm text-accent">{m.role}</p>
                <p className="text-sm text-muted-foreground">{m.focus}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </PageLayout>
);

export default People;
