import React, {Component, useState, useEffect} from 'react';


import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:8000/";

const socket = socketIOClient("http://localhost:8000");



export function Chat() {
    
    let number = 0

    //let {chat} = useState(0);

    const [response, setResponse] = useState([]);
    useEffect(() => {
        
        socket.on("NewMessage", data => {
            setResponse(response => response.concat(data));
       });
        
      
   }, []);

    
        return(
            <div id="chat">
                <div id="chat-messages">
                {response.map((msg) => 
                    <div >
                        <h2>{msg.sender}</h2>
                        <p>{msg.message}</p>
                    </div>
                    )}
                </div>
                <div id="chat-input">

                <input id="text" placeholder="Chat here...">
                </input>

                <button onClick={() => {
                    const textBox = document.getElementById('text');
                    const newMessage = {sender: "user", message: textBox.value}
                    textBox.value = "";
                    socket.emit("addMessage", newMessage);
                    setResponse(response => response.concat(newMessage));
               }}>Send</button>
            </div>
                    
              
            </div>
        );
}