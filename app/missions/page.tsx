import type { Metadata } from "next";
import { PageCard } from "../components/PageCard";
import { SiteShell } from "../components/SiteShell";
import { deferredPages, missionPages } from "../data";

export const metadata: Metadata = {
  title: "Missions · IRON NEST Field Manual",
  description: "Version-aware IRON NEST mission troubleshooting and demo notes.",
};

export default function MissionsPage() {
  return (
    <SiteShell current="missions">
      <section className="section-hero section-hero-compact page-width">
        <div className="section-eyebrow">Mission room / version check</div>
        <h1>Read the problem<br /><em>before the timer.</em></h1>
        <p>
          Mission pages separate verified procedures from player reports. If a
          detail belongs to a particular build, it stays labeled.
        </p>
      </section>
      <section className="listing-section page-width">
        <div className="listing-intro">
          <span className="listing-label">Published now</span>
          <span>Two focused pages; broader mission terms stay in the research queue until sourced.</span>
        </div>
        <div className="listing-grid listing-grid-two">
          {missionPages.map((page) => <PageCard key={page.slug} page={page} basePath="missions" />)}
        </div>
        <div className="deferred-box">
          <div className="section-eyebrow">Held for evidence</div>
          {deferredPages.map((item) => (
            <div className="deferred-row" key={item.keyword}>
              <div><strong>{item.label}</strong><span>{item.keyword}</span></div>
              <p>{item.reason}</p>
              <span className="status status-version-check">待确认</span>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}

