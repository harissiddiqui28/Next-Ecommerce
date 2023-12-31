
import { FC } from "react";
import Image from "next/image";
import Warranty from "./TextOne";



const Condition:FC = () => {
    


return (
<>
<div className="  flex  justify-between items-center flex-col md:flex-row mt-10 p-4">

      <h1 className="mt-5 font-bold text-xl text-center md:text-start">Hey, Condition Explained by,<br /> Wisemarket </h1>
      <div className="flex flex-col md:flex-row items-center">
      <div className="rounded-full h-40 w-40    p-4">
     
     < Image src="/images/iphone.jpg" alt="roundpic" width={200} height={10} className="w-32 h-32 rounded-full  border-gray-600 border hover:border-green-500 cursor-pointer transition duration-300 " 
       
       />

   <p className="text-center text-sm mt-2 hover:text-green-800 cursor-pointer transition duration-300">Mobile</p>
   </div>

   <div className="rounded-full h-40 w-40   p-4">
     
     < Image src="/images/iphone.jpg" alt="roundpic" width={200} height={10} className="w-32 h-32 rounded-full  border-gray-600 border hover:border-green-500 cursor-pointer transition duration-300 " 
       
       />

   <p className="text-center text-sm mt-2 hover:text-green-800 cursor-pointer transition duration-300">Mobile</p>
   </div>

   <div className="rounded-full h-40 w-40    p-4">
     
     < Image src="/images/iphone.jpg" alt="roundpic" width={200} height={10} className="w-32 h-32 rounded-full  border-gray-600 border hover:border-green-500 cursor-pointer transition duration-300 " 
       
       />

   <p className="text-center text-sm mt-2 hover:text-green-800 cursor-pointer transition duration-300">Mobile</p>
   </div>

   <div className="rounded-full h-40 w-40  p-4">
     
     < Image src="/images/iphone.jpg" alt="roundpic" width={200} height={10} className="w-32 h-32 rounded-full  border-gray-600 border hover:border-green-500 cursor-pointer transition duration-300 " 
       
       />

   <p className="text-center text-sm mt-2 hover:text-green-800 cursor-pointer transition duration-300">Mobile</p>
   </div>

   <div className="rounded-full h-40 w-40    p-4">
     
     < Image src="/images/iphone.jpg" alt="roundpic" width={200} height={10} className="w-32 h-32 rounded-full  border-gray-600 border hover:border-green-500 cursor-pointer transition duration-300 " 
       
       />

   <p className="text-center text-sm mt-2 hover:text-green-800 cursor-pointer transition duration-300">Mobile</p>
   </div>
        
        </div>  
  





   </div>



<h2 className="ml-16 mt-5 text-xl text-center md:text-start">Wisemarket Assured</h2>

<div className="flex justify-center  flex-col md:flex-row gap-2 mb-4">

<div className="max-w-sm mx-auto bg-green-200 rounded-xl overflow-hidden shadow-md">
  
      <div className="px-6 py-4">
        <div className="font-bold text-lg mb-2">
12 Months Free Warranty</div>
        <p className="text-gray-700 text-sm">
        Only for brands new mobile phones
        </p>
      </div>


      
    </div>

    <div className="max-w-sm mx-auto bg-green-200 rounded-xl overflow-hidden shadow-md">
      <div className="px-6 py-4">
        <div className="font-bold text-lg mb-2">
12 Months Free Warranty</div>
        <p className="text-gray-700 text-sm">
        Only for brands new mobile phones
        </p>
      </div>


      
    </div>

    <div className="max-w-sm mx-auto bg-green-200 rounded-xl overflow-hidden shadow-md">
      <div className="px-6 py-4">
        <div className="font-bold text-lg mb-2">
12 Months Free Warranty</div>
        <p className="text-gray-700 text-sm">
        Only for brands new mobile phones
        </p>
      </div>
    </div>

    <div className="max-w-sm mx-auto bg-green-200 rounded-xl overflow-hidden shadow-md">
      <div className="px-6 py-4">
        <div className="font-bold text-lg mb-2">
12 Months Free Warranty</div>
        <p className="text-gray-700 text-sm">
        Only for brands new mobile phones
        </p>
      </div>


      
    </div>



</div>

<Warranty/>
</>
)

}


export default Condition