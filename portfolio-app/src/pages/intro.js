import { useEffect, useRef } from "react";

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
          const sentence = "Hello, world! This is a typing paragraph.";
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
    </div>
  );
};

export default intro;
