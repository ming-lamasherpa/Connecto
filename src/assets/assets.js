import logo2 from './logo2.png'
import bgImage from './bgImage.png'
import groupusers from './groupusers.png'
import Sample_profile from './Sample_profile.png'
import Sample_cover from './Sample_cover.png'
import Sample_profile2 from './Sample_profile2.png'
import Sample_cover2 from './Sample_cover2.png'
import {Home,MessageCircle,Search,UserIcon,Users} from 'lucide-react'

export const assets = {
    logo2,
    bgImage,
    groupusers,
    Sample_profile,
    Sample_cover,
    Sample_profile2,
    Sample_cover2,
}

export const menuItemsData = [
    { to: '/', label: 'Feed',Icon:Home},
    { to: '/messages', label: 'Messages',Icon:MessageCircle},
    { to: '/connections', label: 'Connections',Icon:Users},
    { to: '/discover', label: 'Discover',Icon:Search},
    { to: '/profile', label: 'Profile',Icon:UserIcon},
]

export const dummyUserData = {
  "_id": "user_1",
  "email": "admin@example.com",
  "full_name": "Luffy",
  "username": "Luffy_Rai",
  "bio": "Hero | Danger | Creating with purpose",
  "Profile_picture": Sample_profile,
  "cover_photo": Sample_cover,
  "Location" : "New York,NY",
  "followers" : ["user_2","user_3"],
  "following" : ["user_2","user_3"],
  "connections": ["user_2","user_3"],
  "posts": [],
  "is_verified" : true,
  "createdAt":"2025-05-23",
  "updatedAt":"2025-09-23"

};

const dummyUser2Data = {
   ...dummyUserData,
   _id:"user_2",
   username:"Dhiraj Magar",
   full_name:"Dhiraj Magar",
   "Profile_picture":Sample_profile2,
   "cover_photo":Sample_cover2,
}

export const dummyStoriesData = [
  {
    _id: "story_1",
    user: dummyUserData, // Luffy
    content: "Adventure never ends",
    media_url: "", // no image, only text
    media_type: "text",
    background_color: "#f5c542",
    createdAt: "2025-07-23T08:20:00.000Z",
    updatedAt: "2025-07-23T08:20:00.000Z",
  },
  {
    _id: "story_2",
    user: dummyUser2Data, // Dhiraj Magar
    content: "Chill vibes only",
    media_url: Sample_cover,
    media_type: "image",
    background_color: "",
    createdAt: "2025-07-24T06:30:00.000Z",
    updatedAt: "2025-07-24T06:30:00.000Z",
  },
  {
    _id: "story_3",
    user: dummyUserData, // Luffy
    content: "Behind the scenes sneak peek ",
    media_url: Sample_profile,
    media_type: "image",
    background_color: "",
    createdAt: "2025-07-26T10:15:00.000Z",
    updatedAt: "2025-07-26T10:15:00.000Z",
  },
  {
    _id: "story_4",
    user: dummyUser2Data, // Dhiraj Magar
    content: "Quick tip: Stay consistent, results will follow 💡",
    media_url: "https://www.w3schools.com/html/mov_bbb.mp4",
    media_type: "video",
    background_color: "",
    createdAt: "2025-07-28T09:45:00.000Z",
    updatedAt: "2025-07-28T09:45:00.000Z",
  },
];


export const dummyPostsData = [
  {
    _id: "p1",
    user: dummyUserData,
    content: "🌟 Just finished my first React project! Feeling proud 🚀",
    media_url: "",
    media_type: "text",
    background_color: "#fef3c7",
    likes: 120,
    comments: 15,
    shares: 5,
    createdAt: "2025-07-20T10:15:00.000Z",
    updatedAt: "2025-07-20T10:15:00.000Z",
  },
  {
    _id: "p2",
    user: dummyUserData,
    content: "Enjoying the weekend vibes 🌴✨",
    media_url:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    media_type: "image",
    background_color: "",
    likes: 342,
    comments: 47,
    shares: 22,
    createdAt: "2025-07-21T14:30:00.000Z",
    updatedAt: "2025-07-21T14:30:00.000Z",
  },
  {
    _id: "p3",
    user: dummyUserData,
    content: "🎥 New vlog is live! Go check it out 🔥",
    media_url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    media_type: "video",
    background_color: "",
    likes: 589,
    comments: 102,
    shares: 40,
    createdAt: "2025-07-22T18:00:00.000Z",
    updatedAt: "2025-07-22T18:00:00.000Z",
  },
  {
    _id: "p4",
    user: dummyUserData,
    content: "☕ Late-night coding with coffee hits different.",
    media_url: "",
    media_type: "text",
    background_color: "#e0f2fe",
    likes: 76,
    comments: 12,
    shares: 4,
    createdAt: "2025-07-23T22:45:00.000Z",
    updatedAt: "2025-07-23T22:45:00.000Z",
  },
  {
    _id: "p5",
    user: dummyUserData,
    content: "📸 Throwback to my last hike ⛰️",
    media_url:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
    media_type: "image",
    background_color: "",
    likes: 210,
    comments: 33,
    shares: 10,
    createdAt: "2025-07-24T09:10:00.000Z",
    updatedAt: "2025-07-24T09:10:00.000Z",
  },
]
