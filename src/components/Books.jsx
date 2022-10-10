import { Box, Typography } from "@mui/material";

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
         {/* {books.map(book => (
            <Box key={book.id}>
               <img src={book.coverPage} alt={book.title} />
            </Box>
         ))} */}
      </Box>
   );
};

export default Books;
