import React, { useEffect, useState, useRef } from 'react';

export const CountUp = ({ target, duration = 1200, decimals = 0, suffix = '' }) => {
  const [current, setCurrent] = useState(0);
  const elementRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let startTime = null;
    const startValue = 0;
    const endValue = parseFloat(target) || 0;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const val = startValue + easeProgress * (endValue - startValue);
      setCurrent(val);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCurrent(endValue);
      }
    };

    requestAnimationFrame(step);
  }, [hasAnimated, target, duration]);

  return (
    <span ref={elementRef} className="font-mono">
      {decimals > 0 ? current.toFixed(decimals) : Math.floor(current)}
      {suffix}
    </span>
  );
};

export default CountUp;
