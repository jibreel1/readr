import { useState, useEffect, useContext } from "react";
import {
   Box,
   Typography,
   TextField,
   FormControl,
   OutlinedInput,
   InputAdornment,
   IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import Book from "../assets/spidyBook.jpg";
import { AuthContext } from "../context/AuthContext";

const Login = ({ signInWithGoogle }) => {
   const [loginEmail, setLoginEmail] = useState("");
   const [loginPassword, setLoginPassword] = useState("");
   const [showPassword, setShowPassword] = useState("");
   const [error, setError] = useState(false);
   const { currentUser } = useContext(AuthContext);

   let navigate = useNavigate();

   const login = async () => {
      try {
         await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
         // console.log(user);
         navigate("/");
      } catch (error) {
         console.log(error.message);
         setError(true);
      }
   };

   useEffect(() => {
      if (currentUser) {
         navigate("/");
      } // eslint-disable-next-line
   }, []);

   const handleClickShowPassword = () => {
      setShowPassword(!showPassword);
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
                  Login
               </Typography>
               <Typography color="#555" mt="15px" mb="32px">
                  Reading brings us unknown friends.
               </Typography>
               <button className="login-google-btn" onClick={signInWithGoogle}>
                  Sign In with Google
               </button>
               <Typography
                  fontSize="11px"
                  color="#888"
                  my="16px"
                  textAlign="center"
               >
                  or Sign In with Email
               </Typography>
               <Box width="100%">
                  <Typography fontWeight="700" mb="10px">
                     Email <sup>*</sup>
                  </Typography>
                  <TextField
                     sx={{
                        ".MuiInputBase-root": {
                           borderRadius: "30px",
                        },
                     }}
                     placeholder="mail@email.com"
                     label="Email"
                     fullWidth
                     onChange={event => {
                        setLoginEmail(event.target.value);
                     }}
                     helperText={
                        error ? "Recheck your Email and Password" : undefined
                     }
                     error={error}
                  />
               </Box>
               <Box my="20px" width="100%">
                  <Typography fontWeight="700" mb="10px">
                     Password <sup>*</sup>
                  </Typography>
                  <FormControl sx={{ width: "100%" }} variant="outlined">
                     <OutlinedInput
                        placeholder="Enter password"
                        type={showPassword ? "text" : "password"}
                        sx={{ borderRadius: "30px" }}
                        onChange={event => {
                           setLoginPassword(event.target.value);
                        }}
                        endAdornment={
                           <InputAdornment position="end">
                              <IconButton
                                 aria-label="toggle password visibility"
                                 onClick={handleClickShowPassword}
                                 edge="end"
                              >
                                 {showPassword ? (
                                    <VisibilityOff />
                                 ) : (
                                    <Visibility />
                                 )}
                              </IconButton>
                           </InputAdornment>
                        }
                        label="Password"
                        error={error}
                        helpertext={
                           error ? "Recheck your Email and Password" : undefined
                        }
                     />
                  </FormControl>
               </Box>
               <Typography color="#0162af" fontWeight="700" textAlign="right">
                  <Link to="/signup">Forgot Password?</Link>
               </Typography>
               <Box
                  bgcolor="#0162af"
                  color="#fff"
                  borderRadius="30px"
                  textAlign="center"
                  py="16px"
                  width="100%"
                  my="20px"
                  sx={hoverBox}
                  onClick={login}
               >
                  Login
               </Box>
               <Typography fontWeight="700" alignSelf="center">
                  Don't have an account? <Link to="/signup">Sign Up</Link>
               </Typography>
            </Box>
         </div>
         <div className="login-img">
            <img src={Book} alt="books" loading="lazy" />
         </div>
      </Box>
   );
};

export default Login;
