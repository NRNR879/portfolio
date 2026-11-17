import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';

export const HeroPhysics = () => {
  const sceneRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 640;

    if (prefersReducedMotion || !sceneRef.current || !containerRef.current) {
      return;
    }

    const {
      Engine,
      Render,
      Runner,
      Bodies,
      Composite,
      Mouse,
      MouseConstraint,
      Events,
    } = Matter;

    // Create engine
    const engine = Engine.create({
      gravity: { x: 0, y: 0.8, scale: 0.001 }
    });

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // Create renderer
    const render = Render.create({
      canvas: sceneRef.current,
      engine: engine,
      options: {
        width: width,
        height: height,
        wireframes: false,
        background: 'transparent',
        showSleeping: false,
      }
    });

    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);

    // Create static boundaries
    const wallOptions = { isStatic: true, render: { visible: false } };
    const ground = Bodies.rectangle(width / 2, height + 30, width * 2, 60, wallOptions);
    const leftWall = Bodies.rectangle(-30, height / 2, 60, height * 2, wallOptions);
    const rightWall = Bodies.rectangle(width + 30, height / 2, 60, height * 2, wallOptions);

    Composite.add(engine.world, [ground, leftWall, rightWall]);

    // Create physics balls (indigo and amber)
    const ballCount = isMobile ? 12 : 24;
    const balls = [];
    const colors = [
      '#6366F1', // Indigo primary
      '#818CF8', // Light Indigo
      '#F5B544', // Amber highlight
      '#FBBF24', // Warm Amber
      '#4F46E5', // Deep Indigo
    ];

    for (let i = 0; i < ballCount; i++) {
      const radius = Math.floor(Math.random() * 12) + (isMobile ? 10 : 14);
      const x = Math.random() * (width - 100) + 50;
      const y = -Math.random() * 400 - 50;
      const color = colors[Math.floor(Math.random() * colors.length)];

      const ball = Bodies.circle(x, y, radius, {
        restitution: 0.85, // Bouncy!
        friction: 0.005,
        frictionAir: 0.015,
        density: 0.001,
        render: {
          fillStyle: color,
          opacity: 0.85,
          strokeStyle: 'rgba(255,255,255,0.2)',
          lineWidth: 1
        }
      });
      balls.push(ball);
    }

    Composite.add(engine.world, balls);

    // Mouse Interaction
    const mouse = Mouse.create(render.canvas);
    // Allow scrolling through the canvas unless actively dragging
    mouse.element.removeEventListener('mousewheel', mouse.mousewheel);
    mouse.element.removeEventListener('DOMMouseScroll', mouse.mousewheel);

    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false }
      }
    });

    Composite.add(engine.world, mouseConstraint);
    render.mouse = mouse;

    // Handle Window Resize
    const handleResize = () => {
      if (!containerRef.current || !render.canvas) return;
      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight;

      render.canvas.width = newWidth;
      render.canvas.height = newHeight;
      Render.setPixelRatio(render, window.devicePixelRatio);

      Matter.Body.setPosition(ground, { x: newWidth / 2, y: newHeight + 30 });
      Matter.Body.setPosition(rightWall, { x: newWidth + 30, y: newHeight / 2 });
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      Render.stop(render);
      Runner.stop(runner);
      Composite.clear(engine.world, false);
      Engine.clear(engine);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 pointer-events-auto overflow-hidden z-0"
      aria-hidden="true"
    >
      <canvas 
        ref={sceneRef} 
        className="w-full h-full opacity-60 dark:opacity-75"
      />
    </div>
  );
};

export default HeroPhysics;
