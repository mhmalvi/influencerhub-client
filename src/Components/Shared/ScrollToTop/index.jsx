import React, { useEffect, useState } from "react";
import Icons from "../Icons";

const ScrollToTop = () => {
  const [toggleScroll, setToggleScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 4000) {
        setToggleScroll(true);
      } else {
        setToggleScroll(false);
      }
    });
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {toggleScroll && (
        <button
          className="fixed bottom-96 md:right-10 xl:right-24 2xl:right-84 p-4 bg-gray-300 rounded-full"
          onClick={scrollToTop}
        >
          <Icons.TopArrow />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
