'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Header from './Header';
import AlbumList from './AlbumList';
import ArtistLinks from './ArtistLinks';
import { discography } from '../data/discography';
import './DiscographyPage.css';

interface DiscographyPageProps {
  expandedSlug: string | undefined;
}

const DiscographyPage: React.FC<DiscographyPageProps> = ({ expandedSlug }) => {
  const router = useRouter();

  const handleToggle = (albumSlug: string) => {
    if (expandedSlug === albumSlug) {
      router.push('/');
    } else {
      router.push(`/album/${albumSlug}`);
    }
  };

  return (
    <div className="discography-page">
      <Header />
      <main className="discography-page__content">
        <AlbumList
          releases={discography}
          expandedSlug={expandedSlug}
          onToggle={handleToggle}
        />
        <ArtistLinks />
      </main>
    </div>
  );
};

export default DiscographyPage;
