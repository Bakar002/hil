import React, { useState, useEffect, useRef } from 'react';
import './style.css'; // Include your CSS file for styling
const cardsData = [
    {
      title: 'Card 1',
      imageUrl: '/assets/3.webp',
    },
    {
      title: 'Card 2',
      imageUrl: '/assets/1.webp',
      
    },
    {
      title: 'Card 3',
      imageUrl: '/assets/2.webp',
      
    },
  ];
  
  const Gallery = () => {
    const [scrollLock, setScrollLock] = useState(true);
    const [activeCardIndex, setActiveCardIndex] = useState(1); // Initialize the active card index to 1
    const cardContainerRef = useRef(null);
  
    const scrollThreshold = 20; // Adjust this value for scroll sensitivity
    const scrollDelay = 3000; // Adjust this value for the delay between index changes (in milliseconds)
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
        if (activeCardIndex === 2 && scrollLock) {
          setScrollLock(false); // Lock scrolling when active card index is 2
        } else if (activeCardIndex !== 2 && !scrollLock) {
          setScrollLock(true); // Unlock scrolling when active card index is not 2
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
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const viewportTop = window.scrollY;
      const viewportBottom = viewportTop + windowHeight;
  
      return rect.bottom >= viewportTop && rect.top <= viewportBottom;
    };
  
    // Define a shuffled array of cards based on the activeCardIndex
    const shuffledCardsData = [
      ...cardsData.slice(activeCardIndex),
      ...cardsData.slice(0, activeCardIndex),
    ];
  
    return (
      <div
        ref={cardContainerRef}
        className={` container  flex flex-row flex-wrap mx-auto justify-center   ${
          scrollLock ? 'scroll-locked' : ''
        }`}
        style={{ gap: '200px' }} // Adjust the gap value as needed
      >
        {shuffledCardsData.map((card, index) => (
          <div
            key={index}
            className={`card ${index === 2 ? 'active' : ''}`}
            style={{ marginTop: '-130px' }} // Adjust the margin value as needed
          >
            <div className="container  overflow-hidden">
              <img
                src={card.imageUrl}
                alt={card.title}
                className="w-auto h-[60vh] object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    );
  };
  export default Gallery;
