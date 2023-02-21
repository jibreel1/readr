import { useContext, useEffect, useState } from "react";
import {
   Box,
   Typography,
   TextField,
   Badge,
   Avatar,
   Divider,
} from "@mui/material";
import { NotificationsNone } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase-config";
import { AuthContext } from "../context/AuthContext";
import LogoText from "../assets/readrtext.png";
import DashboardItem from "../components/DashboardItem";
import LoginDropDown from "../components/LoginDropDown";

const Dashboard = ({ showLoginLinks, setShowLoginLinks }) => {
   const [dashInfo, setDashInfo] = useState([]);
   const location = useLocation();
   const { currentUser } = useContext(AuthContext);
   const yes = location.state.yes;
   // console.log(yes);

   const handleClick = event => {
      setShowLoginLinks(event.currentTarget);
   };

   useEffect(() => {
      const getDashInfo = () => {
         const unsub = onSnapshot(
            doc(db, "userchats", currentUser.uid),
            doc => {
               setDashInfo(doc.data());
            }
         );

         return () => {
            unsub();
         };
      };

      currentUser.uid && getDashInfo();
   }, [currentUser.uid]);

   return (
      <>
         <Box
            className="dashboard"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            height="50px"
            sx={{
               px: { xs: "15px", sm: "35px" },
            }}
         >
            <Box className="dashboard_img">
               <Link to="/">
                  <img
                     src={LogoText}
                     alt="logo"
                     className="logotext"
                     loading="lazy"
                  />
               </Link>
            </Box>
            <Box display="flex" alignItems="center" gap="20px">
               <TextField
                  id="standard-search"
                  label="Search"
                  type="search"
                  width="300px"
                  sx={{
                     // height: "40px",
                     display: { xs: "none", sm: "block" },
                     "& .MuiInputBase-input": {
                        padding: "10px 7px",
                        height: "20px",
                     },
                  }}
               />
               <Badge badgeContent={4} color="primary" variant="dot">
                  <NotificationsNone />
               </Badge>
               <Avatar
                  src={currentUser?.photoURL}
                  referrerPolicy="no-referrer"
                  alt="profile-pic"
                  sx={{ width: 26, height: 26, cursor: "pointer" }}
                  onClick={handleClick}
               />
               <Typography
                  component="h3"
                  color="#0162af"
                  fontWeight="700"
                  sx={{
                     display: { xs: "none", sm: "block" },
                  }}
               >
                  {currentUser?.displayName}
               </Typography>
            </Box>
         </Box>
         <Box
            sx={{
               px: { xs: "15px", sm: "32px" },
               fontSize: { xs: "11px", sm: "13px" },
            }}
         >
            <Box
               display="flex"
               height="50px"
               alignItems="center"
               backgroundColor="rgb(248, 249, 253)"
               // pl="15px"
               sx={{
                  textAlign: { xs: "center", sm: "left" },
                  gap: { xs: "5px", sm: "10px" },
                  px: { xs: "10px", sm: "15px" },
               }}
            >
               <Typography
                  sx={{
                     flex: { xs: "1", sm: "2" },
                  }}
               >
                  Title
               </Typography>
               <Typography flex="1">Author</Typography>
               <Typography
                  flex="1"
                  sx={{
                     display: { xs: "none", sm: "block" },
                  }}
               >
                  Rating
               </Typography>
               <Typography flex="1">Status</Typography>
               <Typography flex="1">Action</Typography>
            </Box>
            <Divider sx={{ borderColor: "#fff", height: "5px" }} />
            {Object.entries(dashInfo)
               ?.sort((a, b) => b[1].date - a[1].date)
               .map(info => (
                  <div key={info[0]}>
                     <DashboardItem info={info} yes={yes} />
                     <Divider sx={{ borderColor: "#fff", height: "5px" }} />
                  </div>
               ))}
         </Box>
         <LoginDropDown
            showLoginLinks={showLoginLinks}
            setShowLoginLinks={setShowLoginLinks}
         />
      </>
   );
};

export default Dashboard;
