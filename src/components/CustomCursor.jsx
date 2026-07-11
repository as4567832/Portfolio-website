import { useState, useEffect } from 'react';
import useMediaQuery from '../hooks/useMediaQuery';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const isDesktop = useMediaQuery('(min-width: 768px) and (hover: hover) and (pointer: fine)');

  useEffect(() => {
    if (!isDesktop) return;

    document.body.classList.add('custom-cursor-active');

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      {/* Outer ring trails a beat behind the dot via a plain CSS transition */}
      <div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary/40 pointer-events-none z-[9999] transition-transform duration-150 ease-out"
        style={{ transform: `translate(${mousePosition.x - 16}px, ${mousePosition.y - 16}px)` }}
      />
      {/* Inner dot follows the pointer exactly */}
      <div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-primary to-secondary shadow-[0_0_8px_rgba(59,130,246,0.8)] pointer-events-none z-[9999]"
        style={{ transform: `translate(${mousePosition.x - 5}px, ${mousePosition.y - 5}px)` }}
      />
    </>
  );
};

export default CustomCursor;
