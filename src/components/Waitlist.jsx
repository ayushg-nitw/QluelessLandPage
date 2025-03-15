import React, { useEffect } from "react";
import qluelessDark from "../assets/svg/logoName.svg";
import qlue from "../assets/svg/Qlue.svg";
import img1 from "../assets/Images/page1-1.jpg";
import img2 from "../assets/Images/page1-2.jpg";
import img3 from "../assets/Images/page1-3.jpg";
import img4 from "../assets/Images/page1-4.jpeg";
import EnterEmailButton from "./EnterEmailButton";
import GoogleSignInButton from "./GoogleSignInButton";

const Waitlist = () => {
  return (
    <div className="flex relative min-h-screen w-full bg-black text-white mt-10">
      {/* Left Side - Content */}

      <div className="w-1/2 flex flex-col items-center justify-center p-10 absolute top-0 left-20 mt-12">
        <img className="h-[70px] w-full" src={qluelessDark} alt="Qlueless" />
        <p className="font-gilroy gilroy-800 text-2xl text-center w-[336px] h-[86px] mt-4">
          LOST IN STYLE <br /> FOUND IN FASHION
        </p>

        {/* Waitlist Form */}
        <div className="mt-2 p-10 rounded-[72px] border border-white-800 w-[470px] h-[316px] text-center">
          <p className="font-gilroy gilroy-600 text-lg text-white mb-2">
            join the waitlist
          </p>

          <EnterEmailButton />

          <p className="font-gilroy gilroy-600 text-white text-lg my-2">or</p>

          <GoogleSignInButton />

          <p className="font-gilroy gilroy-600 text-lg text-white mt-3">
            join the qlue club
          </p>
        </div>
      </div>

      {/* Right Side - Images Grid */}
      <div className="grid grid-cols-2 gap-4 p-4 absolute top-[12%] right-[15%]">
        {/* Image 1 */}
        <div className="w-[190px] h-[266px] rounded-3xl overflow-hidden floating">
          <img
            className="parallax-image w-full h-full object-cover"
            src={img1}
            alt="Fashion"
          />
        </div>

        {/* Image 2 */}
        <div className="w-[190px] h-[200px] rounded-3xl overflow-hidden floating delay-1">
          <img
            className="parallax-image w-full h-full object-cover"
            src={img2}
            alt="Fashion"
          />
        </div>

        {/* Image 3 */}
        <div className="w-[190px] h-[200px] rounded-3xl overflow-hidden floating delay-2">
          <img
            className="parallax-image w-full h-full object-cover"
            src={img3}
            alt="Fashion"
          />
        </div>

        {/* Image 4 */}
        <div className="w-[190px] h-[266px] rounded-3xl overflow-hidden floating delay-3 mt-[-35%]">
          <img
            className="parallax-image w-full h-full object-cover"
            src={img4}
            alt="Fashion"
          />
        </div>
      </div>
    </div>
  );
};

export default Waitlist;
