import React, { useState } from 'react';
import { Code2 } from 'lucide-react';
import { PixelatedContainer } from '../PixelatedContainer';
import { SkillBar } from '../SkillBar';

interface Skill {
  name: string;
  percentage: number;
  category: 'frontend' | 'backend' | 'tools';
}

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'backend' | 'tools'>('all');

  const skills: Skill[] = [
    {name: "HTML", percentage: 90, category: 'frontend'},
    { name: "React.js", percentage: 90, category: 'frontend' },
    { name: "TypeScript", percentage: 60, category: 'frontend' },
    { name: "Node.js", percentage: 85, category: 'backend' },
    { name: "CSS/Tailwind", percentage: 65, category: 'frontend' },
    { name: "MongoDB", percentage: 55, category: 'backend' },
    { name: "Git", percentage: 61, category: 'tools' },
    { name: "Docker", percentage: 50, category: 'tools' },
    { name: "Post man", percentage: 70, category: 'tools' },
    { name: "AWS", percentage: 43, category: 'backend' },
    { name: "Mysql", percentage: 70, category: 'backend'}
  ];

  const categories = [
    { id: 'all', label: 'ALL' },
    { id: 'frontend', label: 'FRONTEND' },
    { id: 'backend', label: 'BACKEND' },
    { id: 'tools', label: 'TOOLS' }
  ];

  const filteredSkills = skills.filter(
    skill => activeCategory === 'all' || skill.category === activeCategory
  );

  return (
    <PixelatedContainer>
      <div className="flex items-center gap-4 text-xl text-slate-800 mb-6">
        <Code2 className="w-6 h-6" />
        <h2>SKILLS</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {categories.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setActiveCategory(id as typeof activeCategory)}
            className={`pixel-button text-xs px-2 py-1 ${
              activeCategory === id ? 'bg-blue-600' : 'bg-slate-700'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="space-y-4">
        {filteredSkills.map((skill) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            percentage={skill.percentage}
          />
        ))}
      </div>
    </PixelatedContainer>
  );
}