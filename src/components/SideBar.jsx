import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { CloseOutlined } from "@mui/icons-material";

const SideBar = ({ toggle, links, showSideBar, isAuth }) => {
   return (
      <Box
         sx={{ display: { sm: "none" } }}
         className={`sidebar ${showSideBar === true ? "active" : ""}`}
      >
         <div className="close" onClick={toggle}>
            <CloseOutlined />
         </div>
         <ul className="sidebar_links">
            {links.map(link => (
               <li key={link.id} onClick={toggle}>
                  <Link to={link.path}>{link.name}</Link>
               </li>
            ))}
         </ul>
         {!isAuth && (
            <Box
               className="btn"
               sx={{
                  bgcolor: "#0162af",
                  px: "30px",
                  py: "15px",
                  color: "#fff",
                  fontSize: "20px",
                  fontWeight: "500",
                  cursor: "pointer",
                  borderRadius: "30px",
               }}
               onClick={toggle}
            >
               <Link to="/login">Sign In</Link>
            </Box>
         )}
      </Box>
   );
};

export default SideBar;
