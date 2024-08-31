import { Outlet } from "react-router-dom";
import Navbar from "../components/navbars/Navbar";
import black from "../images/black.jpeg"


const LandingLayout = () => {
    return (
        <> 
           <div className="bg-cover min-h-100vh min-h-[600px] bg-center" style={{backgroundImage: `url(${black})`}}> 
            <nav>
                <Navbar />
            </nav>
            <Outlet />
            
            </div>
        </>
    )
}


export default LandingLayout;