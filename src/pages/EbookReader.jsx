import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase-config";
import Logo from "../assets/logo.png";
import PdfViewerComponent from "../components/PdfViewerComponent";
import Chats from "../components/Chats";

const EbookReader = () => {
   const [ebookDetails, setEbookDetails] = useState({});
   const location = useLocation();
   const ebookRef = doc(db, "books", location.state.id);

   useEffect(() => {
      const getEbook = async () => {
         // setLoading(true);
         const docSnap = await getDoc(ebookRef);
         setEbookDetails(docSnap.data());
         // setLoading(false);
      };
      getEbook(); // eslint-disable-next-line
   }, []);

   const { ebook, title, author } = ebookDetails;
   // console.log(ebook);

   return (
      <>
         <Box
            display="flex"
            justifyContent="center"
            sx={{ height: { xs: "80px", sm: "100px" } }}
            mb="20px"
         >
            <img src={Logo} alt="logo" loading="lazy" />
         </Box>
         <Box sx={{ display: { xs: "block", lg: "flex" } }}>
            <PdfViewerComponent document={ebook} />
            <Chats />
         </Box>
         <p>{title}</p>
         <p>{author}</p>
      </>
   );
};

export default EbookReader;
