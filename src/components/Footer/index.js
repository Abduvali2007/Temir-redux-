import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";
import { BsYoutube } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import motion from "../../../src/assets/Img/HOME/HOME/image 27.svg";

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="flex items-center justify-center flex-col">
          <div className=" text-white flex items-center  gap-[90px]">
            <a href="#">Home</a>
            <a href="#">order</a>
            <h1 href="#">TEMIR LLC</h1>
            <a href="#">about</a>
            <a href="#">Contacts</a>
          </div>
          <div className="text-[#676767]  mt-8   ">
            <p>
              Mall Of Emirates. G-floor <br /> Near: Rado, Pandora, Steve <br />{" "}
              Madden
            </p>
          </div>
        </div>
        <div className=" flex items-center gap-6 mt-5 justify-center text-white text-[40px]">
          <FaWhatsapp />
          <FaInstagram />
          <SlSocialFacebook />
          <BsYoutube />
          <MdOutlineMail />
        </div>
        <div className=" text-white flex items-center justify-center mt-10 gap-9">
          <h3>developed by</h3>
          <img src={motion} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
