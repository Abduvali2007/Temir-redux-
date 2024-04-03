import React from "react";
import card from "../../assets/Img/HOME/image 34.png";
import phone from "../../assets/Img/HOME/iPhone 14 Pro.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Order from "./Order";
import Works from "../Works/Index";
import InterFace from "./InterFace/Index";
import Contacts from "./Contacts/Index";
import Visit from "./Visit/Index";

const Hero = () => {
  AOS.init({
    disable: "phone",
    duration: 500,
    easing: "ease-out-cubic",
  });
  return (
    <div id="hero">
      <div className="container">
        <div className=" flex items-center justify-center flex-col gap-10 ">
          <h1 className=" text-white flex items-center justify-center flex-col text-[70px] tracking-6px">
            Smart interface
          </h1>
          <div className=" text-white  flex items-center justify-center gap-20">
            <h2 className=" text-2xl ">• High quality products</h2>
            <h2 className=" text-2xl ">• Convenient to use</h2>
          </div>
          <div className="hero flex items-center justify-center flex-col">
            <img className="  pb-[-20px]" src={card} alt="img" />
            <img src={phone} alt="img" />
          </div>
        </div>
        <div className=" flex items-center  mt-[190px]">
          <h1 className=" text-white text-[60px] leading-[65px]">
            The smart way <br /> of staying <br />
            connected
          </h1>
          <div
            data-aos="fade-right"
            data-aos-offset="900"
            data-aos-easing="ease-in-sine"
            className=" text-white text-[35px] font-extralight pt-20  "
          >
            pDigital business cards are the modern way to <br /> share contact
            information. Digital business cards <br /> are more interactive,
            costeffective, and <br /> sustainable than their physical
            counterparts. One <br /> major benefit of digital business cards is
            that they <br /> can be shared with anyone, anywhere.
          </div>
        </div>
      </div>
      <Order />
      <Works />
      <InterFace />
      <Contacts />
      <Visit />
    </div>
  );
};

export default Hero;
