import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import PageLayout from "@/components/PageLayout";

// ─── Shared chrome ────────────────────────────────────────────────────────────

export const JobPosting = ({
  title,
  location,
  children,
}: {
  title: string;
  location: string;
  children: ReactNode;
}) => (
  <PageLayout>
    <div className="space-y-8 max-w-2xl">
      <div className="space-y-2">
        <p className="text-sm text-foreground/50">
          <Link to="/jobs" className="hover:underline underline-offset-2 transition-colors">
            Open Positions
          </Link>{" "}
          ·{" "}
          {title}
        </p>
        <h1
          className="text-4xl font-bold text-foreground"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {title}
        </h1>
        <p className="text-sm font-medium text-foreground/70">{location}</p>
        <p className="text-sm text-foreground/50">Formal recruitment opens September 7, 2026</p>
      </div>

      <hr className="border-t border-border" />

      <div className="space-y-8">{children}</div>
    </div>
  </PageLayout>
);

// ─── Building blocks ──────────────────────────────────────────────────────────

export const Section = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="space-y-3">
    <h2 className="text-lg font-semibold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
      {title}
    </h2>
    {children}
  </section>
);

export const Prose = ({ children }: { children: ReactNode }) => (
  <p className="text-sm text-foreground leading-relaxed">{children}</p>
);

export const SubHead = ({ children }: { children: ReactNode }) => (
  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-foreground/60 pt-1">
    {children}
  </p>
);

export const Bullets = ({ items }: { items: ReactNode[] }) => (
  <ul className="space-y-1.5">
    {items.map((item, i) => (
      <li key={i} className="flex gap-2 text-sm text-foreground leading-relaxed">
        <span className="shrink-0 text-foreground/40 select-none">•</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

// ─── Content shared across all three postings ─────────────────────────────────

export const LOCATION = "Human Technopole, Milan (Italy)";

export const Intro = () => (
  <>
    <Prose>
      The Casale Lab develops AI methods that transform population-scale human data into
      mechanistic models of disease. Our research integrates large-scale human genetics with
      molecular and clinical data to generate testable hypotheses that accelerate biological
      discovery and therapeutic innovation.
    </Prose>
    <Prose>
      The Casale Lab will launch at Human Technopole in Milan in September 2026. Human Technopole
      is an international life science research institute where researchers across biology,
      medicine, and artificial intelligence work together to accelerate biomedical discovery.
    </Prose>
  </>
);

export const WhatMakesExceptional = () => (
  <Section title="What makes this role exceptional">
    <Prose>
      You will have access to population-scale human genetics, rich multimodal molecular and
      clinical datasets, and world-class AI and experimental research environments—an uncommon
      combination that enables ambitious research and accelerates biological discovery at scale.
    </Prose>
    <Prose>
      From September 2026, the Casale Lab will be part of Human Technopole's interdisciplinary AI
      ecosystem and closely connected to the European AI community through Helmholtz Munich and
      the ELLIS network. Researchers will benefit from close interaction with computational,
      biological and clinical groups across the institute, as well as opportunities for
      international collaboration, research exchanges, interdisciplinary training, and engagement
      with industry, supported by the group's network across leading academic institutions and
      industry in Europe and North America.
    </Prose>
  </Section>
);

export const ORG_SOCIAL: string[] = [
  "Strong analytical thinking and scientific curiosity.",
  "Ability to work independently while thriving in an interdisciplinary and collaborative environment.",
  "Excellent communication and scientific writing skills.",
  "Creativity, intellectual humility, and enthusiasm for tackling challenging biological questions.",
  "Self-motivated, proactive, and eager to take ownership of ambitious research projects.",
];

export const HowToApply = () => (
  <Section title="How to apply">
    <Prose>
      Formal applications will open on <strong>September 7, 2026</strong> through the official
      Human Technopole recruitment portal and will require a curriculum vitae, a motivation
      letter, and the contact details of two referees.
    </Prose>
    <Prose>
      Prospective candidates are encouraged to contact the lab before the official call opens by
      emailing{" "}
      <a
        href="mailto:casalelab.jobs@gmail.com"
        className="font-semibold text-[#4b9b63] hover:text-[#34754a] hover:underline underline-offset-2 transition-colors"
      >
        casalelab.jobs@gmail.com
      </a>
      . We welcome informal enquiries about the position and are happy to discuss research
      interests, potential projects, and mutual fit ahead of the formal recruitment process.
    </Prose>
  </Section>
);
