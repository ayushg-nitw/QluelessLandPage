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
  { top: "5%", left: "5%", height: "250px" }, // Top-left
  { top: "5%", left: "50%", height: "180px" }, // Top-right
  { top: "60%", left: "50%", height: "250px" }, // Bottom-right
  { top: "60%", left: "5%", height: "180px" }, // Bottom-left
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
      <div className="w-1/2 flex flex-col items-center justify-center p-10 absolute top-0 left-20 mt-12">
        <div className="font-glorita text-[50px]">
          <span className="bg-glorita-gradient">Qlue</span>
        </div>
        <p className="font-gilroyLight text-3xl text-center w-[336px] h-[86px] mb-5">
          LOST IN STYLE <br /> FOUND IN FASHION
        </p>
        <div className="mt-2 p-10 bg-white rounded-[72px] border border-white-800 w-[470px] h-[316px] text-center">
          <p className="font-gilroy text-lg text-black mb-2">
            join the waitlist
          </p>
          <EnterEmailButton />
          <p className="font-gilroy text-black text-lg my-2">OR</p>
          <GoogleSignInButton />
          <p className="font-gilroy text-lg text-black mt-3">
            Join the Qlue Club
          </p>
        </div>
      </div>
      <div className="absolute flex items-center justify-center top-[30%] right-[10%] w-[420px] h-[420px] ">
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
