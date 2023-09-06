import React, { useState, useEffect, useRef } from 'react';
import './style.css'; // Include your CSS file for styling
const cardsData = [
    {
      title: 'Card 1',
      imageUrl: '/assets/1.png',
    },
    {
      title: 'Card 2',
      imageUrl: '/assets/3.png',
    },
    {
      title: 'Card 3',
      imageUrl: '/assets/2.png',
    },
  ];
  
const Gallery = () => {
  const [scrollLock, setScrollLock] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(1); // Initialize the active card index to 0
  const cardContainerRef = useRef(null);

  const scrollThreshold = 10; // Adjust this value for scroll sensitivity
  const scrollDelay = 2000; // Adjust this value for the delay between index changes (in milliseconds)
  let isChangingIndex = false;

  useEffect(() => {
  
    const cardContainer = cardContainerRef.current;

    const handleScroll = (e) => {
      // Prevent default scroll behavior when the overflow is hidden
      if (scrollLock) {
        e.preventDefault();
      }

      const deltaY = e.deltaY;

      if (!isChangingIndex) {
        if (deltaY > scrollThreshold) {
          // Check if the card container is in the viewport before changing the index
          if (isElementInViewport(cardContainer) && activeCardIndex < 2) {
            isChangingIndex = true;
            setActiveCardIndex((prevIndex) => prevIndex + 1);
            setTimeout(() => {
              isChangingIndex = false;
            }, scrollDelay);
          }
        } else if (deltaY < -scrollThreshold) {
          if (isElementInViewport(cardContainer) && activeCardIndex > 0) {
            isChangingIndex = true;
            setActiveCardIndex((prevIndex) => prevIndex - 1);
            setTimeout(() => {
              isChangingIndex = false;
            }, scrollDelay);
          }
        }
      }

      // Lock or unlock scroll based on the active card index
      if (activeCardIndex === 2) {
        document.body.style.overflow = 'auto'; // Unlock scrolling when active card index is 2
      } else {
        document.body.style.overflow = 'hidden'; // Lock scrolling when active card index is not 2
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [scrollLock, activeCardIndex]);

  // Function to check if an element is in the viewport
  const isElementInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  return (
<div
  ref={cardContainerRef}
  className={`mt-[100px] container  flex flex-row flex-wrap mx-auto justify-center min-h-[60vh]  ${
    scrollLock ? 'scroll-locked' : ''
  }`}
  style={{ gap: '10px' }} // Adjust the gap value as needed
>
  {cardsData.map((card, index) => (
    <div
      key={index}
      className={`card ${activeCardIndex === index ? 'active' : ''}`}
      style={{ margin: '0px' }} // Adjust the margin value as needed
    >
      <div className="container  overflow-hidden">
        <img
          src={card.imageUrl}
          alt={card.title}
          className="w-auto h-[50vh] object-contain"
        />
      </div>
    </div>
  ))}
</div>


  );
};

export default Gallery;
