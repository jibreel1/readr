import { Box, Typography } from "@mui/material";
import BookCard from "./BookCard";

const Books = ({ books }) => {
   return (
      <Box my="80px">
         <Typography
            component="h2"
            mb="30px"
            sx={{
               px: { xs: "20px", sm: "32px", md: "54px", lg: "72px" },
               fontSize: { xs: "36px", sm: "48px", md: "56px" },
               fontWeight: "700",
               lineHeight: "1.2",
            }}
         >
            Popular Books
         </Typography>
         <Box display="flex" flexWrap="wrap" gap="30px" justifyContent="center">
            {books.map(book => (
               <BookCard book={book} key={book.id} />
            ))}
         </Box>
      </Box>
   );
};

export default Books;
