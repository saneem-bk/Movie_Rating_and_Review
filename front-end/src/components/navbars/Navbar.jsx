import { Link } from "react-router-dom";

const Navbar = () => {
    const navLinks = [
        {
            path: "/admin/signup",
            value: "Admin"
        },
        {
            path: "/user/signup",
            value: "User"
        }
    ];

    return (
        <div className="flex">
            <h1>Logo</h1>
            <ul className="flex">
                {
                    navLinks.map((link, index) => (
                        <Link key={index} to={link.path}>
                            <li>{link.value}</li>
                        </Link>
                    ))
                }
            </ul>
            
        </div>

    );

};

export default Navbar;