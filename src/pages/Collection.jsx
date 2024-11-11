import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts,setFilterProducts] = useState([]);
  const [category,setCategory]=useState([]);
  const[subcategory,setSubcategory]=useState([]);
  const [sortType,setSorttype]=useState('relevant')

  const toggleCategory=(e)=>{
    if(category.includes(e.target.value)){
        setCategory(prev=>prev.filter(item =>item!==e.target.value))
    }
    else{
      setCategory(prev=>[...prev,e.target.value])
    }
  }

  const toggleSubCategory=(e)=>{

    if(subcategory.includes(e.target.value)){
      setCategory(prev=>prev.filter(item =>item!==e.target.value))
    }else{
      setSubcategory(prev=>[...prev,e.target.value])
    }
  }

const applyFilter=()=>{
  let productsCopy=products.slice();
  if(category.length>0){
    productsCopy=productsCopy.filter(item=>category.includes(item.category))
  }
if(subcategory.length>0){
  productsCopy=productsCopy.filter(item=>subcategory.includes(item.subcategory))
}

  setFilterProducts(productsCopy)
}

const sortProduct=()=>{
  let fpCopy=filterProducts.slice();
  switch(sortType){
    case 'low-high':
      setFilterProducts(fpCopy.sort((a,b)=>(a.price -b.price)))
      break;
      case 'high-low':
      setFilterProducts(fpCopy.sort((a,b)=>(b.price -a.price)))
      break;

      default:
        applyFilter();
        break;
  }
}

useEffect(()=>{
applyFilter()
},[category,subcategory])

useEffect(()=>{
sortProduct()
},[sortType])

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t ">
      {/* filter options */}
      <div className="min-w-60">
        <p onClick={()=>setShowFilter(!showFilter)} className="my-2 text-xl flex items-center cursor-pointer gap-2">
          FILTERS <img className={`h-3 sm:hidden ${showFilter?'rotate-90':''}`} src={assets.dropdown_icon} alt="" />
        </p>
        {/* category filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : " "
          }`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col  gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Men"} onChange={toggleCategory}/>
              Men
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Women"} onChange={toggleCategory}/>
              Women
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Kids"} onChange={toggleCategory}/>
              Kids
            </p>
          </div>

          {/* subcategory */}
          

          
        </div>
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : " "
          }`}
        >
          {/* <p className="mb-3 my-5 text-sm font-medium">TYPE</p>
          <div className="flex flex-col  gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Topwear"} onChange={toggleSubCategory}/>
              Topwear
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Bottomwear"} onChange={toggleSubCategory}/>
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Winterwear"} onChange={toggleSubCategory}/>
              Winterewear
            </p>
          </div> */}

          {/* subcategory */}
          

          
        </div>
      </div>
      {/* right side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
<Title text1={"ALL"} text2={"COLLECTIONS"}/>
{/* product sort */}
 <select onChange={(e)=>setSorttype(e.target.value)} className="border-2 border-gray-300 text-sm px-2">
  <option value="relavent">Sort by: Relavent</option>
  <option value="low-high">Sort by: Low to High</option>
  <option value="high-low">Sort by: High to Low</option>
 </select>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
{
  filterProducts.map((item,index)=>(
    <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
  ))
}
        </div>
      </div>
    </div>
  );
};

export default Collection;
