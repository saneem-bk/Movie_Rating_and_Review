import { Link } from "react-router-dom";
import logo from "../../images/logo.jpeg"
import {
    Flex,
    useColorMode,
    Switch,
    Button
    
  } from '@chakra-ui/react';

const UserNavbar = () => {

    const { colorMode, toggleColorMode } = useColorMode();

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
        <div className="flex items-center justify-between p-4 shadow-lg">
            
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
     </Flex>
    );

};

export default UserNavbar;