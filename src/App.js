import { useContext, useEffect, useState } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";

import { collection, getDocs, getDoc, setDoc, doc } from "firebase/firestore";
import { db, auth, provider } from "./firebase-config";
import { signInWithPopup } from "firebase/auth";
import { AuthContext } from "./context/AuthContext";
import Home from "./pages/Home";
import Ebooks from "./pages/Ebooks";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import EbookReader from "./pages/EbookReader";
import WithoutNav from "./components/WithoutNav";
import WithNav from "./components/WithNav";

import "./styles.scss";

const App = () => {
   const [books, setBooks] = useState([]);
   const [showLoginLinks, setShowLoginLinks] = useState(null);
   const [loading, setLoading] = useState(false);
   const { currentUser } = useContext(AuthContext);
   let navigate = useNavigate();

   const ProtectedRoute = ({ children }) => {
      if (!currentUser) {
         return <Navigate to="/login" />;
      }
      return children;
   };

   const signInWithGoogle = async () => {
      try {
         const res = await signInWithPopup(auth, provider);

         await setDoc(doc(db, "users", res.user.uid), {
            uid: res.user.uid,
            registerName: res.user.displayName,
            registerEmail: res.user.email,
         });
         const resChat = await getDoc(doc(db, "userchats", res.user.uid));
         if (!resChat.exists()) {
            await setDoc(doc(db, "userchats", res.user.uid), {});
         }
         navigate("/");
      } catch (err) {
         console.log(err);
      }
   };

   const booksCollectionRef = collection(db, "books");

   useEffect(() => {
      const getBooks = async () => {
         setLoading(true);
         const data = await getDocs(booksCollectionRef);
         setBooks(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
         setLoading(false);
         // console.log(setBooks);
      };
      getBooks(); // eslint-disable-next-line
   }, []);

   return (
      <>
         <Routes>
            <Route element={<WithoutNav />}>
               <Route
                  path="/login"
                  element={<Login signInWithGoogle={signInWithGoogle} />}
               />
               <Route
                  path="/signup"
                  element={<SignUp signInWithGoogle={signInWithGoogle} />}
               />
               <Route
                  path="/dashboard"
                  element={
                     <Dashboard
                        showLoginLinks={showLoginLinks}
                        setShowLoginLinks={setShowLoginLinks}
                     />
                  }
               />
               <Route
                  path="/book/:id"
                  element={
                     <EbookReader
                        showLoginLinks={showLoginLinks}
                        setShowLoginLinks={setShowLoginLinks}
                     />
                  }
               />
            </Route>
            <Route
               element={
                  <WithNav
                     showLoginLinks={showLoginLinks}
                     setShowLoginLinks={setShowLoginLinks}
                  />
               }
            >
               <Route
                  path="/"
                  element={
                     <ProtectedRoute>
                        <Home books={books} loading={loading} />
                     </ProtectedRoute>
                  }
               />
               <Route path="/ebooks" element={<Ebooks books={books} />} />
            </Route>
         </Routes>
      </>
   );
};

export default App;
