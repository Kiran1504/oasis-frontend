import { IoMdPeople } from "react-icons/io";

export default function Home() {
  return (
    <>
      <div className="container bg--600 h-screen w-full bg-black">
        <div className="header bg-black h-[20%] w-full text-white flex justify-between items-center px-[3vw] z-[9999]">
          <div className="head-left">
            <h1 className="text-[25px] font-bold">Home</h1>
          </div>
          <div className="search h-[100%] w-[20vw] bg--500 flex justify-center items-center ">
                <input type="text" placeholder="Search" className="h-[40px] w-[100%] rounded-[50px] px-[20px] bg-transparent border-[1.5px] border-solid border-[#848484] text-white"/>
              </div>
          <div className="head-right">
              <h2>User_101</h2>
          </div>
        </div>
        <div className="main-content h-[80%] w-[100%] bg--900 px-[] ">
          <div className="left-post relative h-[100%] w-[70%] bg--600 px-[]">

              

              <div className="post-container h-[100%] w-full bg--500 grid-flow-col space-y-[6vw]  p-[2vw] overflow-y-scroll  scroll-smooth z-[2]">
                <div className="post h-[100%] w-[100%] border-blue-500 border-[2px] rounded-[30px] bg-[#0c0c0c] ">
                </div>
                <div className="post h-[100%] w-[100%] border-blue-500 border-[2px] rounded-[30px] ">
                </div>
                <div className="post h-[100%] w-[100%] border-blue-500 border-[2px] rounded-[30px] ">
                </div>
              </div>
          </div>
          <div className="right-filters">

          </div>
        </div>
      </div>
    </>
  );
}
