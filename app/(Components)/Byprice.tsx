
import { FC } from "react";

import Image from "next/image";


const Byprice:FC = () => {
    


return (

<div>
  {/* sec one  */}
<h1 className="text-xl font-bold ml-6 mb-6 mt-4 text-center md:text-start">Shop By Price</h1>

<div className="flex gap-3 flex-col md:flex-row justify-center">
     
   

     <button className="bg-blue-200 text-sm text-black px-4 py-2 rounded-md transition duration-300 hover:bg-green-600 hover:text-white">
        PKR 0 - PKR 25000
     </button>
     <button className="bg-blue-200 text-sm text-black px-4 py-2 rounded-md transition duration-300 hover:bg-green-600 hover:text-white">
     PKR 0 - PKR 25000
     </button>
     <button className="bg-blue-200 text-sm text-black px-4 py-2 rounded-md transition duration-300 hover:bg-green-600 hover:text-white">
     PKR 0 - PKR 25000
     </button>
     <button className="bg-blue-200 text-sm text-black px-4 py-2 rounded-md transition duration-300 hover:bg-green-600 hover:text-white">
     PKR 0 - PKR 25000
     </button>
     <button className= " text-sm bg-blue-200 text-black px-4 py-2 rounded-md transition duration-300 hover:bg-green-600 hover:text-white">
     PKR 0 - PKR 25000
     </button>
     <button className= " text-sm bg-blue-200 text-black px-4 py-2 rounded-md transition duration-300 hover:bg-green-600 hover:text-white">
     PKR 0 - PKR 25000
     </button>
     <button className= " text-sm bg-blue-200 text-black px-4 py-2 rounded-md transition duration-300 hover:bg-green-600 hover:text-white">
     PKR 0 - PKR 25000
     </button>
 </div>

{/* sec two */}

<div className="flex items-center justify-center mt-6 mb-6">
  <Image src="/images/bannertwo.jpeg" alt="Logo" width={1100} height={400} objectFit="fill" className=" hero" />
</div>
</div>




   
)

}


export default Byprice