import React, { useEffect, useState } from "react";
import Qr from "../../../assets/Img/QR Code.png";
const InterFace = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      console.log(scrollPosition);
    };
  }, []);
  return (
    <div id="interFace">
      <div className="container">
        <div className="">
          <div className=" flex items-center justify-center flex-col">
            <h1 className=" text-white text-[48px]">INTERFACE</h1>
            <img className="" src={Qr} alt="img" />
            <h3 className=" text-white text-2xl mt-2">Scun to preview</h3>
            <h5 className=" text-gray-500 text-xl">or</h5>
            <button className=" border-2 border-inherit border-solid rounded-lg text-white text-2xl mt-4  pl-5 pr-5 pt-1 pb-1">
              Go over
            </button>
          </div>
          <div className="  ">
            <div className="text-center flex items-center justify-between mt-[100px]">
              <div className=" flex border-t-4 border-inherit border-solid   items-center  flex-col">
                <div
                  style={{
                    transform:
                      scrollPosition < 3950
                        ? "translateY(-60px)"
                        : "translateY(0)",
                    display: scrollPosition > 3945 ? "block" : "none ",
                    transition: "1s",
                  }}
                  className=""
                >
                  <h1 className=" text-white text-[100px] ">1</h1>
                  <h2 className=" text-white text-3xl">Fast delivery</h2>
                  <p className=" text-gray-400 mt-4">
                    We deliver right to your <br /> front door or office. <br />{" "}
                    Free of charge!
                  </p>
                </div>
              </div>
              <div className=" flex  border-t-4 border-inherit border-solid  text-center  items-center  flex-col">
                <div
                  style={{
                    transform:
                      scrollPosition < 3950
                        ? "translateY(-60px)"
                        : "translateY(0)",
                    display: scrollPosition > 3945 ? "block" : "none ",
                    transition: "2s",
                  }}
                  className=""
                >
                  <h1 className=" text-white text-[100px] ">2</h1>
                  <h2 className=" text-white text-3xl">High quality</h2>
                  <p className=" text-gray-400 mt-4">
                    We are committed to <br /> work only with the <br /> highest
                    product quality.
                  </p>
                </div>
              </div>
              <div className=" flex  border-t-4 border-inherit border-solid text-center  items-center  flex-col">
                <div
                  style={{
                    transform:
                      scrollPosition < 3950
                        ? "translateY(-60px)"
                        : "translateY(0)",
                    display: scrollPosition > 3945 ? "block" : "none ",
                    transition: "1s",
                  }}
                  className=""
                >
                  <h1 className=" text-white text-[100px] ">3</h1>
                  <h2 className=" text-white text-3xl">Customer Service</h2>
                  <p className=" text-gray-400 mt-4">
                    We are just one phone <br /> call away. For <br /> anything.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterFace;
