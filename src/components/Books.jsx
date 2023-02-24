import { Box, Typography, Button } from "@mui/material";
import BookCard from "./BookCard";
import BookSkeleton from "./BookSkeleton";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { Link } from "react-router-dom";

const Books = ({ books, isLoading }) => {
   return (
      <Box py="80px" backgroundColor="rgb(248, 249, 253)">
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
         {isLoading ? (
            <BookSkeleton />
         ) : (
            <ScrollMenu>
               <Box
                  display="flex"
                  gap="30px"
                  justifyContent="center"
                  sx={{ flexWrap: { sm: "wrap" } }}
               >
                  {books.slice(0, 6).map(book => (
                     <BookCard book={book} key={book.id} />
                  ))}
               </Box>
            </ScrollMenu>
         )}
         <Link
            to="/ebooks"
            style={{ display: "flex", justifyContent: "center" }}
         >
            <Button variant="contained" sx={{ mt: "30px" }}>
               View more
            </Button>
         </Link>
      </Box>
   );
};

export default Books;
