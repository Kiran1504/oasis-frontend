
import React from "react";

import { HiDotsVertical } from "react-icons/hi";
import { HiUsers } from "react-icons/hi";
export default function ComunityCard({
  key,
  name,
  description,
  followers,
  type,
  icon,
}) {
  return (
    <>
      <div className=" my-7" key={key}>
        <div
          className=" m-6  md:m-0 bg-[#1E1F24] p-5   sm:grid grid-cols-12 gap-2 sm:gap-8
         border-[1.5px] rounded-3xl  border-[#767676]  md:mr-16 "
        >
          <div className=" rounded-3xl hidden sm:block col-span-4 my-auto  overflow-hidden">
            <img src={icon} alt="" className=" " />
          </div>
          <div className="  col-span-8 my-4">
            <div className=" mb-3">
              <div className=" flex justify-between   ">
                <div className="  rounded-3xl sm:hidden w-1/3  overflow-hidden">
                  <img src={icon} alt="" className="" />
                </div>

                <div className=" ml-6 sm:ml-0 flex w-full justify-between ">
                  <p className=" text-[#00B2FF] font-bold text-xl sm:text-2xl md:text-3xl my-auto">
                    {name}
                  </p>
                  <div className="hidden  sm:my-auto sm:flex">
                    <div className=" my-auto">
                      <HiUsers color="white " fill="white" fontSize="20px" />
                    </div>

                    <p className=" text-white  text-lg font-medium ml-2">
                      {followers}
                    </p>
                  </div>

                  <p className=" text-white my-auto border-[#767676]  border-[1.5px] rounded-3xl font-semibold px-2 sm:px-3 text-sm sm:text-md ">
                    follow
                  </p>
                </div>
              </div>

              <div className=" flex mt-3">
                <p className=" text-[#828282] text-sm sm:text-md md:text-lg">
                  {type}
                </p>
                <div className=" flex my-auto sm:hidden">
                  <div className=" my-auto ml-2">
                    <HiUsers color="white " fill="white" fontSize="15px" />
                  </div>

                  <p className=" text-white  text-sm font-medium ml-1">
                    {followers}
                  </p>
                </div>
              </div>
            </div>

            <p className=" text-white text-xs md:text-sm">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
