import React from "react";
// import  image from ".../"
const Form = () => {
  const register = false;  //change this to for swapping login<->register
  return (
    <form className="w-fit ml-10 mt-20 mb-20 rounded-xl flex flex-col items-center bg-[#1E1F24] px-8 pt-6 pb-8">
      {/* login page */}
      {!register && (
        <div>
          <div>
            <img
              src="./image.png"
              alt=""
              className="h-[50px] w-[50px] ml-[100px]"
            />
          </div>
           
            <div className="flex items-center mb-7 justify-center">
              <hr className="flex-grow border-white" />
              <span className="px-4 text-[#00B2FF]  font-bold">LOGIN</span>
              <hr className="flex-grow border-white" />
            </div>

            <div className="mb-7 ">
              <input
                type="text"
                placeholder="Username/Email"
                className="w-full border bg-[#1E1F24] rounded-full pb-3 pt-3 pl-5"
              ></input>
            </div>

            <div className="mb-7 ">
              <input
                type="password"
                placeholder="Password"
                className="w-full border bg-[#1E1F24] rounded-full pb-3 pt-3 pl-5"
              ></input>
            </div>

            <div className="mb-7 flex">
              <p className="text-gray-400">Don't have an account?</p>
              <p className="text-[#00B2FF] cursor-pointer"> Register</p>
            </div>
           
        </div>
      )}

      {/* for register page */}
      {register && (
        <div>
          <div>
            <img
              src="./image.png"
              alt=""
              className="h-[50px] w-[50px] ml-[90px]"
            />
          </div>
          <div className="flex items-center mb-7 file:justify-center">
            <hr className="flex-grow border-white" />
            <span className="px-4 text-[#00B2FF]  font-bold">REGISTER</span>
            <hr className="flex-grow border-white" />
          </div>
          <div className="mb-7">
            <input
              type="text"
              placeholder="Username"
              className="w-full border bg-[#1E1F24] rounded-full pb-3 pt-3 pl-5"
            />
          </div>

          <div className="mb-7">
            <input
              type="email"
              placeholder="Email"
              className="w-full border bg-[#1E1F24] rounded-full pb-3 pt-3 pl-5"
            />
          </div>

          <div className="mb-7">
            <input
              type="password"
              placeholder="Create Password"
              className="w-full border bg-[#1E1F24] rounded-full pb-3 pt-3 pl-5"
            />
          </div>

          <div className="mb-7">
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full border bg-[#1E1F24] rounded-full pb-3 pt-3 pl-5"
            />
          </div>
        </div>
      )}

      <div className="w-250px mb-7 ">
        <button className="bg-[#00B2FF] hover:bg-blue-500 text-white font-bold py-2 px-20 rounded-full ">
          SUBMIT
        </button>
      </div>
    </form>
  );
};

export default Form;