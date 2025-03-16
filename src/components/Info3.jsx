import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Qlue from "../assets/svg/Qlue.svg";
import lines6 from "../assets/svg/lines6.svg";

import img1 from "../assets/svg/page4-1.svg";
import img2 from "../assets/svg/page4-2.svg";
import img3 from "../assets/svg/page4-3.svg";
import img4 from "../assets/svg/page4-4.svg";
import img5 from "../assets/svg/page4-5.svg";
import img6 from "../assets/svg/page4-6.svg";
import img7 from "../assets/svg/page4-7.svg";

const cardImages = [img1, img2, img3, img4, img5, img6, img7];
const radius = 120;

const Info3 = () => {
  const [positions, setPositions] = useState(
    cardImages.map((_, index) => {
      const angle = (index / cardImages.length) * (2 * Math.PI);
      return {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
        rotate: (angle * 180) / Math.PI,
      };
    })
  );

  const [centerIndex, setCenterIndex] = useState(0);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCenterIndex((prevIndex) => (prevIndex + 1) % cardImages.length);
      setPositions((prev) => {
        const newPositions = [...prev];
        newPositions.unshift(newPositions.pop());
        return newPositions;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black text-white flex flex-col items-center justify-between"
    >
      <div className="top-0 left-0 w-full bg-white h-[70px] flex px-4 z-50 shadow-md">
        <img
          src={Qlue}
          alt="Qlue Logo"
          className="mt-3 h-[60px] object-contain"
        />
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-6 lg:px-16">
        <div className="max-w-lg  flex flex-col justify-center items-center mt-[25%] ml-[20%]">
          <h2 className="font-gilroyLight text-3xl text-center lg:text-4xl mb-4">
            A COMMUNITY THAT <br />
            SHOPS, SHARES AND
            <br />
            INSPIRES
          </h2>

          <p className="font-gilroyLight text-center text-3xl leading-tight relative w-[500px]">
            <span className="bg-glorita-gradient bg-clip-text text-transparent ">
              no more lonely checkouts,
              <br />
              join people who <br />
              love fashion <br />
              as much as you do
            </span>
          </p>
        </div>

        <div className="relative w-[300px] h-[300px] flex items-center justify-center ml-[100px] mt-[100px]">
          {cardImages.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              className="absolute w-[120px] h-[200px] rounded-2xl shadow-lg"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={
                isVisible
                  ? {
                      opacity: 1,
                      scale: index === centerIndex ? 1.5 : 1,
                      x: positions[index].x,
                      y: positions[index].y,
                      rotate: positions[index].rotate,
                      perspective: 800,
                      rotateY: index === centerIndex ? "0deg" : "15deg",
                    }
                  : {}
              }
              transition={{ duration: 1, ease: "easeInOut" }}
              style={{ zIndex: index === centerIndex ? 10 : 1 }}
            />
          ))}
        </div>
      </div>

      <div className="absolute flex justify-center mr-[-96%]">
        <img src={lines6} className="h-screen" />
      </div>
    </section>
  );
};

export default Info3;
