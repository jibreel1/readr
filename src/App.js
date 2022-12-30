import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import { collection, getDocs } from "firebase/firestore";
import { db, auth, provider } from "./firebase-config";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";

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
   const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
   const [user, setUser] = useState({});
   const [books, setBooks] = useState([]);
   const [loading, setLoading] = useState(false);
   let navigate = useNavigate();

   const signInWithGoogle = () => {
      signInWithPopup(auth, provider).then(result => {
         localStorage.setItem("isAuth", true);
         setIsAuth(true);
         navigate("/");
      });
   };

   useEffect(() => {
      onAuthStateChanged(auth, currentUser => {
         setUser(currentUser);
      });
   }, []);

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
      <Routes>
         <Route element={<WithoutNav />}>
            <Route
               path="/login"
               element={
                  <Login
                     signInWithGoogle={signInWithGoogle}
                     setIsAuth={setIsAuth}
                     isAuth={isAuth}
                  />
               }
            />
            <Route
               path="/signup"
               element={
                  <SignUp
                     signInWithGoogle={signInWithGoogle}
                     setIsAuth={setIsAuth}
                     isAuth={isAuth}
                  />
               }
            />
            <Route
               path="/dashboard"
               element={<Dashboard user={user} isAuth={isAuth} />}
            />
            <Route path="/book/:id" element={<EbookReader books={books} />} />
         </Route>
         <Route
            element={
               <WithNav isAuth={isAuth} setIsAuth={setIsAuth} user={user} />
            }
         >
            <Route
               path="/"
               element={<Home books={books} loading={loading} />}
            />
            <Route path="/ebooks" element={<Ebooks />} />
         </Route>
      </Routes>
   );
};

export default App;
