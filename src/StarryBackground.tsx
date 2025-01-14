import React, { useEffect, useRef } from 'react';

const StarryBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create stars
    const numStars = 200;
    const stars: HTMLDivElement[] = [];
    
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      
      // Random position
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      
      // Random twinkle duration and opacity
      star.style.setProperty('--twinkle-duration', `${2 + Math.random() * 3}s`);
      star.style.setProperty('--star-opacity', `${0.3 + Math.random() * 0.7}`);
      
      containerRef.current.appendChild(star);
      stars.push(star);
    }

    // Create shooting stars
    const numShootingStars = 5;
    const shootingStars: HTMLDivElement[] = [];

    for (let i = 0; i < numShootingStars; i++) {
      const shootingStar = document.createElement('div');
      shootingStar.className = 'shooting-star';
      
      const resetShootingStar = () => {
        // Random starting position and angle
        const angle = -15 - Math.random() * 30; // -45 to -15 degrees
        const startX = -100 + Math.random() * 50; // Start slightly off-screen
        const startY = Math.random() * 50; // Start in top half
        
        // Calculate end position based on angle
        const distance = window.innerWidth + 500; // Ensure it goes off screen
        const endX = startX + distance * Math.cos(angle * Math.PI / 180);
        const endY = startY + distance * Math.sin(angle * Math.PI / 180);
        
        shootingStar.style.setProperty('--start-x', `${startX}px`);
        shootingStar.style.setProperty('--start-y', `${startY}px`);
        shootingStar.style.setProperty('--end-x', `${endX}px`);
        shootingStar.style.setProperty('--end-y', `${endY}px`);
        shootingStar.style.setProperty('--angle', `${angle}deg`);
        shootingStar.style.setProperty('--shoot-duration', `${1 + Math.random()}s`);
        shootingStar.style.setProperty('--shoot-delay', `${i * 2 + Math.random() * 5}s`);
      };

      resetShootingStar();
      containerRef.current.appendChild(shootingStar);
      shootingStars.push(shootingStar);

      // Reset shooting star position after animation
      shootingStar.addEventListener('animationend', resetShootingStar);
    }

    // Cleanup
    return () => {
      stars.forEach(star => star.remove());
      shootingStars.forEach(shootingStar => shootingStar.remove());
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none" />;
};

export default StarryBackground;