import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import MiniDinoGame from './MiniDinoGame';

export const NotFound = ({ onGoHome }) => {
  return (
    <main className="min-h-screen bg-darkBg text-darkText flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background radial orbs */}
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-accentIndigo/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-accentAmber/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-md w-full glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 shadow-glass text-center relative z-10 space-y-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-accentAmber block mb-1">
            404 · Route Not Found
          </span>
          <h1 className="font-heading font-black text-4xl sm:text-5xl text-white">
            Lost in Space?
          </h1>
          <p className="text-xs sm:text-sm text-darkMuted mt-2">
            The page you requested doesn't exist, but you can play this mini dinosaur endless runner while you're here!
          </p>
        </div>

        {/* Playable Mini Dino Game */}
        <div className="p-2 rounded-xl bg-black/40 border border-white/10">
          <MiniDinoGame isCardPreview={false} />
        </div>

        <div className="pt-2">
          <button
            onClick={onGoHome}
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-accentIndigo hover:bg-indigo-600 text-white font-heading font-semibold text-sm transition-all active:scale-95 shadow-md shadow-accentIndigo/25"
          >
            <Home className="w-4 h-4" />
            <span>Return to Portfolio Home</span>
          </button>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
