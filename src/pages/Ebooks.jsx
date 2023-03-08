import { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import BookCard from "../components/BookCard";
import BookSkeleton from "../components/BookSkeleton";
import { ArrowCircleRightOutlined } from "@mui/icons-material";

const Ebooks = ({ books, isLoading }) => {
   const [searchByTitle, setSearchByTitle] = useState("");
   const [searchByAuthor, setSearchByAuthor] = useState("");

   books.sort(function (a, b) {
      if (a.title < b.title) {
         return -1;
      } else if (a.title > b.title) {
         return 1;
      } else return 0;
   });

   return (
      <div className="books">
         <Box
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            sx={{ px: { xs: "32px", md: "54px", lg: "72px" } }}
            className="books-hero"
         >
            <div className="books-overlay"></div>
            <Box
               color="#fff"
               zIndex="2"
               display="flex"
               alignItems="center"
               gap="20px"
               sx={{
                  flexDirection: { xs: "column", sm: "row-reverse" },
               }}
            >
               <Typography
                  component="h3"
                  flex="1"
                  fontWeight="700"
                  sx={{
                     fontSize: { xs: "45px", sm: "56px", lg: "64px" },
                     lineHeight: { xs: "1.2", sm: "1.5" },
                  }}
               >
                  Every book personally chosen.
               </Typography>
               <Box
                  flex="1"
                  display="flex"
                  gap="16px"
                  flexDirection="column"
                  sx={{ alignItems: { xs: "flex-start", sm: "flex-end" } }}
               >
                  <Typography
                     component="p"
                     fontWeight="300"
                     sx={{
                        fontSize: { xs: "14px", md: "16px" },
                        textAlign: { xs: "left", sm: "right" },
                        textDecoration: { xs: "none", sm: "underline" },
                        lineHeight: "2",
                     }}
                  >
                     One of the many gifts that books gives readers is a
                     connection to each other. When we share an affection for a
                     writer, an author or a story, we also have a better
                     understanding of people unlike ourselves.
                  </Typography>
                  <Typography
                     component="span"
                     display="flex"
                     gap="20px"
                     sx={{
                        textDecoration: "underline",
                        cursor: "pointer",
                     }}
                     onClick={() => {
                        window.scrollTo({ top: 700, behavior: "smooth" });
                     }}
                  >
                     View books <ArrowCircleRightOutlined />
                  </Typography>
               </Box>
            </Box>
         </Box>
         <Box
            sx={{
               px: { xs: "20px", md: "54px", lg: "72px" },
               py: { xs: "16px", sm: "24px" },
               display: "flex",
               gap: { xs: "10px", sm: "30px" },
               justifyContent: "center",
            }}
         >
            <TextField
               type="search"
               size="small"
               value={searchByTitle}
               placeholder="Search book title..."
               onChange={e => setSearchByTitle(e.target.value.toLowerCase())}
               sx={{ flex: "2" }}
            />
            <TextField
               type="search"
               size="small"
               value={searchByAuthor}
               placeholder="Search book author..."
               onChange={e => setSearchByAuthor(e.target.value.toLowerCase())}
               sx={{ display: { xs: "none", sm: "flex" }, flex: "2" }}
            />
            <Button variant="contained" sx={{ flex: "1" }}>
               Search
            </Button>
         </Box>
         {isLoading ? (
            <BookSkeleton />
         ) : (
            <Box
               backgroundColor="rgb(248, 249, 253)"
               sx={{
                  px: { xs: "32px", md: "54px", lg: "72px" },
                  py: { xs: "32px", md: "54px", lg: "72px" },
               }}
            >
               <Typography
                  component="h3"
                  mb="1em"
                  sx={{
                     fontSize: { xs: "32px", md: "48px" },
                     textAlign: { xs: "center", sm: "left" },
                  }}
                  color="#0162af"
                  fontWeight="700"
               >
                  Available Books
               </Typography>
               <Box
                  display="flex"
                  gap="50px"
                  flexWrap="wrap"
                  justifyContent="center"
               >
                  {books
                     .filter(book => {
                        if (searchByTitle === "" && searchByAuthor === "") {
                           return book;
                        } else if (
                           book.title.toLowerCase().includes(searchByTitle) &&
                           book.author.toLowerCase().includes(searchByAuthor)
                        ) {
                           return book;
                        } else return false;
                     })
                     .map(book => {
                        return <BookCard book={book} key={book.id} />;
                     })}
               </Box>
            </Box>
         )}
      </div>
   );
};

export default Ebooks;
