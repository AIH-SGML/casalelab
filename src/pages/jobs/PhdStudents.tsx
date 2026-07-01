import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";

const PhdStudents = () => (
  <PageLayout>
    <div className="space-y-10 max-w-2xl">
      <div className="space-y-2">
        <p className="text-sm text-foreground/50">
          <Link to="/jobs" className="hover:underline underline-offset-2 transition-colors">Open Positions</Link>
          {" "}·{" "}PhD Student Positions
        </p>
        <h1 className="text-4xl font-bold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
          PhD Student Positions (2)
        </h1>
        <p className="text-sm text-foreground/50">Deadline: October 2026</p>
      </div>

      <hr className="border-t border-border" />

      <p className="text-sm text-foreground/50 italic">Full position details coming soon.</p>
    </div>
  </PageLayout>
);

export default PhdStudents;
