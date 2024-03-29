import { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, Avatar } from "@mui/material";
import { SearchOutlined, MenuOutlined } from "@mui/icons-material";
import Logo from "../assets/logo.png";
import SideBar from "./SideBar";
import LoginDropDown from "./LoginDropDown";
import { AuthContext } from "../context/AuthContext";

const Navbar = ({ links, showLoginLinks, setShowLoginLinks }) => {
   const [showSideBar, setShowSideBar] = useState(false);
   const { currentUser } = useContext(AuthContext);
   const location = useLocation();

   const toggleSidebar = () => {
      showSideBar === true ? setShowSideBar(false) : setShowSideBar(true);
   };

   const handleClick = event => {
      setShowLoginLinks(event.currentTarget);
   };

   return (
      <Box
         component="nav"
         className="navbar"
         sx={{
            px: { xs: "20px", sm: "32px", md: "54px", lg: "72px" },
         }}
      >
         <Box
            className="navbar_img"
            sx={{ width: { xs: "70px", md: "100px" } }}
         >
            <Link to="/">
               <img src={Logo} alt="logo" className="logo" loading="lazy" />
            </Link>
         </Box>
         <Box
            component="ul"
            className="navbar_links"
            sx={{
               display: { xs: "none", sm: "flex" },
               gap: { sm: "20px", md: "28px", lg: "45px" },
               color: "#0162af",
               fontSize: { sm: "16px", md: "18px" },
            }}
         >
            {links.map(link => (
               <li
                  key={link.id}
                  className={location.pathname === link.path ? "active" : ""}
               >
                  <Link to={link.path}>{link.name}</Link>
               </li>
            ))}
         </Box>
         <Box
            sx={{
               display: "flex",
               alignItems: "center",
               gap: { xs: "10px", sm: "18px" },
               color: "#0162af",
            }}
         >
            <SearchOutlined
               cursor="pointer"
               sx={{ display: { xs: "none", sm: "block" } }}
            />
            <Box position="relative" onClick={handleClick}>
               {currentUser && (
                  <Avatar
                     src={currentUser?.photoURL}
                     referrerPolicy="no-referrer"
                     alt="profile-pic"
                     sx={{ width: 26, height: 26, cursor: "pointer" }}
                  />
               )}
            </Box>
            <MenuOutlined
               sx={{ display: { xs: "block", sm: "none" }, cursor: "pointer" }}
               onClick={() => {
                  setShowSideBar(!showSideBar);
               }}
            />
            {!currentUser && (
               <Box
                  className="btn"
                  sx={{
                     display: { xs: "none", sm: "block" },
                     bgcolor: "#0162af",
                     px: { xs: "24px" },
                     py: { xs: "12px" },
                     color: "#fff",
                     fontSize: { sm: "18px" },
                     fontWeight: "500",
                     cursor: "pointer",
                     borderRadius: "30px",
                  }}
               >
                  <Link to="/login">Sign In</Link>
               </Box>
            )}
         </Box>
         <SideBar
            toggle={toggleSidebar}
            links={links}
            showSideBar={showSideBar}
         />
         <LoginDropDown
            showLoginLinks={showLoginLinks}
            setShowLoginLinks={setShowLoginLinks}
         />
      </Box>
   );
};

export default Navbar;
