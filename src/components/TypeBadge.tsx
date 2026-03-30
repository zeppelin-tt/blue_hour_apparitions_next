import React from 'react';
import type { ReleaseType } from '../data/types';
import './TypeBadge.css';

interface TypeBadgeProps {
  type: ReleaseType;
}

const TypeBadge: React.FC<TypeBadgeProps> = ({ type }) => {
  const label = type.toUpperCase();
  return (
    <span className={`type-badge type-badge--${type}`}>
      {label}
    </span>
  );
};

export default TypeBadge;
