import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { products } from "../assets/assets";
import { Link } from "react-router-dom";

const BestSeller = () => {


  const { products } = useContext(ShopContext);
  const [bestSeller, setBestseller] = useState([]);

  console.log(products);
  useEffect(() => {
    const bestProduct = products.filter((item) => item.name);
    setBestseller(bestProduct.slice(1, 5));
    console.log(bestProduct);
  },[]);
  

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          sit?
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        
          {/* {
            bestSeller.map((each)=>{
              return(
                <img src={each.image} alt="" />
               
              )
            })
          } */}
{
  products.slice(3,8).map((each)=>{
    return(
      <Link to='/'><img src={each.image} alt="" className="transition-transform duration-300 hover:scale-105 hover:opacity-90"/></Link>
    )
  })
}
      </div>
    </div>
  );
};

export default BestSeller;
