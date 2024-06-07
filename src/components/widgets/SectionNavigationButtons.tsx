// components/SectionNavigationButtons.tsx
import React, { useEffect, useRef, useState } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

const SectionNavigationButtons: React.FC = () => {
  const sectionRefs = useRef<Array<HTMLElement | null>>([]);
  const [currentSectionIndex, setCurrentSectionIndex] = useState<number>(0);
  const [showScrollUp, setShowScrollUp] = useState<boolean>(false);
  const [showScrollDown, setShowScrollDown] = useState<boolean>(true);

  useEffect(() => {
    // Populate sectionRefs.current with the initial values
    sectionRefs.current = [
      'hero',
      'about',
      'features',
      'pocketpay',
      'directDebit',
      'FAQ',
      'request-demo',
      'contact-us',
      'footer',
    ].map(section => document.getElementById(section));

    // Add event listener for the scroll event
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.scrollHeight;

    // Calculate whether the user is at the top or bottom of the page
    const atTop = scrollTop === 0;
    const atBottom = scrollTop + windowHeight === documentHeight;

    // Update the state to show/hide scroll buttons
    setShowScrollUp(!atTop);
    setShowScrollDown(!atBottom);
  };

  const scrollToSection = (index: number) => {
    const targetSection = sectionRefs.current[index];

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
      setCurrentSectionIndex(index);
    }
  };

  const scrollToNextSection = () => {
    const nextIndex = (currentSectionIndex + 1) % sectionRefs.current.length;
    scrollToSection(nextIndex);
  };

  const scrollToPreviousSection = () => {
    const previousIndex =
      (currentSectionIndex - 1 + sectionRefs.current.length) %
      sectionRefs.current.length;
    scrollToSection(previousIndex);
  };

  return (
    <div className="fixed bottom-4 right-4 flex items-center gap-4">
      <button
        onClick={scrollToPreviousSection}
        className={`${
          showScrollUp ? 'block' : 'hidden'
        } animate-bounce p-2 bg-primary-default text-white rounded-md cursor-pointer  transition-opacity duration-300 ease-in-out`}
      >
        <FaArrowUp />
      </button>
      <button
        onClick={scrollToNextSection}
        className={`${
          showScrollDown ? 'block' : 'hidden'
        } animate-bounce p-2 bg-primary-default text-white rounded-md cursor-pointer  transition-opacity duration-300 ease-in-out`}
      >
        <FaArrowDown />
      </button>
    </div>
  );
};

export default SectionNavigationButtons;
