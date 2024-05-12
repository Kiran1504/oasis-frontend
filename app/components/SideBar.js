'use client'
import React, { useContext, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { categories } from "./Constants";
import LeftNavMenuItem from "./LeftNavItem";
import { Context } from "./Context";
import Link from "next/link";
import Avatar from "react-avatar";

//token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwidXNlcm5hbWUiOiJBZGl0eWExMSIsImVtYWlsIjoiYWRpdHlhMTFAZ21haWwuY29tIiwiaWF0IjoxNzE1MTUyOTM4fQ.NOHvAcMBtilq6_-s1b0MgFVJyjj1oPy6iZlB1J_W2aQ"
function SideBar() {
  const { mobileMenu ,navBarData} = useContext(Context);
  const router = useRouter();
  const pathname = usePathname();

  const clickHandle = (name, type) => {
    switch (type) {
      case "category":
      case "home":
        router.push("/");
        break;
      case "menu":
        return false;
      default:
        break;
    }
  };
  useEffect(() => {
    const url = pathname
  })
  return (
    <div
      className={`md:block w-full overflow-y-auto h-screen py-4 border-r text-white border-slate-700 bg-black absolute md:relative z-10 hide translate-x-[-240px] md:translate-x-0 transition-all ${
        mobileMenu ? "translate-x-[0px]" : ""
      }`}
    >
      <div className="flex px-5 flex-col">
        {categories.map((menu, index) => (
                <Link href={menu.path} key={index}>
                <li
                    className={`text-sm cursor-pointer h-10 flex items-center px-3 mb-[4px] rounded-lg hover:bg-[#4B84FF]/[0.45] hover:bg-[#4B84FF][0.45
                            ${menu.gap ? 'mt-9' : 'mt-1'} ${
                    pathname === menu.path &&
                    'bg-[#4B84FF]/[0.45]'  
                    }`}
                >
                    <span className='text-xl mr-5'>{menu.src}</span>
                    <span
                    className='origin-left duration-300 hover:block'
                    >
                    {menu.title}
                    </span>
                </li>
                </Link>
            ))}
          <div className="h-full">  
          <div className="heading-comms bg--600 flex justify-start items-center h-[20%] w-full pr-[20px] py-2 ">
                            <h1 className="text-[18px] font-light text-[#41a3ff]">My Communities</h1>
                        </div>
        {navBarData.subscribed_communities && navBarData.subscribed_communities.map((menu, index) => (
          <li key={index}
          className={`text-sm cursor-pointer h-14 flex items-center px-3 mb-3 rounded-lg hover:bg-[#4B84FF]/[0.45] hover:bg-[#4B84FF][0.45]`}>
          <Avatar src={menu.community.image} size={25} round={true} />
          <span
          className='origin-left duration-300 hover:block pl-3'
          >
          <h1 className="text-[18px] font-light text-[#41a3ff]" >{menu.community.name}</h1>
          <h5 className="text-[13px]">{menu.community.no_of_subscribers}</h5>
          </span>
      </li>
        ))}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
