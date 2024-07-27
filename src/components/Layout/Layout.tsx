import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import NavBar from "../Nav/NavBar";

interface Iprops {}

const Layout = ({}: Iprops) => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
