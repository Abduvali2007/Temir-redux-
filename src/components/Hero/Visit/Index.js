import React, { useState } from "react";
import card from "../../../assets/Img/HOME/image 23.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";

const Visit = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      id="visit"
      style={{
        minHeight: "100vh",
      }}
    >
      <div className=" relative flex">
        <div
          style={{
            marginLeft: open ? "-1000px" : "0",
            transition: "2s",
          }}
          className=" absolute top-[90px] left-9 rounded-[10px] backdrop-blur     bg-[#e3e1e11c] w-[600px] h-[400px] pb-[40px]"
        >
          <h1 className=" text-white  text-[50px] text-center mt-11">
            Visit us at our store <br /> in the <br />
            <span className=" text-[70px]">Mall of Emirate</span>
          </h1>
          <a
            onClick={() => setOpen(true)}
            className=" absolute flex items-center justify-center text-white text-2xl border-b-2   right-6"
          >
            more <FaArrowRightLong />
          </a>
        </div>
        <div
          style={{
            marginRight: !open ? " -800px" : "0px",
            transition: "2s",
          }}
          className=" absolute top-[90px] right-9 rounded-[10px]   flex items-center justify-center flex-col  backdrop-blur bg-[#17151571] w-[600px] h-[400px] pb-[40px]"
        >
          <a
            onClick={() => setOpen(false)}
            className="text-white text-4xl mr-[500px]  "
          >
            <IoIosArrowBack />
          </a>
          <h2 className=" text-white  text-3xl text-center mt-[50px]">
            We are stationed in one of the <br /> most beautiful and prestigious{" "}
            <br /> malls on this planet.
          </h2>
          <h2 className=" text-white  text-3xl text-center mt-3">
            Visit us and we will consult you <br /> to all our products
          </h2>
          <div className="flex gap-6 mt-6">
            <button className=" text-white border-2 border-solid  text  pl-8 pr-8 pt-2 rounded-[6px] pb-2">
              Get directions
            </button>
            <button className=" text-white border-2 bg-black border-solid  text  pl-8 pr-8 pt-2 rounded-[6px] pb-2">
              Or buy online
            </button>
          </div>
        </div>
        <div
          className=""
          style={
            {
              height: "300px",
            }
          }
        >
          <img className=" w-[2000px]" src={card} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Visit;
