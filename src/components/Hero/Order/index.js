import React from "react";
import hand from "../../../assets/Img/HOME/image 17.svg";
import key from "../../../assets/Img/HOME/image 19.svg";
import thing from "../../../assets/Img/HOME/image 20.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Order = () => {
  AOS.init({
    disable: "phone",
    duration: 300,
    easing: "ease-out-cubic",
  });
  return (
    <div className=" Order bg-black h-[1000px] text-white  flex flex-col ">
      <div className="container ">
        <div className=" ">
          <div className=" flex items-center text-center justify-between pt-[10px]">
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className=" relative w-[240px] h-[240px]  bg-[#363638] rounded-[10px]"
            >
              <img className=" absolute  bottom-0" src={hand} alt="img" />
              <h3 className=" mt-[300px] text-2xl ">SMART CARDS</h3>
            </div>{" "}
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="center-center"
              className=" relative w-[240px] h-[240px] text-center  bg-[#363638] rounded-[10px]"
            >
              <img
                className=" absolute  bottom-0 top-0"
                src={thing}
                alt="img"
              />
              <h3 className=" mt-[300px] text-2xl ">KEYCHAINS</h3>
            </div>{" "}
            <div
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className=" relative w-[240px] h-[240px]  bg-[#363638] rounded-[10px]"
            >
              <img
                className=" absolute flex items-center justify-center text-center t-[90px] "
                src={key}
                alt="img"
              />
              <h3 className=" mt-[300px] text-2xl ">MOBILE TAGS</h3>
            </div>{" "}
          </div>
          <div
            className="
            flex items-center  justify-center mt-[140px]
      "
          >
            <button
              type="button"
              class="text-white  bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-[60px] py-3 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2"
            >
              Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
