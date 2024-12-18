import React, { useEffect, useState } from 'react';

interface SkillBarProps {
  name: string;
  percentage: number;
}

export function SkillBar({ name, percentage }: SkillBarProps) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(percentage);
    }, 100);
    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm">{name}</span>
        <span className="text-sm">{percentage}%</span>
      </div>
      <div className="pixel-progress">
        <div 
          className="pixel-progress-bar" 
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}