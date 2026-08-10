import type { ArticlePage } from "../data";

export function ArticleView({ page }: { page: ArticlePage }) {
  return (
    <article className="article-layout">
      <div className="article-main">
        <div className="article-crumbs">
          <span>{page.eyebrow}</span>
          <span aria-hidden="true">/</span>
          <span>{page.keyword}</span>
        </div>
        <div className="article-heading">
          <div className="article-status-row">
            <span className={`status status-${page.status}`}>
              {page.status === "source-led" ? "Source-led draft" : "Version check required"}
            </span>
            <span className="article-intent">Search intent: {page.intent}</span>
          </div>
          <h1>{page.title}</h1>
          <p className="article-dek">{page.dek}</p>
        </div>

        <div className="article-warning">
          <span className="warning-icon" aria-hidden="true">!</span>
          <div>
            <strong>Version boundary</strong>
            <p>
              Demo and full-release details can diverge. Check the installed
              build before treating a task name, number or control label as
              permanent.
            </p>
          </div>
        </div>

        <div className="article-body">
          {page.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.bullets ? (
                <ul>
                  {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              ) : null}
            </section>
          ))}
        </div>

        <section className="source-box" aria-labelledby="source-heading">
          <div className="section-eyebrow" id="source-heading">Sources used for this page</div>
          <div className="source-list">
            {page.sources.map((source) => (
              <a key={source.href} href={source.href} target="_blank" rel="noreferrer">
                <span className={`source-dot source-${source.kind}`} aria-hidden="true" />
                <span>{source.label}</span>
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </section>
      </div>

      <aside className="article-rail">
        <div className="rail-card rail-card-ink">
          <span className="rail-label">Page contract</span>
          <strong>One keyword → one question → one useful page.</strong>
          <p>This page keeps its scope narrow so it can answer the searcher directly.</p>
        </div>
        <div className="rail-card">
          <span className="rail-label">Trust note</span>
          <p>Community material helps locate questions. Official or in-game evidence decides what becomes a fact.</p>
        </div>
      </aside>
    </article>
  );
}

