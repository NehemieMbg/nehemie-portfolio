'use client';

import { useEffect, useState } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed h-3 w-3 bg-white rounded-full z-50 pointer-events-none drop-shadow-2xl"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
        transition: 'left 0.1s, top 0.1s', // Add transition for left and top properties
      }}
    ></div>
  );
};

export default Cursor;
