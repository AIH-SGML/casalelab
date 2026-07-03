import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import NetworkBackground from "./NetworkBackground";

const PageLayout = ({
  children,
  mainClassName,
  background = false,
}: {
  children: React.ReactNode;
  mainClassName?: string;
  background?: boolean;
}) => {
  const { pathname } = useLocation();
  return (
  <div className="min-h-screen flex flex-col bg-background">
    {background && (
      <NetworkBackground className="pointer-events-none fixed inset-0 -z-10 h-full w-full" />
    )}
    <Navbar />
    <main
      key={pathname}
      className={cn("animate-page-enter flex-1 max-w-4xl mx-auto w-full px-6 py-12", mainClassName)}
    >
      {children}
    </main>
    <footer className="border-t border-border bg-background py-8 text-center text-xs text-muted-foreground tracking-wide">
      © {new Date().getFullYear()} Casale Lab · {" "}
      <a href="https://www.linkedin.com/in/francesco-paolo-casale-822140275/" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">Follow on LinkedIn</a>
    </footer>
  </div>
  );
};

export default PageLayout;
