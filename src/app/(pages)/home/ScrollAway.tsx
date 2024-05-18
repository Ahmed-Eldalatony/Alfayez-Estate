"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const AnimatedText = ({ text, className, Y }) => {
  return (
    <motion.p
      className={className}
      initial={{ opacity: 0.4, y: Y, x: 0 }} // Initial position (down)
      // animate={{ opacity: 1, y: 0, x: 0 }} // Final position (left)
      transition={{ duration: 1 }} // Animation duration
      whileInView={{ opacity: 1, y: 0 }} // Start animation when in view
    >
      {text && text}
    </motion.p>
  );
};

export default AnimatedText;

import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

export const ImageCarousel = ({ images, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images && images.length, interval]);

  return (
    <div className="image-carousel  mt-6 ">
      <AnimatePresence initial={false}>
        <motion.img
          key={currentIndex}
          src={images && images[currentIndex].src}
          alt={`Image ${currentIndex + 1}`}
          initial={{ opacity: 0.5 }}
          // animate={{ opacity: 1, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, display: "none" }}
          className="rounded-3xl object-cover aspect-[16/9] w-full"
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
    </div>
  );
};

export const AnimatedTextHorizontal = ({
  text,
  className,
  repeatDelay = 10,
}) => {
  return (
    <motion.p
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, transition: { staggerChildren: 0.1 } }}
    >
      {text.split("").map((char, charIndex) => (
        <motion.span
          key={charIndex}
          initial={{ opacity: 0, x: 40 }}
          // animate={{ opacity: 1, y: 0 }}
          transition={{ delay: charIndex * 0.02 }}
          whileInView={{ opacity: 1, x: 0 }} // Start animation when in view
        >
          {char && char}
        </motion.span>
      ))}
    </motion.p>
  );
};

export const ImageSlide = ({
  image,
  className,
  slideX = false,
  slideY = false,
}) => {
  return (
    <div>
      {slideX && (
        <motion.img
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          src={image.src && image.src}
          transition={{ duration: 0.3 }}
          alt="image"
          width={400}
          height={400}
          className={className}
        />
      )}
      {slideY && (
        <motion.img
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          src={image.src && image.src}
          transition={{ duration: 0.6 }}
          alt="image"
          width={400}
          height={400}
          className={className}
        />
      )}
    </div>
  );
};
