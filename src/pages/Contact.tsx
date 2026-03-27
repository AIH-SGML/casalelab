import PageLayout from "@/components/PageLayout";

const Contact = () => (
  <PageLayout>
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-foreground">Contact</h1>
      <div className="space-y-3 text-muted-foreground">
        <p>
          <span className="text-foreground font-medium">Francesco Paolo Casale</span>
        </p>
        <p>
          Department of Computational Biology
          <br />
          University of Lausanne (UNIL)
          <br />
          Lausanne, Switzerland
        </p>
        <p>
          Email:{" "}
          <a href="mailto:francesco.casale@unil.ch" className="text-accent hover:underline">
            francesco.casale@unil.ch
          </a>
        </p>
      </div>
    </div>
  </PageLayout>
);

export default Contact;
