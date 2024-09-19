import { Link } from "react-router-dom";
import { Button } from '@chakra-ui/react';
  
function AdninNavbar() {
    
  
    return (
     
      <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 mr-4"> 
        <Link to="/admin/dashboard">
          <Button variant="solid" colorScheme="teal">
            Dashboard
          </Button>
        </Link>
      </div>
    );
}
  
export default AdninNavbar;