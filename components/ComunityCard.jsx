import React from "react";
import { HiDotsVertical } from "react-icons/hi";
import { HiUsers } from "react-icons/hi";
export default function ComunityCard() {
  return (
    <>
      <div
        className=" m-6 md:m-0 bg-[#1E1F24] p-5   sm:grid grid-cols-12 gap-2 sm:gap-8 my-7 
         border-[1.5px] rounded-3xl  border-[#767676]  md:mr-16 "
      >
        <div className="hidden sm:block col-span-4 my-auto ">
          <img src="community_profile.png" alt="" />
        </div>
        <div className="  col-span-8 my-4">
          <div className=" mb-3">
            
            <div className=" flex justify-between   ">
              <div className="sm:hidden w-1/3  ">
                <img src="community_profile.png" alt="" />
              </div>


              
              <div className=" ml-6 sm:ml-0 flex w-full justify-between ">
              <p className=" text-[#00B2FF] font-bold text-3xl sm:text-4xl md:text-5xl my-auto">
                IEEE
              </p>
              <div className="hidden  sm:my-auto sm:flex">
                <div className=" my-auto">
                  <HiUsers color="white " fill="white" fontSize="20px" />
                </div>

                <p className=" text-white  text-lg font-medium ml-2">12k</p>
              </div>

              <p className=" text-white my-auto border-[#767676]  border-[1.5px] rounded-3xl px-2 sm:px-3 text-sm sm:text-md ">
                follow +
              </p>

              <div className=" my-auto">
                <HiDotsVertical color="white" fontSize="25px" />
              </div>
              
              </div>
              
             
            </div>
            
            
            
            
            <div className=" flex mt-3">
              <p className=" text-[#828282] text-sm sm:text-md md:text-lg">
                Public
              </p>
              <div className=" flex my-auto sm:hidden">
                <div className=" my-auto ml-2">
                  <HiUsers color="white " fill="white" fontSize="15px" />
                </div>

                <p className=" text-white  text-sm font-medium ml-1">12k</p>
              </div>
            </div>
          </div>

          <p className=" text-white text-xs md:text-sm">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Officia nobis soluta
            quisquam aut temporibus reiciendis facilis ipsum voluptate rerum
            quis accusamus qui rem nulla nihil modi provident,
          </p>
        </div>
      </div>
    </>
  );
}
