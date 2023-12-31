
import { FC } from "react";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { PiTagChevronFill } from "react-icons/pi";


const Bar:FC = () => {
    


return (
<div>
{/* first sec */}
<div className="flex mt-12 items-center flex-col md:flex-row justify-center md:justify-between ml-4 mr-4 mb-4 ">

    <div className="mb-4 flex gap-1">
        <h1 className="text-xl font-semibold text-green-600">New </h1>
        <h1 className="text-xl font-semibold text-green-600">Arrival</h1>

    </div>

  
    <div className="flex  flex-col md:flex-row gap-2 w-full justify-center md:justify-end">
     
        <button className="bg-green-500 text-sm  text-white px-4 py-2 rounded-md transition duration-300 hover:bg-green-600">
          All
        </button>

     
        <button className="bg-gray-500 text-sm text-black px-4 py-2 rounded-md transition duration-300 hover:bg-green-600 hover:text-white">
           Mobiles
        </button>
        <button className="bg-gray-500 text-sm text-black px-4 py-2 rounded-md transition duration-300 hover:bg-green-600 hover:text-white">
           Laptops
        </button>
        <button className="bg-gray-500 text-sm text-black px-4 py-2 rounded-md transition duration-300 hover:bg-green-600 hover:text-white">
           Watches
        </button>
        <button className="bg-gray-500 text-sm text-black px-4 py-2 rounded-md transition duration-300 hover:bg-green-600 hover:text-white">
           Accessories
        </button>
        <button className= " text-sm bg-gray-500 text-black px-4 py-2 rounded-md transition duration-300 hover:bg-green-600 hover:text-white">
           Tablets
        </button>
    </div>
</div>
{/* 
second sec */}
<div className="flex justify-center items-center gap-4 ml-2 mr-2 flex-col md:flex-row p-4">

<div className="max-w-md bg-gray-100 p-4 rounded-md shadow-md border border-gray-300 ">
  <div className="flex justify-between mb-2">
  <span className=" text-red-500 cursor-pointer ">
      <FaHeart />
      </span>
      <span className=" text-blue-500 cursor-pointer  ">
      <PiTagChevronFill />
      </span>
  </div>
  <div className="flex justify-center items-center bg-gray-200  rounded-md mb-4">
    <div className=" bg-gray-300 cursor-pointer">
    <Image src="/images/tasbeh.jpg" alt="Logo" width={200} height={100} />


    </div>
  </div>
  <p className="text-start text-sm "> Brand New</p>
  <h2 className="text-start mb-2 font-bold text-sm">Tasbeeh E Fatima (RA)</h2>
  <h3 className="text-start mb-2 font-bold">PKR 000</h3>
  <button className="w-full bg-green-500 text-white py-2 rounded-md">
    Add to Cart
  </button>
</div>

<div className="max-w-md bg-gray-100 p-4 rounded-md shadow-md border border-gray-300 ">
  <div className="flex justify-between mb-2">
  <span className=" text-red-500 cursor-pointer ">
      <FaHeart />
      </span>
      <span className=" text-blue-500 cursor-pointer  ">
      <PiTagChevronFill />
      </span>
  </div>
  <div className="flex justify-center items-center bg-gray-200  rounded-md mb-4">
    <div className=" bg-gray-300 cursor-pointer">
    <Image src="/images/tasbeh.jpg" alt="Logo" width={200} height={100} />


    </div>
  </div>
  <p className="text-start text-sm ">Brand New</p>
  <h2 className="text-start mb-2 font-bold text-sm">Tasbeeh E Fatima (RA)</h2>
  <h3 className="text-start mb-2 font-bold">PKR 000</h3>
  <button className="w-full bg-green-500 text-white py-2 rounded-md">
    Add to Cart
  </button>
</div>

<div className="max-w-md bg-gray-100 p-4 rounded-md shadow-md border border-gray-300 ">
  <div className="flex justify-between mb-2">
  <span className=" text-red-500 cursor-pointer ">
      <FaHeart />
      </span>
      <span className=" text-blue-500 cursor-pointer  ">
      <PiTagChevronFill />
      </span>
  </div>
  <div className="flex justify-center items-center bg-gray-200  rounded-md mb-4">
    <div className=" bg-gray-300 cursor-pointer">
    <Image src="/images/tasbeh.jpg" alt="Logo" width={200} height={100} />


    </div>
  </div>
  <p className="text-start text-sm "> Brand New</p>
  <h2 className="text-start mb-2 font-bold text-sm">Tasbeeh E Fatima (RA)</h2>
  <h3 className="text-start mb-2 font-bold">PKR 000</h3>
  <button className="w-full bg-green-500 text-white py-2 rounded-md">
    Add to Cart
  </button>
</div>

<div className="max-w-md bg-gray-100 p-4 rounded-md shadow-md border border-gray-300 ">
  <div className="flex justify-between mb-2">
  <span className=" text-red-500 cursor-pointer ">
      <FaHeart />
      </span>
      <span className=" text-blue-500 cursor-pointer  ">
      <PiTagChevronFill />
      </span>
  </div>
  <div className="flex justify-center items-center bg-gray-200  rounded-md mb-4">
    <div className=" bg-gray-300 cursor-pointer">
    <Image src="/images/tasbeh.jpg" alt="Logo" width={200} height={100} />


    </div>
  </div>
  <p className="text-start text-sm "> Brand New</p>
  <h2 className="text-start mb-2 font-bold text-sm">Tasbeeh E Fatima (RA)</h2>
  <h3 className="text-start mb-2 font-bold">PKR 000</h3>
  <button className="w-full bg-green-500 text-white py-2 rounded-md">
    Add to Cart
  </button>
</div> 

<div className="max-w-md bg-gray-100 p-4 rounded-md shadow-md border border-gray-300 ">
  <div className="flex justify-between mb-2">
  <span className=" text-red-500 cursor-pointer ">
      <FaHeart />
      </span>
      <span className=" text-blue-500 cursor-pointer  ">
      <PiTagChevronFill />
      </span>
  </div>
  <div className="flex justify-center items-center bg-gray-200  rounded-md mb-4">
    <div className=" bg-gray-300 cursor-pointer">
    <Image src="/images/tasbeh.jpg" alt="Logo" width={200} height={100} />


    </div>
  </div>
  <p className="text-start text-sm "> Brand New</p>
  <h2 className="text-start mb-2 font-bold text-sm">Tasbeeh E Fatima (RA)</h2>
  <h3 className="text-start mb-2 font-bold">PKR 000</h3>
  <button className="w-full bg-green-500 text-white py-2 rounded-md">
    Add to Cart
  </button>
</div>

<div className="max-w-md bg-gray-100 p-4 rounded-md shadow-md border border-gray-300 ">
  <div className="flex justify-between mb-2">
  <span className=" text-red-500 cursor-pointer ">
      <FaHeart />
      </span>
      <span className=" text-blue-500 cursor-pointer  ">
      <PiTagChevronFill />
      </span>
  </div>
  <div className="flex justify-center items-center bg-gray-200  rounded-md mb-4">
    <div className=" bg-gray-300 cursor-pointer">
    <Image src="/images/tasbeh.jpg" alt="Logo" width={200} height={100} />


    </div>
  </div>
  <p className="text-start text-sm ">Brand New</p>
  <h2 className="text-start mb-2 font-bold text-sm">Tasbeeh E Fatima (RA)</h2>
  <h3 className="text-start mb-2 font-bold">PKR 000</h3>
  <button className="w-full bg-green-500 text-white py-2 rounded-md">
    Add to Cart
  </button>
</div>

</div>

</div>
)

}


export default Bar