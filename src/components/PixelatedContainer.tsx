import React from 'react';

interface PixelatedContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function PixelatedContainer({ children, className = '' }: PixelatedContainerProps) {
  return (
    <div className={`pixel-border bg-white p-6 ${className}`}>
      {children}
    </div>
  );
}