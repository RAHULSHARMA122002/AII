import React, { useState } from 'react';
import './Right.css';
import { useNavigate } from 'react-router-dom';
import { useChat } from '../../Context/Context';
import PersonIcon from '@mui/icons-material/Person';
import AssistantIcon from '@mui/icons-material/Assistant';


function Right() {
const [question, setQuestion] = useState("");
const [messages, setMessages] = useState([]);
const { ans, setAns} = useChat();
const { sharedInput, setSharedInput } = useChat();



  const handelClick=async(x)=>{
    setAns(x);
    console.log("ans is",ans);


  }

  

  const sendQuestion = async (question) => {
   const userMessage = { role: "user", content: question };
   setMessages(prev => [...prev, userMessage]);
    console.log(question)
  try {
    const res = await fetch('https://aii-1-vgl9.onrender.com/api/query/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question }),

    });
    const data = await res.json();
    console.log('AI Answer:', data.answer);
    const aiResponse = data.answer;

    // Add AI message
    const aiMessage = { role: "ai", content: aiResponse };
    setMessages(prev => [...prev, aiMessage]);

    setQuestion(""); // Clear input
  } catch (error) {
    console.error('Error sending question:', error);
  }
};

  return (
    <div className="right-panel">
      <div className="top-tabs">
        <button className="tab active">AI Copilot</button>
        <button className="tab">Details</button>
        
      </div>
      <hr/>

      <div className="copilot-body">
       <div className="chat-wrapper">
  <div className="chat-messages">
   {messages.map((msg, idx) => (
  <div key={idx} className={`message ${msg.role}`}>
    {msg.role === 'ai' ? (
      <>
        <AssistantIcon /> {msg.content}
        <br />
        <button onClick={() => handelClick(msg.content)} className="butn">Add to composer</button>
      </>
    ) : (
      <>
        <PersonIcon /> {msg.content}
      </>
    )}
  </div>
))}

  </div>
 
</div>
        
        <div className="suggested">
          <button className="suggested-btn">🧠 How do I get a refund?</button>
        </div>

        
      </div>

      <div className="ask-box">
         <input
  type="text"
  placeholder="Ask a question..."
  value={sharedInput}
  onChange={(e) => {
    setSharedInput(e.target.value);
    setQuestion(e.target.value);
  }}
/>

          <button className="send-btn" onClick={() => sendQuestion(question)}>↵</button>
        </div>
    </div>
  );
}

export default Right;
