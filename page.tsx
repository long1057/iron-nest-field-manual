import type { Metadata } from "next";
import { SiteShell } from "../components/SiteShell";
import { sources } from "../data";

export const metadata: Metadata = {
  title: "Source room · IRON NEST Field Manual",
  description: "The source ledger behind the IRON NEST Field Manual.",
};

const sourceGroups = [
  {
    title: "Official anchors",
    note: "Use these first for product identity, current features and release-facing details.",
    items: [sources.steamDemo, sources.steamCommunity, sources.officialVideo],
  },
  {
    title: "Community research",
    note: "Useful for questions and procedures; cross-check version-sensitive claims.",
    items: [sources.wikiHome, sources.guidesHub, sources.firstFiring, sources.tacticalMap, sources.ballistic],
  },
  {
    title: "Player signals",
    note: "Problem discovery only. A forum answer is not automatically a fact.",
    items: [sources.counterBattery, sources.phantomBattery],
  },
];

export default function WikiPage() {
  return (
    <SiteShell current="wiki">
      <section className="section-hero section-hero-compact page-width">
        <div className="section-eyebrow">Source room / evidence ledger</div>
        <h1>Know where<br /><em>the claim came from.</em></h1>
        <p>
          This is not a copied Wiki. It is a boundary map: official facts,
          community explanations and player questions are kept visibly separate.
        </p>
      </section>
      <section className="source-room page-width">
        {sourceGroups.map((group) => (
          <section className="source-group" key={group.title}>
            <div className="source-group-heading">
              <div className="section-eyebrow">{group.title}</div>
              <p>{group.note}</p>
            </div>
            <div className="source-group-list">
              {group.items.map((source) => (
                <a className="source-row" key={source.href} href={source.href} target="_blank" rel="noreferrer">
                  <span className={`source-dot source-${source.kind}`} aria-hidden="true" />
                  <span className="source-row-label">{source.label}</span>
                  <span className="source-row-kind">{source.kind}</span>
                  <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </section>
        ))}
        <div className="source-policy">
          <span className="section-eyebrow">Editorial boundary</span>
          <h2>Unknown is a valid state.</h2>
          <p>
            If a task name, number or support claim cannot be confirmed in the
            current build, this site says “待确认” and keeps the page out of the
            first release instead of filling the gap with confident fiction.
          </p>
        </div>
      </section>
    </SiteShell>
  );
}

