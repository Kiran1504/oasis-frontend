"use client"
import { useCallback, useState } from "react";
import { useDropzone } from 'react-dropzone';
export default function ProfilePic({ProfileImage,setProfileImage}) {

    const [displayProfile,setdisplayProfile]=useState()
    const onDrop = useCallback(async (acceptedFiles) => {
        const file = acceptedFiles[0];
        setProfileImage(file);
        
        const reader = new FileReader();
    
        reader.onload = () => {
          setdisplayProfile(reader.result);
        }
    
        reader.readAsDataURL(file);
    
      }, [ProfileImage]);
    
      const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <>
    <section {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        {displayProfile? (
         
          <div className=" flex justify-center cursor-pointer">
          <img
            src={displayProfile.toString()}
            alt=""
            className=" rounded-full  w-36  z-20 absolute mt-[-13%] h-36   "
          />
        </div>
        ) : (
            <div className=" flex justify-center cursor-pointer">
            <img
              src="/community_profile.png"
              alt=""
              className=" rounded-full  w-36
               h-36  z-20 absolute mt-[-13%]    "
            />
          </div>
        )}
      </section>
    </>
  )
}
