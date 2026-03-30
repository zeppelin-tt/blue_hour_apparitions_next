'use client';

import React from 'react';
import type { Release } from '../data/types';
import AlbumItem from './AlbumItem';
import './AlbumList.css';

interface AlbumListProps {
  releases: Release[];
  expandedSlug: string | undefined;
  onToggle: (slug: string) => void;
}

const AlbumList: React.FC<AlbumListProps> = ({ releases, expandedSlug, onToggle }) => {
  const anyExpanded = expandedSlug != null;

  return (
    <div className="album-list">
      {releases.map((release, index) => {
        const isExpanded = release.slug === expandedSlug;
        const isShrunk = anyExpanded && !isExpanded;
        const isLast = index === releases.length - 1;

        return (
          <React.Fragment key={release.slug}>
            <AlbumItem
              release={release}
              isExpanded={isExpanded}
              isShrunk={isShrunk}
              onToggle={() => onToggle(release.slug)}
            />
            {!isLast && (
              <div
                className={`album-list__divider${anyExpanded ? ' album-list__divider--faded' : ''}`}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default AlbumList;
