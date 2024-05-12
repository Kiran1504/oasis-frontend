"use client"

import axios from "axios";
import React, { useEffect, useState } from "react";
import CommunityCard2 from "@/components/CommunityCard2"; // Make sure this path is correct
import Link from "next/link";

function Page() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJ0ZXN0MSIsImVtYWlsIjoia2lyYUBnbWFpbC5jb20iLCJpYXQiOjE3MTQyOTkwMDF9.1ZuTu6j00mouWxrPwrWR8u3Fn9RmLwuqeRE_gBJrR24";
      const response = await axios.get(
        `http://3.110.161.150:4000/api/community/all`,
        {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        }
      );
      const responseData = await response.data;
      console.log("data fetched: ", responseData);
      setData(responseData);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);


  
    // const data= [
    //   {
    //     "key": "community_id_1",
    //     "icon": "https://source.unsplash.com/featured/?nature",
    //     "name": "TechExplorers Hub",
    //     "description": "Welcome to TechExplorers Hub, the ultimate destination for technology enthusiasts, professionals, and curious minds alike! 🚀 Dive deep into the ever-evolving world of technology with our vibrant community. From cutting-edge innovations to insightful discussions, we cover a wide range of topics including artificial intelligence, blockchain, cybersecurity, data science, machine learning, programming languages, and much more. Whether you're a seasoned expert or just starting your journey, join us to learn, share knowledge, collaborate on projects, and connect with like-minded individuals from around the globe. Together, let's embark on a journey of exploration, innovation, and endless possibilities in the fascinating realm of technology!",
    //     "followers": 100,
    //     "type": "public"
    //   },
    //   {
    //     "key": "community_id_2",
    //     "icon": "https://source.unsplash.com/featured/?technology",
    //     "name": "Creative Minds Network",
    //     "description": "Welcome to Creative Minds Network, where creativity knows no bounds! 🎨🎭📸 Join our diverse community of artists, designers, writers, photographers, musicians, and creative thinkers as we explore, inspire, and collaborate on exciting projects. Share your passion, showcase your work, receive feedback, and connect with fellow creators from around the world. Whether you're a seasoned professional or just starting your artistic journey, come unleash your imagination and let your creativity soar with us!",
    //     "followers": 200,
    //     "type": "nsfw"
    //   },
    //   {
    //     "key": "community_id_3",
    //     "icon": "https://source.unsplash.com/featured/?fitness",
    //     "name": "Fitness Fanatics Club",
    //     "description": "Welcome to the Fitness Fanatics Club, where health and wellness are our top priorities! 💪💦 Join our energetic community of fitness enthusiasts, athletes, trainers, and health-conscious individuals as we sweat, inspire, and motivate each other to achieve our fitness goals. From workout routines to nutrition tips, from yoga sessions to marathon training, we cover it all. Share your fitness journey, seek advice, participate in challenges, and celebrate your victories with us. Let's strive for a healthier, happier lifestyle together!",
    //     "followers": 150,
    //     "type": "public"
    //   },
    //   {
    //     "key": "community_id_4",
    //     "icon": "https://source.unsplash.com/featured/?gaming",
    //     "name": "Gaming Galaxy",
    //     "description": "Welcome to Gaming Galaxy, the ultimate gaming community for players of all levels and platforms! 🎮🌌 Dive into the exciting world of video games with us and embark on epic adventures, thrilling battles, and unforgettable experiences. Whether you're a casual gamer, a hardcore competitor, or a game developer, you'll find your place among fellow gaming enthusiasts here. Discover new games, join multiplayer sessions, share tips and tricks, and connect with gamers from around the universe. Get ready to level up your gaming journey with Gaming Galaxy!",
    //     "followers": 180,
    //     "type": "nsfw"
    //   },
    //   {
    //     "key": "community_id_5",
    //     "icon": "https://source.unsplash.com/featured/?art",
    //     "name": "Photography Passion",
    //     "description": "Welcome to Photography Passion, where every picture tells a story! 📷🌟 Join our community of shutterbugs, photography enthusiasts, and visual storytellers as we capture moments, explore techniques, and celebrate the art of photography. Whether you're a hobbyist, a professional photographer, or simply love taking pictures, you'll find inspiration, support, and camaraderie here. Share your photos, receive constructive feedback, participate in challenges, and learn from experts in the field. Let's embark on a journey of creativity, expression, and visual delight together!",
    //     "followers": 220,
    //     "type": "public"
    //   }
    // ]
  
  




  
  return (
    <>
      <div className="md:grid grid-cols-10 gap-10 md:ml-20">
        <div className="col-span-7">
          {data.map((community) => (
            <Link href= {`/community/${community.id}`}>
               <CommunityCard2
              key={community.id}
              icon={community.icon}
              name={community.name}
              description={community.description}
              followers={community.
                no_of_subscribers
                }
               type={community.type} 
            />
            </Link>
            
          ))}
        </div>

        <div className="hidden md:block md:w-1/2">
          <p className="text-white text-5xl my-7">Filter Card</p>
        </div>
      </div>
    </>
  );
}

export default Page;
