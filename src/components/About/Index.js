import React from "react";
import about from "../../assets/Img/Temir Store (Copy)/About/image 30.png";
import jon from "../../assets/Img/HOME/image 19.svg";
import jon2 from "../../assets/Img/HOME/image 20.png";
import jon3 from "../../assets/Img/HOME/image 17.svg";
const About = () => {
  return (
    <div id="about " className=" py-[60px]">
      <div className="container">
        <div className=" flex items-center justify-center flex-col  text-center text-white">
          <h1 className=" text-[100px]">TEMIR STORE</h1>
          <p className=" text-2xl py-7">
            Temir card-new generation smart business card with <br /> more
            advanced options.
          </p>
          <img src={about} alt="img" />
          <p className=" text-2xl  py-7">
            You can add your contact details, social media <br /> accounts,
            pictures and more other details and <br /> you can update at any
            time . <br /> No more messing around with a paper business <br />
            cards. One card for life time.
          </p>
        </div>
        <div className=" bg-black flex items-center justify-center    w-[1200px]  py-[70px] px-[70px]">
          <div  className=" sty  relative w-[300px] flex items-start pt-10 justify-center border-2 border-black rounded-[10px] h-[500px] bg-slate-200 ">
            <div className="   relative  bg-gray-500 w-[270px] h-[270px] ">
              <img className=" absolute bottom-0" src={jon3} alt="" />
            </div>
            <h1 className=" absolute bottom-10 text-3xl left-5">01</h1>
            <h1 className=" absolute bottom-4 text-3xl left-5">SMART CARDS</h1>
          </div>
          <div  className="  sty relative w-[300px] flex items-start pt-10 justify-center border-2 border-black rounded-[10px] h-[500px] bg-slate-200 ">
            <div className="   relative  bg-gray-500 w-[270px] h-[270px] ">
              <img
                className=" absolute bottom-[80px] left-[25%]"
                src={jon}
                alt=""
              />
            </div>
            <h1 className=" absolute bottom-10 text-3xl left-5">02</h1>
            <h1 className=" absolute bottom-4 text-3xl left-5">SMART TAGS</h1>
          </div>
          <div  className=" sty  relative w-[300px] flex items-start pt-10 justify-center border-2 border-black rounded-[10px] h-[500px] bg-slate-200 ">
            <div className="   relative  bg-gray-500 w-[270px] h-[270px] ">
              <img className=" absolute bottom-0 right-0" src={jon2} alt="" />
            </div>
            <h1 className=" absolute bottom-10 text-3xl left-5">03</h1>
            <h1 className=" absolute bottom-4 text-3xl left-5">
              SMART KEYCHAIN
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
