import { Box, Typography } from "@mui/material";
import { Star } from "@mui/icons-material";

const BookCard = ({ book }) => {
   return (
      <Box
         className="book"
         width="260px"
         display="flex"
         flexDirection="column"
         alignItems="center"
      >
         <Box width="170px" height="230px" mb="20px">
            <img src={book.coverPage} className="book-img" alt={book.title} />
         </Box>
         <Typography
            component="h3"
            mb="7px"
            sx={{ fontSize: { xs: "16px", md: "20px" }, fontWeight: "700" }}
         >
            {book.title}
         </Typography>
         <Typography
            mb="20px"
            sx={{ fontSize: { xs: "14px", md: "16px" }, color: "#555" }}
         >
            {book.author}
         </Typography>
         <Typography
            bgcolor="#0162af"
            color="#fff"
            p="4px 25px"
            borderRadius="20px"
         >
            Read book
         </Typography>
         <Typography>
            <Star /> {book.rating.toFixed(1)}/5.0
         </Typography>
      </Box>
   );
};

export default BookCard;
