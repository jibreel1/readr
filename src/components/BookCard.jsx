import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Star } from "@mui/icons-material";

const BookCard = ({ book }) => {
   return (
      <Link to={`/book/${book.id}`} state={{ id: book.id }} className="book">
         <Box width="170px" height="230px" mb="20px">
            <img src={book.coverPage} className="book-img" alt={book.title} />
         </Box>
         <Typography
            component="h3"
            mb="7px"
            textAlign="center"
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
         {/* <Typography
            bgcolor="#0162af"
            color="#fff"
            p="4px 25px"
            borderRadius="20px"
            mb="20px"
         >
            Read book
         </Typography> */}
         <Typography display="flex" gap="10px" alignItems="center">
            <Star sx={{ color: "#0162af" }} /> {book.rating.toFixed(1)}/5.0
         </Typography>
      </Link>
   );
};

export default BookCard;
