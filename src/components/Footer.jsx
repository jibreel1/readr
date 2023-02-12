import { Box, Typography, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { Facebook, LinkedIn, Twitter } from "@mui/icons-material";

const FooterLinks = ({ title, links }) => {
   const footLinks = {
      transition: "color .3s",
      "&:hover": {
         color: "#032480",
      },
   };

   return (
      <div>
         <Typography fontWeight="700" fontSize="18px" color="#032480" mb="20px">
            {title}
         </Typography>
         <Box
            component="ul"
            className="footer_links"
            sx={{
               display: "flex",
               gap: "20px",
               color: "#666",
               fontSize: "16px",
               flexDirection: "column",
            }}
         >
            {links.map(link => (
               <Typography
                  component="li"
                  lineHeight="1"
                  key={link.id}
                  sx={footLinks}
               >
                  <Link to={link.path}>{link.name}</Link>
               </Typography>
            ))}
         </Box>
      </div>
   );
};

const Footer = ({ links }) => {
   const info = [
      {
         id: "1",
         name: "Signup",
         path: "/sigup",
      },
      {
         id: "2",
         name: "Join Community",
         path: "#!",
      },
      {
         id: "3",
         name: "Learning",
         path: "#!",
      },
      {
         id: "4",
         name: "Blog",
         path: "#!",
      },
   ];
   const platform = [
      {
         id: "1",
         name: "Term of use",
         path: "#!",
      },
      {
         id: "2",
         name: "Privacy Policy",
         path: "#!",
      },
      {
         id: "3",
         name: "Help Center",
         path: "#!",
      },
      {
         id: "4",
         name: "FAQ",
         path: "#!",
      },
   ];
   return (
      <Box
         className="footer"
         pt="50px"
         sx={{
            px: { xs: "20px", sm: "32px", md: "54px", lg: "72px" },
         }}
      >
         <Box className="footer_grid">
            <div className="item1">
               <Box
                  className="navbar_img"
                  sx={{ width: { xs: "70px", md: "100px" } }}
               >
                  <Link to="/">
                     <img
                        src={Logo}
                        alt="logo"
                        className="logo"
                        loading="lazy"
                     />
                  </Link>
               </Box>
               <Typography
                  sx={{
                     fontSize: "16px",
                     lineHeight: "1.8",
                     color: "#444",
                  }}
               >
                  Readr is a social reading application for sharing your reading
                  experience with friends family and co-workers. Allows you chat
                  with your loved ones about the book you're reading. Enrich
                  your reading experience and strengthen your relationships.
               </Typography>
               <Typography
                  sx={{
                     fontSize: "16px",
                     mt: "10px",
                     fontWeight: "700",
                     color: "#032480",
                  }}
               >
                  Read - Intreract - Learn - Repeat
               </Typography>
               <Box display="flex" gap="15px" mt="10px">
                  <Facebook />
                  <LinkedIn />
                  <Twitter />
               </Box>
            </div>
            <Box
               className="item2"
               display="flex"
               justifyContent="start"
               gap="30px"
               alignItems="center"
            >
               <FooterLinks title="Navigation" links={links} />
               <FooterLinks title="Information" links={info} />
               <FooterLinks title="Platform" links={platform} />
            </Box>
         </Box>
         <Divider />
         <Typography
            sx={{
               fontSize: "14px",
               fontWeight: "700",
               color: "#032480",
               py: "20px",
               textAlign: "center",
            }}
         >
            &copy; 2022 JBs' Blueprint
         </Typography>
      </Box>
   );
};

export default Footer;
