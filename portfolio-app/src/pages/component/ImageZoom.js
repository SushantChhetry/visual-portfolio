import { useEffect } from "react";

const ImageZoom = ({ imageUrl }) => {
  useEffect(() => {
    const img = document.querySelector(".image-zoom img");

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > 100) {
        // change this value to adjust when to start zooming
        img.classList.add("zoom");
      } else {
        img.classList.remove("zoom");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="image-zoom">
      <img src={imageUrl} alt="your image" />
    </div>
  );
};

export default ImageZoom;
