import { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";

const LoginDropDown = ({
   showLoginLinks,
   setShowLoginLinks,
   // setIsAuth,
   // user,
}) => {
   let navigate = useNavigate();

   const { currentUser } = useContext(AuthContext);

   const signUserOut = () => {
      signOut(auth).then(() => {
         navigate("/login");
      });
   };

   const loginLinks = [
      {
         id: "1",
         name: "Dashboard",
         path: "#!",
      },
      {
         id: "2",
         name: "Profile",
         path: "/login",
      },
      {
         id: "3",
         name: "Edit Profile",
         path: "#!",
      },
      {
         id: "4",
         name: "Help center",
         path: "#!",
      },
   ];

   return (
      <Box className={`drop-down ${showLoginLinks === true ? "active" : ""}`}>
         <Typography borderBottom="1px solid #ccc" pb="8px">
            <Typography component="span" color="#0162af" fontWeight="700">
               {currentUser?.displayName}
            </Typography>{" "}
            is logged in
         </Typography>
         {loginLinks.map(link => (
            <Link
               className="links"
               to={link.path}
               key={link.id}
               onClick={() => setShowLoginLinks(false)}
            >
               {link.name}
            </Link>
         ))}
         <Typography
            fontWeight="700"
            color="red"
            borderTop="1px solid #ccc"
            sx={{ cursor: "pointer" }}
            onClick={signUserOut}
         >
            Sign out
         </Typography>
      </Box>
   );
};

export default LoginDropDown;
