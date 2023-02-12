import { useRef } from "react";
import { Box } from "@mui/material";
import Input from "./Input";
import Messages from "./Messages";

const Chats = () => {
   const scroll = useRef();
   return (
      <Box
         className="chats"
         flex="1"
         bgcolor="#F6F8FA"
         sx={{
            display: { xs: "block", md: "none" },
            height: "450px",
         }}
         borderRadius="10px"
      >
         <Box height="100%">
            <Messages scroll={scroll} />
            <Input scroll={scroll} />
         </Box>
      </Box>
   );
};

export default Chats;
