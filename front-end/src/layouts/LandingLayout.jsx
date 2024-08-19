import { Outlet } from "react-router-dom";
import Navbar from "../components/navbars/Navbar";

const LandingLayout = () => {
    return (
        <>
            <nav>
              <Navbar />
            </nav>
            <Outlet />
        </>
    )
}


export default LandingLayout;