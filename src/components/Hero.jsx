import { Box, Typography } from "@mui/material";
import HeroImg from "../assets/image1.jpg";

const Hero = () => {
   return (
      <Box className="hero">
         <Box sx={{ px: { xs: "32px", md: "54px", lg: "72px" } }}>
            <Typography
               component="h1"
               sx={{
                  fontSize: { xs: "36px", sm: "48px", md: "56px" },
                  fontWeight: "700",
                  width: { sm: "500px", md: "800px" },
                  margin: "0 auto",
                  textAlign: "center",
                  lineHeight: "1.2",
               }}
            >
               Reading—the best state yet to keep absolute loneliness at bay.
            </Typography>
            <Typography
               sx={{
                  fontSize: { xs: "14px", sm: "17px", md: "20px" },
                  width: { sm: "450px", md: "800px" },
                  margin: "0 auto",
                  textAlign: "center",
                  mt: "30px",
                  lineHeight: "1.8",
                  color: "#fff",
               }}
            >
               A truly great book should be read in youth, again in maturity and
               once more in old age, as a fine building should be seen by
               morning light, at noon and by moonlight.
            </Typography>
         </Box>

         <Box
            sx={{
               width: { xs: "100%", sm: "580px", md: "800px" },
               margin: "100px auto 0 auto",
               px: { sm: "32px", md: "54px", lg: "72px" },
            }}
         >
            <img src={HeroImg} alt="hero" className="hero-img" loading="lazy" />
         </Box>
      </Box>
   );
};

export default Hero;
