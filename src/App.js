import React, { useEffect, useState } from "react";
import "./App.css";

// Project Console: https://console.firebase.google.com/project/facebook-messenger-clone-3ab5f/overview
// Hosting URL: https://facebook-messenger-clone-3ab5f.web.app

import {
  Button,
  FormControl,
  Input,
  InputLabel,
  IconButton,
} from "@material-ui/core";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";

import logoFacebookMessenger from "./assets/logo-facebook-messenger.png";

function App() {
  // use state adalah memori singkat seperti ram ketika di refresh akan hilang
  // useState adalah variable react
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    // { username: "fahmi", message: "hai" },
    // { username: "faisal", message: "thanks to you" },
  ]);
  const [username, setUsername] = useState("");

  // use effect adalah menjalan code ketika kondisi tertentu

  useEffect(() => {
    // run once when the app components loads
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshost) => {
        setMessages(
          snapshost.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(
    () => {
      // run code here
      // ketika ini didala condition [] kosong, maka hanya dirun 1 kali ketika components di load
      // const username = prompt("Please enter your name");
      setUsername(prompt("Please enter your name"));

      // return () => {
      //   // cleanup
      // };
    },
    [] //condition
  );

  // console.log(input);
  // console.log(messages);

  const sendMessange = (event) => {
    // all the logic to send a message goes
    event.preventDefault();

    // add data ke firebase
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    // setMessages([...messages, { username: username, message: input }]);
    setInput("");
  };

  return (
    <div className="App">
      <img src={logoFacebookMessenger} alt="Facebook messenger" />
      <h1>Facebook messengger clone</h1>
      <h2>Welcome {username === "" ? "Unkown User" : username}</h2>

      <form className="app__form">
        <FormControl className="app__formControl">
          {/* <InputLabel>Enter a message</InputLabel> */}
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Enter a message..."
            className="app__input"
          />
          <IconButton
            type="submit"
            onClick={sendMessange}
            variant="contained"
            color="primary"
            disabled={!input}
            className="app__iconButton"
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      <FlipMove>
        {/* messages themselves */}
        {messages.map(({ message, id }) => (
          <Message username={username} message={message} key={id} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
