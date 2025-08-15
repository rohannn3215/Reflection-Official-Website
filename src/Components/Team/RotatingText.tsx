import React, { useEffect, useState } from "react";

interface RotatingTextProps {
  texts: string[];
  rotationInterval?: number;
  mainClassName?: string;
  splitLevelClassName?: string;
  staggerDuration?: number;
  staggerFrom?: "first" | "last";
}

const RotatingText: React.FC<RotatingTextProps> = ({
  texts,
  rotationInterval = 2000,
  mainClassName = "",
  splitLevelClassName = "",
  staggerDuration = 10,
  staggerFrom = "first",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState(texts[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsAnimating(false);
      }, 300); // Animation duration
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [texts, rotationInterval]);

  useEffect(() => {
    setCurrentText(texts[currentIndex]);
  }, [currentIndex, texts]);

  return (
    <span className={mainClassName}>
      <span 
        key={currentText}
        className={`inline-block overflow-hidden transition-all duration-300 ${
          isAnimating 
            ? 'opacity-0 -translate-y-full' 
            : 'opacity-100 translate-y-0'
        }`}
      >
        {currentText.split("").map((char, i) => (
          <span
            key={i}
            style={{ 
              display: "inline-block",
              transitionDelay: `${staggerFrom === "last" 
                ? (currentText.length - i) * staggerDuration 
                : i * staggerDuration}ms`
            }}
            className={`${splitLevelClassName} transition-all duration-300 ${
              isAnimating 
                ? 'opacity-0 -translate-y-full' 
                : 'opacity-100 translate-y-0'
            }`}
          >
            {char}
          </span>
        ))}
      </span>
    </span>
  );
};

export default RotatingText;
