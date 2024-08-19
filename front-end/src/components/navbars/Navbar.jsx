import { Link } from "react-router-dom";

const Navbar = () => {
    

    return (
        <div className="flex items-center justify-between p-4 shadow-lg">

            <h1>Logo</h1>
            <Link to="/user/signup"  >
              <h3>Signup</h3>
            </Link>
            
        </div>

    );

};

export default Navbar;