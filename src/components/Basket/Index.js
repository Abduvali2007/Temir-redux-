import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";

const Basket = () => {
  const { basket } = useSelector((s) => s);
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
              <div className=" bg-gray-600 h-full w-[220px] rounded-[10px]  ">
                <img
                  className=" w-[200px] h-[150px] mt-5 ml-3"
                  src={el.image}
                  alt="img"
                />
              </div>
              <div className="">
                <h2>{el.title}</h2>
              </div>
              <div className="">
                <h2>{el.price}</h2>
              </div>
              <div className="">
                <button>-</button>
                <h1>1</h1>
                <button>-</button>
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
