import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";

const BookCard = ({ book }) => {
   return (
      <div className="book">
         <Box width="200px" height="260px">
            <img src={book.coverPage} className="book-img" alt={book.title} />
         </Box>
         <Box m="15px 10px">
            <Typography component="h3" height="48px" sx={{ fontWeight: "700" }}>
               {book.title}
            </Typography>
            <Typography my="10px" sx={{ fontSize: "14px", color: "#555" }}>
               {book.author}
            </Typography>

            <Box
               display="flex"
               gap="10px"
               alignItems="center"
               justifyContent="space-between"
            >
               <Rating
                  defaultValue={book.rating}
                  precision={0.5}
                  readOnly
                  size="small"
               />

               <Link to={`/book/${book.id}`} state={{ id: book.id }}>
                  <Button variant="contained" sx={{ fontWeight: "700" }}>
                     Read
                  </Button>
               </Link>
            </Box>
         </Box>
      </div>
   );
};

export default BookCard;
