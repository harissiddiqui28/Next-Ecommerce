"use client"
import { FC } from "react";

import Image from "next/image";
import Cards from "./Cards";
import Footer from "./Footer";


const PageOne:FC = () => {



return (
<div>
       
          
        <div className="flex items-center justify-center">
  <Image src="/images/mobile.png" alt="Logo" width={1100} height={400} objectFit="fill" className=" hero" />
</div>
        
     <Cards/>
     <Footer/>
      </div>
)

}


export default PageOne