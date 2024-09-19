import { Outlet } from "react-router-dom";
import Navbar from "../components/navbars/HiddenNavbar";
import { FaSun, FaMoon } from "react-icons/fa";
import { useColorMode, IconButton } from "@chakra-ui/react";
import logo from "/assets/images/Logo.jpeg";


const HiddenLayout = () => {

    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <>
           
            <div className={`min-h-screen ${
                colorMode === "light"
                ? "bg-cover bg-[url('/assets/images/black.jpeg')]"
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
                   <div className="flex rounded-full overflow-hidden w-[85px] h-[85px] justify-center items-center relative md:left-16 lg:left-16">
                      <img src={logo} alt="Logo" className="w-full h-full object-cover" />    
                   </div>
                </div>
                <Navbar />
                  
             </nav>
             <div
                    className={`${
                        colorMode === "light" ? "text-white" : "bg-black text-white"
                 }`}
                >
             <Outlet />
            </div>
           </div>
          
        </>
    )
}


export default HiddenLayout;