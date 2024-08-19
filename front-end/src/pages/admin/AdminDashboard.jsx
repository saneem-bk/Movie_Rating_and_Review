import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div>
              <h2>Movie Manager</h2>
       <Link to= "/admin/dashboard/add-movie">
             <button>Add Movie</button>
       </Link>         
        <button>Edit Movie</button>
        <button>Delete Movie</button>
      </div>
      <div>
        <h2>User Manager</h2>
        <h3>User List</h3>
        <ul>
          <li>User 1</li>
          <li>User 2</li>
          <li>User 3</li>
        </ul>
        <button>Delete User</button>
        <h3>User Overview</h3>
        <p>Number of Users: 10</p>
        <p>Most Active User: John Doe</p>
      </div>
    </div>
  );
}

