"use client";
import React, { useState } from "react";

import { HiUsers } from "react-icons/hi";

export default function ComunityCard2({
  key,
  name,
  description,
  followers,
  type,
  icon,
}) {
  const [isfollowing, setIsFollowing] = useState(false);

  const handleFollowToggle = () => {
    setIsFollowing(!isfollowing);
  };

  return (
    <>
      <div className="my-7" key={key}>
        <div className="m-6 md:m-0 bg-[#1E1F24] p-5 border-[1.5px] rounded-3xl border-[#767676] md:mr-16">
          <div className="col-span-8 my-4">
            <div className="mb-3">
              <div className="flex justify-between">
                <div className="flex w-full sm:justify-between">
                  <div className="rounded-full my-auto overflow-hidden">
                    <img
                      src={icon}
                      alt=""
                      className="h-16 w-16 sm:h-32 sm:w-32 md:h-40 md:w-40"
                    />
                  </div>
                  <p className="text-[#00B2FF] font-bold text-lg sm:text-xl md:text-3xl my-auto  ml-2 sm:ml-3 ">
                    {name}
                  </p>
                  <div className="hidden sm:block sm:flex">
                    <p className="text-[#828282] text-sm md:text-lg md:text-xl my-auto">
                      {type}
                    </p>
                    <div className="flex my-auto ml-3">
                      <div className="my-auto">
                        <HiUsers
                          color="white"
                          fill="white"
                          fontSize="18px"
                        />
                      </div>
                      <p className="text-white text-sm font-medium ml-1">
                        {followers}
                      </p>
                    </div>
                  </div>

                  <p
                    className={`hidden sm:block text-white my-auto border-[#767676] border-[1.5px] rounded-2xl p-1 sm:font-semibold px-3 sm:px-6 text-xs sm:text-sm md:text-lg sm:mr-4 ml-1 cursor-pointer ${
                      isfollowing ? 'bg-[#00B2FF]' : ''
                    }`}
                    onClick={handleFollowToggle}
                  >
                    {isfollowing ? 'Following' : 'Follow'}
                  </p>
                </div>
              </div>

              <div className="flex mt-3 sm:hidden">
                <p className="text-[#828282] text-sm sm:text-sm md:text-lg my-auto">
                  {type}
                </p>
                <div className="flex my-auto">
                  <div className="my-auto ml-4">
                    <HiUsers color="white" fill="white" fontSize="15px" />
                  </div>
                  <p className="text-white text-xs font-medium ml-1 my-auto">
                    {followers}
                  </p>
                  <p className={`text-white my-auto border-[#767676] border-[1.5px] rounded-2xl p-[1.5px] text-xs px-4 ml-4 md:hidden  ${
                      isfollowing ? 'bg-[#00B2FF]' : ''
                    }` }
                    onClick={handleFollowToggle}>
                    {isfollowing ? 'Following' : 'Follow'}
                  </p>
                </div>
              </div>
            </div>
            <p className="text-white text-xs md:text-sm">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
