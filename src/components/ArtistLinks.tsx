'use client';

import React from 'react';
import { platforms } from '../data/platforms';
import { artistLinks } from '../data/artistLinks';
import StreamingButton from './StreamingButton';
import './ArtistLinks.css';

const ArtistLinks: React.FC = () => {
  const available = platforms.filter((p) => p.getUrl(artistLinks));

  return (
    <section className="artist-links">
      <p className="artist-links__label">FOLLOW THE ARTIST</p>
      <div className="artist-links__buttons">
        {available.map((p) => (
          <StreamingButton
            key={p.key}
            platform={p}
            url={p.getUrl(artistLinks)!}
          />
        ))}
      </div>
    </section>
  );
};

export default ArtistLinks;
