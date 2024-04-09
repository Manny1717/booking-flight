import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

type Props = {};

const Layout = (props: Props) => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
