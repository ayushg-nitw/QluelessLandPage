import React, { useState } from "react";
import { db, doc, getDoc, setDoc } from "../firebaseConfig"; // Firestore setup
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoIosLogOut } from "react-icons/io";

const EnterEmailButton = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleClick = async () => {
    if (!email || !isValidEmail(email)) {
      toast.error("Please enter a valid email address!", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const userRef = doc(db, "waitlist", email);
      const userDoc = await getDoc(userRef);

      if (userDoc.exists()) {
        toast.info("You're already on the Qlueless waitlist!", {
          position: "top-center",
          autoClose: 3000,
        });
      } else {
        await setDoc(userRef, { email, createdAt: new Date() });
        toast.success("Welcome! You've joined the Qlueless waitlist.", {
          position: "top-center",
          autoClose: 3000,
        });
      }
      setEmail("");
    } catch (error) {
      console.error("Firestore Error:", error.message);
      toast.error("Something went wrong. Please try again.", {
        position: "top-center",
        autoClose: 3000,
      });
    }
    setIsSubmitting(false);
  };

  return (
    <div className="relative flex items-center w-full max-w-md rounded-full overflow-hidden shadow-lg">
      {/* Gradient Background */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <radialGradient id="gradEmail" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="#FBB809" stopOpacity="1" />
            <stop offset="100%" stopColor="#8B590C" stopOpacity="1" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#gradEmail)" />
      </svg>

      {/* Input Field */}
      <input
        type="email"
        placeholder="enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="relative w-full h-[50px] bg-transparent text-white placeholder-white px-4 py-3 outline-none font-gilroy"
        disabled={isSubmitting}
      />

      {/* Submit Button with Curved Right Side */}
      <button
        onClick={handleClick}
        disabled={isSubmitting}
        className="relative flex items-center justify-center w-20 h-10 text-black transition-transform hover:scale-110" // Keeps the right side fully curved
      >
        {isSubmitting ? (
          <span className="animate-spin">⏳</span>
        ) : (
          <IoIosLogOut className="text-white ml-4" size={25} />
        )}
      </button>
    </div>
  );
};

export default EnterEmailButton;
