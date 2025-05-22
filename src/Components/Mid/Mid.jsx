import React, { useState, useEffect } from 'react';
import { Chat, Channel, Window, MessageList } from 'stream-chat-react';
import 'stream-chat-react/dist/css/v2/index.css';
import './Mid.css';
import { useChat } from '../../Context/Context';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import CustomMessage from '../CustomMessage.jsx';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';

function Mid({ channel, chatClient }) {
  const { ans } = useChat();
  const chatChannel = chatClient.channel('messaging', channel.id);

  const [message, setMessage] = useState('');

  // Update message input when ans changes
  useEffect(() => {
    if (ans) {
      setMessage(ans);
    }
  }, [ans]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (message.trim() === '') return;

    try {
      await chatChannel.sendMessage({ text: message });
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const [hovered, setHovered] = useState(false);
const { sharedInput, setSharedInput } = useChat();
  const helloButton=()=>{
    setSharedInput()
  }

  return (
    <div>
      <div className='top'>
  <span className="top-left">Luis easton</span>
  <div className="top-right">
    <span><MoreHorizIcon /></span>
    <span><NightsStayIcon /></span>
    <span className='cancel'><CancelPresentationIcon /></span>
  </div>
</div>
      <Chat client={chatClient} theme="messaging-light">
      <Channel channel={chatChannel}>
        <Window
          className="window"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <MessageList className="MidC" />
          {hovered && <button onClick={()=>{

          }}>Paste</button>}

          {/* Custom input form */}
          <form onSubmit={sendMessage} className="custom-input-form">
            <input
              type="text"
              className="INputt"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              autoComplete="off"
            />
            <button type="submit">Send</button>
          </form>
        </Window>
      </Channel>
    </Chat>



    </div>
    
  );
}

export default Mid;
