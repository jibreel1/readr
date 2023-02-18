import { doc, onSnapshot } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase-config";
import { useLocation } from "react-router-dom";
import Message from "./Message";

const Messages = () => {
   const [messages, setMessages] = useState([]);
   const location = useLocation();

   useEffect(() => {
      const unsub = onSnapshot(doc(db, "chats", location.state.id), doc => {
         doc.exists() && setMessages(doc.data().messages);
      });

      return () => {
         unsub();
      }; // eslint-disable-next-line
   }, []);

   return (
      <div className="messages">
         {messages.map(message => (
            <Message message={message} key={message.id} />
         ))}
      </div>
   );
};

export default Messages;
