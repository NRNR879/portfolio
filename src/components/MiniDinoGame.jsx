import React, { useEffect, useRef, useState } from 'react';
import { Play, RotateCcw } from 'lucide-react';

export const MiniDinoGame = ({ isCardPreview = false }) => {
  const canvasRef = useRef(null);
  const [gameState, setGameState] = useState('idle'); // idle, playing, over
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const stateRef = useRef({
    gameState: 'idle',
    dinoY: 0,
    velocity: 0,
    isJumping: false,
    obstacles: [],
    clouds: [],
    score: 0,
    animationFrame: null,
  });

  const jump = () => {
    if (stateRef.current.gameState === 'idle' || stateRef.current.gameState === 'over') {
      startGame();
      return;
    }
    if (!stateRef.current.isJumping) {
      stateRef.current.velocity = -9.5;
      stateRef.current.isJumping = true;
    }
  };

  const startGame = () => {
    stateRef.current.gameState = 'playing';
    stateRef.current.dinoY = 0;
    stateRef.current.velocity = 0;
    stateRef.current.isJumping = false;
    stateRef.current.obstacles = [{ x: 340, width: 14, height: 26 }];
    stateRef.current.clouds = [{ x: 200, y: 25 }, { x: 380, y: 15 }];
    stateRef.current.score = 0;
    setScore(0);
    setGameState('playing');
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const groundY = height - 25;

    let speed = 4;

    const gameLoop = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw ground line
      ctx.strokeStyle = '#475569';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, groundY);
      ctx.lineTo(width, groundY);
      ctx.stroke();

      if (stateRef.current.gameState === 'playing') {
        stateRef.current.score += 0.2;
        setScore(Math.floor(stateRef.current.score));

        // Physics for jump
        stateRef.current.dinoY += stateRef.current.velocity;
        stateRef.current.velocity += 0.55; // gravity

        if (stateRef.current.dinoY >= 0) {
          stateRef.current.dinoY = 0;
          stateRef.current.velocity = 0;
          stateRef.current.isJumping = false;
        }

        // Spawn / update obstacles
        for (let i = 0; i < stateRef.current.obstacles.length; i++) {
          const obs = stateRef.current.obstacles[i];
          obs.x -= speed;

          // Draw cactus obstacle (amber accent)
          ctx.fillStyle = '#F5B544';
          ctx.fillRect(obs.x, groundY - obs.height, obs.width, obs.height);

          // Collision detection
          const dinoX = 40;
          const dinoBoxY = groundY - 24 + stateRef.current.dinoY;
          if (
            dinoX + 18 > obs.x &&
            dinoX < obs.x + obs.width &&
            dinoBoxY + 22 > groundY - obs.height
          ) {
            // Game Over
            stateRef.current.gameState = 'over';
            setGameState('over');
            setHighScore((prev) => Math.max(prev, Math.floor(stateRef.current.score)));
          }
        }

        // Recycle obstacles
        if (stateRef.current.obstacles.length > 0 && stateRef.current.obstacles[0].x < -20) {
          stateRef.current.obstacles.shift();
          const nextDist = Math.random() * 150 + 220;
          stateRef.current.obstacles.push({
            x: width + nextDist,
            width: Math.random() > 0.5 ? 16 : 22,
            height: Math.random() * 10 + 22,
          });
        }
      }

      // Draw Dino (indigo accent)
      const dinoCurrentY = groundY - 24 + stateRef.current.dinoY;
      ctx.fillStyle = '#6366F1';
      // Body
      ctx.fillRect(40, dinoCurrentY, 18, 22);
      // Eye
      ctx.fillStyle = '#0B1020';
      ctx.fillRect(50, dinoCurrentY + 4, 3, 3);
      // Little snout
      ctx.fillStyle = '#6366F1';
      ctx.fillRect(54, dinoCurrentY + 6, 4, 6);

      // Draw score in top corner
      ctx.fillStyle = '#94A3B8';
      ctx.font = '10px "JetBrains Mono", monospace';
      ctx.fillText(`SCORE: ${Math.floor(stateRef.current.score)}`, width - 85, 18);

      stateRef.current.animationFrame = requestAnimationFrame(gameLoop);
    };

    stateRef.current.animationFrame = requestAnimationFrame(gameLoop);

    return () => {
      if (stateRef.current.animationFrame) {
        cancelAnimationFrame(stateRef.current.animationFrame);
      }
    };
  }, []);

  return (
    <div className="relative w-full rounded-xl overflow-hidden bg-[#070b16] border border-white/10 flex flex-col items-center justify-center p-2 select-none">
      <canvas
        ref={canvasRef}
        width={360}
        height={130}
        onClick={jump}
        className="w-full h-[130px] cursor-pointer"
        aria-label="Playable Mini Dino Runner Game"
      />

      {/* Overlay status banner */}
      {gameState === 'idle' && (
        <div 
          onClick={startGame}
          className="absolute inset-0 bg-black/50 backdrop-blur-[2px] flex flex-col items-center justify-center text-white cursor-pointer group"
        >
          <div className="p-2.5 rounded-full bg-accentIndigo text-white group-hover:scale-110 transition-transform mb-1 shadow-md shadow-accentIndigo/30">
            <Play className="w-5 h-5 fill-current ml-0.5" />
          </div>
          <span className="text-xs font-mono text-slate-200">Click or Tap to Play Dino</span>
        </div>
      )}

      {gameState === 'over' && (
        <div 
          onClick={startGame}
          className="absolute inset-0 bg-black/60 backdrop-blur-[2px] flex flex-col items-center justify-center text-white cursor-pointer"
        >
          <span className="text-xs font-mono font-bold text-red-400 mb-1">GAME OVER</span>
          <span className="text-[11px] font-mono text-darkMuted mb-2">Score: {score} · Best: {highScore}</span>
          <button 
            className="flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-accentAmber text-gray-950 text-xs font-semibold hover:bg-amber-400 transition-colors shadow-sm"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Play Again</span>
          </button>
        </div>
      )}

      {gameState === 'playing' && (
        <button
          onClick={jump}
          className="absolute bottom-2 right-2 px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/20 text-[10px] font-mono text-slate-200 border border-white/15 backdrop-blur-sm"
        >
          JUMP [TAP / SPACE]
        </button>
      )}
    </div>
  );
};

export default MiniDinoGame;
