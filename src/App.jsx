import React, { useState } from "react";
import "./styles/global.scss";

import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import ChatListItem from "./components/ChatListItem/ChatListItem";

function App() {
  const [chaList, setChatList] = useState([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]);

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
          {chaList.map((talk, key) => (
            <ChatListItem key={key} />
          ))}
        </div>
      </div>
      <div className="contentArea"></div>
    </div>
  );
}

export default App;
