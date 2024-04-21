'use client'
import React, { useState } from "react";

const Form = () => {
  const [register, setRegister] = useState(true);
  const toggle = () => {
    setRegister(!register);
  };

  return (
    <form className="w-full sm:w-1/2 md:w-1/3 mx-auto border border-gray-300 mt-10 rounded-xl flex flex-col items-center bg-[#242425] px-8 pt-6 pb-8">
      <div className="mt-[-20px]">
        <img src="./image.png" alt="" className="h-[80px] w-[80px] mx-auto" />
      </div>
      {!register ? (
        <div>
          <div className="flex items-center mb-7 justify-center">
            <hr className="flex-grow border-white" />
            <span className="px-4 text-[#00B2FF] text-[30px]">LOGIN</span>
            <hr className="flex-grow border-white" />
          </div>
          <div className="mt-[30px] mb-7 w-full max-w-md">
            <input
              type="text"
              placeholder="Username/Email"
              className="w-full sm:w-400 border bg-[#242425] rounded-full pb-4 pt-4 pl-[30px]"
            />
          </div>

          <div className="mt-[40px] mb-7 w-full max-w-md">
            <input
              type="password"
              placeholder="Password"
              className="w-full sm:w-400 border bg-[#242425] rounded-full pb-4 py-4 pl-[30px]"
            />
          </div>

          <div className=" mb-[10px] mt-[40px] w-full max-w-md">
            <button className="bg-[#00B2FF] w-full hover:bg-blue-500 text-white font-bold py-4 px-20 rounded-full ">
              SUBMIT
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex items-center mb-7 justify-center">
            <hr className="flex-grow border-white" />
            <span className="px-4 text-[#00B2FF] text-[30px]">REGISTER</span>
            <hr className="flex-grow border-white" />
          </div>
          <div className="mt-[30px] mb-7 w-full max-w-md">
            <input
              type="text"
              placeholder="Username"
              className="w-full sm:w-400 border bg-[#242425] rounded-full pb-3 pt-3 pl-5"
            />
          </div>

          <div className="mt-[30px] mb-7 w-full max-w-md">
            <input
              type="email"
              placeholder="Email"
              className="w-full sm:w-400 border bg-[#242425] rounded-full pb-3 pt-3 pl-5"
            />
          </div>

          <div className="mt-[30px] mb-7 w-full max-w-md">
            <input
              type="password"
              placeholder="Create Password"
              className="w-full sm:w-400 border bg-[#242425] rounded-full pb-3 pt-3 pl-5"
            />
          </div>

          <div className="mt-[30px] mb-7 w-full max-w-md">
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full sm:w-400 border bg-[#242425] rounded-full pb-3 pt-3 pl-5"
            />
          </div>

          <div className=" mb-[10px] mt-[40px] w-full max-w-md">
            <button className="bg-[#00B2FF] w-full hover:bg-blue-500 text-white font-bold py-4 px-20 rounded-full ">
              SUBMIT
            </button>
          </div>
        </div>
      )}

      <div className="mt-[20px] mb-0 flex justify-center">
        {!register ? (
          <p className="text-gray-400 mr-0">Don't have an account?</p>
        ) : (
          <p className="text-gray-400 mr-0">Already have an account?</p>
        )}
        {!register ? (
          <p onClick={toggle} className="text-[#00B2FF] cursor-pointer ml-0">
            Register
          </p>
        ) : (
          <p onClick={toggle} className="text-[#00B2FF] cursor-pointer ml-0">
            Login
          </p>
        )}
      </div>
    </form>
  );
};

export default Form;
