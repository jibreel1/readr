// import { useState } from "react";
import { Typography, Divider, Menu, MenuItem } from "@mui/material";

const Notifications = ({ showNotify, setShowNotify }) => {
   //    const [notifyItems, setNotifyItems] = useState([]);

   const open = Boolean(showNotify);

   const handleCloseNotify = () => {
      setShowNotify(null);
   };
   return (
      <Menu
         anchorEl={showNotify}
         id="account-menu"
         open={open}
         onClose={handleCloseNotify}
         onClick={handleCloseNotify}
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
            <Typography component="span" color="#0162af" fontWeight="700">
               Notifications
            </Typography>
         </MenuItem>
         <Divider />
         {/* {AccountLinks.map(link => (
<Link onClick={handleCloseNotify} to={link.path} key={link.id}>
 <MenuItem>{link.name}</MenuItem>
</Link>
))} */}
         <MenuItem component="p" sx={{ fontSize: "13px" }}>
            Empty
         </MenuItem>
      </Menu>
   );
};

export default Notifications;
