import { useRef } from "react";
import { Box } from "@mui/material";
import Input from "./Input";
import Messages from "./Messages";

const Chats = () => {
   const scroll = useRef();
   return (
      <Box
         className="chats"
         height="600px"
         flex="1"
         bgcolor="#F6F8FA"
         sx={{
            mx: { xs: "20px", sm: "50px", md: "80px", lg: "20px" },
            mt: { xs: "20px", lg: "0" },
         }}
         mx="20px"
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
