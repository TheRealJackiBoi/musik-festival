import React, {Component, useState, useEffect} from 'react';
import socketIOClient from "socket.io-client";
import ReactPlayer from "react-player";

export function VideoPlayer(video, handleVideoSelect) {
    let videoUrl = "/watch?v=dQw4w9WgXcQ";
    let time = "?t=1m2s"
    let url = "https://www.youtube.com" + videoUrl + time;
    return (
        <div id="video-player">
            <ReactPlayer
                url={url}
                controls="true"
            />
        </div>
    )
}