import React from "react";
import ComunityCard from "@/components/ComunityCard";
import ResponsiveNav from "../components/navbar/ResponsiveNav";

function page() {
  return (
    <>
      <div className=" bg-zinc-900 h-[90px] p-5  mb-5 sticky top-0 flex justify-start items-center">
        <p className="text-[#00B2FF] text-3xl font-semibold">Communities</p>
      </div>
      <div className=" md:grid grid-cols-10 gap-10 md:ml-20 ">
        <div className=" col-span-7">
          <ComunityCard />
          <ComunityCard />
          <ComunityCard />
          <ComunityCard />
        </div>

        <div className=" hidden md:block md:w-1/2">
          <p className=" text-white text-5xl  my-7">Filter Card</p>
        </div>
      </div>
    </>
  );
}

export default page;
