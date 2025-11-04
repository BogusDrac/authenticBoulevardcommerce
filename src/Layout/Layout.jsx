import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Layout = () => {
  return (
    <>
        <Navbar />
        <main className="container mx-auto px-4 py-8">
            <Outlet />
        </main>
        <Footer />
    </>
  );
}

export default Layout;
