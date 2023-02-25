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
import { Link } from "react-router-dom";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase-config";
import { AuthContext } from "../context/AuthContext";
import LogoText from "../assets/readrtext.png";
import DashboardItem from "../components/DashboardItem";
import LoginDropDown from "../components/LoginDropDown";
import Notifications from "../components/Notifications";

const Dashboard = ({ showLoginLinks, setShowLoginLinks }) => {
   const [dashInfo, setDashInfo] = useState([]);
   const [showNotify, setShowNotify] = useState(null);
   const { currentUser } = useContext(AuthContext);

   const handleClick = event => {
      setShowLoginLinks(event.currentTarget);
   };

   const handleClickNotify = event => {
      setShowNotify(event.currentTarget);
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
            height="55px"
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
                  type="search"
                  width="300px"
                  size="small"
                  sx={{
                     display: { xs: "none", sm: "block" },
                  }}
               />
               <Badge badgeContent={"1"} overlap="circular" color="error">
                  <NotificationsNone
                     cursor="pointer"
                     onClick={handleClickNotify}
                  />
               </Badge>
               <Avatar
                  src={currentUser?.photoURL}
                  referrerPolicy="no-referrer"
                  alt="profile-pic"
                  sx={{ width: 26, height: 26, cursor: "pointer" }}
                  onClick={handleClick}
               />
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
                     <DashboardItem info={info} />
                     <Divider sx={{ borderColor: "#fff", height: "5px" }} />
                  </div>
               ))}
         </Box>
         <LoginDropDown
            showLoginLinks={showLoginLinks}
            setShowLoginLinks={setShowLoginLinks}
         />
         <Notifications showNotify={showNotify} setShowNotify={setShowNotify} />
      </>
   );
};

export default Dashboard;
