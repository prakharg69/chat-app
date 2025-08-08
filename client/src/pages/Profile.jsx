import React, { useEffect, useRef, useState } from "react";
import { UploadCloud } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";

export default function ProfileCard() {
  const {authUser,updatedProfile}= useAuthStore();
  const fileInputRef = useRef();
  const [img,setImg]=useState(null);
  useEffect(()=>{
    console.log("ddd",authUser);
    
  },[])

  const handleFileChange = async(e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImg(URL.createObjectURL(file));
     const formData = new FormData();
      formData.append("profilePic", file);
       formData.append("userId", authUser._id);
      await updatedProfile(formData);
      
  };

  return (
    <div className="h-[50rem]">
    <div className="w-4/5  max-w-md mx-auto mt-20 bg-white shadow-lg rounded-3xl p-6">
      {/* Top Avatar + Upload */}
      <div className="flex flex-col items-center gap-3 mb-6">
        <div className="relative group">
          <img
            src={ img ||authUser.profilePic || "https://randomuser.me/api/portraits/women/65.jpg" }
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover border-4 border-sky-300"
          />
          <button
            onClick={() => fileInputRef.current.click()}
            className="absolute bottom-0 right-0 p-2 bg-white border border-sky-300 rounded-full text-sky-600 group-hover:scale-110 transition-all"
          >
            <UploadCloud size={18} />
          </button>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />
        </div>
      </div>

      {/* Profile Info */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm text-sky-600 font-medium">Full Name</label>
          <input
            type="text"
            value={authUser.fullname}
            readOnly
            className="w-full px-3 py-2 rounded-lg border border-sky-300 bg-sky-50 text-sky-800 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm text-sky-600 font-medium">Email</label>
          <input
            type="email"
            value={authUser.email}
            readOnly
            className="w-full px-3 py-2 rounded-lg border border-sky-300 bg-sky-50 text-sky-800 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm text-sky-600 font-medium">Created At</label>
          <input
            type="text"
            value={authUser.createdAt.slice(0,10)}
            readOnly
            className="w-full px-3 py-2 rounded-lg border border-sky-300 bg-sky-50 text-sky-800 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm text-sky-600 font-medium">Last Updated</label>
          <input
            type="text"
            value={authUser.updatedAt.slice(0,10)}
            readOnly
            className="w-full px-3 py-2 rounded-lg border border-sky-300 bg-sky-50 text-sky-800 focus:outline-none"
          />
        </div>
      </div>
    </div>
    </div>
  );
}
