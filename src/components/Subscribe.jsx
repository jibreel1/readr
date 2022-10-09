import { Box, Typography } from "@mui/material";
import { Mail, Call } from "@mui/icons-material";

const Subscribe = () => {
   return (
      <Box
         className="subscribe"
         display="flex"
         alignItems="center"
         justifyContent="center"
         //  flexDirection="column"
         sx={{
            px: { xs: "20px", sm: "32px", md: "54px", lg: "72px" },
         }}
      >
         <div className="subscribe-overlay"></div>
         <Box
            zIndex="3"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
         >
            <Typography
               component="h3"
               sx={{
                  px: { xs: "20px" },
                  fontSize: { xs: "30px", sm: "45px" },
                  fontWeight: "700",
                  lineHeight: "1.2",
                  textAlign: "center",
                  color: "#fff",
                  mb: "60px",
                  width: { xs: "100%", sm: "550px", md: "800px" },
               }}
            >
               Subscribe to get special features, latest news and others
            </Typography>
            <Box
               className="subscribe-mail email"
               //    py="30px"
               display="flex"
               alignItems="center"
               justifyContent="center"
               gap="20px"
               mb="20px"
               sx={{
                  width: { xs: "100%", sm: "450px", md: "600px" },
                  py: { xs: "15px", sm: "20px", md: "30px" },
                  cursor: "pointer",
               }}
            >
               <Mail sx={{ display: { xs: "none", sm: "block" } }} />
               <Typography>Subscribe to our newsletter</Typography>
            </Box>
            <Box
               className="subscribe-mail contact"
               //    py="30px"
               display="flex"
               alignItems="center"
               justifyContent="center"
               gap="20px"
               sx={{
                  width: { xs: "100%", sm: "450px", md: "600px" },
                  py: { xs: "15px", sm: "20px", md: "30px" },
                  cursor: "pointer",
               }}
            >
               <Call sx={{ display: { xs: "none", sm: "block" } }} />
               <Typography>Contact our call center</Typography>
            </Box>
         </Box>
      </Box>
   );
};

export default Subscribe;
