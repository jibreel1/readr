import { Box, List, ListItem, Divider, Drawer } from "@mui/material";
import { Link } from "react-router-dom";

const SideBar = ({ toggle, links, showSideBar }) => {
   return (
      <Box sx={{ display: { xs: "none" } }}>
         <Drawer anchor="right" open={showSideBar} onClose={toggle}>
            <Box
               sx={{ width: 250, mt: "30px" }}
               role="presentation"
               onClick={toggle}
               onKeyDown={toggle}
            >
               <List>
                  {links.map(link => (
                     <div key={link.id}>
                        <ListItem
                           onClick={toggle}
                           sx={{ my: "5px", fontSize: "18px" }}
                        >
                           <Link to={link.path}>{link.name}</Link>
                        </ListItem>
                        <Divider />
                     </div>
                  ))}
               </List>
            </Box>
         </Drawer>
      </Box>
   );
};

export default SideBar;
