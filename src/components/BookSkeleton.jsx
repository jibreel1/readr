import { Box, Skeleton } from "@mui/material";

const BookSkeleton = () => {
   return (
      <Box
         display="flex"
         flexWrap="wrap"
         justifyContent="center"
         sx={{ gap: { xs: "10px", sm: "30px" } }}
      >
         <Box
            sx={{ display: { xs: "none", sm: "flex" } }}
            flexDirection="column"
            justifyContent="center"
            width="200px"
         >
            <Skeleton variant="rectangular" width={200} height={260} />
            <Box sx={{ pt: 0.5 }}>
               <Skeleton />
               <Skeleton width="60%" />
               <Skeleton width="60%" />
            </Box>
         </Box>
         <Box
            sx={{ display: { xs: "none", sm: "flex" } }}
            flexDirection="column"
            justifyContent="center"
            width="200px"
         >
            <Skeleton variant="rectangular" width={200} height={260} />
            <Box sx={{ pt: 0.5 }}>
               <Skeleton />
               <Skeleton width="60%" />
               <Skeleton width="60%" />
            </Box>
         </Box>
         <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            width="200px"
         >
            <Skeleton variant="rectangular" width={200} height={260} />
            <Box sx={{ pt: 0.5 }}>
               <Skeleton />
               <Skeleton width="60%" />
               <Skeleton width="60%" />
            </Box>
         </Box>
         <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            width="200px"
         >
            <Skeleton variant="rectangular" width={200} height={260} />
            <Box sx={{ pt: 0.5 }}>
               <Skeleton />
               <Skeleton width="60%" />
               <Skeleton width="60%" />
            </Box>
         </Box>
      </Box>
   );
};

export default BookSkeleton;
