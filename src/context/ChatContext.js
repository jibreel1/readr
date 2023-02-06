import { createContext, useReducer } from "react";
// import { doc, getDoc } from "@firebase/firestore";
import { useLocation } from "react-router-dom";
// import { AuthContext } from "./AuthContext";
// import { db } from "../firebase-config";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
   // const { currentUser } = useContext(AuthContext);
   const INITIAL_STATE = {
      chatId: "null",
      user: {},
   };
   // const ebookRef = doc(db, "books", location.state.id);
   // const docSnap = getDoc(ebookRef);
   const location = useLocation();

   const chatReducer = (state, action) => {
      switch (action.type) {
         case "CHANGE_USER":
            return {
               user: action.payload,
               chatId: location.state.id,
            };
         default:
            return state;
      }
   };

   // console.log(location.state.id);
   const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

   return (
      <ChatContext.Provider value={{ data: state, dispatch }}>
         {children}
      </ChatContext.Provider>
   );
};
