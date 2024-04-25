import { IoMdPeople } from "react-icons/io";

export default function Home() {
  return (
    <>
    <style>
            {`
                @media only screen and (max-width: 500px){
                    .search{
                        display:none;
                    }
                    .head-right{
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

      <div className="container h-screen w-full bg-black">
        <div className="header bg-green-60 h-[10%] w-full text-white flex justify-between items-end px-[3vw] z-[9999]">
          <div className="head-left">
            <h1 className="text-[25px] font-bold">Home</h1>
          </div>
          <div className="search h-[100%] w-[20vw] bg--500 flex justify-center items-end ">
                <input type="text" placeholder="Search" className="h-[40px] w-[100%] rounded-[50px] px-[20px] bg-transparent border-[1.5px] border-solid border-[#848484] text-white"/>
            </div>
          <div className="head-right">
              <h2>User_101</h2>
          </div>
        </div>
        {/* <div className="main-content h-[80%] w-[100%] bg--900 px-[] ">
          <div className="left-post relative h-[100%] w-[70%] bg-red-600 px-[]">

              
          </div>
          <div className="right-filters">

          </div>
        </div> */}
      </div>
    </>
  );
}
