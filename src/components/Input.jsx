import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import {
   arrayUnion,
   doc,
   updateDoc,
   Timestamp,
   serverTimestamp,
} from "@firebase/firestore";
import { useLocation } from "react-router-dom";
import { db } from "../firebase-config";
import { v4 as uuid } from "uuid";
import SendIcon from "@mui/icons-material/Send";

const Input = () => {
   const [text, setText] = useState("");
   const location = useLocation();
   const { currentUser } = useContext(AuthContext);

   const handleSend = async () => {
      if (text === "") {
         return;
      } else {
         await updateDoc(doc(db, "chats", location.state.id), {
            messages: arrayUnion({
               id: uuid(),
               text,
               displayName: currentUser.displayName,
               senderId: currentUser.uid,
               date: Timestamp.now(),
            }),
         });
      }
      await updateDoc(doc(db, "userchats", currentUser.uid), {
         [location.state.id + ".messages"]: {
            text,
         },
         [location.state.id + ".date"]: serverTimestamp(),
      });
      setText("");
   };

   const handleKeyDown = e => {
      if (e.key === "Enter") {
         handleSend();
      }
   };

   return (
      <div className="input">
         <input
            type="text"
            placeholder="Type something..."
            onChange={e => setText(e.target.value)}
            onKeyDown={handleKeyDown}
            value={text}
         />
         <button onClick={handleSend}>
            <SendIcon />
         </button>
      </div>
   );
};

export default Input;
