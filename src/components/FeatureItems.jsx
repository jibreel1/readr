import { Box, Typography } from "@mui/material";
import {
   Diversity3Outlined,
   LocalLibrary,
   Comment,
   LocalActivity,
   Poll,
   VerifiedUser,
} from "@mui/icons-material";

const FeatureItems = () => {
   const items = [
      {
         id: "1",
         icon: <Diversity3Outlined />,
         title: "Connect with friends, family, co-workers to read a book together",
      },
      {
         id: "2",
         icon: <LocalLibrary />,
         title: "Read classic works for free inside the app",
      },
      {
         id: "3",
         icon: <Comment />,
         title: "Post and react to comments, photos and links",
      },
      {
         id: "4",
         icon: <LocalActivity />,
         title: "Update with book trends",
      },
      {
         id: "5",
         icon: <Poll />,
         title: "Increase reading interests",
      },
      {
         id: "6",
         icon: <VerifiedUser />,
         title: "Real guarantee from Author",
      },
   ];
   return (
      <Box
         display="flex"
         flexWrap="wrap"
         gap="25px"
         mt="40px"
         justifyContent="center"
      >
         {items.map(item => (
            <Box
               key={item.id}
               className="feature-item"
               width="380px"
               height="300px"
               borderRadius="20px"
               sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  gap: "40px",
               }}
            >
               <div className="icon">{item.icon}</div>
               <Typography
                  width="200px"
                  fontSize="20px"
                  textAlign="center"
                  color="#555"
               >
                  {item.title}
               </Typography>
            </Box>
         ))}
      </Box>
   );
};

export default FeatureItems;
