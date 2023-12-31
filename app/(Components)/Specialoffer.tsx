
import { FC } from "react";
import Image from "next/image";



const Special:FC = () => {
    


return (


    <div>
        {/* first section */}
<div className="flex items-center flex-col p-4 md:flex-row text-center justify-around">

<div>
<h1 className="text-lg font-bold">
Special Offers
</h1>
<p className="text-sm">
Wisemarket Find Best Of The Best Phones For You Only
</p>
    
</div>


<div className="flex items-center">

    <span>
    <p className="text-sm">ON EVERY PURCHASE</p>
    <h1 className="text-lg font-bold">+ EARN REWARD POINTS</h1>
    </span>

    
 
<div>
<Image
  width={100}
  height={100}
src="/images/gift.jpg"
alt="Image"
className="cursor-pointer"
/>
</div>

</div>

</div>
{/* second section */}

<div className="flex justify-center gap-4 flex-col md:flex-row ml-2 mr-2">
<div>
<Image
  width={400}
  height={200}
src="/images/offer.png"
alt="Image"
className="cursor-pointer"
/>
</div>
<div>
<Image
  width={400}
  height={200}
src="/images/offer.png"
alt="Image"
className="cursor-pointer"
/>
</div>
<div>
<Image
  width={400}
  height={200}
src="/images/offer.png"
alt="Image"
className="cursor-pointer"
/>
</div>
<div>
<Image
  width={400}
  height={200}
src="/images/offer.png"
alt="Image"
className="cursor-pointer"
/>
</div>
</div>
    </div>



)

}


export default Special