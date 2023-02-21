import { useContext } from "react";
import {
   Typography,
   Menu,
   MenuItem,
   Divider,
   ListItemIcon,
} from "@mui/material";
import { Logout } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";

const LoginDropDown = ({ showLoginLinks, setShowLoginLinks }) => {
   let navigate = useNavigate();
   const yes = true;
   // const no = true;

   const open = Boolean(showLoginLinks);

   const handleClose = () => {
      setShowLoginLinks(null);
   };

   const { currentUser } = useContext(AuthContext);

   const signUserOut = () => {
      signOut(auth).then(() => {
         handleClose();
         navigate("/login");
      });
   };

   const AccountLinks = [
      {
         id: "1",
         name: "Dashboard",
         path: "/dashboard",
      },
      {
         id: "2",
         name: "Profile",
         path: "/",
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
      <Menu
         anchorEl={showLoginLinks}
         id="account-menu"
         open={open}
         onClose={handleClose}
         onClick={handleClose}
         PaperProps={{
            elevation: 0,
            sx: {
               overflow: "visible",
               filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
               mt: 1.5,
               "& .MuiMenuItem-root": {
                  minHeight: "0",
               },
               "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
               },
            },
         }}
         transformOrigin={{ horizontal: "right", vertical: "top" }}
         anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
         <MenuItem>
            <Typography>
               <Typography component="span" color="#0162af" fontWeight="700">
                  {currentUser?.displayName}
               </Typography>{" "}
               is logged in
            </Typography>
         </MenuItem>
         <Divider />
         {AccountLinks.map(link => (
            <Link
               onClick={handleClose}
               to={link.path}
               key={link.id}
               state={{ yes: yes }}
            >
               <MenuItem>{link.name}</MenuItem>
            </Link>
         ))}
         <Divider />
         <MenuItem onClick={signUserOut}>
            <ListItemIcon>
               <Logout fontSize="small" />
            </ListItemIcon>
            Logout
         </MenuItem>
      </Menu>
   );
};

export default LoginDropDown;
