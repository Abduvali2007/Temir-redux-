import React from "react";
import { data } from "../Data";
import ProductCard from "./ProductCard";
import ProductCard2 from "./ProductCard2";

const Products = () => {
  console.log(data);
  return (
    <div id="products">
      <div className="container">
        <div className=" flex  overflow-hidden bg-black  p-3 w-[1400px] ml-[-100px] h-[700px] mt-7  items-center justify-center">
          {data.slice(0, 4).map((el) => (
            <ProductCard el={el} />
          ))}
        </div>
        <div className=" flex gap-4 overflow-hidden bg-black  p-3 w-[1400px] ml-[-100px] h-[700px] mt-[200px]  items-center justify-center">
          {data.slice(0, 5).map((el) => (
            <ProductCard2 el={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
