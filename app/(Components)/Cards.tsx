"use client"
import { FC } from "react";
import React, { useState } from 'react';
import Image from "next/image";
import TextOne from "./TextOne";
import Product from "./Product";


const Cards:FC = () => {
  const [showPageTwo, setShowPageTwo] = useState(false);

  const handleImageClick = () => {
    setShowPageTwo(!showPageTwo);
  };


return (
<div>
       
<div className="p-8">
{/* first row */}

  <div className="flex gap-4 justify-center flex-col md:flex-row">
 
    <div className="custom-card bg-white cursor-pointer rounded-lg p-4 flex flex-col items-center justify-center">
    <div>
    <Image src="/images/app.png" alt="Image 1" 
       width={200} height={100}
       className="w-16 h-16 object-cover rounded-full mb-4"  onClick={handleImageClick}/>
        {showPageTwo && <Product/>}
    </div>
     
      <h1 className="text-lg font-bold">From PKR 000.0</h1>
    </div>


    <div className="custom-card bg-white  cursor-pointer rounded-lg p-4 flex flex-col items-center justify-center">
    <Image src="/images/app.png" alt="Image 1"  width={200} height={100} className="w-16 h-16 object-cover rounded-full mb-4"/>
      <h1 className="text-lg font-bold">From PKR 000.0</h1>
    </div>

  
    <div className="custom-card bg-white cursor-pointer  rounded-lg p-4 flex flex-col items-center justify-center">
    <Image src="/images/app.png" alt="Image 1"  width={200} height={100} className="w-16 h-16 object-cover rounded-full mb-4"/>
      <h1 className="text-lg font-bold">From PKR 000.0</h1>
    </div>

 
    <div className="custom-card bg-white cursor-pointer  rounded-lg p-4 flex flex-col items-center justify-center">
    <Image src="/images/app.png" alt="Image 1"  width={200} height={100} className="w-16 h-16 object-cover rounded-full mb-4"/>
      <h1 className="text-lg font-bold">From PKR 000.0</h1>
    </div>

 
    <div className="custom-card bg-white cursor-pointer  rounded-lg p-4 flex flex-col items-center justify-center">
    <Image src="/images/app.png" alt="Image 1"  width={200} height={100} className="w-16 h-16 object-cover rounded-full mb-4"/>
      <h1 className="text-lg font-bold">From PKR 000.0</h1>
    </div>

    <div className="custom-card bg-white cursor-pointer  rounded-lg p-4 flex flex-col items-center justify-center">
    <Image src="/images/app.png" alt="Image 1"  width={200} height={100} className="w-16 h-16 object-cover rounded-full mb-4"/>
      <h1 className="text-lg font-bold">From PKR 000.0</h1>
    </div>
  </div>


{/* second row  */}

<div className="flex gap-4 justify-center flex-col md:flex-row mt-4">

<div className="custom-card bg-white  cursor-pointer rounded-lg p-4 flex flex-col items-center justify-center">
  <Image src="/images/app.png" alt="Image 1"  width={200} height={100} className="w-16 h-16 object-cover rounded-full mb-4"/>
  <h1 className="text-lg font-bold">From PKR 000.0</h1>
</div>


<div className="custom-card bg-white cursor-pointer  rounded-lg p-4 flex flex-col items-center justify-center">
<Image src="/images/app.png" alt="Image 1"  width={200} height={100} className="w-16 h-16 object-cover rounded-full mb-4"/>
  <h1 className="text-lg font-bold">From PKR 000.0</h1>
</div>


<div className="custom-card bg-white cursor-pointer  rounded-lg p-4 flex flex-col items-center justify-center">
<Image src="/images/app.png" alt="Image 1"  width={200} height={100} className="w-16 h-16 object-cover rounded-full mb-4"/>
  <h1 className="text-lg font-bold">From PKR 000.0</h1>
</div>


<div className="custom-card bg-white cursor-pointer  rounded-lg p-4 flex flex-col items-center justify-center">
<Image src="/images/app.png" alt="Image 1"  width={200} height={100} className="w-16 h-16 object-cover rounded-full mb-4"/>
  <h1 className="text-lg font-bold">From PKR 000.0</h1>
</div>


<div className="custom-card bg-white   cursor-pointer rounded-lg p-4 flex flex-col items-center justify-center">
<Image src="/images/app.png" alt="Image 1"  width={200} height={100} className="w-16 h-16 object-cover rounded-full mb-4"/>
  <h1 className="text-lg font-bold">From PKR 000.0</h1>
</div>

<div className="custom-card bg-white cursor-pointer  rounded-lg p-4 flex flex-col items-center justify-center">
<Image src="/images/app.png" alt="Image 1"  width={200} height={100} className="w-16 h-16 object-cover rounded-full mb-4"/>
  <h1 className="text-lg font-bold">From PKR 000.0</h1>
</div>
</div>

</div>
         
       {/* text   */}
  
  <TextOne/>
        
     
      </div>
)

}


export default Cards