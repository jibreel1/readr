import { useState, useContext, useEffect } from "react";
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
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../firebase-config";
import Book from "../assets/books.jpg";
import { AuthContext } from "../context/AuthContext";
import { doc, setDoc } from "@firebase/firestore";

const SignUp = ({ signInWithGoogle }) => {
   const [registerName, setRegisterName] = useState("");
   const [registerEmail, setRegisterEmail] = useState("");
   const [registerPassword, setRegisterPassword] = useState("");
   const [showPassword, setShowPassword] = useState("");
   const [error, setError] = useState(false);
   const { currentUser } = useContext(AuthContext);

   let navigate = useNavigate();

   const register = async () => {
      try {
         const res = await createUserWithEmailAndPassword(
            auth,
            registerEmail,
            registerPassword
         );
         await updateProfile(res.user, {
            displayName: registerName,
         });
         await setDoc(doc(db, "users", res.user.uid), {
            uid: res.user.uid,
            registerName,
            registerEmail,
         });
         // await setDoc(doc(db, "userchats", res.user.uid), {});
         // navigate("/");
      } catch (err) {
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
                     Username<sup>*</sup>
                  </Typography>
                  <TextField
                     sx={{
                        ".MuiInputBase-root": {
                           borderRadius: "30px",
                        },
                     }}
                     placeholder="Enter your desired username"
                     label="Username"
                     required
                     fullWidth
                     onChange={event => {
                        setRegisterName(event.target.value) === ""
                           ? setError(true)
                           : setError(false);
                     }}
                     error={error}
                     helperText={error ? "Input a name" : undefined}
                  />
               </Box>
               <Box my="20px" width="100%">
                  <Typography fontWeight="700" mb="10px">
                     Email<sup>*</sup>
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
                        setRegisterEmail(event.target.value);
                     }}
                  />
               </Box>
               <Box width="100%">
                  <Typography fontWeight="700" mb="10px">
                     Password<sup>*</sup>
                  </Typography>
                  <FormControl sx={{ width: "100%" }} variant="outlined">
                     <OutlinedInput
                        placeholder="Enter password"
                        type={showPassword ? "text" : "password"}
                        sx={{ borderRadius: "30px" }}
                        onChange={event => {
                           setRegisterPassword(event.target.value);
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
