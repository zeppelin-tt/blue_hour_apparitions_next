import AlbumLinksPage from '@/components/AlbumLinksPage';
import { discography } from '@/data/discography';

export function generateStaticParams() {
  return discography.map((r) => ({ slug: r.slug }));
}

export default async function LinksPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <AlbumLinksPage slug={slug} />;
}
