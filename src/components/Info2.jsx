import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import page3_1 from "../assets/svg/page3-1.svg";
import page3_2 from "../assets/svg/page3-2.svg";
import page3_3 from "../assets/svg/page3-3.svg";
import Qlue from "../assets/svg/Qlue.svg";
import lines6 from "../assets/svg/lines6.svg";

const images = [page3_1, page3_2, page3_3];

const positions = [
  { x: "-260px", scale: 0.8, zIndex: 1 }, // Left (Smaller)
  { x: "0px", scale: 1, zIndex: 2 }, // Center (Bigger)
  { x: "260px", scale: 0.8, zIndex: 1 }, // Right (Smaller)
];

const Info2 = () => {
  const [imageOrder, setImageOrder] = useState(images);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
    let interval;
    if (isVisible) {
      interval = setInterval(() => {
        setImageOrder((prev) => [prev[2], prev[0], prev[1]]);
      }, 2000); // Rotate every 2 seconds
    }

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black text-white flex flex-col items-center justify-between "
    >
      {/* Sticky Logo Bar */}
      <div className="top-0 left-0 w-full bg-white h-[70px] flex px-4 z-50 shadow-md">
        <img
          src={Qlue}
          alt="Qlue Logo"
          className="mt-3 h-[60px] object-contain"
        />
      </div>

      {/* Content Section */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-6 lg:px-16">
        {/* Right Side - Rotating Images */}

        {/* Outline Box Behind the Images */}
        <div className="absolute w-[290px] h-[440px] left-[273px] mt-[100px] border border-white rounded-3xl border-2"></div>

        <div className="relative flex justify-center items-center mt-[15%] ml-[15%] h-[400px] w-[500px]">
          {imageOrder.map((img, index) => (
            <motion.img
              key={img}
              src={img}
              alt={`Product ${index + 1}`}
              className="absolute w-[200px] md:w-[250px] lg:w-[270px] max-w-[250px] rounded-xl shadow-lg"
              animate={
                isVisible
                  ? {
                      x: positions[index].x,
                      scale: positions[index].scale,
                      zIndex: positions[index].zIndex,
                    }
                  : {}
              }
              transition={{ duration: 1, ease: "easeInOut" }}
              style={{
                zIndex: positions[index].zIndex,
              }}
            />
          ))}
        </div>

        {/* Left Side - Text Content */}
        <div className="max-w-lg text-center lg:text-left mt-[15%] ml-[10%]">
          <h2 className="font-gilroy text-3xl text-center lg:text-4xl mb-4">
            SCROLL, GET INSPIRED SHOP INSTANTLY
          </h2>
          <p className="font-gilroyThin text-center text-lg lg:text-2xl text-yellow-500">
            no more redirect, <br />
            join people who <br />
            <span className="text-white font-semibold">just one tap</span>{" "}
            <br />
            and it’s yours...{" "}
          </p>
        </div>
      </div>

      <div className="absolute flex justify-center mr-[-96%]">
        <img src={lines6} />
      </div>
    </section>
  );
};

export default Info2;
