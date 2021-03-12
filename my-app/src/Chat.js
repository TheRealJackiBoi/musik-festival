import React, {Component, useState, useEffect} from 'react';


import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:8000/";

export function Chat() {

    let number = 0

    const [response, setResponse] = useState("");

    useEffect(() => {
     const socket = socketIOClient("http://localhost:8000");
      socket.on("Update", data => {
       //setResponse(data);
       console.log(data);
      });
    }, []);

    
        return(
            <div>
            <h1>{number}</h1>
            </div>
        );
}