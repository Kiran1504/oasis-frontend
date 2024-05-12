"use client"
import Link from "next/link";
import { IoMdHome } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";
import { MdEvent } from "react-icons/md";
import Links from "./Links";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
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
                    .main-nav{
                        display:none;
                    }
                }
                @media only screen and (min-width: 510px){
                    .main-nav{
                        display:block;
                    }
                }
            `}
        </style>
            <div className="navbar h-full w-[15%] bg-black flex justify-center items-center outline-none">
                <div className="main-nav h-full w-[100%] bg-black flex flex-col py-[10px] ">
                    <div className="nav-head h-[80px] w-full bg-black flex justify-start items-center gap-[5px] px-[2vw]">
                        <img src="./image.png" alt="" className="h-[50px] w-[50px]" />
                        <h1 className="text-[30px] font-bold text-[#41a3ff]">OASIS</h1>
                    </div>
                    <div className="nav-top h-[25%] w-full bg--500 text-white flex flex-col justify-center items-start gap-[20px] px-[2vw] ">
                        {/* <IoMdHome size={25} /> */}
                        <Links title={
                            <div className="flex justify-center items-center gap-[5px]">
                                <IoMdHome size={25} />
                                <h1 className="font-semibold">Home</h1>
                            </div>
                        }/>
                        <Links title={
                            <div className="flex justify-center items-center gap-[5px]">
                                <IoMdPeople size={25} />
                                <h1 className="font-semibold">Community</h1>
                            </div>
                        }/>
                        <Links title={
                            <div className="flex justify-center items-center gap-[5px]">
                                <MdEvent size={25} />
                                <h1 className="font-semibold">Events</h1>
                            </div>
                        }/> 
                    </div>
                    <div className="nav-mid h-[35%] w-full flex flex-col justify-start items-start py-[10px] px-[20px] gap-[10px] bg--800 ">
                        <div className="heading-comms bg--600 flex justify-start items-center h-[20%] w-full px-[20px]">
                            <h1 className="text-[19px] font-light text-[#41a3ff]" >My Communities</h1>
                        </div>
                        <div className="comms-links w-full flex flex-col justify-center items-start gap-[20px] px-[20px] bg--600">
                            <div className="link flex justify-center items-center gap-[10px]">
                                <FaRegUserCircle size={25} color="white" />
                                <Link href="" className="text-[18px] text-white">
                                    <h1>GDU</h1>
                                    <h5 className="text-[13px]">26k followers</h5>
                                </Link>
                            </div>
                            <div className="link flex justify-center items-center gap-[10px]">
                                    <FaRegUserCircle size={25} color="white" />
                                <Link href="" className="text-[18px] text-white">
                                    <h1>Gamers</h1>
                                    <h5 className="text-[13px]">76k followers</h5>
                                </Link>
                            </div>
                            <div className="link flex justify-center items-center gap-[10px]">
                                <FaRegUserCircle size={25} color="white" />
                                <Link href="" className="text-[18px] text-white">
                                    <h1>CodeForces</h1>
                                    <h5 className="text-[13px]">126k followers</h5>
                                </Link>
                            </div> 
                        </div>
                    </div>
                    <div className="nav-bottom">
                    </div>
                </div>

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
 
export default Navbar;

