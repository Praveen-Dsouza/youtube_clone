import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../../utils/storeSlices/chatSlice";
import { generateRandomNames, makeRandomMessage } from "../../../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const interval = setInterval(() => {
      // API Polling
      dispatch(
        addMessage({
          name: generateRandomNames(),
          message: makeRandomMessage(20),
        })
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((chat, index) => (
          <ChatMessage key={index} name={chat.name} message={chat.message} />
        ))}
      </div>
      <form
        className="w-full ml-2 p-2 border border-black flex"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({ name: "Jon Doe", message: liveMessage }));
          setLiveMessage("");
        }}
      >
        <input
          className="w-80 px-2 border border-black"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
