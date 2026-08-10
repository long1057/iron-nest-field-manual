import Link from "next/link";
import type { ArticlePage } from "../data";

type PageCardProps = {
  page: ArticlePage;
  basePath: "guides" | "missions";
};

export function PageCard({ page, basePath }: PageCardProps) {
  return (
    <article className="page-card">
      <div className="card-meta">
        <span>{page.eyebrow}</span>
        <span className={`status status-${page.status}`}>{page.status === "source-led" ? "source-led" : "version check"}</span>
      </div>
      <h3>{page.title}</h3>
      <p>{page.dek}</p>
      <div className="card-bottom">
        <span className="keyword-chip">{page.keyword}</span>
        <Link className="text-link" href={`/${basePath}/${page.slug}`}>
          Read page <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}

