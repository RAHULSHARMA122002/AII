import React, { useEffect, useState } from 'react';

import './Dashboard.css'
import Leftbar from '../Leftbar/Leftbar'
import Mid from '../Mid/Mid'
import Right from '../Right/Right'
import Navbar from '../Namvbar/Navbar';
function Dashboard({chatClient}) {
  const [channel, setChannel] = useState(null);

  useEffect(() => {
    const fetchChannel = async () => {
      const channel = chatClient.channel('messaging', 'general', {
        name: 'General Support Chat',
      });
      await channel.watch(); // fetch existing or create if not exist
      setChannel(channel);
    };

    fetchChannel();
  }, [chatClient]);
  return (
      <>
       
       <div  className="Dashboardcont">
        <Leftbar/>
       
       {channel ? (
  <Mid channel={channel} chatClient={chatClient} />
) : (
  <div className="MidCon">Loading channel...</div>
)}

        <Right/>
      </div>
      
      </>
      
    
  )
}

export default Dashboard;
