import { Box, Skeleton } from "@mui/material";

const BookSkeleton = () => {
   return (
      <Box display="flex" flexWrap="wrap" gap="30px" justifyContent="center">
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
