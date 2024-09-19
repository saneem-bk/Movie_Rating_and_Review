import AdminNavbar from "../components/navbars/AdminNavbar";
import { Outlet } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import { useColorMode, IconButton } from "@chakra-ui/react";
import logo from "/assets/images/Logo.jpeg";

const AdminLayout = () => {

  const { colorMode, toggleColorMode } = useColorMode();

    return (
      <>
        <div className={`min-h-screen ${
                colorMode === "light"
                ? "bg-cover bg-[url('/assets/images/ocean.jpeg')]"
                : "bg-black"
          }`}
        >
         <nav className="flex items-center h-[85px] bg-tealCustom">
                <IconButton
                  
                  aria-label="Toggle Dark Mode"
                  icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
                  onClick={toggleColorMode}
                  color={colorMode === "light" ? "black" : "white"}
                  background="transparent"
                  _hover={{ background: "none" }}
                  ml={4}
                  
                />
                    
                <div className="flex flex-grow justify-center relative">
                   <div className="flex rounded-full overflow-hidden w-[85px] h-[85px] justify-center items-center relative md:left-12 lg:left-12">
                      <img src={logo} alt="Logo" className="w-full h-full object-cover" />    
                   </div>
                </div>
                <AdminNavbar />
                </nav>
             <div
                    className={`${
                        colorMode === "light" ? "text-black" : "bg-black text-white"
                 }`}
                >
             <Outlet />
            </div>
         </div>
      </>
    )
}


export default AdminLayout;