import { Link } from "react-router-dom";
import logo from "../../images/logo.jpeg";
import {
    Flex,
    useColorMode,
    Switch,
    Button
    
  } from '@chakra-ui/react';
  
  function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
  
    return (
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1rem"
        bg="gray.100"
        color="gray.600"
      >
        <Flex align="center" mr={5}>
          <Switch
            color="gray.500"
            isChecked={colorMode === 'dark'}
            onChange={toggleColorMode}
          />
        </Flex>
        <img src={logo} alt="logo" className="w-30 h-20 rounded-full bg-cover object-contain ml-20" />
        <div className="flex items-center justify-between p-4 gap-x-5 shadow-lg">
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
      </Flex>
    );
  }
  
  export default Navbar;
  

