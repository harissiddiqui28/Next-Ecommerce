"use client"
import { FC } from "react";
import Image from "next/image";
import { IoCartOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { GoLaw } from "react-icons/go";
import { FaShieldAlt } from "react-icons/fa";
import Warranty from "./TextOne";
import Footer from "./Footer";
import Special from "./Specialoffer";


const Product:FC = () => {



return (
<div>
<div className="flex md:justify-around  justify-center flex-col md:flex-row tems-center gap-8 mt-4">

    <div className="flex items-center justify-center cursor-pointer">
        <Image src="/images/phone.webp" height={500} width={300} alt="iPhone Image" className="max-w-full max-h-full" />
    </div>

    <div className="flex flex-col gap-4 items-center md:items-start ">
        <h1 className="text-2xl font-bold">Apple iPhone 13</h1>
        <p className="text-gray-500">0 Reviews | Hot selling! only 1 left</p>
        <h2 className="text-3xl text-green-600 font-bold">PKR 286399</h2>
        <p className="text-gray-500">PKR 288399</p>
        <p className="text-gray-500">Color: Starlight</p>

        <div className="flex gap-2">
           
            <div className="relative w-12 h-12">
            <Image src="/images/phone.webp"  height={100} width={100} alt="iPhone Image" className="w-full cursor-pointer h-full rounded-full border border-gray-300 transition duration-300 hover:border-green-500"  />
            </div>
            <div className="relative w-12 h-12">
            <Image src="/images/phone.webp"  height={100} width={100} alt="iPhone Image" className="w-full cursor-pointer h-full rounded-full border border-gray-300 transition duration-300 hover:border-green-500"  />
            </div>
            <div className="relative w-12 h-12">
            <Image src="/images/phone.webp"  height={100} width={100} alt="iPhone Image" className="w-full cursor-pointer h-full rounded-full border border-gray-300 transition duration-300 hover:border-green-500"  />
            </div>
            <div className="relative w-12 h-12">
            <Image src="/images/phone.webp"  height={100} width={100} alt="iPhone Image" className="w-full cursor-pointer h-full rounded-full border border-gray-300 transition duration-300 hover:border-green-500"  />
            </div>
            <div className="relative w-12 h-12">
            <Image src="/images/phone.webp"  height={100} width={100} alt="iPhone Image" className="w-full cursor-pointer h-full rounded-full border border-gray-300 transition duration-300 hover:border-green-500"  />
            </div>
          
      
        </div>

        <p className="text-gray-500">Storage: 128GB</p>

  
        <div className="flex  justify-center flex-col md:flex-row">
           <div className="gap-4">
           <button className="bg-gray-300 text-black px-4 py-2 rounded  border ">128GB</button>
            <button className="bg-green-600 text-white px-4 py-2 rounded6 border ">128GB</button>
           </div>
           <div className="gap-4">
           <button className="bg-green-600 text-white px-4 py-2 rounded border ">128GB</button>
            <button className="bg-gray-300 text-black px-4 py-2 rounded  border ">128GB</button>
           </div>
            
           

        </div>

        <p className="text-gray-500">Condition: Excellent</p>

     
        <div className="flex   justify-center flex-col md:flex-row">

         <div>
         <button className="bg-gray-300 text-black px-4 py-2 rounded border ">Brand New</button>
            <button className="bg-green-600 text-white px-4 py-2 rounded border ">Brand New</button>
         </div>
            <button className="bg-gray-300 text-black px-4 py-2 rounded border ">Brand New</button>
           
        </div>

        <div className="flex gap-4 mt-4 flex-col md:flex-row">
          
            <button className="bg-black text-white px-6 py-2 rounded border flex gap-1 items-center"> <span> <IoCartOutline /></span> Buy Now</button>
            <button className="bg-green-600 text-white px-6 py-2 rounded border  flex gap-1 items-center"> <span> <IoCartOutline   /></span>Add To Cart</button>
            <div className="flex justify-center">
            <span className=" text-green-600 px-4 py-4 rounded border items-center"><FaHeart /></span>
            <span className=" text-green-600 px-4 py-4 rounded border items-center"><GoLaw /></span>
            </div>
            
            </div>

            <div> 
            <p className="text-gray-500 text-sm font-bold flex gap-1 items-center justify-center md:justify-start mb-2"> <FaShieldAlt />100% Secure Payments</p>

            <div className="flex gap-4 mb-2 justify-center md:justify-start">
           
           <div className="relative w-12 h-12">
           <Image src="/images/visa.png"  height={100} width={100} alt="iPhone Image" className="w-full cursor-pointer h-full "  />
           </div>
           <div className="relative w-12 h-12">
           <Image src="/images/pay.png"  height={100} width={100} alt="iPhone Image" className="w-full cursor-pointer h-full "  />
           </div>
           <div className="relative w-12 h-12">
           <Image src="/images/icon.png"  height={100} width={100} alt="iPhone Image" className="w-full cursor-pointer h-full "  />
           </div>
          
          
         
     
       </div>
<div className="mb-4 flex justify-center md:justify-start flex-col">
<button className="bg-green-600 text-white px-6 py-2 mt-4 mb-4 rounded border  "> Affordable Installment Plans</button>

<h1 className="text-lg font-bold">Get it delivered by:</h1>
    <p className="text-sm ">Free Express Shipping (2-5 days)</p>
<p className="text-sm ">Pick your order from 40L Johar Town, Lahore
</p>
<p className="text-sm ">Express Shipping (2-5 days)
</p>


</div>



            </div>

     </div>

    </div>

    <h1 className="text-center md:text-start text-2xl p-2">Wisemarket Assured</h1>
    <Warranty/>
   <Special/>
    <Footer/>
</div>


  
)

}


export default Product