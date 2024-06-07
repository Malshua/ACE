import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  content: string;
}

const Typewriter: React.FC<TypewriterProps> = ({ content }) => {
  const [text, setText] = useState<string>('');
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setText(content.substring(0, index));
      setIndex(prevIndex => prevIndex + 1);

      if (index === content.length) {
        clearInterval(intervalId);
      }
    }, 100); // Adjust the interval based on your preference or add randomness for a more natural feel

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [content, index]);

  return <div>{text}</div>;
};

export default Typewriter;
