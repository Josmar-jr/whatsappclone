import React from 'react';

import './ChatListItem.scss';

export function ChatListItem() {
  return (
      <div className="chatListItemContainer">
          <img className="chatListItemAvatar" src="cat-profile.png" alt=""/>
          <div className="chatListItemLines">
              <div className="line">
                <div className="name">Contact 1</div>
                <div className="date">19:00</div>
              </div>
              <div className="line">
                <div className="lastMsg">
                    <p>How are you doing? How are you doing? How are you doing? How are you doing? How are you doing? </p>
                </div>
              </div>
          </div>
      </div>
  );
}

export default ChatListItem;