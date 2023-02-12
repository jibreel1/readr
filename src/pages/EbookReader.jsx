import { useEffect, useState, useContext } from "react";
import {
   Box,
   Typography,
   Avatar,
   Button,
   Dialog,
   DialogContent,
   DialogTitle,
} from "@mui/material";
import {
   CloseOutlined,
   FavoriteBorder,
   ShareOutlined,
   FlagOutlined,
} from "@mui/icons-material";
import { useLocation } from "react-router-dom";
import { getDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import LogoText from "../assets/readrtext.png";
import PdfViewerComponent from "../components/PdfViewerComponent";
import Chats from "../components/Chats";
import ChatsMobile from "../components/ChatsMobile";
import { AuthContext } from "../context/AuthContext";

const EbookReader = () => {
   const [ebookDetails, setEbookDetails] = useState({});
   const [open, setOpen] = useState(false);
   const location = useLocation();
   const ebookRef = doc(db, "books", location.state.id);
   const { currentUser } = useContext(AuthContext);

   const handleClickOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };

   useEffect(() => {
      const getEbook = async () => {
         // setLoading(true);
         const docSnap = await getDoc(ebookRef);
         setEbookDetails(docSnap.data());

         try {
            const res = await getDoc(doc(db, "chats", docSnap.id));
            if (!res.exists()) {
               await setDoc(doc(db, "chats", docSnap.id), { messages: [] });
            }
         } catch (err) {
            console.log(err);
         }
         // setLoading(false);
         // console.log(docSnap.id);
      };
      getEbook(); // eslint-disable-next-line
   }, []);

   const { ebook, title, author, description } = ebookDetails;
   // console.log(ebookDetails);

   return (
      <>
         <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{
               height: "50px",
               mx: { xs: "5px", md: "20px" },
            }}
         >
            <img src={LogoText} alt="logo" loading="lazy" />
            <Box display="flex" gap="10px">
               <Avatar
                  src={currentUser.photoURL}
                  referrerPolicy="no-referrer"
                  alt="profile-pic"
                  sx={{ width: 26, height: 26, cursor: "pointer" }}
               />
               <Typography fontSize="16px">
                  {currentUser.displayName}
               </Typography>
            </Box>
         </Box>
         <Box sx={{ display: { xs: "block", md: "flex" } }}>
            <PdfViewerComponent document={ebook} />
            <Chats />
         </Box>
         <Box
            sx={{
               px: { xs: "15px", sm: "25px" },
               my: "25px",
               display: { xs: "block", md: "flex" },
               flexDirection: { md: "row-reverse" },
               justifyContent: { md: "center" },
               alignItems: { md: "center" },
            }}
         >
            <Box
               flex="1"
               display="flex"
               justifyContent="space-between"
               alignItems="center"
               sx={{
                  justifyContent: { xs: "space-between", md: "center" },
                  mb: { xs: "25px", md: "0" },
               }}
            >
               <Box sx={{ display: { xs: "block", md: "none" } }}>
                  <Button variant="contained" onClick={handleClickOpen}>
                     Chat with other Members
                  </Button>
                  <Dialog
                     open={open}
                     onClose={handleClose}
                     aria-labelledby="alert-dialog-title"
                  >
                     <DialogTitle id="alert-dialog-title">
                        {"Chats"}
                     </DialogTitle>
                     <div className="close" onClick={handleClose}>
                        <CloseOutlined />
                     </div>
                     <DialogContent>
                        <ChatsMobile />
                     </DialogContent>
                  </Dialog>
               </Box>
               <Box
                  className="links"
                  display="flex"
                  gap="10px"
                  alignItems="center"
               >
                  <FavoriteBorder />
                  <ShareOutlined />
                  <FlagOutlined />
               </Box>
            </Box>
            <Box flex="2">
               <Typography
                  component="h1"
                  sx={{
                     fontSize: { xs: "28px", sm: "32px" },
                     fontWeight: "700",
                     lineHeight: "1.2",
                  }}
               >
                  {title}
               </Typography>
               <Typography component="p" pb="20px">
                  by {author}
               </Typography>
               <Typography component="em">{description}</Typography>
            </Box>
         </Box>
      </>
   );
};

export default EbookReader;
