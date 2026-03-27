import PageLayout from "@/components/PageLayout";
import teamPhoto from "@/assets/team-group.jpg";

const Index = () => (
  <PageLayout>
    <div className="flex flex-col items-center gap-8 py-8">
      <h1
        className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        AI&amp;Genetics<span className="text-accent">4</span>Biology
      </h1>
      <img
        src={teamPhoto}
        alt="Casale Lab team"
        width={896}
        height={504}
        className="rounded-md w-full object-cover"
      />
    </div>
  </PageLayout>
);

export default Index;
