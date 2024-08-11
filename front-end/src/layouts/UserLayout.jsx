import UserNavbar from "../components/navbars/UserNavbar";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
    return (
        <>
          <nav>
                <UserNavbar />
          </nav>
          <Outlet />
        </>
    )
}


export default UserLayout;