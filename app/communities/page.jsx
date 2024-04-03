import React from "react";
import ComunityCard from "@/components/ComunityCard";

function page() {
  return (
    <>
    <div className=" bg-[#1E1F24] p-5 border-[#767676] border-b-[1.5px] mb-5 sticky top-0" >
   <p className="text-[#00B2FF] text-3xl font-semibold">Communities</p>
    </div>
      <div className=" grid grid-cols-10 gap-10 ml-20 ">
      <div className=" col-span-7">
       <ComunityCard/>
       <ComunityCard/>
       <ComunityCard/>
       <ComunityCard/>
       </div>

        <div className=" w-1/2">
          <p className=" text-white text-5xl  my-7">Filter Card</p>
        </div>
      </div>
    </>
  );
}

export default page;
