import { Link } from "react-router-dom";

const UserNavbar = () => {
    const navLinks = [
       
        {
            path: "/bio",
            value: "Bio"
        },
        {
            path: "/logout",
            value: "Logout"
        }
    ];

    return (
        <div className="flex items-center justify-between p-4 shadow-lg">
            <h1>Logo</h1>
            <ul className="flex items-center gap-x-5">
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

export default UserNavbar;