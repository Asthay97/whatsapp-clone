import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import Pusher from "pusher-js";
import axios from "./Axios";

import "./App.css";
import Login from "./components/Login";
import { useStateValue } from "./StateProvider";
import Welcome from "./components/Welcome";

const App = () => {
  const [{ user }, dispatch] = useStateValue();

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("/messages/sync").then((res) => {
      setMessages(res.data);
    });
  }, []);

<<<<<<< HEAD
  useEffect(() => {
    const pusher = new Pusher("5b5e704f50e3ed6470d2", {
      cluster: "ap2",
=======
  useEffect(()=>{
    const pusher = new Pusher('<add from javascript code in pusher tool>', {
      cluster: 'ap2'
>>>>>>> e347bd64d1488a74896d34cc1a6aaca69b79e490
    });
    const channel = pusher.subscribe("messages");

    channel.bind("inserted", (newMessage) => {
      setMessages([...messages, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  console.log(window.innerWidth);

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app-body">
          <Router>
            <Sidebar messages={messages} />
            <Switch>
              <Route path="/rooms/:ROOMID">
                <Chat messages={messages} />
              </Route>
              <Route path="/">
                <Welcome />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
};

export default App;
