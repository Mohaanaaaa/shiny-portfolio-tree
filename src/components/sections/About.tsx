import React from 'react';
import { User } from 'lucide-react';
import { PixelatedContainer } from '../PixelatedContainer';

export function About() {
  return (
    <PixelatedContainer className="space-y-4">
      <div className="flex items-center gap-4 text-xl text-slate-800 mb-4">
        <User className="w-6 h-6" />
        <h2>ABOUT ME</h2>
      </div>
      <p className="text-sm leading-relaxed text-slate-600">
        Welcome to my pixel realm! am <b>Mohana Y</b>, you can find me exploring new technologies or battling bugs in the digital dungeon.I enjoy reading books, traveling in nature, and playing both indoor and outdoor games. Additionally, I have a love for wildlife photography, capturing the beauty of the natural world.
      </p>
    </PixelatedContainer>
  );
}