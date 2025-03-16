import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import img1 from "../assets/Images/page1-1.jpg";
import img2 from "../assets/Images/page1-2.jpg";
import img3 from "../assets/Images/page1-3.jpg";
import img4 from "../assets/Images/page1-4.jpeg";
import EnterEmailButton from "./EnterEmailButton";
import GoogleSignInButton from "./GoogleSignInButton";

const initialImages = [img1, img2, img3, img4];

const positions = [
  { top: "5%", left: "5%", height: "250px" },
  { top: "5%", left: "50%", height: "180px" },
  { top: "60%", left: "50%", height: "250px" },
  { top: "60%", left: "5%", height: "180px" },
];

const Waitlist = () => {
  const [imageOrder, setImageOrder] = useState(initialImages);
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
        setImageOrder((prev) => [prev[1], prev[2], prev[3], prev[0]]);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <div
      ref={sectionRef}
      className="relative flex min-h-screen w-full bg-black text-white mt-10 shadow-md"
    >
      {/* Left Content Section - Scaled Down on Medium & Smaller Screens */}

      <div className="w-full md:w-3/4 lg:w-1/2 flex flex-col items-center justify-center p-6 md:p-8 lg:p-10 absolute top-0 md:left-10 lg:left-20 mt-6 md:mt-10">
        <div className="font-glorita text-[40px] md:text-[35px] lg:text-[50px]">
          <span className="bg-glorita-gradient">Qlue</span>
        </div>
        <p className="font-gilroyLight text-2xl md:text-xl lg:text-3xl text-center w-[280px] md:w-[300px] lg:w-[336px] h-auto md:h-[70px] lg:h-[86px] mb-5">
          LOST IN STYLE <br /> FOUND IN FASHION
        </p>
        <div className="mt-2 p-6 md:p-8 lg:p-10 bg-white rounded-[60px] md:rounded-[50px] border border-white-800 w-[320px] md:w-[380px] lg:w-[470px] h-auto md:h-[280px] lg:h-[316px] text-center">
          <p className="font-gilroy text-lg text-black mb-2">
            Join the waitlist
          </p>
          <EnterEmailButton />
          <p className="font-gilroy text-black text-lg my-2">OR</p>
          <GoogleSignInButton />
          <p className="font-gilroy text-lg text-black mt-3">
            Join the Qlue Club
          </p>
        </div>
      </div>

      {/* Right Image Animation Section - Hidden on Medium & Smaller Screens */}
      <div className="hidden xl:flex lg:flex absolute items-center justify-center top-[30%] xl:right[23%] lg:right-[5%] w-[420px] h-[420px]">
        {imageOrder.map((img, index) => (
          <motion.img
            key={img}
            src={img}
            alt={`Fashion ${index + 1}`}
            className="absolute w-[180px] rounded-3xl shadow-lg"
            animate={{
              top: positions[index].top,
              left: positions[index].left,
              height: positions[index].height,
              transform: "translate(-50%, -50%)",
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{ position: "absolute" }}
          />
        ))}
      </div>
    </div>
  );
};

export default Waitlist;
