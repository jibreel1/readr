import { Box, Typography } from "@mui/material";
import BookCard from "./BookCard";

const Books = ({ books }) => {
   return (
      <Box>
         <Typography
            component="h2"
            sx={{
               px: { xs: "20px", sm: "32px", md: "54px", lg: "72px" },
               fontSize: { xs: "36px", sm: "48px", md: "56px" },
               fontWeight: "700",
               lineHeight: "1.2",
            }}
         >
            Popular Books
         </Typography>
         {books.map(book => (
            <BookCard book={book} key={book.id}/>
         ))}
      </Box>
   );
};

export default Books;
