// CustomMessage.js
import React, { useState } from 'react';
import { useChat } from '../Context/Context';

function CustomMessage({ message }) {
 const[hovered,setHovered] = useState(false);
  const{setSharedInput} = useChat();
  if (!message || !message.text) {
    return null; // or a fallback JSX like <div>Invalid message</div>
  }
 
 
  return (
    <div className="custom-message">
      {message.text}
      <div
      className="custom-message"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div>{message.text}</div>
      {hovered && (
        <span
          className="paste-btn"
          onClick={() => setSharedInput(message.text)}
        >
          Paste ➜
        </span>
      )}
    </div>
    </div>
  );
}
 

export default CustomMessage;
