import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import foto from "../../assets/Img/Products/image 35.png";
import { FaWhatsapp } from "react-icons/fa";
import add from "../../assets/Img/90000 2.png";
import { FaHandPointUp } from "react-icons/fa";

const TemirCard = () => {
  const { temirCard } = useSelector((s) => s);
  const { proId } = useParams();
  let findPro = temirCard.slice(0.3).find((el) => el.id === +proId);
  const dispatch = useDispatch();
  let { title, image, price, id } = findPro;
  const [value, setValue] = useState("");
  const addToBasket = (date) => {
    dispatch({ type: "ADD_TO_BASKET", payload: date });
    dispatch({ type: "CHANGE_VALUE", payload: value });
  };
  return (
    <div className=" overflow-hidden ">
      <div className="container">
        <div className=" py-11">
          <hr className=" py-10" />
          <div className="text-white flex items-start justify-center gap-[90px]">
            <div className="">
              <h1 className="text-white text-[40px] ">{title}</h1>
              <h1 className="text-white text-[40px] ">{price}$</h1>
              <div className="">
                <h3>Choose in option</h3>
                <div className=" overflow-auto ">
                  <div className=" ">
                    <div className=" flex     ">
                      {temirCard.map((el) => (
                        <div className="  ">
                          <img
                            className=" w-[200px] h-[120px]"
                            src={foto}
                            alt="img"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="">
                  <h3 className=" text-xl py-10">Name</h3>
                  <input
                    maxLength={10}
                    onChange={(e) => setValue(e.target.value)}
                    className="  bg-zinc-900 py-[10px] px-[70px] rounded-[10px]"
                    type="text"
                    placeholder="Insert your name"
                  />
                  <h1 className=" py-9 flex gap-3 items-center text-yellow-500 text-[30px]  text-bold">
                    <FaHandPointUp /> Здесь вы <br />
                    можете изменить <br /> Имя
                  </h1>
                </div>
              </div>
            </div>
            <div className="w-[50%]">
              <div className=" relative">
                <div className="w-[300px]">
                  <h1 className=" absolute  top-[140px] left-[60px] text-white text-[40px]  ">
                    {value}
                  </h1>
                </div>
                {value.length ? (
                  <img className=" w-[600px]" src={add} alt="img" />
                ) : (
                  <img className=" w-[600px]" src={foto} alt="img" />
                )}
                <button
                  onClick={() => addToBasket(findPro)}
                  type="button"
                  class="  mt-7 text-white shadow-white border-white border-solid border-2 bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-[60px] py-3 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2"
                >
                  Add to Basket
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex items-start justify-center gap-6 text-white">
          <div className=" ">
            <p className=" text-3xl  py-10  border-x-2 px-4 text-[#656565]">
              The look and feel of metal will take your <br /> TEMIR cards to
              the next level of quality and <br /> excellence, exceeding your
              most valuable <br />
              customer’s expectations.
            </p>
            <p className=" text-3xl  py-10  px-4 text-[#656565]">
              Its metallic surface and mechanically <br /> engraved details make
              it a striking element <br /> of your brand, and an exclusive new{" "}
              <br />
              experience that your customers won’t want <br />
              to miss out on.
            </p>
          </div>
          <div className=" flex items-center justify-center flex-col">
            <p className=" text-3xl  py-10  px-4">
              If you want to change the location of <br /> the logo or text,
              then contact us via <br /> Whatsapp.
            </p>
            <button className=" flex items-center justify-center gap-2 bg-green-900 text-yellow-200 py-[10px] px-[40px] rounded-[10px] border-2 border-solid border-yellow-300">
              {" "}
              <FaWhatsapp /> Whatsapp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemirCard;
