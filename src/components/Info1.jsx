import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import cometLogo from "../assets/svg/comet.svg"; // Replace with actual path
import waveLogo from "../assets/svg/wave.svg"; // Replace with actual path
import orohLogo from "../assets/svg/oroh.svg"; // Replace with actual path
import modelImage from "../assets/Images/page2-1.jpg"; // Replace with actual image path
import Qlue from "../assets/svg/Qlue.svg";
import lines6 from "../assets/svg/lines6.svg";

const Info1 = () => {
  return (
    <section className="relative bg-black text-white flex flex-col items-center justify-between ">
      <div
        className={`top-0 left-0 w-full bg-white h-[70px] flex px-4 z-50 shadow-md`}
      >
        <img
          src={Qlue}
          alt="Qlue Logo"
          className="mt-3 h-[60px] object-contain"
        />
      </div>

      {/* Content Section */}

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-6 lg:px-16">
        {/* Left Side - Text Content */}
        <div className="max-w-lg text-center lg:text-left mt-[5%] ml-[20%]">
          <h2 className="font-gilroy text-3xl text-center lg:text-4xl mb-4">
            DISCOVER TRENDY NEW BRANDS
          </h2>
          <p className="font-gilroyThin text-center text-lg lg:text-2xl text-yellow-500">
            no more endless quest, <br />
            just{" "}
            <span className="text-white font-semibold">
              next big thing
            </span>{" "}
            <br />
            right at your fingertips.{" "}
          </p>
        </div>

        {/* Right Side - Image and Floating Logos */}
        <div className="relative flex justify-center mt-[13%] ml-[-30%]">
          {/* Main Image */}
          <motion.img
            src={modelImage}
            alt="Model"
            className="rounded-2xl lg:w-[350px] h-full"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />

          {/* Floating Logos */}
          <motion.img
            src={cometLogo}
            alt="Comet"
            className="absolute mt-3 w-16 h-16 "
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
          <motion.img
            src={waveLogo}
            alt="Wave"
            className="absolute bottom-[40%] left-[30%] w-16 h-16"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          />
          <motion.img
            src={orohLogo}
            alt="Oroh"
            className="absolute bottom-[10%] right-[33%] w-16 h-16"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
          />
        </div>
      </div>

      <div className="absolute flex justify-center mr-[-96%]">
        <img src={lines6} />
      </div>
    </section>
  );
};

export default Info1;
