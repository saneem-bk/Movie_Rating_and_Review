import UserNavbar from "../components/navbars/UserNavbar";
import { Outlet } from "react-router-dom";
import ocean from "../images/ocean.jpeg";

const UserLayout = () => {
    return (
      <>
         <div className="bg-cover min-h-100vh min-h-[620px] bg-center" style={{ backgroundImage: `url(${ocean})`}}>
          <nav>
                <UserNavbar />
          </nav>
          <Outlet />
         </div>
     </>
    )
}


export default UserLayout;