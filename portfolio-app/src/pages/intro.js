import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const intro = () => {
  const pRef = useRef(null);
  useEffect(() => {
    const options = {
      rootMargin: "0px",
      threshold: 0.5,
    };

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sentence =
            "I'm a frontend developer with expertise in React JS, passionate about crafting visually appealing and functional websites that provide great user experience. My portfolio showcases some of my best works, which are designed and developed with attention to detail and latest industry trends.";
          let index = 0;
          const intervalId = setInterval(() => {
            const currentText = pRef.current.textContent;
            const nextChar = sentence.charAt(index);
            pRef.current.textContent = `${currentText}${nextChar}`;
            index++;
            if (index === sentence.length) {
              clearInterval(intervalId);
            }
          }, 50);
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(pRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="intro-wrapper">
      <div className="intro">
        <p ref={pRef}></p>
      </div>
      <FontAwesomeIcon icon={faReact} size="lg" />
    </div>
  );
};

export default intro;
