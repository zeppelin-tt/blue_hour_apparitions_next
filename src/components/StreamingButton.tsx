'use client';

import React, { useState } from 'react';
import type { Platform } from '../data/platforms';
import './StreamingButton.css';

interface StreamingButtonProps {
  platform: Platform;
  url: string;
}

const StreamingButton: React.FC<StreamingButtonProps> = ({ platform, url }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`streaming-btn${hovered ? ' streaming-btn--hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={platform.icon}
        alt={platform.name}
        className="streaming-btn__icon"
        width={16}
        height={16}
      />
      <span className="streaming-btn__name">{platform.name}</span>
    </a>
  );
};

export default StreamingButton;
