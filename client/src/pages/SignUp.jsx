// pages/Signup.jsx
import { useEffect, useRef, useState } from "react";
import Photo from "../assets/chat.png";
import { MessageCircle, Users2, Grid, Send, Settings, Eye, EyeClosed } from "lucide-react";

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

const Signup = () => {
  const [message, setMessage] = useState("");
  const [showpassword,setshowpassword]=useState(false)
  const [bubbleChats, setbubbleChats] = useState([
    {
      username: "Shruti ❤️",
      avatar: "https://i.pravatar.cc/40?img=47",
      text: "Hey cutie 😉",
      from: "left",
    },
    {
      username: "Anshu 😎",
      avatar: "https://i.pravatar.cc/40?img=14",
      text: "You came back 😏",
      from: "right",
    },
    {
      username: "Shruti ❤️",
      avatar: "https://i.pravatar.cc/40?img=47",
      text: "yes cutie 😉",
      from: "left",
    },
  ]);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const [time, setTime] = useState("");
  useEffect(() => {
    scrollToBottom();
    const time = new Date();
    setTime(
      time.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })
    );
  }, [bubbleChats]);

  const replies = [
    "Pehle login karo, fir baat banegi 😉",
    "Register kar lo baby, warna access denied 😘",
    "Aise hi message bhejne ka nahi, account banao pehle 😏",
    "Sign in karo na jaan, warna kaise jaanoon tum kaun ho? 😚",
    "Tumhare bina toh system incomplete hai... register toh karo 💔",
    "Login ke bina toh main kuch bhi nahi bolti 😌",
    "Username-password ka jadoo chahiye pehle 😋",
    "Pehle apna naam likho, fir main apna dil likhungi ❤️",
    "Register karo tabhi toh secret room ka raasta dikhayungi 🥵",
    "Login nahi kiya? Ab tak stranger hi ho mere liye 😶",
  ];

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

  const handleclick = () => {
    if (message.trim() === "") return;

    const newUserMessage = {
      username: "Anshu 😎",
      avatar: "https://i.pravatar.cc/40?img=14",
      text: message,
      from: "right",
    };

    const autoReply = {
      username: "Shruti ❤️",
      avatar: "https://i.pravatar.cc/40?img=47",
      text: replies[Math.floor(Math.random() * replies.length)],
      from: "left",
    };

    setbubbleChats((prev) => [...prev, newUserMessage]);
    setMessage("");

    setTimeout(() => {
      setbubbleChats((prev) => [...prev, autoReply]);
    }, 800);
  };

  return (
 <div className="flex h-[47rem] bg-[#1e1f22] text-white overflow-hidden">
  {/* Left: Signup Form */}
  <div className="w-1/3 flex items-center justify-center px-10">
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md bg-[#2a2b2f] p-10 rounded-3xl shadow-2xl border border-[#3a3b3f]"
    >
      <h2 className="text-4xl font-extrabold mb-8 text-cyan-400 text-center tracking-wider">
        Join ChatterBaat™
      </h2>

      <div className="mb-6">
        <label className="block mb-2 text-sm text-gray-300">Full Name</label>
        <input
          type="text"
          name="fullname"
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-xl bg-[#1e1f22] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
          required
          autoComplete="name"
        />
      </div>

      <div className="mb-6">
        <label className="block mb-2 text-sm text-gray-300">Email</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-xl bg-[#1e1f22] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
          required
          autoComplete="email"
        />
      </div>

      <div className="mb-8 relative">
        <label className="block mb-2 text-sm text-gray-300">Password</label>
        <input
          type={showpassword ? "text":"password"}
          name="password"
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-xl bg-[#1e1f22] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
          required
          autoComplete="current-password"
        />
       <button className="absolute top-9 right-[0.6rem] text-black" onClick={()=> setshowpassword(!showpassword)}>{showpassword?<Eye></Eye>:<EyeClosed></EyeClosed>}</button>
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-xl text-white font-bold text-lg tracking-wide shadow-md transition-all duration-300"
      >
        Sign Up
      </button>

      <p className="mt-6 text-sm text-gray-400 text-center">
        Already have an account?{' '}
        <a
          href="/login"
          className="text-cyan-400 hover:underline hover:text-cyan-300 font-medium"
        >
          Login
        </a>
      </p>
    </form>
  </div>

  {/* Right: Chat Wall */}
  <div className="w-2/3 overflow-hidden flex flex-col justify-center p-[2rem] gap-5 relative">
    <div className="h-full flex bg-gradient-to-tr from-sky-300 to-blue-200 rounded-3xl shadow-2xl">
      {/* Sidebar */}
      <div className="w-3/10 bg-sky-100 flex flex-col rounded-l-3xl border-r border-blue-300">
        <div className="p-[1rem]">
          <div className="flex h-[3rem] gap-2">
            <img className="h-full w-[2.8rem] rounded-full" src={Photo} alt="" />
            <div className="p-[1px]">
              <p className="text-[1.2rem] text-sky-900 font-semibold">Prakhar Gussain</p>
              <p className="text-[10px] text-sky-600">Developer of this site</p>
            </div>
          </div>

          <div className="flex mt-4 items-center gap-4 text-sky-600 p-2 rounded-xl">
            {iconData.map((item, index) => (
              <div
                key={index}
                className="hover:bg-sky-300 p-2 rounded-lg cursor-pointer transition-all duration-200"
                title={item.name}
              >
                {item.icon}
              </div>
            ))}
          </div>

          <input
            type="text"
            className="bg-white outline-none w-full mt-4 px-2 py-1 border border-sky-300 text-sm rounded-md text-sky-900 placeholder-sky-500"
            placeholder="Search"
          />
        </div>

        <div className="h-full mt-4 overflow-y-auto pr-2">
          {sidebarChats.map((chat, i) => (
            <div
              key={i}
              className="flex gap-3 px-4 py-3 items-center hover:bg-sky-200 rounded-xl transition-all cursor-pointer"
            >
              <img
                className="h-12 w-12 rounded-full object-cover"
                src={chat.photo}
                alt={chat.name}
              />
              <div className="flex-1 overflow-hidden">
                <div className="flex justify-between items-center">
                  <p className="font-medium text-sky-900 text-sm truncate">{chat.username}</p>
                  <p className="text-[10px] text-sky-600">{chat.time}</p>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-[12px] text-sky-700 truncate max-w-[10rem]">
                    {chat.lastMessage}
                  </p>
                  {chat.unreadCount > 0 && (
                    <span className="bg-red-500 text-white text-[10px] font-semibold px-2 py-[2px] rounded-full ml-2 min-w-[1.2rem] text-center">
                      {chat.unreadCount}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Box */}
      <div className="h-full w-7/10 bg-white rounded-r-3xl">
        <div className="p-[1rem] pl-[3rem] border-b border-sky-300">
          <div className="flex h-[3rem] gap-2 items-center">
            <img
              className="h-full w-[2.8rem] rounded-full"
              src="https://randomuser.me/api/portraits/women/65.jpg"
              alt=""
            />
            <div className="p-[1px]">
              <p className="text-[1.2rem] text-sky-800 font-semibold">Ankita Mishra</p>
              <p className="text-[10px] text-sky-500">Love the way you want</p>
            </div>
          </div>
        </div>

        <div className="h-[35rem] pl-[1rem] pr-[1rem] overflow-y-auto bg-blue-50 scrollbar-none">
          {bubbleChats.map((item, index) =>
            item.from === "left" ? (
              <div key={index} className="flex gap-3 px-4 py-3 items-start">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src={item.avatar}
                  alt="Profile"
                />
                <div className="flex-1 overflow-hidden">
                  <div className="flex gap-2 items-center w-fit px-2">
                    <p className="font-medium text-sky-800 text-sm truncate">{item.username}</p>
                    <p className="text-[10px] text-sky-500">{time}</p>
                  </div>
                  <div className="mt-1 p-[0.5rem] rounded-r-2xl rounded-bl-2xl w-fit bg-sky-200">
                    <p className="text-[12px] text-sky-800">{item.text}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div
                key={index}
                className="flex gap-3 px-4 py-3 items-end justify-end bg-transparent"
              >
                <div className="flex-1 overflow-hidden flex flex-col items-end">
                  <div className="flex gap-2 items-center w-fit px-2">
                    <p className="font-medium text-sky-800 text-sm truncate">You</p>
                    <p className="text-[10px] text-sky-500">{time}</p>
                  </div>
                  <div className="mt-1 p-[0.5rem] rounded-l-2xl rounded-br-2xl w-fit bg-blue-400">
                    <p className="text-[12px] text-white">{item.text}</p>
                  </div>
                </div>
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src={item.avatar}
                  alt="Your Profile"
                />
              </div>
            )
          )}
          <div ref={chatEndRef} />
        </div>

        <div className="h-[3rem] flex bg-white px-4 items-center border-t border-sky-300">
          <input
            className="h-full w-[90%] text-[1rem] p-5 outline-none text-sky-900 bg-transparent placeholder-sky-600"
            type="text"
            placeholder="Write A message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <button
            className="rounded-full text-sky-600 hover:text-blue-700 flex items-center justify-center"
            onClick={handleclick}
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default Signup;
