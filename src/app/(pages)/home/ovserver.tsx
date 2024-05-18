import React, { useRef, useEffect } from "react";

const Section = () => {
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(entry);
          // Section is in view
          console.log("Section is in view!");
        } else {
          // Section is out of view
          console.log("Section is out of view!");
        }
      });
    });

    //@ts-ignore
    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    //@ts-ignore
    <div
      className="text-4xl z-50 min-h-[100vh] relative text-white"
      ref={sectionRef}
    >
      whateverkjk
    </div>
  );
};

export default Section;
