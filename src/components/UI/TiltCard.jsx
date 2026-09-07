import React, { useRef, useState, useCallback } from 'react';

/**
 * TiltCard
 * High-performance 3D mouse tracking parallax tilt card with specular glare.
 */
export default function TiltCard({
  children,
  className = '',
  maxTilt = 10,
  scale = 1.02,
  perspective = 1000,
  style = {},
  onClick,
  ...props
}) {
  const cardRef = useRef(null);
  const [tiltStyle, setTiltStyle] = useState({
    transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease',
  });
  const [glareStyle, setGlareStyle] = useState({ opacity: 0, x: 50, y: 50 });

  const handleMouseMove = useCallback(
    (e) => {
      const card = cardRef.current;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      // Mouse position relative to card (0 to 1)
      const x = (e.clientX - rect.left) / width;
      const y = (e.clientY - rect.top) / height;

      // Calculate tilt angles (-maxTilt to +maxTilt)
      const tiltX = (0.5 - y) * (maxTilt * 2);
      const tiltY = (x - 0.5) * (maxTilt * 2);

      setTiltStyle({
        transform: `perspective(${perspective}px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`,
        transition: 'transform 0.08s ease-out, box-shadow 0.2s ease',
      });

      setGlareStyle({
        opacity: 0.18,
        x: x * 100,
        y: y * 100,
      });
    },
    [maxTilt, scale, perspective]
  );

  const handleMouseLeave = useCallback(() => {
    setTiltStyle({
      transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
      transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease',
    });
    setGlareStyle({ opacity: 0, x: 50, y: 50 });
  }, [perspective]);

  return (
    <div
      ref={cardRef}
      className={`tilt-card-wrapper ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        ...style,
        ...tiltStyle,
        position: 'relative',
        transformStyle: 'preserve-3d',
        willChange: 'transform',
      }}
      {...props}
    >
      {children}

      {/* Dynamic Specular Glare Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: 'inherit',
          background: `radial-gradient(circle at ${glareStyle.x}% ${glareStyle.y}%, rgba(255, 255, 255, 0.4) 0%, transparent 65%)`,
          opacity: glareStyle.opacity,
          pointerEvents: 'none',
          transition: 'opacity 0.3s ease',
          zIndex: 10,
        }}
        aria-hidden="true"
      />
    </div>
  );
}
