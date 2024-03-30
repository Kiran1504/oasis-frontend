import Link from "next/link";
import { IoMdHome } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";
import { MdEvent } from "react-icons/md";
import Links from "./Links";
const Navbar = () => {
    return ( 
        <>
            <div className="navbar h-full w-[18%] bg-black flex flex-col py-[10px]">
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
        </>
     );
}
 
export default Navbar;