import React, { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';
import { Plus, RotateCcw } from 'lucide-react';

export const MiniPhysicsSandbox = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const engineRef = useRef(null);
  const [ballCount, setBallCount] = useState(5);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const { Engine, Render, Runner, Bodies, Composite, Mouse, MouseConstraint } = Matter;

    const engine = Engine.create({
      gravity: { x: 0, y: 0.9, scale: 0.001 }
    });
    engineRef.current = engine;

    const width = 360;
    const height = 130;

    const render = Render.create({
      canvas: canvasRef.current,
      engine: engine,
      options: {
        width: width,
        height: height,
        wireframes: false,
        background: '#070b16',
        showSleeping: false,
      }
    });

    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);

    // Static ground and side walls
    const ground = Bodies.rectangle(width / 2, height - 8, width, 16, {
      isStatic: true,
      render: { fillStyle: '#334155' }
    });
    const leftWall = Bodies.rectangle(0, height / 2, 10, height, { isStatic: true, render: { visible: false } });
    const rightWall = Bodies.rectangle(width, height / 2, 10, height, { isStatic: true, render: { visible: false } });

    Composite.add(engine.world, [ground, leftWall, rightWall]);

    // Initial bouncing balls
    const colors = ['#6366F1', '#F5B544', '#34D399', '#818CF8', '#FBBF24'];
    const initialBalls = [];
    for (let i = 0; i < 5; i++) {
      const radius = 9 + (i % 3) * 3;
      const ball = Bodies.circle(60 + i * 55, 20 + (i % 2) * 15, radius, {
        restitution: 0.88,
        friction: 0.01,
        render: { fillStyle: colors[i % colors.length] }
      });
      initialBalls.push(ball);
    }
    Composite.add(engine.world, initialBalls);

    // Mouse drag support
    const mouse = Mouse.create(render.canvas);
    mouse.element.removeEventListener('mousewheel', mouse.mousewheel);
    mouse.element.removeEventListener('DOMMouseScroll', mouse.mousewheel);

    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: { stiffness: 0.2, render: { visible: false } }
    });
    Composite.add(engine.world, mouseConstraint);
    render.mouse = mouse;

    return () => {
      Render.stop(render);
      Runner.stop(runner);
      Composite.clear(engine.world, false);
      Engine.clear(engine);
    };
  }, []);

  const dropBall = () => {
    if (!engineRef.current) return;
    const colors = ['#6366F1', '#F5B544', '#34D399', '#818CF8', '#FBBF24'];
    const x = Math.random() * 240 + 60;
    const radius = Math.floor(Math.random() * 8) + 8;
    const color = colors[Math.floor(Math.random() * colors.length)];

    const ball = Matter.Bodies.circle(x, 15, radius, {
      restitution: 0.9,
      friction: 0.01,
      render: { fillStyle: color }
    });

    Matter.Composite.add(engineRef.current.world, ball);
    setBallCount((prev) => prev + 1);
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full rounded-xl overflow-hidden bg-[#070b16] border border-white/10 flex flex-col items-center justify-center p-2 select-none"
    >
      <canvas
        ref={canvasRef}
        width={360}
        height={130}
        onClick={dropBall}
        className="w-full h-[130px] cursor-pointer"
        aria-label="Interactive Matter.js Physics Simulation Sandbox"
      />

      <div className="absolute top-2 right-2 flex items-center space-x-1.5">
        <button
          onClick={dropBall}
          className="flex items-center space-x-1 px-2 py-0.5 rounded-md bg-accentAmber/20 hover:bg-accentAmber/30 text-accentAmber border border-accentAmber/30 text-[10px] font-mono transition-colors"
          title="Click to drop a new rigid body"
        >
          <Plus className="w-3 h-3" />
          <span>Drop Ball ({ballCount})</span>
        </button>
      </div>

      <div className="absolute bottom-2 left-2 text-[10px] font-mono text-darkMuted/80 pointer-events-none">
        Matter.js Engine · Drag or click canvas
      </div>
    </div>
  );
};

export default MiniPhysicsSandbox;
