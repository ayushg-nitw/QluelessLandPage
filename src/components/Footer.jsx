import React from "react";
import Qlue from "../assets/svg/Qlue.svg";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import logoName from "../assets/svg/logoName.svg";
import insta from "../assets/svg/insta.svg";
import linkedin from "../assets/svg/linkedin.svg";
import twitter from "../assets/svg/twitter.svg";

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
        <div className="flex flex-col">
          <span className="font-gilroy text-3xl"> THE BEST FINDS ARE</span>
          <span className="font-gilroy text-3xl"> NEVER OBVIOUS</span>
          <span className="font-gilroy text-3xl">
            THEY ARE{" "}
            <span className="bg-glorita-gradient font-gilroyRegular">
              QLUELESS
            </span>
          </span>
        </div>

        <div className="text-center h-[100px] w-[295px] mt-4">
          <p className="mt-2 text-white-300 font-gilroyRegular text-xl">
            discover, engage, and purchase all in one seamless <br />
            experience.
          </p>
        </div>

        {/* Coming Soon Button */}
        <button className="mt-8 bg-white w-[150px] h-[45px] text-black text-lg  px-4 py-2 rounded-full font-gilroy hover:bg-[#DFA30A] transition-all duration-300 hover:scale-105">
          coming soon
        </button>

        {/* Social Media Icons */}
        <div className="flex gap-3  mt-4 text-xl">
          <a
            href="#"
            className="text-white hover:text-[#DFA30A] transition-all duration-300 hover:scale-110"
          >
            <img src={insta} className="h-10 w-10" />
          </a>
          <a
            href="#"
            className="text-white hover:text-[#DFA30A] transition-all duration-300 hover:scale-110 "
          >
            <img src={linkedin} className="h-11 w-11 mt-[-2px]" />
          </a>
          <a
            href="#"
            className="text-white hover:text-[#DFA30A] transition-all duration-300 hover:scale-110"
          >
            <img
              src={twitter}
              className="h-9 w-9 mt-[1px] border border-white-200 rounded-md"
            />
          </a>
        </div>

        {/* Queless Large Text in Background */}
      </div>

      <h1 className="bottom-0 opacity-30 h-[350px] w-[500px]">
        <img className="w-full h-full" src={logoName} alt="logoName"></img>
      </h1>
    </footer>
  );
};

export default Footer;
