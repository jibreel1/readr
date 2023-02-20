import { Box, Typography, Rating, Button } from "@mui/material";
import { Link } from "react-router-dom";

const DashboardItem = ({ info, yes }) => {
   const rating = info[1].ebookDetails.rating;
   console.log(yes);
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
            <img
               src={info[1].ebookDetails.coverPage}
               alt="cover-page"
               className="cover-page"
            />
            <Typography
               fontSize="inherit"
               fontWeight="700"
               sx={{
                  textAlign: { xs: "center", sm: "left" },
               }}
            >
               {info[1].ebookDetails.title}
            </Typography>
         </Box>
         <Box flex="1">
            <Typography fontSize="inherit">
               {info[1].ebookDetails.author}
            </Typography>
         </Box>
         <Box
            flex="1"
            sx={{
               display: { xs: "none", sm: "block" },
            }}
         >
            <Rating
               defaultValue={rating}
               precision={0.5}
               readOnly
               size="small"
            />
         </Box>
         <Box flex="1">
            <Typography
               fontSize="inherit"
               sx={{
                  bgcolor:
                     yes === true
                        ? { xs: "none", sm: "#00ff004d" }
                        : { xs: "none", sm: "#ff00004d" },
                  display: "inline-block",
                  p: { xs: "0", sm: "5px 10px" },
                  borderRadius: "20px",
               }}
            >
               {yes === true ? "Completed" : "Not completed"}
            </Typography>
         </Box>
         <Box flex="1">
            <Link to={`/book/${info[0]}`} state={{ id: info[0] }}>
               <Button
                  variant="contained"
                  sx={{
                     fontWeight: "500",
                     fontSize: { xs: "10px", sm: "13px" },
                     p: "5px 10px",
                  }}
               >
                  {yes === true ? "Read" : "Continue"}
               </Button>
            </Link>
         </Box>
      </Box>
   );
};

export default DashboardItem;
