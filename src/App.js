import React, { useEffect, useState } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import 'stream-chat-react/dist/css/v2/index.css';
import Dashboard from './Components/Dashboard/Dashboard';
import { BrowserRouter } from 'react-router-dom';
import { ChatProvider } from '../src/Context/Context';
const API__KEY ="t7jn43vavsfm";

const userId = 'support-agent';
const chatClient = StreamChat.getInstance(API__KEY);


function App() {
  const [clientReady, setClientReady] = useState(false);

  useEffect(() => {
    const init = async () => {
     const res = await fetch(`https://aii-1-vgl9.onrender.com/token?userId=${userId}`);


      const data = await res.json();

      if (!chatClient.userID) {
        await chatClient.connectUser(
          {
            id: userId,
            name: 'Support Agent',
          },
          data.token
        );
      }

      setClientReady(true);
    };

    init();

    return () => {
      chatClient.disconnectUser();
    };
  }, []);

  if (!clientReady) return <div>Loading Chat...</div>;

  return (
    <ChatProvider>
    
     <Chat client={chatClient} theme="messaging-light">
      <Dashboard chatClient={chatClient} />
    </Chat>
    </ChatProvider>
    
  );
}

export default App;
