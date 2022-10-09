import { Box, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import {
   ArrowCircleLeftOutlined,
   ArrowCircleRightOutlined,
} from "@mui/icons-material";
import Quote from "../assets/pattern-quotes.svg";
import data from "../data";

const BookQuotes = () => {
   return (
      <Box
         className="bookquote"
         sx={{
            pt: "100px",
            pb: "50px",
            textAlign: "center",
         }}
      >
         <img src={Quote} alt="quote" />
         <Carousel
            NextIcon={<ArrowCircleRightOutlined />}
            PrevIcon={<ArrowCircleLeftOutlined />}
            height="450px"
            animation="slide"
            navButtonsAlwaysVisible={true}
            indicators={false}
            interval={5000}
            navButtonsProps={{
               style: {
                  backgroundColor: "transparent",
                  marginInline: "0px",
               },
            }}
            fullHeightHover={false}
            navButtonsWrapperProps={{
               style: {
                  bottom: "0",
                  marginInline: "20px",
               },
            }}
         >
            {data.quotes.map(quote => {
               return (
                  <div key={quote.id}>
                     <Typography
                        component="h4"
                        sx={{
                           fontSize: { xs: "20px", sm: "30px", md: "40px" },
                           width: { sm: "450px", md: "800px" },
                           margin: "0 auto",
                           mt: "90px",
                           lineHeight: "1.5",
                           color: "#fff",
                           px: "40px",
                        }}
                     >
                        {quote.quote}
                     </Typography>
                     <Typography
                        sx={{
                           fontSize: { xs: "14px", sm: "20px" },
                           mt: "30px",
                           color: "#ccc",
                        }}
                     >
                        <em>{quote.author}</em>
                     </Typography>
                  </div>
               );
            })}
         </Carousel>
      </Box>
   );
};

export default BookQuotes;
