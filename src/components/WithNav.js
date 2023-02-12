import NavBar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router";

const WithNav = () => {
   const links = [
      {
         id: "1",
         name: "Ebooks",
         path: "/ebooks",
      },
      {
         id: "2",
         name: "Features",
         path: "#features",
      },
      {
         id: "3",
         name: "About",
         path: "#about",
      },
      {
         id: "4",
         name: "Contact",
         path: "#!contact",
      },
   ];
   return (
      <>
         <NavBar links={links} />
         <Outlet />
         <Footer links={links} />
      </>
   );
};

export default WithNav;
