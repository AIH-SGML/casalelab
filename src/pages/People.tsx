import PageLayout from "@/components/PageLayout";

const pi = {
  name: "Francesco Paolo Casale",
  role: "Principal Investigator",
  bio: "Assistant Professor, Department of Computational Biology, University of Lausanne (UNIL). Previously at Microsoft Research and the European Bioinformatics Institute (EMBL-EBI).",
};

const members = [
  { name: "Anna Müller", role: "PhD Student", focus: "Deep generative models for single-cell data" },
  { name: "Luca Rossi", role: "PhD Student", focus: "Statistical methods for GWAS" },
  { name: "Sarah Chen", role: "Postdoctoral Researcher", focus: "Multi-omics integration" },
  { name: "David Park", role: "MSc Student", focus: "Variational inference for genetics" },
];

const People = () => (
  <PageLayout>
    <div className="space-y-10">
      <h1 className="text-3xl font-bold text-foreground">People</h1>

      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-foreground">{pi.name}</h2>
        <p className="text-sm text-accent font-medium">{pi.role}</p>
        <p className="text-muted-foreground leading-relaxed max-w-2xl">{pi.bio}</p>
      </div>

      <div className="space-y-6">
        <h2 className="text-lg font-semibold text-foreground">Team</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {members.map((m) => (
            <div key={m.name} className="p-4 rounded-md bg-card border border-border space-y-1">
              <p className="font-medium text-foreground">{m.name}</p>
              <p className="text-sm text-accent">{m.role}</p>
              <p className="text-sm text-muted-foreground">{m.focus}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </PageLayout>
);

export default People;
