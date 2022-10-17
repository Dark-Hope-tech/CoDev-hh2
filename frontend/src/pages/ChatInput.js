/* eslint-disable */
import React, { useState, useEffect } from "react";
import { api } from "../api";
//import socketIOClient from "socket.io-client";
import io from "socket.io-client";
import { set } from "mongoose";

export default function ChatInput({
  user,
  clickedUser,
  getUserMessages,
  updateMessage,
  getClickedUserMessages,
}) {
  const [textArea, setTextArea] = useState("");
  const [msg, setMsg] = useState("");
  const [socket, setSocket] = useState(null);
  const userId = user?.user_id;
  const clickUserId = clickedUser?.user_id;

   // establish socket connection
   useEffect(() => {
    setSocket(io('http://localhost:8080'));
  }, []);

  // subscribe to the socket event
  useEffect(() => {
    if (!socket) return;
 
    socket.on('connect', () => {
      //setSocketConnected(socket.connected);
      //subscribeToDateEvent();
    });
    socket.on('disconnect', () => {
      //setSocketConnected(socket.connected);
    });
 
    socket.on("receivedMessage", data => {
      console.log(data);
      getClickedUserMessages();
    });

    // if(textArea.length > 0){
    //   const ms = {
    //     timestamp: new Date().toISOString(),
    //     from_userId: userId,
    //     to_userId: clickUserId,
    //     message_data: textArea,
    //   };
    //   socket.emit('sendMessage', {msg: ms});
    // }
 
  }, [socket, textArea]);


  const addMessage = async () => {
    if (textArea.trim().length === 0) {
      return;
    }
    const message = {
      timestamp: new Date().toISOString(),
      from_userId: userId,
      to_userId: clickUserId,
      message_data: textArea,
    };

    try {
      await api.postMessage(message);
      socket.emit('sendMessage', {msg: message});
      getUserMessages();
      getClickedUserMessages();
      setTextArea("");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex flex-row justify-center pt-1 pb-1 items-center bg-white w-[90%] md:w-[60%] rounded-bl-xl rounded-br-xl border-slate-700 border-opacity-20 border-b-2 border-l-2 border-r-2">
      <textarea
        value={textArea}
        onChange={(e) => setTextArea(e.target.value)}
        className="rounded-xl text-sm w-[80%] resize-none focus:outline-none p-2 h-10 border-slate-700 border-opacity-20 border"
      />
      <button
        onClick={addMessage}
        className="text-white bg-gradient-to-r from-[#fd2f6e] to-[#fe5740] px-2 py-1 md:px-3 md:py-2 m-2 rounded-full font-semibold w-fit text-lg md:text-xl cursor-pointer hover:from-[#FFD9C0] hover:to-[#FFD9C0] hover:text-[#fe5740] border-1 border-[#fe5740]"
      >
        <i className="fa-solid fa-paper-plane"></i>
      </button>
    </div>
  );
}
