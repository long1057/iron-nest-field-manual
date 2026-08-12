import type { Metadata } from "next";
import { PageCard } from "../components/PageCard";
import { SiteShell } from "../components/SiteShell";
import { guidePages } from "../data";

export const metadata: Metadata = {
  title: "Guides · IRON NEST Field Manual",
  description: "Source-led IRON NEST guides for the firing loop, map, calculator and ammunition.",
};

export default function GuidesPage() {
  return (
    <SiteShell current="guides">
      <section className="section-hero page-width">
        <div className="section-eyebrow">Guide index / 08 pages</div>
        <h1>Guides that answer<br /><em>one useful question.</em></h1>
        <p>
          Start broad, then follow the evidence down to the map, calculator,
          shell and mission decisions that make a shot work.
        </p>
      </section>
      <section className="listing-section page-width">
        <div className="listing-intro">
          <span className="listing-label">Core loop</span>
          <span>Each page has one search intent and a visible source boundary.</span>
        </div>
        <div className="listing-grid">
          {guidePages.map((page) => <PageCard key={page.slug} page={page} basePath="guides" />)}
        </div>
      </section>
    </SiteShell>
  );
}

