
import { FC } from "react";
import Image from "next/image";



const Banner:FC = () => {
    


return (
<div className="flex items-center justify-center mt-6 ">
  <Image src="/images/banner.png" alt="Logo" width={1100} height={500} objectFit="fill" className=" hero" />
</div>
)

}


export default Banner