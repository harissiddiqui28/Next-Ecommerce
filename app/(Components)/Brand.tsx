
import { FC } from "react";
import Image from "next/image";



const Brand:FC = () => {
    


return (


    <div>
<h1 className="text-lg font-bold  mb-4 mt-4 text-center md:text-start" >Shop by favorite Brands</h1>
{/* second section */}

<div className="flex justify-center items-center gap-4 flex-col md:flex-row ml-2 mr-2">
<div>
<Image
  width={200}
  height={100}
src="/images/braand.png"
alt="Image"
className="cursor-pointer"
/>
</div>
<div>
<Image
  width={200}
  height={100}
src="/images/braand.png"
alt="Image"
className="cursor-pointer"
/>
</div>
<div>
<Image
  width={200}
  height={100}
src="/images/braand.png"
alt="Image"
className="cursor-pointer"
/>
</div>
<div>
<Image
  width={200}
  height={100}
src="/images/braand.png"
alt="Image"
className="cursor-pointer"
/>
</div>
<div>
<Image
  width={200}
  height={100}
src="/images/braand.png"
alt="Image"
className="cursor-pointer"
/>
</div>
<div>
<Image
  width={200}
  height={100}
src="/images/braand.png"
alt="Image"
className="cursor-pointer"
/>
</div>

</div>
    </div>



)

}


export default Brand