import AdminNavbar from "../components/navbars/AdminNavbar";
import { Outlet } from "react-router-dom";
import ocean from "../images/ocean.jpeg"

const AdminLayout = () => {
    return (
      <>
        <div className="bg-cover min-h-100vh min-h-[620px] bg-center" style={{ backgroundImage: `url(${ocean})`}}>
          <nav>
                <AdminNavbar />
          </nav>
          
          <Outlet />
          
        </div>
      </>
    )
}


export default AdminLayout;