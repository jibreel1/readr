import { useEffect, useState, useContext } from "react";
import {
   Box,
   Typography,
   Avatar,
   Button,
   Dialog,
   DialogContent,
   DialogTitle,
   DialogContentText,
   DialogActions,
} from "@mui/material";
import {
   CloseOutlined,
   FavoriteBorder,
   ShareOutlined,
   FlagOutlined,
} from "@mui/icons-material";
import { useLocation, Link, useNavigate } from "react-router-dom";
import {
   getDoc,
   doc,
   setDoc,
   updateDoc,
   serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase-config";
import LogoText from "../assets/readrtext.png";
import PdfViewerComponent from "../components/PdfViewerComponent";
import Chats from "../components/Chats";
import ChatsMobile from "../components/ChatsMobile";
import { AuthContext } from "../context/AuthContext";
import LoginDropDown from "../components/LoginDropDown";

const EbookReader = ({ showLoginLinks, setShowLoginLinks }) => {
   const [ebookDetails, setEbookDetails] = useState({});
   const [open, setOpen] = useState(false);
   const [openDash, setOpenDash] = useState(false);
   const location = useLocation();
   const navigate = useNavigate();
   const { currentUser } = useContext(AuthContext);

   const handleClickLogin = event => {
      setShowLoginLinks(event.currentTarget);
   };

   const handleOpenChat = () => {
      setOpen(true);
   };

   const handleCloseChat = () => {
      setOpen(false);
   };

   const handleOpenDash = () => {
      setOpenDash(true);
   };

   const handleCloseDash = () => {
      setOpenDash(false);
   };

   const ebookRef = doc(db, "books", location.state.id);
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
            await updateDoc(doc(db, "userchats", currentUser.uid), {
               [docSnap.id + ".ebookDetails"]: {
                  title: docSnap.data().title,
                  coverPage: docSnap.data().coverPage,
                  ebookURL: docSnap.data().ebook,
                  author: docSnap.data().author,
                  rating: docSnap.data().rating,
               },
               [docSnap.id + ".userInfo"]: {
                  uid: currentUser.uid,
                  displayName: currentUser.displayName,
                  email: currentUser.email,
               },
               [docSnap.id + ".date"]: serverTimestamp(),
               [docSnap.id + ".messages"]: [],
            });
         } catch (err) {
            console.log(err);
         }
         // setLoading(false);
      };
      getEbook(); // eslint-disable-next-line
   }, []);

   const handleCompleted = async isCompleted => {
      await updateDoc(doc(db, "userchats", currentUser.uid), {
         [location.state.id + ".completed"]: isCompleted,
      });
      handleCloseDash();
      navigate("/dashboard");
   };

   const { ebook, title, author, description } = ebookDetails;
   // console.log(ebookDetails);

   return (
      <>
         <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{
               height: { xs: "30px", sm: "50px" },
               mx: { xs: "5px", md: "20px" },
            }}
         >
            <Link to="/">
               <img
                  src={LogoText}
                  className="logotext"
                  alt="logo"
                  loading="lazy"
               />
            </Link>
            <Box
               sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
               }}
            >
               <Button
                  variant="contained"
                  onClick={handleOpenDash}
                  sx={{ p: "4px 8px", fontSize: { xs: "12px", sm: "14px" } }}
               >
                  Dashboard
               </Button>
               <Dialog
                  open={openDash}
                  onClose={handleCloseDash}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
               >
                  <DialogTitle id="alert-dialog-title">
                     {"Have you completed this book?"}
                  </DialogTitle>
                  <DialogContent>
                     <DialogContentText id="alert-dialog-description">
                        Did you complete "{title}" already? READR asks...
                     </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                     <Button onClick={() => handleCompleted("Not completed")}>
                        No
                     </Button>
                     <Button onClick={() => handleCompleted("Completed")}>
                        Yes
                     </Button>
                  </DialogActions>
               </Dialog>
               <Box
                  sx={{
                     display: { xs: "none", sm: "flex" },
                     alignItems: "center",
                     gap: "10px",
                  }}
               >
                  <Avatar
                     src={currentUser.photoURL}
                     referrerPolicy="no-referrer"
                     alt="profile-pic"
                     sx={{ width: 26, height: 26, cursor: "pointer" }}
                     onClick={handleClickLogin}
                  />
               </Box>
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
               alignItems: { md: "flex-start" },
            }}
         >
            <Box
               flex="1"
               sx={{
                  display: { xs: "block", sm: "flex" },
                  alignItems: { sm: "center" },
                  justifyContent: { sm: "space-between", md: "center" },
                  mb: { xs: "25px", md: "0" },
               }}
            >
               <Box
                  sx={{
                     display: { xs: "block", md: "none" },
                     mb: { xs: "20px", sm: "0" },
                  }}
               >
                  <Button
                     variant="contained"
                     onClick={handleOpenChat}
                     sx={{ width: "100%" }}
                  >
                     Chat with others
                  </Button>
                  <Dialog fullScreen open={open} onClose={handleCloseChat}>
                     <DialogTitle>{"Chats"}</DialogTitle>
                     <div className="close" onClick={handleCloseChat}>
                        <CloseOutlined />
                     </div>
                     <DialogContent sx={{ p: "0" }}>
                        <ChatsMobile />
                     </DialogContent>
                  </Dialog>
               </Box>
               <Box
                  className="links"
                  display="flex"
                  gap="10px"
                  alignItems="center"
                  justifyContent="flex-end"
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
            <LoginDropDown
               showLoginLinks={showLoginLinks}
               setShowLoginLinks={setShowLoginLinks}
            />
         </Box>
      </>
   );
};

export default EbookReader;
