import Navbar from "./Navbar";

const PageLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-12">
      {children}
    </main>
    <footer className="border-t border-border py-6 text-center text-sm text-muted-foreground">
      © {new Date().getFullYear()} Casale Lab. All rights reserved.
    </footer>
  </div>
);

export default PageLayout;
