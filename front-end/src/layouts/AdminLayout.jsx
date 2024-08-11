import AdminNavbar from "../components/navbars/AdminNavbar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
    return (
        <>
          <nav>
                <AdminNavbar />
          </nav>
          <Outlet />
        </>
    )
}


export default AdminLayout;