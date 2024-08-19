import { Link } from "react-router-dom";

const AdminNavbar = () => {
  const navLinks = [
    {
      path: "/admin/dashboard",
      value: "Dashboard",
    },
    {
      path: "/admin/logout",
      value: "Logout",
    },
  ];

  return (
    <div className="flex items-center justify-between p-4 shadow-lg">
      
        <h1 className="text-2xl text-blue-600">Logo</h1>
     
      <ul className="flex items-center gap-x-5">
        {navLinks.map((link, index) => (
          <Link key={index} to={link.path}>
            <li className="text-lg font-semibold text-gray-800">
              {link.value}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default AdminNavbar;