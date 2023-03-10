import React, { useState, useEffect } from "react";
import Chat from "./Chat";
import { chatsData } from "../data/whatsapp";
import { ImFolderDownload } from "react-icons/im";

function Chats({ filter }) {
  const [chats, setChats] = useState(chatsData);
  const [selectedDivIndex, setSelectedDivIndex] = useState(null);

  useEffect(() => {
    const newChats = filter
      ? chatsData.filter((chat) => chat.unreadMsgs)
      : chatsData;
    setChats(newChats);
  }, [filter]);



  return (
    // Chats main container
    <div className="flex flex-col overflow-y-scroll cursor-pointer h-100">
      {/* Archived container */}
      <div className="flex justify-between items-center w-100 min-h-[55px] px-3 hover:bg-[#202d33]">
        {/* Icon and text container */}
        <div className="flex justify-around items-center w-[150px]">
          {/* Icon */}
          <span className="text-emerald-500 text-lg">
            <ImFolderDownload />
          </span>

          {/* Archived */}
          <h1 className="text-white">Archived</h1>
        </div>

        {/* Number of archived chats */}
        <p className="text-emerald-500 text-xs font-light">7</p>
      </div>

      {/* Chats */}
      {chats.map((chat, index) => {
        return (
          <Chat
            pp={chat.pp}
            contact={chat.contact}
            msg={chat.msg}
            time={chat.time}
            unreadMsgs={chat.unreadMsgs}
            key={index}
            i={index}
            user={chat.user}
            status={chat.status}
            style={{ backgroundColor: selectedDivIndex === index ? 'bg-[#202d33]' : '' }}
            onClick={() => setSelectedDivIndex(index)}
            
          />
        );
      })}
    </div>
  );
}

export default Chats;
