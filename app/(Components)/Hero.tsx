"use client"
import { FC } from "react";
// import Slider from "react-slick";
import Image from "next/image";


    // const settings = {
    //   dots: true,
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 1,
    //   slidesToScroll: 1
    // };
const Hero:FC = () => {



return (
<div>
       
        {/* <Slider {...settings}> */}
         
         
        <div className="flex items-center justify-center">
  <Image src="/images/Hone-min.png" alt="Logo" width={1100} height={400} objectFit="fill" className=" hero" />
</div>
        
        {/* </Slider> */}
      </div>
)

}


export default Hero