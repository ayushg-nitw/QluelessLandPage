import { useEffect } from "react";
import "./index.css";
import AnimationScreen from "./components/AnimationScreen.jsx";
import Waitlist from "./components/Waitlist.jsx";
import Info1 from "./components/Info1.jsx";
import Info2 from "./components/Info2.jsx";
import Info3 from "./components/Info3.jsx";
import Footer from "./components/Footer.jsx";
import { ToastContainer } from "react-toastify";

function App() {
  useEffect(() => {
    // Initially, prevent scrolling
    document.body.style.overflow = "hidden";

    setTimeout(() => {
      document.body.classList.add("start-transition");
    }, 700);

    setTimeout(() => {
      document.body.style.overflow = "auto"; // Enable scrolling after animation
    }, 1400);
  }, []);

  return (
    <>
      <div className="w-full h-screen overflow-y-scroll snap-mandatory snap-y">
        <section className="h-screen w-full snap-start">
          <Waitlist />
        </section>

        {/* WhiteScreen - Covers Waitlist Initially */}
        <div className="absolute inset-0 white-screen"></div>

        <AnimationScreen />

        <section className="h-screen snap-start">
          <Info1 />
        </section>

        <section className="h-screen snap-start">
          <Info2 />
        </section>

        <section className="h-screen snap-start">
          <Info3 />
        </section>

        <section className="h-screen snap-start">
          <Footer />
        </section>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
