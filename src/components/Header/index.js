import React from "react";
import temir from "../../assets/Img/HOME/logo.svg";
import { TbShoppingBagPlus } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { basket } = useSelector((s) => s);
  return (
    <div className="header  bg-black text-white pt-5 pb-6 sticky top-0 z-[99]">
      <div className="container">
        <div className="header flex items-center justify-between">
          <div className=""></div>
          <div className="flex items-center gap-[100px]">
            <Link
              to={"/hero"}
              className=" hover:border-b-[1px] hover:border-solid hover:border-inherit"
            >
              Home
            </Link>
            <Link
              to={"/products"}
              className=" hover:border-b-[1px] hover:border-solid hover:border-inherit"
            >
              products
            </Link>
            <Link to={"/newproducts"}>
              <img src={temir} alt="img" />
            </Link>
            <Link
              to={"/about"}
              className=" hover:border-b-[1px] hover:border-solid hover:border-inherit"
            >
              about
            </Link>
            <h2 className=" hover:border-b-[1px] hover:border-solid hover:border-inherit">
              Contact US
            </h2>
          </div>
          <Link className=" relative" to={"/basket"}>
            <TbShoppingBagPlus className="text-white text-3xl" />
            {basket.length ? (
              <h1 className=" flex items-center justify-center absolute left-7 top-5 text-yellow-600 font-black  text-[20px] bg-green-600 w-4 h-4 rounded-[50%] ">
                {basket.length}
              </h1>
            ) : null}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
