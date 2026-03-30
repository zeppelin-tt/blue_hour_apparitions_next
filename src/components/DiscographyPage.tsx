'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from './Header';
import AlbumList from './AlbumList';
import ArtistLinks from './ArtistLinks';
import { discography } from '../data/discography';
import './DiscographyPage.css';

interface DiscographyPageProps {
  expandedSlug: string | undefined;
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const DiscographyPage: React.FC<DiscographyPageProps> = ({ expandedSlug: initialSlug }) => {
  // Локальный стейт — анимации работают без размонтирования компонента
  const [expandedSlug, setExpandedSlug] = useState<string | undefined>(initialSlug);
  const router = useRouter();

  const handleToggle = (albumSlug: string) => {
    const next = expandedSlug === albumSlug ? undefined : albumSlug;
    setExpandedSlug(next);
    // Обновляем URL для deep linking без навигации (без перемонтирования)
    const url = next ? `${basePath}/album/${next}` : `${basePath}/`;
    window.history.pushState({}, '', url);
  };

  const handleLinksClick = (slug: string) => {
    router.push(`/album/${slug}/links`);
  };

  return (
    <div className="discography-page">
      <Header />
      <main className="discography-page__content">
        <AlbumList
          releases={discography}
          expandedSlug={expandedSlug}
          onToggle={handleToggle}
          onLinksClick={handleLinksClick}
        />
        <ArtistLinks />
      </main>
    </div>
  );
};

export default DiscographyPage;
