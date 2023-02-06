import { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";

const Message = ({ message }) => {
   const { currentUser } = useContext(AuthContext);

   let timestamp = message.date;
   let newDate = new Date(timestamp * 1000);
   let Hours = newDate.getHours();
   let Minutes = newDate.getMinutes();
   const HourComplete = Hours + ":" + Minutes;

   const ref = useRef();
   useEffect(() => {
      ref.current?.scrollIntoView({ behavior: "smooth" });
   }, [message]);

   return (
      <div
         ref={ref}
         className={`message ${
            message.senderId === currentUser.uid && "owner"
         }`}
      >
         <div className="messageInfo">
            <p>
               {message.senderId === currentUser.uid
                  ? currentUser.displayName
                  : message.displayName}
            </p>
            <span>{HourComplete}</span>
         </div>
         <div className="messageContent">
            <p className="username">{message.text}</p>
         </div>
      </div>
   );
};

export default Message;
