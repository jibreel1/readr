import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import Book from "../assets/books.jpg";

const SignUp = ({ signInWithGoogle, setIsAuth }) => {
   const [registerName, setRegisterName] = useState("");
   const [registerEmail, setRegisterEmail] = useState("");
   const [registerPassword, setRegisterPassword] = useState("");

   let navigate = useNavigate();

   const register = async () => {
      try {
         const user = await createUserWithEmailAndPassword(
            auth,
            registerEmail,
            registerPassword
         );
         localStorage.setItem("isAuth", true);
         setIsAuth(true);
         console.log(user);
         navigate("/");
      } catch (error) {
         console.log(error.message);
      }
   };

   const hoverBox = {
      cursor: "pointer",
      transition: "box-shadow .3s",
      "&:hover": {
         boxShadow: "0px 3px 6px #aaa",
      },
   };
   return (
      <Box className="login">
         <div className="login-content">
            <Box
               sx={{
                  width: { xs: "100%", md: "350px" },
                  margin: { xs: "0", md: "50px auto 50px" },
                  display: "flex",
                  flexDirection: "column",
               }}
            >
               <Typography
                  fontWeight="700"
                  sx={{ fontSize: { xs: "24px", md: "36px" } }}
               >
                  Sign Up
               </Typography>
               <Typography color="#555" mt="15px" mb="32px">
                  Reading brings us unknown friends.
               </Typography>
               <button className="login-google-btn" onClick={signInWithGoogle}>
                  Sign up with Google
               </button>
               <Typography
                  fontSize="11px"
                  color="#888"
                  my="16px"
                  textAlign="center"
               >
                  or Sign up with Email
               </Typography>
               <Box width="100%">
                  <Typography fontWeight="700" mb="10px">
                     Name<sup>*</sup>
                  </Typography>
                  <input
                     type="text"
                     placeholder="Name"
                     onChange={event => {
                        setRegisterName(event.target.value);
                     }}
                  />
               </Box>
               <Box my="20px" width="100%">
                  <Typography fontWeight="700" mb="10px">
                     Email<sup>*</sup>
                  </Typography>
                  <input
                     type="text"
                     placeholder="mail@email.com"
                     onChange={event => {
                        setRegisterEmail(event.target.value);
                     }}
                  />
               </Box>
               <Box width="100%">
                  <Typography fontWeight="700" mb="10px">
                     Password<sup>*</sup>
                  </Typography>
                  <input
                     type="password"
                     placeholder="min 8 character"
                     onChange={event => {
                        setRegisterPassword(event.target.value);
                     }}
                  />
               </Box>
               <Box
                  bgcolor="#0162af"
                  color="#fff"
                  borderRadius="30px"
                  textAlign="center"
                  py="16px"
                  width="100%"
                  my="20px"
                  sx={hoverBox}
                  onClick={register}
               >
                  Sign Up
               </Box>
               <Typography fontWeight="700" alignSelf="center">
                  Already have an Account? <Link to="/login">Login</Link>
               </Typography>
            </Box>
         </div>
         <div className="login-img">
            <img src={Book} alt="books" loading="lazy" />
         </div>
      </Box>
   );
};

export default SignUp;
