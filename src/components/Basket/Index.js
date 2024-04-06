import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";
import add from "../../assets/Img/90000 2.png";

const Basket = () => {
  const { basket, InValue } = useSelector((s) => s);
  const dispatch = useDispatch();

  const Del = (date) => {
    dispatch({ type: "DELETE", payload: date });
  };
  return (
    <div className=" py-[50px]">
      <div className="container">
        <h1 className=" text-center text-white text-[50px]">Cart</h1>
        <div className=" text-white flex items-center justify-between py-[20px]">
          <div className=" text-white">
            <h2> • Product</h2>
          </div>
          <div className=""></div>
          <div className=" flex items-center gap-[150px] ">
            <h2>• Price</h2>
            <h2>• Quantity</h2>
            <h2>• SubTotal</h2>
          </div>
        </div>
        <hr />
        <div className="">
          {basket.map((el) => (
            <div className=" flex items-center justify-between text-white border-2 rounded-[10px] border-[#3f3d3d] px-[20px] py-[10px] w-[1220px] h-[200px]">
              <div className=" bg-gray-600 h-full w-[230px] rounded-[10px]  ">
                {InValue.length ? (
                  <div className=" relative py-10 ">
                    <img
                      className=" absolute   top-3 w-[550px] "
                      src={add}
                      alt="img"
                    />
                    <h1 className=" absolute top-[35px]  w-10 left-[60px] text-[50px]">
                      {InValue}
                    </h1>
                  </div>
                ) : (
                  <img
                    className=" w-[200px] h-[150px] mt-5 ml-3"
                    src={el.image}
                    alt="img"
                  />
                )}
              </div>
              <div className="">
                <h2>{el.title}</h2>
              </div>
              <div className="">
                <h2>{el.price * el.quantity}</h2>
              </div>
              <div className=" flex items-center gap-2">
                <button
                  onClick={() => dispatch({ type: "MINUS", payload: el })}
                  className="  text-3xl flex items-center justify-center w-8 bg-gray-800 h-8 rounded-[50%]"
                >
                  -
                </button>
                <h1>{el.quantity}</h1>
                <button
                  onClick={() => dispatch({ type: "PLUS", payload: el })}
                  className=" text-3xl  flex items-center justify-center w-8 bg-gray-800 h-8 rounded-[50%]"
                >
                  +
                </button>
              </div>
              <div className=" flex items-center flex-col gap-11">
                <h1>subtit</h1>
                <h2 onClick={() => Del(el)} className=" text-red-900 text-2xl">
                  <RiDeleteBin6Line />
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Basket;
