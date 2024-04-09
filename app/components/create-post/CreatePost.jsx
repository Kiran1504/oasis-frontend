"use client"

import axios from "axios";
import { useState, useEffect } from "react";

import TextFields from "./TextFields";
import UploadImage from "./UploadImage";
import Buttons from "./Buttons";

export default function CreatePost() {

    // State management of text input fields
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [words, setWords] = useState(0);
  
    // State management of image input field
    const [uploadedImage, setUploadedImage] = useState(null);
  
    // State management of the communities of the user
    const [communities, setCommunities] = useState([]);
    const [selectedCommunity, setSelectedCommunity] = useState('');
  
  
    // Final submit action of the user
  
    const handleSubmit = async () => {
  
      // Sending data as form-data to encode our image over the network call
      
      const formData = {
        title,
        text,
        uploadedImage,
        selectedCommunity: selectedCommunity
      }
  
      // Fetch the token of the user in const token
  
      //Send post request for creating the post
    
      try {
        const response = await axios.post('//api-end-point', formData, {
          headers: {
            // 'Authorization': token,
            // 'Content-Type': 'multipart/form-data'
          }
        })
  
        //navigate back to home page { useNavigate hook from react-router-dom } 
      }
      catch (error) {
        console.log("Error occured in creating post: ", error)
      }
    }
  
    // Fetch the communities of the user on mount
  
    useEffect(() => {
  
      const fetchCommunities = async () => {
        try {
  
          //Extract the user token from the cookie
  
          const response = await axios.get('//api-end-point', {
            headers: {
              // 'Authorization': token,
              // 'Content-Type': 'multipart/form-data'
            }
          });
  
          setCommunities(response.data.communities);
        }
        catch (error) {
          console.log("error occured while fetching user communities: ", error);
        }
      }
  
      fetchCommunities();
    }, [])
  
    return (
      <div className="m-4 p-4 bg-gray-800 w-[60%] text-white flex flex-col gap-4">
        <section>
          <h1>CREATE POST</h1>
        </section>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
  
          <TextFields title={title} setTitle={setTitle} text={text} setText={setText} words={words} setWords={setWords} />
  
          <UploadImage uploadedImage={uploadedImage} setUploadedImage={setUploadedImage} />
  
          <Buttons communities={communities} setSelectedCommunity={setSelectedCommunity} />
        </form>
      </div>
    );
  }