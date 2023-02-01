import NavBar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router";

const WithNav = ({ isAuth, setIsAuth, user }) => {
   const links = [
      {
         id: "1",
         name: "Ebooks",
         path: "/ebooks",
      },
      {
         id: "2",
         name: "Features",
         path: "#!",
      },
      {
         id: "3",
         name: "About",
         path: "#!",
      },
      {
         id: "4",
         name: "Contact",
         path: "#!",
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
