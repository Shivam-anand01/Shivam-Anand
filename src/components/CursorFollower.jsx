import React, { useEffect, useRef, useState } from 'react';

/**
 * CursorFollower - Clean Minimal Dot
 * Follows the mouse position smoothly with requestAnimationFrame without an outer circle.
 */
export default function CursorFollower() {
  const dotRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouse = useRef({ x: -100, y: -100 });
  const dotPos = useRef({ x: -100, y: -100 });
  const rafId = useRef(null);
  const isVisible = useRef(false);

  useEffect(() => {
    const isCoarse =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(pointer: coarse)').matches;
    if (isCoarse) return;

    const dot = dotRef.current;
    if (!dot) return;

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      if (!isVisible.current) {
        isVisible.current = true;
        dotPos.current.x = e.clientX;
        dotPos.current.y = e.clientY;
        dot.style.opacity = '1';
      }
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('[role="button"]') ||
        target.closest('.interactive') ||
        target.closest('.glass-card') ||
        target.closest('.filter-btn')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      if (dot) {
        dot.style.opacity = '0';
      }
      isVisible.current = false;
    };

    const handleMouseEnter = () => {
      if (dot) {
        dot.style.opacity = '1';
      }
      isVisible.current = true;
    };

    const render = () => {
      dotPos.current.x += (mouse.current.x - dotPos.current.x) * 0.35;
      dotPos.current.y += (mouse.current.y - dotPos.current.y) * 0.35;

      dot.style.transform = `translate3d(${dotPos.current.x}px, ${dotPos.current.y}px, 0) translate(-50%, -50%) scale(${
        isHovered ? 1.5 : 1
      })`;

      rafId.current = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    rafId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isHovered]);

  if (
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(pointer: coarse)').matches
  ) {
    return null;
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
        overflow: 'hidden',
      }}
      aria-hidden="true"
    >
      {/* Inner Glowing Center Dot Only (No Outer Circle) */}
      <div
        ref={dotRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: '#0f172a',
          boxShadow: '0 0 10px rgba(15, 23, 42, 0.4)',
          opacity: 0,
          willChange: 'transform, opacity',
          transition: 'opacity 0.25s ease, transform 0.15s ease',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}
