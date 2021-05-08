import React from 'react';

import './ChatListItem.scss';

export function ChatListItem({onClick, active, data}) {
  return (
      <div 
        className={`chatListItemContainer ${active?'active':''}`}
        onClick={onClick}           
      >
          <img className="chatListItemAvatar" src={data.img} alt=""/>
          <div className="chatListItemLines">
              <div className="line">
                <div className="name">{data.title}</div>
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