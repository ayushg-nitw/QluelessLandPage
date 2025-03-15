import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import qluelessDark from "../assets/svg/feeling.svg";
import qluelessLight from "../assets/svg/qlueless.svg";

const AnimationScreen = ({ setShowWaitlist }) => {
  const [isWhiteScreen, setIsWhiteScreen] = useState(false);
  const [slideUp, setSlideUp] = useState(false);

  useEffect(() => {
    // Switch from Black to White at 700ms
    setTimeout(() => {
      setIsWhiteScreen(true);
    }, 800);

    // Hold White screen for 700ms, then slide up at 2100ms
    setTimeout(() => {
      setSlideUp(true);
    }, 1300);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50"
      style={{ backgroundColor: isWhiteScreen ? "#FFFFFF" : "#000000" }}
      animate={slideUp ? { y: "-100%" } : {}}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <img
        src={isWhiteScreen ? qluelessLight : qluelessDark}
        alt="Qlueless"
        className="w-[400px] h-[200px]"
      />
    </motion.div>
  );
};

export default AnimationScreen;
