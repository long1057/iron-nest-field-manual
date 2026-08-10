import type { Metadata } from "next";
import Link from "next/link";
import { PageCard } from "./components/PageCard";
import { SiteShell } from "./components/SiteShell";
import { deferredPages, guidePages, sources } from "./data";

export const metadata: Metadata = {
  title: "IRON NEST Field Manual",
  description: "A source-led, version-aware guide to IRON NEST: Heavy Turret Simulator.",
};

export default function Home() {
  return (
    <SiteShell current="home">
      <section className="home-hero page-width">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> source-led field manual</div>
          <h1>Operate the machine.<br /><em>Make the shot count.</em></h1>
          <p className="hero-dek">
            A calm, evidence-first starting point for the dieselpunk heavy-artillery
            simulator. Learn the loop, verify the version, then make your own firing solution.
          </p>
          <div className="hero-actions">
            <Link className="button button-dark" href="/guides/first-firing-solution">
              Start with the first shot <span aria-hidden="true">→</span>
            </Link>
            <Link className="button button-quiet" href="/guides">
              Browse all guides
            </Link>
          </div>
          <div className="hero-proof">
            <span><b>source-led</b> every page</span>
            <span><b>version-aware</b> demo vs full release</span>
          </div>
        </div>
        <div className="hero-machine" aria-label="Abstract illustration of the Iron Nest firing console">
          <div className="machine-grid" />
          <div className="machine-window"><span>HIGH COMMAND</span><b>ORDER / 06</b><i>target solution pending</i></div>
          <div className="machine-dial dial-one"><span>RANGE</span><b>2.84</b><small>KM</small></div>
          <div className="machine-dial dial-two"><span>ELEV.</span><b>14°</b><small>CHECK</small></div>
          <div className="machine-sight"><span className="sight-crosshair" /></div>
          <div className="machine-caption">01 / FIRE CONTROL</div>
        </div>
      </section>

      <section className="signal-strip page-width" aria-label="Site status">
        <div><span className="strip-number">01</span><span>Read the order</span></div>
        <div><span className="strip-number">02</span><span>Plot the target</span></div>
        <div><span className="strip-number">03</span><span>Calculate & fire</span></div>
        <div><span className="strip-number">04</span><span>Review the result</span></div>
      </section>

      <section className="intro-section page-width">
        <div>
          <div className="section-eyebrow">Why this manual exists</div>
          <h2>Every number has an origin.</h2>
        </div>
        <div className="intro-copy">
          <p>
            IRON NEST is less about reflexes than handoffs: an order becomes geometry,
            geometry becomes a firing solution, and the result teaches you what to correct.
          </p>
          <p>
            This first version keeps the same discipline. Official listings anchor the basics;
            community guides reveal the questions; uncertain mechanics stay marked.
          </p>
        </div>
      </section>

      <section className="feature-section page-width">
        <div className="section-heading-row">
          <div>
            <div className="section-eyebrow">The first route</div>
            <h2>Start with a repeatable firing loop.</h2>
          </div>
          <Link className="text-link" href="/guides">View guide index <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="feature-grid">
          {guidePages.slice(0, 3).map((page) => <PageCard key={page.slug} page={page} basePath="guides" />)}
        </div>
      </section>

      <section className="split-section page-width">
        <div className="split-panel split-panel-amber">
          <div className="section-eyebrow">Mission room</div>
          <h2>When the target is the problem.</h2>
          <p>Use the mission pages to troubleshoot a failure without turning a player report into an unverified fact.</p>
          <Link className="button button-dark" href="/missions">Enter mission room <span aria-hidden="true">→</span></Link>
        </div>
        <div className="split-panel split-panel-line">
          <div className="section-eyebrow">Source room</div>
          <h2>See what each claim is built on.</h2>
          <p>The source room separates official listings, community research and player reports so the boundary stays visible.</p>
          <Link className="text-link" href="/wiki">Review the ledger <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="queue-section page-width">
        <div className="section-heading-row">
          <div>
            <div className="section-eyebrow">Research queue</div>
            <h2>Not every search term is ready to publish.</h2>
          </div>
          <span className="queue-count">{deferredPages.length} held for evidence</span>
        </div>
        <div className="queue-list">
          {deferredPages.map((item) => (
            <div className="queue-row" key={item.keyword}>
              <span className="queue-marker" aria-hidden="true">/</span>
              <div><strong>{item.label}</strong><span>{item.keyword}</span></div>
              <p>{item.reason}</p>
              <span className="status status-version-check">待确认</span>
            </div>
          ))}
        </div>
      </section>

      <section className="source-band page-width">
        <div className="source-band-copy">
          <div className="section-eyebrow">Built from the evidence ledger</div>
          <h2>Good pages know what they do not know yet.</h2>
          <p>Read the working source list before you trust a task name, a shell label or a release detail.</p>
        </div>
        <div className="source-band-list">
          {[sources.steamDemo, sources.steamCommunity, sources.wikiHome].map((source) => (
            <a key={source.href} href={source.href} target="_blank" rel="noreferrer">
              <span className={`source-dot source-${source.kind}`} aria-hidden="true" />
              <span>{source.label}</span><span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>

      <div className="page-width home-note">
        <span>Practice build / 10 Aug 2026</span>
        <span>Content remains version-aware until checked in-game.</span>
      </div>
    </SiteShell>
  );
}
