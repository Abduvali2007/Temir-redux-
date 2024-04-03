import React from "react";
import { useSelector } from "react-redux";

const NewProduct = () => {
  const { productsAll } = useSelector((s) => s);
  console.log(productsAll, "vhkvvvycictuc");
  // let { image, price, title, id } = productsAll;
  return (
    <div className="">
      <div className="container">
        <div className=" flex item-center justify-between flex-wrap mt-7">
          {productsAll.map((el) => (
            <div className=" w-[400px] h-[300px] bg-slate-100 flex items-center justify-center flex-col rounded-[10px]">
              <img src={el.image} alt="img" />
              <h1>
                {el.title}/{el.id}
              </h1>
              <h1>{el.price} $</h1>
              <button
                type="button"
                class="text-white shadow-white border-white border-solid border-2 bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-[60px] py-3 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2"
              >
                buy
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
