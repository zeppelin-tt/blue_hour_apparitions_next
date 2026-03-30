'use client';

import React from 'react';
import type { Release } from '../data/types';
import TypeBadge from './TypeBadge';
import ReleaseDetail from './ReleaseDetail';
import './AlbumItem.css';

interface AlbumItemProps {
  release: Release;
  isExpanded: boolean;
  isShrunk: boolean;
  onToggle: () => void;
  onLinksClick: () => void;
}

const AlbumItem: React.FC<AlbumItemProps> = ({ release, isExpanded, isShrunk, onToggle, onLinksClick }) => {
  const handleLinksClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onLinksClick();
  };

  return (
    <div
      className={[
        'album-item',
        isExpanded ? 'album-item--expanded' : '',
        isShrunk ? 'album-item--shrunk' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="album-item__row">
        {/* ── Основная зона (аккордеон) ───────────────────────── */}
        <div
          className="album-item__toggle"
          onClick={onToggle}
          role="button"
          tabIndex={0}
          aria-expanded={isExpanded}
          onKeyDown={(e) => e.key === 'Enter' && onToggle()}
        >
          <div className={`album-item__cover-wrap${isExpanded ? ' album-item__cover-wrap--expanded' : ''}`}>
            <img
              src={release.coverPath}
              alt={`${release.name} cover`}
              className="album-item__cover"
            />
          </div>

          <div className="album-item__info">
            <span className="album-item__title">{release.name}</span>
            <div className="album-item__sub">
              <span className="album-item__year">{release.year}</span>
              <TypeBadge type={release.type} />
            </div>
          </div>

          <div className={`album-item__chevron${isExpanded ? ' album-item__chevron--rotated' : ''}`}>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path d="M3.5 5.5l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* ── Кнопка «открыть страницу ссылок» ─────────────────── */}
        <button
          className="album-item__links-btn"
          onClick={handleLinksClick}
          title="Все ссылки на платформах"
          aria-label="Открыть страницу со ссылками на платформы"
        >
          {/* Иконка «внешняя страница» — квадрат со стрелкой наружу */}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M6 2H2.5A1.5 1.5 0 001 3.5v8A1.5 1.5 0 002.5 13h8A1.5 1.5 0 0012 11.5V8M8.5 1H13m0 0v4.5M13 1L6.5 7.5"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* ── Аккордеон ─────────────────────────────────────────── */}
      <div className={`album-item__body${isExpanded ? ' album-item__body--open' : ''}`}>
        <ReleaseDetail release={release} />
      </div>
    </div>
  );
};

export default AlbumItem;
