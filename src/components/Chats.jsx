import { Box } from "@mui/material";
import Input from "./Input";
import Messages from "./Messages";

const Chats = () => {
   return (
      <Box
         className="chats"
         flex="1"
         bgcolor="#F6F8FA"
         sx={{
            ml: { xs: "50px", md: "30px" },
            mr: { xs: "50px", md: "0" },
            mt: { xs: "20px", md: "0" },
            display: { xs: "none", md: "block" },
            height: "450px",
         }}
         mx="20px"
         borderRadius="10px"
      >
         <Box height="100%">
            <Messages />
            <Input />
         </Box>
      </Box>
   );
};

export default Chats;
