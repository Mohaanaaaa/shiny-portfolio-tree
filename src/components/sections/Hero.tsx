import React from 'react';

export function Hero() {
  return (
    <header className="text-center">
      <div className="inline-block">
        <img
          src="https://images.unsplash.com/photo-1566837945700-30057527ade0?w=200&h=200&fit=crop"
          alt="Pixel Avatar"
          className="w-32 h-32 mx-auto mb-6 pixelated pixel-border"
        />
      </div>
      <h1 className="text-4xl mb-4 text-slate-800">DEV &gt;&gt; #Mohana_Y</h1>
      <p className="text-lg text-slate-600">LEVEL 07 FRONTEND & BACKEND WIZARD</p>
    </header>
  );
}