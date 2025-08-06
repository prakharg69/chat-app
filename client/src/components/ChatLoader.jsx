import React from "react";

const ChatLoader = () => {
  return (
    <div className="flex h-[51rem] space-x-2 justify-center items-center">
      <span className="w-5 h-5 bg-cyan-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
      <span className="w-5 h-5 bg-cyan-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
      <span className="w-5 h-5 bg-cyan-500 rounded-full animate-bounce"></span>
    </div>
  );
};

export default ChatLoader;

