import { Link } from "react-router-dom";

const AdminNavbar = () => {
    const navLinks = [
        {
            path: "/admin/show-movies",
            value: "Movies"
        },
        {
            path: "/user/user-list",
            value: "Users"
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

export default AdminNavbar;