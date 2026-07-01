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
          Computational Health Center and Helmholtz Pioneer Campus
          <br />
          Helmholtz Munich
          <br />
          Ingolstädter Landstraße 1, 85764 Neuherberg, Germany
        </p>
        <p>
          Email:{" "}
          <a href="mailto:francescopaolo.casale@helmholtz-munich.de" className="text-accent hover:underline">
            francescopaolo.casale@helmholtz-munich.de
          </a>
        </p>
      </div>
    </div>
  </PageLayout>
);

export default Contact;
