import React, { useEffect, useRef } from 'react';

const NanoCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const cursorPos = useRef({ x: 0, y: 0 });
  const followerPos = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const handleMouseMove = (e) => {
      cursorPos.current = { x: e.clientX, y: e.clientY };
      
      if (cursor) {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const handleMouseEnter = () => {
      if (cursor) cursor.classList.add('hover');
      if (follower) follower.classList.add('hover');
    };

    const handleMouseLeave = () => {
      if (cursor) cursor.classList.remove('hover');
      if (follower) follower.classList.remove('hover');
    };

    const animateFollower = () => {
      const dx = cursorPos.current.x - followerPos.current.x;
      const dy = cursorPos.current.y - followerPos.current.y;
      
      followerPos.current.x += dx * 0.15;
      followerPos.current.y += dy * 0.15;

      if (follower) {
        follower.style.transform = `translate(${followerPos.current.x}px, ${followerPos.current.y}px)`;
      }

      animationFrameId.current = requestAnimationFrame(animateFollower);
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    animateFollower();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="nano-cursor"></div>
      <div ref={followerRef} className="nano-cursor-follower"></div>
    </>
  );
};

export default NanoCursor;
