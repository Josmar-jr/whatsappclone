import React, { useState } from "react";
import "./styles/global.scss";

import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import ChatListItem from "./components/ChatListItem/ChatListItem";
import ChatIntro from "./components/ChatIntro/ChatIntro";
import ChatWindow from "./components/ChatWindow/ChatWindow";

function App() {
  const [chatList, setChatList] = useState([
    { chatId: 1, title: "Fulana 1", img: "cat-profile.png" },
    { chatId: 2, title: "Fulana 2", img: "women-profile.jpeg" },
    { chatId: 3, title: "Fulana 3", img: "cat-profile.png" },
    { chatId: 4, title: "Fulana 4", img: "logo192.png" },
    { chatId: 5, title: "Fulana 5", img: "cat-profile.png" },
  ]);
  const [activeChat, setActiveChat] = useState({});

  return (
    <div className="appWindow">
      <div className="sidebar">
        <header>
          <img
            className="headerAvatar"
            src="memoji-profile.png"
            alt="Profile user"
          />
          <div className="headerButtons">
            <div className="headerBtn">
              <DonutLargeIcon style={{ color: "#919191" }} />
            </div>
            <div className="headerBtn">
              <ChatIcon style={{ color: "#919191" }} />
            </div>
            <div className="headerBtn">
              <MoreVertIcon style={{ color: "#919191" }} />
            </div>
          </div>
        </header>

        <div className="search">
          <div className="searchInput">
            <SearchIcon fontSize="small" style={{ color: "#919191" }} />
            <input
              type="search"
              placeholder="Procurar ou começar uma nova conversa"
            />
          </div>
        </div>

        <div className="chatList">
          {chatList.map((talk, key) => (
            <ChatListItem
              key={key}
              data={talk}
              active={activeChat.chatId === chatList[key].chatId}
              onClick={() => setActiveChat(chatList[key])}
            />
          ))}
        </div>
      </div>
      <div className="contentArea">
        {activeChat.chatId !== undefined && <ChatWindow />}
        {activeChat.chatId === undefined && <ChatIntro />}
      </div>
    </div>
  );
}

export default App;
