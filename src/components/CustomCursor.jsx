import { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Smooth spring physics for the outer ring (liquid lag effect)
  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const moveMouse = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') !== null ||
        target.closest('button') !== null ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', moveMouse);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', moveMouse);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [cursorX, cursorY]);

  if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) return null;

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 99999 }}>
      {/* Outer Ring */}
      <motion.div
        style={{
          position: 'fixed',
          width: 32,
          height: 32,
          borderRadius: '50%',
          border: '2px solid rgba(0, 245, 255, 0.4)', // Light Cyan
          left: -16,
          top: -16,
          x: cursorX,
          y: cursorY,
          boxShadow: '0 0 10px rgba(0, 245, 255, 0.2)', // Subtle glow
        }}
        animate={{
          scale: isClicking ? 0.8 : isHovering ? 1.4 : 1,
          borderColor: isHovering ? 'rgba(0, 245, 255, 0.8)' : 'rgba(0, 245, 255, 0.4)',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 250 }}
      />

      {/* Inner Dot */}
      <motion.div
        style={{
          position: 'fixed',
          width: 8,
          height: 8,
          backgroundColor: '#00f5ff', // Light Cyan solid
          borderRadius: '50%',
          left: -4,
          top: -4,
          x: mousePosition.x,
          y: mousePosition.y,
          boxShadow: '0 0 8px rgba(0, 245, 255, 0.5)', // Subtle glow
        }}
        animate={{
          scale: isHovering ? 0.6 : 1,
        }}
      />
    </div>
  );
};

export default CustomCursor;
