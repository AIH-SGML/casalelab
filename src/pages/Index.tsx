import PageLayout from "@/components/PageLayout";

const Index = () => (
  <PageLayout>
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-foreground">Casale Lab</h1>
      <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
        We develop computational methods at the intersection of{" "}
        <span className="text-foreground font-medium">artificial intelligence</span>,{" "}
        <span className="text-foreground font-medium">statistical genetics</span>, and{" "}
        <span className="text-foreground font-medium">multiscale biology</span>.
      </p>
      <p className="text-muted-foreground leading-relaxed max-w-2xl">
        Our research focuses on building scalable models that integrate diverse
        biological data — from molecular measurements to population-level
        phenotypes — to advance our understanding of human health and disease.
      </p>
      <div className="pt-4 border-t border-border">
        <p className="text-sm text-muted-foreground">
          Based at the Department of Computational Biology, University of Lausanne (UNIL).
        </p>
      </div>
    </div>
  </PageLayout>
);

export default Index;
