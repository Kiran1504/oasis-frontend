import FollowersCard from "./FollowersCard";
import MainProfile from "./MainProfile";

import { useState, useEffect } from "react";
import axios from "axios";

export default function UserProfile() {

    const [userInfo, setUserInfo] = useState({
        username: 'User1209',
        profileImage: '/image.png',
        firstname: 'Siddhant',
        lastname: 'Vishnu',
        bio: 'Lorem ipsum tikki tiki Lorem ipsum tikki tiki Lorem ipsum tikki tiki Lorem ipsum tikki tiki Lorem ipsum tikki tikiLorem ipsum tikki tikiLorem ipsum tikki tiki Lorem ipsum tikki tikiLorem ipsum tikki tiki Lorem ipsum tikki tiki Lorem ipsum tikki tikiLorem ipsum tikki tikiLorem ipsum tikki tikiLorem ipsum tikki tiki Lorem ipsum tikki tiki',
        joinDate: '22-04-2024',
        links: {
            instagram: 'sid.kid.2005',
            github: 'SidTheKid-dotcom',
            reddit: 'DodoDuck',
            discord: 'Sid.Kid'
        },
        followers: ['siddhant', 'soham', 'kiran', 'prabhu', 'neel', 'neeraj'],
        followings: ['nilay', 'oasis'],
        posts: [{
            title: 'IPL',
            description: 'Lorem ipsum tokki tasdjnah wefjb djfh wjhdfjwd Lorem ipsum tokki tasdjnah wefjb djfh wjhdfjwd Lorem ipsum tokki tasdjnah wefjb djfh wjhdfjwd Lorem ipsum tokki tasdjnah wefjb djfh wjhdfjwd Lorem ipsum tokki tasdjnah wefjb djfh wjhdfjwd Lorem ipsum tokki tasdjnah wefjb djfh wjhdfjwd',
            likes: 3,
            comments: 1,
            shares: 100,
            liked: true
        },
        {
            title: 'IPUCL',
            description: 'Lorem ipsum tokki tasdjnah wefjb djfh wjhdfjwd Lorem ipsum tokki tasdjnah wefjb djfh wjhdfjwd Lorem ipsum tokki tasdjnah wefjb djfh wjhdfjwd Lorem ipsum tokki tasdjnah wefjb djfh wjhdfjwd Lorem ipsum tokki tasdjnah wefjb djfh wjhdfjwd Lorem ipsum tokki tasdjnah wefjb djfh wjhdfjwd',
            likes: 67,
            comments: 67,
            shares: 3,
            liked: false
        },
        {
            title: 'Astro',
            description: 'Lorem ipsum tokki tasdjnah wefjb djfh wjhdfjwd Lorem ipsum tokki tasdjnah wefjb djfh wjhdfjwd Lorem ipsum tokki tasdjnah wefjb djfh wjhdfjwd Lorem ipsum tokki tasdjnah wefjb djfh wjhdfjwd Lorem ipsum tokki tasdjnah wefjb djfh wjhdfjwd Lorem ipsum tokki tasdjnah wefjb djfh wjhdfjwd',
            likes: 30,
            comments: 25,
            shares: 1000,
            liked: true
        }],
        communities: {
            created: [{
                title: 'IEEE',
                followers: '1.2k',
                following: true,
                description: 'Lorem ipsum tokki tasdjnah wefjb djfh wjhdfjwd Lorem ipsum tokki tasdjnah wefjb djfh wjhdfjwd Lorem ipsum tokki tasdjnah wefjb djfh wjhdfjwd Lorem ipsum tokki tasdjnah wefjb djfh wjhdfjwd Lorem ipsum tokki tasdjnah wefjb djfh wjhdfjwd Lorem ipsum tokki tasdjnah wefjb djfh wjhdfjwd',
                imageCommunity: '/image.png'
            }, {
                title: 'PASC',
                followers: '1.2k',
                following: true,
                description: 'Lorem ipsum tokki tasdjnah wefjb djfh wjhdfjwd Lorem ipsum tokki tasdjnah wefjb djfh wjhdfjwd Lorem ipsum tokki tasdjnah wefjb djfh wjhdfjwd Lorem ipsum tokki tasdjnah wefjb djfh wjhdfjwd Lorem ipsum tokki tasdjnah wefjb djfh wjhdfjwd Lorem ipsum tokki tasdjnah wefjb djfh wjhdfjwd',
                imageCommunity: '/spongebob.png'
            }],
            joined: [{
                title: 'INC',
                followers: '2.7k',
                following: true,
                description: 'Lorem ipsum tokki tasdjnah wefjb djfh wjhdfjwd Lorem ipsum tokki tasdjnah wefjb djfh wjhdfjwd Lorem ipsum tokki tasdjnah wefjb djfh wjhdfjwd Lorem ipsum tokki tasdjnah wefjb djfh wjhdfjwd Lorem ipsum tokki tasdjnah wefjb djfh wjhdfjwd Lorem ipsum tokki tasdjnah wefjb djfh wjhdfjwd',
                imageCommunity: '/spongebob.png'
            }]
        },
        events: {
            created: [{
                title: 'Credenz',
                description: 'Lorem wefjb djfh wjhdfjwd',
                host: 'IEEE',
                date: '2024-04-22',
                imageEvent: '/image.png'
            }],
            joined: [{
                title: 'Pulzion',
                description: 'Lorem ipsum tokki tasdjnah',
                host: 'PASC',
                date: '2024-04-25',
                imageEvent: '/image.png'
            },
            {
                title: 'Xenia',
                description: 'Lorem ipsum tokki tasdjnah',
                host: 'PCSB',
                date: '2024-04-31',
                imageEvent: '/image.png'
            }]
        }
    });

    useEffect(() => {

        const fetchUserInfo = async () => {
            try {

                //Extract the user token from the cookie

                const response = await axios.get('// hit api end point', {
                    headers: {
                        // 'Authorization': token,
                        // 'Content-Type': 'application/json'
                    }
                });

                setUserInfo(response.data.userInfo);
            }
            catch (error) {
                console.log("error occured while fetching user's info: ", error);
            }
        }

        fetchUserInfo();

        return () => {
            setUserInfo(prevUserInfo => prevUserInfo);
        }
    }, [])

    return (
        <div className="grid grid-cols-12">
            <div className="col-span-2"></div>
            <div className="col-span-7">
                <MainProfile userInfo={userInfo} />
            </div>
            <div className="col-span-3">
                <FollowersCard username={userInfo.username} followers={userInfo.followers} followings={userInfo.followings} />
            </div>
        </div>
    );
}