import {
   Typography,
   Button,
   Card,
   CardMedia,
   CardContent,
   CardActions,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";

const BookCard = ({ book }) => {
   return (
      <Card sx={{ width: 180 }}>
         <CardMedia
            sx={{ height: 260 }}
            image={book.coverPage}
            title={book.title}
         />
         <CardContent>
            <Typography
               component="h3"
               minHeight="48px"
               sx={{ fontWeight: "700" }}
            >
               {book.title}
            </Typography>
            <Typography my="10px" sx={{ fontSize: "14px", color: "#555" }}>
               {book.author}
            </Typography>
         </CardContent>
         <CardActions sx={{ justifyContent: "space-between" }}>
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
         </CardActions>
      </Card>
   );
};

export default BookCard;
