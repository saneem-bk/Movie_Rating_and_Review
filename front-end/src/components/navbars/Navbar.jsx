import { Link } from "react-router-dom";
import { Button } from '@chakra-ui/react';

  
  function Navbar() {
    
     
  
    return (
      
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 mr-4">
         <Link to="/user/signin">
          <Button variant="solid" colorScheme="teal">
            Sign In
          </Button>
         </Link>
         <Link to="/user/signup">
          <Button variant="solid" colorScheme="teal">
            Sign Up
          </Button>
          </Link>
        </div>
      
    );
  }
  
  export default Navbar;
  

