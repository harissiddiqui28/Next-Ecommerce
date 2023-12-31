"use client"
import { FC } from "react";
import Image from "next/image";
import React, { useState } from 'react'
import PageOne from "./PageOne";

const Categories:FC = () => {
 
  const [showPageOne, setShowPageOne] = useState(false);

  const handleImageClick = () => {
    // Toggle the state to show/hide PageOne
    setShowPageOne(!showPageOne);
  };


return (


    <div>

<h1 className="text-xl mt-6 ml-8 font-bold">Explore Popular Categories</h1>

<div className="flex justify-center mt-4 flex-col md:flex-row">

  <div className=" p-4">
  <div className=" flex items-center justify-center flex-col">
  <div>
      {/* Image component with onClick event */}
      <Image
        width={120}
        height={120}
        src="/images/tablet.jpg"
        alt="Image"
        className="rounded-full border border-gray-500 cursor-pointer transition duration-300 hover:border-green-500"
        onClick={handleImageClick}
      />

      {/* Conditionally render PageOne based on the state */}
      {showPageOne && <PageOne/>}
    </div>
  <p className=" mt-2 text-lg text-gray-700 flex justify-center hover:text-green-500 cursor-pointer ">
    Tablet
  </p>
</div>


  </div>

  <div className=" p-4">
  <div className="relative flex items-center justify-center flex-col">
  <Image
     width={120}
     height={120}
    src="/images/one.jpg"
    alt="Image"
    className="rounded-full border border-gray-500 cursor-pointer transition duration-300 hover:border-green-500"
  />
  <p className=" mt-2 text-lg text-gray-700 flex justify-center hover:text-green-500 cursor-pointer ">
    Smart Watches
  </p>
</div>


  </div>

  <div className=" p-4">
  <div className="relative flex items-center justify-center flex-col">
  <Image
     width={120}
     height={120}
    src="/images/two.jpg"
    alt="Image"
    className="rounded-full border border-gray-500 cursor-pointer transition duration-300 hover:border-green-500"
  />
  <p className=" mt-2 text-lg text-gray-700 flex justify-center hover:text-green-500 cursor-pointer ">
  Accessories
  </p>
</div>


  </div>

  <div className=" p-4">
  <div className="relative flex items-center justify-center flex-col">
  <Image
    width={120}
    height={120}
    src="/images/three.jpg"
    alt="Image"
    className="rounded-full border border-gray-500 cursor-pointer transition duration-300 hover:border-green-500"
  />
  <p className=" mt-2 text-lg text-gray-700 flex justify-center hover:text-green-500 cursor-pointer ">
    Ear Buds
  </p>
</div>


  </div>

  <div className=" p-4">
  <div className="relative flex items-center justify-center flex-col">
  <Image
     width={120}
     height={120}
    src="/images/four.jpg"
    alt="Image"
    className=" rounded-full border border-gray-500 cursor-pointer transition duration-300 hover:border-green-500"
  />
  <p className="mt-2 text-lg text-gray-700 flex justify-center hover:text-green-500 cursor-pointer ">
    Mobile
  </p>
</div>


  </div>

  <div className=" p-4">
  <div className="relative flex items-center justify-center flex-col">
  <Image
     width={120}
     height={120}
    src="/images/five.jpg"
    alt="Image"
    className="rounded-full border border-gray-500 cursor-pointer transition duration-300 hover:border-green-500"
  />
  <p className=" mt-2 text-lg text-gray-700 flex justify-center hover:text-green-500 cursor-pointer ">
  Home
  </p>
</div>


  </div>

  <div className=" p-4">
  <div className="relative flex items-center justify-center flex-col">
  <Image
      width={120}
      height={120}
    src="/images/six.jpg"
    alt="Image"
    className="rounded-full border border-gray-500 cursor-pointer transition duration-300 hover:border-green-500"
  />
  <p className=" mt-2 text-lg text-gray-700 flex justify-center hover:text-green-500 cursor-pointer ">
    Gaming
  </p>
</div>


  </div>
  <div className=" p-4">
  <div className="relative flex items-center justify-center flex-col">
  <Image
    width={120}
    height={120}
    src="/images/seven.jpg"
    alt="Image"
    className="rounded-full border border-gray-500 cursor-pointer transition duration-300 hover:border-green-500"
  />
  <p className=" mt-2 text-lg text-gray-700 flex justify-center hover:text-green-500 cursor-pointer ">
    LapTop
  </p>
</div>


  </div>
 
 

 

</div>
    </div>




)

}


export default Categories