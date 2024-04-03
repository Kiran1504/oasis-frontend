import React from 'react'
import { HiDotsVertical } from "react-icons/hi";
import { HiUsers } from "react-icons/hi";
export default function ComunityCard() {
  return (
    <>
      
          <div className=" bg-[#1E1F24] p-5   grid grid-cols-12 gap-4 my-7 
         border-[1.5px] rounded-3xl  border-[#767676]  mr-16 ">
            <div className=" col-span-3 my-auto ">
              <img src="community_profile.png" alt="" />
            </div>
            <div className="  col-span-9 my-4">
              <div className=" mb-3">
                <div className=" flex justify-between   ">
                  <p className=" text-[#00B2FF] font-bold text-5xl my-auto">
                    IEEE
                  </p>
                  <div className=" my-auto flex">
                    <div className=" my-auto">
                    <HiUsers  color="white " fill="white" fontSize="20px"/>
                    
                    </div>
                  
                  <p className=" text-white  text-lg font-medium ml-2">12k</p>
                  </div>
                
                  <p className=" text-white my-auto border-[#767676]  border-[1.5px] rounded-3xl px-3">follow +</p>
                  <div className=" my-auto">
                  <HiDotsVertical color="white" fontSize="25px" />
                  </div>
                </div>
                <p className=" text-[#828282]">Public</p>
              </div>

              <p className=" text-white text-sm">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem.
              </p>
            </div>
          </div>
        
    </>
  )
}
