import { cn } from "@/lib/utils";
import Navbar from "./Navbar";

const PageLayout = ({
  children,
  mainClassName,
}: {
  children: React.ReactNode;
  mainClassName?: string;
}) => (
  <div className="min-h-screen flex flex-col bg-background">
    <Navbar />
    <main className={cn("flex-1 max-w-4xl mx-auto w-full px-6 py-12", mainClassName)}>
      {children}
    </main>
    <footer className="border-t border-white/10 bg-[#071019] py-6 text-center text-sm text-slate-400">
      © {new Date().getFullYear()} Casale Lab. All rights reserved.
    </footer>
  </div>
);

export default PageLayout;
