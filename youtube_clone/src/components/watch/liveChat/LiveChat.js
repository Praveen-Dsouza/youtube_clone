import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../../utils/storeSlices/chatSlice";
import { generateRandomNames, makeRandomMessage } from "../../../utils/helper";
import send from "../../../utils/icons/watch/send.png"

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const [showChat, setShowChat] = useState(false);
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
        {showChat && 
          <div>
            <div className="w-full h-[600px] ml-2 p-2 border border-gray-300 bg-white rounded-t-lg border-b-0 overflow-y-scroll flex flex-col-reverse">
              {chatMessages.map((chat, index) => (
                <ChatMessage key={index} name={chat.name} message={chat.message} />
              ))}
            </div>
            <form
              className="w-full ml-2 p-2 border border-gray-300 border-b-0 flex"
              onSubmit={(e) => {
                e.preventDefault();
                dispatch(addMessage({ name: "Jon Doe", message: liveMessage }));
                setLiveMessage("");
              }}
            >
              <input
                className="w-96 px-4 py-2 text-sm rounded-full text-gray-700 bg-gray-100 outline-none"
                placeholder="Chat..."
                type="text"
                value={liveMessage}
                onChange={(e) => setLiveMessage(e.target.value)}
              />
              <button className="px-2 mx-2 hover:bg-gray-100 rounded-full"><img className="h-6" src={send} alt="send"/></button>
            </form>
          </div>
        }
        <div className={`${showChat && 'border border-gray-300'} ml-2 w-full p-2`}>
          <button
            className={`${!showChat && 'border border-gray-300'} w-full text-semibold rounded-full hover:bg-gray-200 px-1 py-1`}
            onClick={() => setShowChat(!showChat)}
          >
            {showChat ? "Hide Chat" : "Show Chat"}
          </button>
        </div>
    </>
  );
};

export default LiveChat;
