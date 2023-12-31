
import { FC } from "react";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { PiTagChevronFill } from "react-icons/pi";

const Recent:FC = () => {
    


return (
    <div>
<h1 className="text-xl mt-6 ml-8 font-bold text-center md:text-start mb-4">Recent Products</h1>


<div className="flex justify-center items-center  gap-4 ml-2 mr-2 flex-col md:flex-row p-4">

  <div className=" bg-gray-100 p-4 rounded-md shadow-md border border-gray-300 ">
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
      <Image src="/images/clock.jpg" alt="Logo" width={200} height={100} />


      </div>
    </div>
    <p className="text-start text-sm ">Silver</p>
    <h2 className="text-start mb-2 font-bold">Roman Clock</h2>
    <h3 className="text-start mb-2 font-bold">PKR 000</h3>
    <button className="w-full bg-green-500 text-white py-2 rounded-md">
      Add to Cart
    </button>
  </div>

  <div className=" bg-gray-100 p-4 rounded-md shadow-md border border-gray-300 ">
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
      <Image src="/images/clock.jpg" alt="Logo" width={200} height={100} />


      </div>
    </div>
    <p className="text-start text-sm ">Silver</p>
    <h2 className="text-start mb-2 font-bold">Roman Clock</h2>
    <h3 className="text-start mb-2 font-bold">PKR 000</h3>
    <button className="w-full bg-green-500 text-white py-2 rounded-md">
      Add to Cart
    </button>
  </div>


  <div className=" bg-gray-100 p-4 rounded-md shadow-md border border-gray-300 ">
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
      <Image src="/images/clock.jpg" alt="Logo" width={200} height={100} />


      </div>
    </div>
    <p className="text-start text-sm ">Silver</p>
    <h2 className="text-start mb-2 font-bold">Roman Clock</h2>
    <h3 className="text-start mb-2 font-bold">PKR 000</h3>
    <button className="w-full bg-green-500 text-white py-2 rounded-md">
      Add to Cart
    </button>
  </div>


  <div className=" bg-gray-100 p-4 rounded-md shadow-md border border-gray-300 ">
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
      <Image src="/images/clock.jpg" alt="Logo" width={200} height={100} />


      </div>
    </div>
    <p className="text-start text-sm ">Silver</p>
    <h2 className="text-start mb-2 font-bold">Roman Clock</h2>
    <h3 className="text-start mb-2 font-bold">PKR 000</h3>
    <button className="w-full bg-green-500 text-white py-2 rounded-md">
      Add to Cart
    </button>
  </div>

  <div className=" bg-gray-100 p-4 rounded-md shadow-md border border-gray-300 ">
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
      <Image src="/images/clock.jpg" alt="Logo" width={200} height={100} />


      </div>
    </div>
    <p className="text-start text-sm ">Silver</p>
    <h2 className="text-start mb-2 font-bold">Roman Clock</h2>
    <h3 className="text-start mb-2 font-bold">PKR 000</h3>
    <button className="w-full bg-green-500 text-white py-2 rounded-md">
      Add to Cart
    </button>
  </div>

  <div className=" bg-gray-100 p-4 rounded-md shadow-md border border-gray-300 ">
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
      <Image src="/images/clock.jpg" alt="Logo" width={200} height={100} />


      </div>
    </div>
    <p className="text-start text-sm ">Silver</p>
    <h2 className="text-start mb-2 font-bold">Roman Clock</h2>
    <h3 className="text-start mb-2 font-bold">PKR 000</h3>
    <button className="w-full bg-green-500 text-white py-2 rounded-md">
      Add to Cart
    </button>
  </div>

</div>

    </div>

)

}


export default Recent