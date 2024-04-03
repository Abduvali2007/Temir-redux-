import React, { useState } from "react";
import cart from "../../../assets/Img/Products/image 48.png";

const ProductCard2 = ({ el }) => {
  const [over, setOver] = useState(false);

  return (
    <div className="pro flex items-center justify-center flex-col w-[800px] h-[600px] mt-8">
      <img
        style={{
          transform: over ? "rotate(90deg)" : "rotate(0deg)",
          width: over ? "400px" : "800px",
          height: over ? "300px" : "600px",
          marginLeft: over ? "-10px" : "0",
          transition: "1s",
        }}
        onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)}
        src={cart}
        alt="img"
      />
      <div
        style={{
          textAlign: "center",

          display: over ? "block" : "none",
          marginTop: over ? "100px" : "100px",
        }}
        className=" text-white text-[30px]"
      >
        <h1>{el.price}</h1>
        <h1>{el.title}</h1>
        <button
          type="button"
          class="text-white shadow-white border-white border-solid border-2 bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-[60px] py-3 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2"
        >
          Order
        </button>
      </div>
    </div>
  );
};

export default ProductCard2;
