import React from "react";
import Qlue from "../assets/svg/Qlue.svg";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import logoName from "../assets/svg/logoName.svg";

const Footer = () => {
  return (
    <footer className="bg-black text-white flex flex-col items-center justify-center py-10 relative">
      {/* Qlue Logo */}
      <img
        src={Qlue}
        className="text-4xl text-gold font-semibold absolute top-5 left-5"
      />

      {/* Center Content */}
      <div className="text-center mt-10 flex flex-col justify-center items-center">
        <h2 className="font-gilroy text-[36px]">THE BEST FINDS</h2>
        <h2 className="font-gilroy text-[36px]">ARE NEVER OBVIOUS </h2>
        <h2 className="text-[36px] font-gilroy">
          THEY ARE{" "}
          <span className="bg-glorita-gradient font-gilroyRegular">
            QLUELESS
          </span>
        </h2>
        <div className="text-center h-[100px] w-[200px] mt-4">
          <p className="mt-2 text-white-300 font-gilroyRegular text-xl">
            discover, engage, and purchase - all in one seamless experience.
          </p>
        </div>

        {/* Coming Soon Button */}
        <button className="mt-8 bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-[#DFA30A] transition-all duration-300 hover:scale-105">
          coming soon
        </button>

        {/* Social Media Icons */}
        <div className="flex gap-4  mt-4 text-xl">
          <a
            href="#"
            className="text-white hover:text-[#DFA30A] transition-all duration-300 hover:scale-110"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="text-white hover:text-[#DFA30A] transition-all duration-300 hover:scale-110 "
          >
            <FaLinkedin />
          </a>
          <a
            href="#"
            className="text-white hover:text-[#DFA30A] transition-all duration-300 hover:scale-110"
          >
            <FaXTwitter />
          </a>
        </div>

        {/* Queless Large Text in Background */}
      </div>

      <h1 className="bottom-0 opacity-10 h-[300px] w-[500px]">
        <img className="w-full h-full" src={logoName} alt="logoName"></img>
      </h1>
    </footer>
  );
};

export default Footer;
