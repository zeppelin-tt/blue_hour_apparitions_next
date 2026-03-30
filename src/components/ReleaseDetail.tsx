import React from 'react';
import type { Release, Track } from '../data/types';
import { platforms } from '../data/platforms';
import StreamingButton from './StreamingButton';
import TypeBadge from './TypeBadge';
import './ReleaseDetail.css';

interface ReleaseDetailProps {
  release: Release;
}

function formatDuration(minutes: number, seconds: number): string {
  return `${minutes}:${String(seconds).padStart(2, '0')}`;
}

function calcTotalDuration(tracks: Track[]): string {
  let totalSeconds = 0;
  for (const track of tracks) {
    if (track.duration) {
      totalSeconds += track.duration.minutes * 60 + track.duration.seconds;
    }
  }
  if (totalSeconds === 0) return '';
  const hours = Math.floor(totalSeconds / 3600);
  const mins = Math.floor((totalSeconds % 3600) / 60);
  const secs = totalSeconds % 60;
  if (hours > 0) {
    return `${hours}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }
  return `${mins}:${String(secs).padStart(2, '0')}`;
}

const ReleaseDetail: React.FC<ReleaseDetailProps> = ({ release }) => {
  const totalDuration = calcTotalDuration(release.tracks);

  const availablePlatforms = platforms.filter((p) => {
    const url = p.getUrl(release.links);
    return url != null && url !== '';
  });

  return (
    <div className="release-detail">
      <div className="release-detail__meta">
        <div className="release-detail__meta-row">
          <span className="release-detail__year">{release.year}</span>
          <TypeBadge type={release.type} />
          {totalDuration && (
            <span className="release-detail__total-duration">{totalDuration}</span>
          )}
        </div>
        <h2 className="release-detail__name">{release.name}</h2>
        <p className="release-detail__artist">{release.author}</p>
      </div>

      <div className="release-detail__divider" />

      <div className="release-detail__tracklist">
        {release.tracks.map((track) => (
          <div key={track.number} className="release-detail__track">
            <span className="release-detail__track-num">
              {String(track.number).padStart(2, '0')}
            </span>
            <span className="release-detail__track-name">{track.name}</span>
            {track.duration && (
              <span className="release-detail__track-dur">
                {formatDuration(track.duration.minutes, track.duration.seconds)}
              </span>
            )}
          </div>
        ))}
      </div>

      {availablePlatforms.length > 0 && (
        <div className="release-detail__streaming">
          <p className="release-detail__listen-label">LISTEN ON</p>
          <div className="release-detail__streaming-grid">
            {availablePlatforms.map((platform) => {
              const url = platform.getUrl(release.links)!;
              return (
                <StreamingButton key={platform.key} platform={platform} url={url} />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ReleaseDetail;
