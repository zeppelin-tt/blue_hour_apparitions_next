import DiscographyPage from '@/components/DiscographyPage';
import { discography } from '@/data/discography';

export function generateStaticParams() {
  return discography.map((r) => ({ slug: r.slug }));
}

export default async function AlbumPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <DiscographyPage expandedSlug={slug} />;
}
