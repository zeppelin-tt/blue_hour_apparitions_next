'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { discography } from '../data/discography';
import { platforms } from '../data/platforms';
import TypeBadge from './TypeBadge';
import './AlbumLinksPage.css';

interface AlbumLinksPageProps {
  slug: string;
}

const AlbumLinksPage: React.FC<AlbumLinksPageProps> = ({ slug }) => {
  const router = useRouter();

  const release = discography.find((r) => r.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (release) {
      document.title = `${release.name} — Blue Hour Apparitions`;
    }
    return () => { document.title = 'Blue Hour Apparitions'; };
  }, [release]);

  if (!release) {
    return (
      <div className="alp alp--not-found">
        <button className="alp__back" onClick={() => router.push('/')}>
          <BackIcon /> to Artist
        </button>
        <p className="alp__error">Альбом не найден</p>
      </div>
    );
  }

  const available = platforms.filter((p) => p.getUrl(release.links));

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  return (
    <div className="alp">
      {/* ── Липкая шапка ──────────────────────────────────────── */}
      <header className="alp__header">
        <button className="alp__back" onClick={handleBack} aria-label="to Artist">
          <BackIcon />
          <span className="alp__back-label">to Artist</span>
        </button>
      </header>

      {/* ── Основной контент ───────────────────────────────────── */}
      <main className="alp__main">

        {/* Обложка — во всю ширину контейнера */}
        <div className="alp__cover-wrap">
          <img
            src={release.coverPath}
            alt={`${release.name} cover`}
            className="alp__cover"
          />
        </div>

        {/* 5. Порядок: исполнитель → название → год+бейдж */}
        <p className="alp__artist">{release.author.toUpperCase()}</p>
        <h1 className="alp__title">{release.name}</h1>
        <div className="alp__meta">
          <span className="alp__year">{release.year}</span>
          <TypeBadge type={release.type} />
        </div>

        {/* Список платформ */}
        <div className="alp__platforms">
          {available.map((p) => {
            const url = p.getUrl(release.links)!;
            return (
              <a
                key={p.key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="alp__platform-row"
              >
                <img
                  src={p.icon}
                  alt={p.name}
                  className="alp__platform-icon"
                  width={22}
                  height={22}
                />
                <span className="alp__platform-name">{p.name}</span>
                <ArrowIcon />
              </a>
            );
          })}
        </div>
      </main>
    </div>
  );
};

// ── Иконки ──────────────────────────────────────────────────────────

const BackIcon: React.FC = () => (
  <svg width="9" height="15" viewBox="0 0 9 15" fill="none" aria-hidden="true">
    <path
      d="M7.5 1.5L1.5 7.5L7.5 13.5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowIcon: React.FC = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="alp__platform-arrow">
    <path
      d="M2.5 7h9M8 3.5L11.5 7 8 10.5"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default AlbumLinksPage;
