import PageLayout from "@/components/PageLayout";
import francescoImg from "@/assets/people/francesco-casale.jpg";

const pi = {
  name: "Francesco Paolo Casale",
  role: "Principal Investigator",
  bio: "Assistant Professor, Department of Computational Biology, University of Lausanne (UNIL). Previously at Microsoft Research and the European Bioinformatics Institute (EMBL-EBI).",
  photo: francescoImg,
};

const postdocs = [
  { name: "Diyuan Lu" },
  { name: "Abhinav Jain" },
  { name: "Jamison Burks" },
];

const phdStudents = [
  { name: "Antonio Nappi" },
  { name: "Ayshan Aliyeva" },
  { name: "Benedikt Roth" },
  { name: "Daniel Sens" },
  { name: "Emanuele Ruoppolo" },
  { name: "Jan Engelmann" },
  { name: "Lubiuv Shilova" },
  { name: "Mairi McClean" },
  { name: "Martin Meinel" },
  { name: "Niklas Stotzem" },
  { name: "Shubham Chaudhary" },
  { name: "Xiaotong Fu" },
];

const MemberCard = ({ name }: { name: string }) => (
  <div className="p-4 rounded-md bg-card border border-border flex items-center gap-3">
    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground font-medium text-sm shrink-0">
      {name.split(" ").map(n => n[0]).join("")}
    </div>
    <p className="font-medium text-foreground">{name}</p>
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
        <h2 className="text-lg font-semibold text-foreground">Postdocs</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {postdocs.map((m) => <MemberCard key={m.name} name={m.name} />)}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-lg font-semibold text-foreground">PhD Students</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {phdStudents.map((m) => <MemberCard key={m.name} name={m.name} />)}
        </div>
      </div>
    </div>
  </PageLayout>
);

export default People;
