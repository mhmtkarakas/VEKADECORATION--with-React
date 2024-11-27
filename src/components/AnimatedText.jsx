import React, { useState, useEffect } from 'react'
import "./AnimatedText.css"

const AnimatedText = () => {
    const [isVisible, setIsVisible] = useState(false);
    const text = "Veka Dekorasyon Mimarlık";
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              observer.disconnect(); // Tekrar izlemeyi durdur
            }
          });
        },
        { threshold: 0.5 }
      );
  
      const element = document.getElementById("animated-text");
      if (element) observer.observe(element);
  
      return () => observer.disconnect();
    }, []);
  
    return (
      <div id="animated-text" className="animated-text" data-aos="fade-up">
        {text.split("").map((char, index) => (
          <span
            key={index}
            className={`animated-char ${isVisible ? "visible" : ""}`}
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            {char}
          </span>
        ))}
      </div>
    );
  };
  
  export default AnimatedText;