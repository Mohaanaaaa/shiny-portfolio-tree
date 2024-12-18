import React from 'react';
import { Home, User, Code2, Folder, Gamepad2 } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const navItems = [
    { id: 'home', icon: Home, label: 'HOME' },
    { id: 'about', icon: User, label: 'ABOUT' },
    { id: 'skills', icon: Code2, label: 'SKILLS' },
    { id: 'projects', icon: Folder, label: 'PROJECTS' },
    { id: 'connect', icon: Gamepad2, label: 'CONNECT' },
  ];

  return (
    <nav className="flex justify-center gap-2 mb-8 flex-wrap">
      {navItems.map(({ id, icon: Icon, label }) => (
        <button
          key={id}
          onClick={() => onNavigate(id)}
          className={`pixel-button ${
            activeSection === id ? 'bg-blue-600' : 'bg-slate-700'
          } text-xs flex items-center gap-2`}
        >
          <Icon className="w-4 h-4" />
          {label}
        </button>
      ))}
    </nav>
  );
}