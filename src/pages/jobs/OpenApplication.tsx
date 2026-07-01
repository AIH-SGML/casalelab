import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";

const OpenApplication = () => (
  <PageLayout>
    <div className="space-y-10 max-w-2xl">
      <div className="space-y-2">
        <p className="text-sm text-foreground/50">
          <Link to="/jobs" className="hover:underline underline-offset-2 transition-colors">Open Positions</Link>
          {" "}·{" "}Open Application
        </p>
        <h1 className="text-4xl font-bold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
          Open Application
        </h1>
        <p className="text-sm text-foreground/50">Always Open</p>
      </div>

      <hr className="border-t border-border" />

      <p className="text-sm text-foreground leading-relaxed">
        Exceptional researchers do not always fit predefined positions. If your interests
        align with our scientific vision—even if none of the advertised positions perfectly
        matches your profile—we encourage you to get in touch.
      </p>
      <p className="text-sm text-foreground leading-relaxed">
        Please send a CV and a motivation letter to:
      </p>
      <p className="text-sm font-semibold text-foreground">
        <a href="mailto:casale.lab.jobs@gmail.com" className="hover:underline underline-offset-2 transition-colors">
          casale.lab.jobs@gmail.com
        </a>
      </p>
    </div>
  </PageLayout>
);

export default OpenApplication;
