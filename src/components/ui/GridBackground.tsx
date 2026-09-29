import React from 'react';
import { clsx } from 'clsx';

interface GridBackgroundProps {
  className?: string;
  size?: number;
  opacity?: number;
}

export default function GridBackground({
  className,
  size = 80,
  opacity = 0.08,
}: GridBackgroundProps) {
  return (
    <div
      className={clsx('absolute inset-0 pointer-events-none', className)}
      style={{
        backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, ${opacity}) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, ${opacity}) 1px, transparent 1px)`,
        backgroundSize: `${size}px ${size}px`,
      }}
      aria-hidden="true"
    />
  );
}
