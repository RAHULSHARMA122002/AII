import React from 'react';
import './leftbar.css';

const conversations = [
  { id: 1, name: "Luis · Github", message: "Hey! I have a question...", time: "45m", active: true },
  { id: 2, name: "Ivan · Nike", message: "Hi there, I have a qu...", time: "3min", active: false },
  { id: 3, name: "Lead from New York", message: "Good morning, let me...", time: "40m", active: false },
  { id: 4, name: "Booking API problems", message: "Bug report", time: "45m", active: false },
  { id: 5, name: "Miracle · Exemplary Bank", message: "Hey there, I'm here to...", time: "45m", active: false },
];

function Leftbar() {
  return (
    <div className="leftbar">
      <h2>Your Inbox</h2>
      <hr/>
      <div className="conversation-list">
        {conversations.map(conv => (
          <div className={`conversation ${conv.active ? 'active' : ''}`} key={conv.id}>
            <div className="left-info">
              <div className="name">{conv.name}</div>
              <div className="preview">{conv.message}</div>
            </div>
            <div className="right-info">
              <div className="time">{conv.time}</div>
              <div className={`status-dot ${conv.active ? 'online' : 'offline'}`}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Leftbar;
