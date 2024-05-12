"use client"


import axios from "axios";
import BannerPic from "@/components/BannerPic";
import ProfilePic from "@/components/ProfilePic";
import Image from "next/image";
import React, { useState} from "react";
import { BiSolidSend } from "react-icons/bi";

export default function page() {

  

  const [BannerImage, setBannerImage] = useState(null);
  
  const [ProfileImage, setProfileImage] = useState(null);

  const [name,SetName]=useState("");
  const [description,setDescription]=useState("");
  const [Visibilty,setVisibilty]=useState("");


  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJ0ZXN0MSIsImVtYWlsIjoia2lyYUBnbWFpbC5jb20iLCJpYXQiOjE3MTQyOTkwMDF9.1ZuTu6j00mouWxrPwrWR8u3Fn9RmLwuqeRE_gBJrR24";
      const response = await axios.post(
        "http://localhost:4000/api/community/create",
        {
          name,
          description,
          type:Visibilty, 
          banner: BannerImage,
          icon: ProfileImage
        },
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type':'multipart/form-data'
          }
        }
      );
      console.log("Data posted successfully:", response.data);
      
     
    } catch (error) {
      console.error("Error posting data:", error);
    }

    console.log({
          name,
          description,
          Visibilty,
          bannerImage: BannerImage,
          profileImage: ProfileImage
    })
  };

   
  
  return (
    <>
      <p className=" text-4xl font-semibold text-[#00B2FF] px-11 my-7">
        Create Community
      </p>
    <form onSubmit={handleSubmit}>
    <div className=" my-7 w-1/2 p-11">
        <div>
          <div className="  relative mb-10">
          <BannerPic BannerImage={BannerImage} setBannerImage={setBannerImage} />

            <ProfilePic ProfileImage={ProfileImage} setProfileImage={setProfileImage}/>
          </div>
   
   

          <div>
            <input
              type="text"
              placeholder="Name"
              className=" bg-[#27292f] p-2 rounded-lg my-4 mt-7 w-full text-white "
              onChange={(e)=>SetName(e.target.value)}
            />
            <textarea
              placeholder="Description..."
              className="bg-[#27292f] p-2 rounded-lg my-4 w-full text-white "
              onChange={(e)=>setDescription(e.target.value)}
            ></textarea>
            <select
              name=""
              id=""
              className="bg-[#27292f] p-2 rounded-lg my-4 w-1/3 text-white"
              onChange={(e)=>setVisibilty(e.target.value)}
            >
              <option value="" disabled selected hidden>
                Visibilty
              </option>
              <option value="NSFW">NSFW</option>
              <option value="PUBLIC">Public</option>
            </select>
            <button className=" flex  text-white border-[1px] border-[#767676] p-2 rounded-xl px-4 my-2" type="submit">
              <p className=" ">Create </p>
              <BiSolidSend className=" ml-2 my-auto" size={25} />
            </button>
          </div>
        </div>
      </div>
    </form>
    
      
    </>
  );
}
