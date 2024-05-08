'use client'
import {useState,useContext  } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../../public/image.png";
import Link from "next/link";
import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import { Context } from "./Context";
import { UserNav } from "./user-nav";
import { Search } from "./search";


const NavBar = () => {
  const router = useRouter();
  const { loading, mobileMenu, setMobileMenu } = useContext(Context);

  const mobileMenuToggle = () => {
    setMobileMenu(!mobileMenu);
  };

  const pageName = router.pathname?.split("/")?.filter(Boolean)?.[0];

  return (
    <nav className="bg-black p-4 border-b border-slate-700 h-[64px]">

      <div className="flex h-5 items-center">
          <div
            className="flex md:hidden md:mr-6 mr-4 cursor-pointer items-center justify-center h-[45px] w-[45px] hover:bg-[#8888]/[0.6]"
            onClick={mobileMenuToggle}
          >
            {mobileMenu ? (
              <CgClose className="text-white text-xl" />
            ) : (
              <SlMenu className="text-white text-xl" />
            )}
          </div>
        <Link href="/" className="flex items-center pt-3">
          <Image src={logo} alt='' className='pl-2 h-[45px] w-[45px]' />
          <h1 className=" font-semibold text-[30px] text-[#4B84FF]">OASIS</h1>
          
        </Link>
        <div className='container flex gap-5 justify-end pr-[10px] pt-3'>
            <Search />
            <UserNav />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
