// Context.js
import React, { createContext, useContext, useState } from 'react';

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [ans, setAns] = useState('');
  const [sharedInput, setSharedInput] = useState(''); // 👈 Add this

  return (
    <ChatContext.Provider value={{ ans, setAns, sharedInput, setSharedInput }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);
