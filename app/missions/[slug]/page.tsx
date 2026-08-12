import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleView } from "../../components/ArticleView";
import { SiteShell } from "../../components/SiteShell";
import { missionPages } from "../../data";

export function generateStaticParams() {
  return missionPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = missionPages.find((candidate) => candidate.slug === slug);
  return {
    title: page ? `${page.title} · IRON NEST Field Manual` : "Mission · IRON NEST Field Manual",
    description: page?.dek ?? "Version-aware IRON NEST mission page.",
  };
}

export default async function MissionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = missionPages.find((candidate) => candidate.slug === slug);
  if (!page) notFound();

  return (
    <SiteShell current="missions">
      <div className="page-width article-wrap">
        <ArticleView page={page} />
      </div>
    </SiteShell>
  );
}

