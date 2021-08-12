import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Pusher from 'pusher-js';
import React, {useEffect, useState} from 'react';
import axios from './axios';

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('/messages/sync')
    .then((response) =>{
      setMessages(response.data);
    })
  }, []);

  useEffect(()=>{
    const pusher = new Pusher('5b5e704f50e3ed6470d2', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage]);
    });

    return () =>{
      channel.unbind_all();
      channel.unsubscribe();
    };

  }, [messages]);

  return (
    <div className="app">
      <div className="app__body">
      {/* sidebar */}
      <Sidebar/>
      {/* chat */}
      <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
