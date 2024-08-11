import { Outlet } from "react-router-dom";
import Navbar from "../components/navbars/Navbar";

const HomeLayout = () => {
    return (
        <>
          <nav>
                <Navbar />
            </nav>
            <Outlet />
        </>
    )
}


export default HomeLayout;