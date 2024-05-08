'use client'
import React, { useContext, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { categories } from "./Constants";
import LeftNavMenuItem from "./LeftNavItem";
import { Context } from "./Context";
import Link from "next/link";



function SideBar() {
  const { mobileMenu } = useContext(Context);
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
      className={`md:block w-[240px] overflow-y-auto h-full py-4 border-r text-white border-slate-700 bg-black absolute md:relative z-10 hide translate-x-[-240px] md:translate-x-0 transition-all ${
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
      </div>
    </div>
  );
}

export default SideBar;
