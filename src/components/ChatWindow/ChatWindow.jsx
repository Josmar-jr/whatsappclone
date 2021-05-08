import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import "./ChatWindow.scss";

import SearchIcon from "@material-ui/icons/Search";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import CloseIcon from "@material-ui/icons/Close";
import SendIcon from "@material-ui/icons/Send";
import MicIcon from "@material-ui/icons/Mic";

function ChatWindow() {
  let recognition = null;
  let SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SpeechRecognition !== undefined) {
    recognition = new SpeechRecognition();
  }

  const [emojiOpen, setEmojiOpen] = useState(false);
  const [text, setText] = useState();
  const [listening, setListening] = useState(false);

  const handleEmojiClick = (e, emojiObject) => {
    setText(text + emojiObject.emoji);
  };

  const handleOpenEmoji = () => {
    setEmojiOpen(true);
  };

  const handleCloseEmoji = () => {
    setEmojiOpen(false);
  };

  const handleMicClick = () => {
    if (recognition !== null) {
      recognition.onstart = () => {
        setListening(true);
      };

      recognition.onend = () => {
        setListening(false);
      };

      recognition.onresult = (e) => {
        setText(e.results[0][0].transcript);
      };

      recognition.start();
    }
  };

  const handleSendClick = () => {};

  return (
    <section className="chatWindowContainer">
      <div className="header">
        <div className="headerInfo">
          <img
            className="headerProfile"
            src="memoji-profile.png"
            alt="Image profile"
          />
          <div className="headerName">Josmar Junior</div>
        </div>

        <div className="headerButtons">
          <div className="btn">
            <SearchIcon style={{ color: "#919191" }} />
          </div>
          <div className="btn">
            <AttachFileIcon style={{ color: "#919191" }} />
          </div>
          <div className="btn">
            <MoreVertIcon style={{ color: "#919191" }} />
          </div>
        </div>
      </div>
      <div className="body"></div>
      <div
        className="emojiArea"
        style={{ height: emojiOpen ? "200px" : "0px" }}
      >
        <EmojiPicker
          onEmojiClick={handleEmojiClick}
          disabledSearchBar
          disableSkinTonePicker
        />
      </div>
      <div className="footer">
        <div className="pre">
          <div
            className="btn"
            onClick={handleCloseEmoji}
            style={{ display: emojiOpen ? "block" : "none" }}
          >
            <CloseIcon style={{ color: "#919191" }} />
          </div>
          <div className="btn" onClick={handleOpenEmoji}>
            <InsertEmoticonIcon
              style={{ color: emojiOpen ? "#009688" : "#919191" }}
            />
          </div>
        </div>
        <div className="inputArea">
          <input
            type="text"
            placeholder="Digite uma mensagem"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="pos">
          {text === "" && 
            <div onClick={handleMicClick} className="btn">
              <MicIcon style={{ color: listening ? "#126ECE" : "#919191" }} />
            </div>
          }
          {text !== "" && 
            <div onClick={handleSendClick} className="btn">
              <SendIcon style={{ color: "#919191" }} />
            </div>
          }
        </div>
      </div>
    </section>
  );
}

export default ChatWindow;
