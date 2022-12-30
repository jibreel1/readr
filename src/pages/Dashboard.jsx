// import { useEffect } from "react";
import { Box, Typography, TextField, Badge, Avatar } from "@mui/material";
import { NotificationsNone } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";
import Logo from "../assets/logo.png";

const Dashboard = ({ isAuth, user }) => {
   // let navigate = useNavigate();

   // useEffect(() => {
   // 	if (!isAuth) {
   // 	   navigate("/signup");
   // 	} // eslint-disable-next-line
   //  }, []);

   return (
      <Box
         className="dashboard"
         display="flex"
         alignItems="center"
         justifyContent="space-between"
         height="80px"
         sx={{
            px: { xs: "20px", sm: "32px" },
         }}
      >
         <Box
            className="dashboard_img"
            sx={{ width: { xs: "40px", md: "70px" } }}
         >
            <Link to="/">
               <img src={Logo} alt="logo" className="logo" loading="lazy" />
            </Link>
         </Box>
         <Box display="flex" alignItems="center" gap="20px">
            <TextField
               id="standard-search"
               label="Search"
               type="search"
               width="300px"
            />
            <Badge badgeContent={4} color="primary" variant="dot">
               <NotificationsNone />
            </Badge>
            <Avatar
               src={auth?.currentUser?.photoURL}
               referrerPolicy="no-referrer"
               alt="profile-pic"
               sx={{ width: 26, height: 26, cursor: "pointer" }}
            />
            <Typography component="h3" color="#0162af" fontWeight="700">
               {user?.displayName || "User"}
            </Typography>
         </Box>
      </Box>
   );
};

export default Dashboard;
