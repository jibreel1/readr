import { Box, Typography } from "@mui/material";
import FeatureItems from "./FeatureItems";

const Features = () => {
   return (
      <Box
         sx={{
            px: { xs: "20px", sm: "32px", md: "54px", lg: "72px" },
            mt: { xs: "15em", md: "17em" },
            mb: "150px",
         }}
      >
         <Typography
            component="h2"
            sx={{
               fontSize: { xs: "32px", sm: "40px" },
               fontWeight: "700",
               width: { md: "800px" },
               margin: "0 auto",
               textAlign: "center",
               lineHeight: "1.2",
            }}
         >
            A dream you hold in your hands.
         </Typography>
         <Typography
            sx={{
               fontSize: { xs: "14px", sm: "16px" },
               width: { sm: "450px", md: "600px" },
               margin: "0 auto",
               textAlign: "center",
               mt: "30px",
               lineHeight: "1.8",
               color: "#555",
            }}
         >
            In the case of good books, the point is not to see how many of them
            you can get through, but rather how many can get through to you.
         </Typography>
         <FeatureItems />
      </Box>
   );
};

export default Features;
