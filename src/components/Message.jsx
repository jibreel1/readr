import { useContext, useRef, useEffect } from "react";
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
            message.senderId === currentUser.uid ? "owner" : ""
         }`}
      >
         <div className="messageInfo">
            <p>
               {message.senderId === currentUser.uid
                  ? "You"
                  : message.displayName}
            </p>
         </div>
         <div className="messageContent">
            <p className="username">
               {message.text}
               <span>{HourComplete}</span>
            </p>
         </div>
      </div>
   );
};

export default Message;
