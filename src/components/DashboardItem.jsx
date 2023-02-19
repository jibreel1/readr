import { Box, Typography, Rating, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Pic from "../assets/spidyBook.jpg";

const DashboardItem = () => {
   return (
      <Box
         display="flex"
         height="80px"
         alignItems="center"
         backgroundColor="rgb(248, 249, 253)"
         sx={{
            textAlign: { xs: "center", sm: "left" },
            gap: { xs: "5px", sm: "10px" },
            px: { xs: "10px", sm: "15px" },
         }}
      >
         <Box
            display="flex"
            gap="15px"
            alignItems="center"
            sx={{
               flex: { xs: "1", sm: "2" },
               justifyContent: { xs: "center", sm: "flex-start" },
            }}
         >
            <img src={Pic} alt="cover-page" className="cover-page" />
            <Typography
               fontSize="inherit"
               fontWeight="700"
               sx={{
                  textAlign: { xs: "center", sm: "left" },
               }}
            >
               The Peaky Blinders
            </Typography>
         </Box>
         <Box flex="1">
            <Typography fontSize="inherit">Thomas Shelby</Typography>
         </Box>
         <Box
            flex="1"
            sx={{
               display: { xs: "none", sm: "block" },
            }}
         >
            <Rating defaultValue={5} precision={0.5} readOnly size="small" />
         </Box>
         <Box flex="1">
            <Typography
               fontSize="inherit"
               sx={{
                  bgcolor: { xs: "none", sm: "#ff00004d" },
                  display: "inline-block",
                  p: { xs: "0", sm: "5px 10px" },
                  borderRadius: "20px",
               }}
            >
               Not Completed
            </Typography>
         </Box>
         <Box flex="1">
            <Link to="/">
               <Button
                  variant="contained"
                  sx={{
                     fontWeight: "500",
                     fontSize: { xs: "10px", sm: "13px" },
                     p: "5px 10px",
                  }}
               >
                  Continue
               </Button>
            </Link>
         </Box>
      </Box>
   );
};

export default DashboardItem;
