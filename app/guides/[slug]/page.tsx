import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleView } from "../../components/ArticleView";
import { SiteShell } from "../../components/SiteShell";
import { guidePages } from "../../data";

export function generateStaticParams() {
  return guidePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = guidePages.find((candidate) => candidate.slug === slug);
  return {
    title: page ? `${page.title} · IRON NEST Field Manual` : "Guide · IRON NEST Field Manual",
    description: page?.dek ?? "Source-led IRON NEST guide.",
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = guidePages.find((candidate) => candidate.slug === slug);
  if (!page) notFound();

  return (
    <SiteShell current="guides">
      <div className="page-width article-wrap">
        <ArticleView page={page} />
      </div>
    </SiteShell>
  );
}

