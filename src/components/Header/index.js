import React from "react";
import temir from "../../assets/Img/HOME/logo.svg";
import { TbShoppingBagPlus } from "react-icons/tb";
import { Link } from "react-router-dom";

const Header = () => {
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
            <h2 className=" hover:border-b-[1px] hover:border-solid hover:border-inherit">
              about
            </h2>
            <h2 className=" hover:border-b-[1px] hover:border-solid hover:border-inherit">
              Contact US
            </h2>
          </div>
          <TbShoppingBagPlus className="text-white text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default Header;
