"use client"
import Link from "next/link";
import { IoMdHome } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";
import { MdEvent } from "react-icons/md";
import Links from "./Links";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const ResponsiveNav = () => {
    const [nav, setNav] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };
    const handleInstructionsClick = () => {
        setIsModalOpen(true); // Open the modal when "Instructions" is clicked
    };
    return ( 
        <>
        <style>
            {`
                @media only screen and (max-width: 500px){
                    .navs{
                        display:block;
                    }
                }
            `}
        </style>
            <div className="navbar h-full w-[10%] bg-black flex justify-center items-center outline-none">

                {/* RESPONSIEV NAVBAR */}
                <div onClick={handleNav} className="sm:hidden h-full w-full flex justify-center items-start py-[37px] bg-red-00">
                    {!nav ? <AiOutlineClose size={25} color="white" /> : <AiOutlineMenu size={25} color="white" />}
                </div>

                <div
                    className={`${
                    !nav ? '' : 'hidden'
                    } fixed left-0 top-0 w-[60%] h-[100%] bg-zinc-900 z-[9999] translate-x-0 transition duration-300 `}
                >
                    <div className="nav-left h-[9%] w-full bg-purple-70 flex justify-start items-end px-[10px]">
                        <div onClick={handleNav} className="block md:hidden">
                            {!nav ? <AiOutlineClose size={25} color="white" /> : <AiOutlineMenu size={25} color="white" />}
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-start w-full gap-[40px] py-[25px] uppercase ">
                    <a href="/" className="p-4 border-b border-zinc-700 w-full text-white">
                        Home
                    </a>
                    <a href="/leaderboard" className="p-4 border-b border-zinc-700 w-full text-white">
                        Communities
                    </a>
                    <a href="/instruction" className="p-4 border-b border-zinc-700 w-full text-white">
                        Clubs
                    </a>
                    <a
                        onClick={() => handleLogout()}
                        className="p-4 border-b border-zinc-700 w-full text-white"
                    >
                        Logout
                    </a>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <InstructionModal
                // Pass props to the Modal component as needed
                onClose={() => setIsModalOpen(false)} // Close the modal when the "X" button is clicked
                />
            )}
        </>
     );
}
 
export default ResponsiveNav;