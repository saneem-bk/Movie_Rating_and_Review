import { Link } from "react-router-dom";
import { Button } from '@chakra-ui/react';

const UserNavbar = () => {


    const navLinks = [
       
        
        {
            path: "/user/home",
            value: "Home"
        },
        {
            path: "/user/bio",
            value: "Bio"
        },
    ];
  
  

    return (


        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 mr-4">
            
            <ul className="flex items-center gap-x-5">
                {
                    navLinks.map((link, index) => (
                        <Link key={index} to={link.path}>
                            <Button variant="solid" colorScheme="teal">
                              {link.value} 
                            </Button>
                        </Link>
                    ))
                }
            </ul>
            
        </div>
    
    );

};

export default UserNavbar;