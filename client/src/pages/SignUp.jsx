// pages/Signup.jsx
import { useState } from "react";
import Photo from "../assets/chat.png";
import { MessageCircle, Users2, Grid, Settings } from "lucide-react";

const iconData = [
  { name: "Message", icon: <MessageCircle size={24} /> },
  { name: "Group", icon: <Users2 size={24} /> },
  { name: "Keypad", icon: <Grid size={24} /> },
  { name: "Settings", icon: <Settings size={24} /> },
];

export const sidebarChats = [
  {
    id: 1,
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    username: "Ankita🔥",
    lastMessage: "Baby, still online? 😉",
    time: "2:03 PM",
    unreadCount: 3,
  },
  {
    id: 2,
    photo: "https://randomuser.me/api/portraits/men/22.jpg",
    username: "Raj Bhai",
    lastMessage: "Meeting kal 10 baje hai...",
    time: "1:45 PM",
    unreadCount: 0,
  },
  {
    id: 3,
    photo: "https://randomuser.me/api/portraits/women/12.jpg",
    username: "Shreya",
    lastMessage: "Teri baaton ka jawab nahi 💅",
    time: "1:20 PM",
    unreadCount: 7,
  },
  {
    id: 4,
    photo: "https://randomuser.me/api/portraits/women/81.jpg",
    username: "MeowQueen",
    lastMessage: "Sent you the meme 😹",
    time: "12:50 PM",
    unreadCount: 1,
  },
  {
    id: 5,
    photo: "https://randomuser.me/api/portraits/men/90.jpg",
    username: "Sir",
    lastMessage: "Assignment bhej diya?",
    time: "12:10 PM",
    unreadCount: 0,
  },
  {
    id: 6,
    photo: "https://randomuser.me/api/portraits/women/33.jpg",
    username: "Nush 😘",
    lastMessage: "Let’s meet tonight 🥺",
    time: "11:40 AM",
    unreadCount: 5,
  },
];

// const bubbleChats = [
//   {
//     username: "Shruti ❤️",
//     avatar: "https://i.pravatar.cc/40?img=47",
//     text: "Hey cutie 😉",
//     from: "left",
//   },
//   {
//     username: "Anshu 😎",
//     avatar: "https://i.pravatar.cc/40?img=14",
//     text: "You came back 😏",
//     from: "right",
//   },
//   {
//     username: "Shruti ❤️",
//     avatar: "https://i.pravatar.cc/40?img=47",
//     text: "Yup… Missed you 😘",
//     from: "left",
//   },
//   {
//     username: "Anshu 😎",
//     avatar: "https://i.pravatar.cc/40?img=14",
//     text: "Let’s chat more on ChatterBaat 💬",
//     from: "right",
//   },
//   {
//     username: "Shruti ❤️",
//     avatar: "https://i.pravatar.cc/40?img=47",
//     text: "👇 Sign up, darling!",
//     from: "left",
//   },
// ];

const Signup = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup data:", formData);
  };

  return (
    <div className="flex h-[47rem] bg-[#1e1f22] text-white overflow-hidden">
      {/* Left: Signup Form */}
      <div className="w-1/3 flex items-center justify-center px-10">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-[#2a2b2f] p-8 rounded-xl shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-6 text-cyan-400">
            Join ChatterBaat™
          </h2>

          <div className="mb-4">
            <label className="block mb-1">Full Name</label>
            <input
              type="text"
              name="fullname"
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-[#1e1f22] border border-gray-600 focus:outline-none focus:border-cyan-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-[#1e1f22] border border-gray-600 focus:outline-none focus:border-cyan-500"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block mb-1">Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-[#1e1f22] border border-gray-600 focus:outline-none focus:border-cyan-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-cyan-600 hover:bg-cyan-700 rounded text-white font-semibold transition-colors duration-200"
          >
            Sign Up
          </button>

          <p className="mt-6 text-sm text-gray-400 text-center">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-cyan-400 hover:underline hover:text-cyan-300"
            >
              Login
            </a>
          </p>
        </form>
      </div>

      {/* Right: Realistic Chat Wall */}
      <div className="w-2/3 overflow-hidden flex flex-col  justify-center p-[2rem] gap-5 relative">
        <div className="  h-full flex">
          <div className="   w-3/10 bg-[#271C45]  flex flex-col ">
            <div className="p-[1rem]">
              <div className="flex h-[3rem] gap-2 ">
                <div className="">
                  <img
                    className="h-full w-[2.8rem] rounded-[50%]"
                    src={Photo}
                    alt=""
                  />
                </div>
                <div className="p-[1px]">
                  <p className="text-[1.2rem]">Prakhar Gussain</p>
                  <p className="text-[10px] text-[#9A97B5]">
                    Developer of this site
                  </p>
                </div>
              </div>
              <div className="flex mt-2 items-center gap-4 text-[#9A97B5] p-2 rounded-xl ">
                {iconData.map((item, index) => (
                  <div
                    key={index}
                    className="hover:bg-gray-700 p-2 rounded-lg cursor-pointer transition-all duration-200"
                    title={item.name}
                  >
                    {item.icon}
                  </div>
                ))}
              </div>
              <div className="ss">
                <input
                  type="text"
                  className="bg-transparent outline-none w-full border-b-[0.5px]  border-white "
                  placeholder="Search"
                />
              </div>
            </div>
            <div className="h-full mt-4">
              {sidebarChats.map((chat, i) => (
    <div key={i} className="flex gap-3 px-4 py-3 items-center hover:bg-[#2a2340] transition-all cursor-pointer">
      <img
        className="h-12 w-12 rounded-full object-cover"
        src={chat.photo}
        alt={chat.name}
      />
      <div className="flex-1 overflow-hidden">
        <div className="flex justify-between items-center">
          <p className="font-medium text-white text-sm truncate">{chat.username}</p>
          <p className="text-[10px] text-gray-400">{chat.time}</p>
        </div>
        <div className="flex justify-between items-center mt-1">
          <p className="text-[12px] text-[#9A97B5] truncate max-w-[10rem]">
            {chat.lastMessage}
          </p>
          {chat.unread > 0 && (
            <span className="bg-red-500 text-white text-[10px] font-semibold px-2 py-[2px] rounded-full ml-2 min-w-[1.2rem] text-center">
              {chat.unreadCount}
            </span>
          )}
        </div>
      </div>
    </div>
  ))}
            </div>
            {/* ------ */}
          </div>

          <div className="h-full  w-7/10 bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
