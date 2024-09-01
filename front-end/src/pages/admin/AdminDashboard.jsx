import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminDashboard() {

  const time = "(within last 30 days)";
  const [overview, setOverview] = useState("")

  useEffect(() => {
    
    axios
      .get("https://movie-rating-and-review.onrender.com/api/v1/admin/overview")
      .then((response) => {
        if (response.data) {
          
          const data = response.data;
          setOverview(data)
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-10">
      <h3 className="text-center underline font-bold">Admin Dashboard</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        <div className="border-2 border-white-600 rounded-md min-w-[280px] md:min-w-[360px] flex flex-col justify-center">
          <h2 className="flex justify-center underline font-bold">Movie Manager</h2>
          <div className="flex gap-2 p-4 justify-center">
            <Link to="/admin/dashboard/add-movie">
              <button className="border-2 border-white-600 mb-2 p-1 bg-white hover:bg-gray-100 text-gray-800 font-bold">Add Movie</button>
            </Link>
            <Link to="/admin/dashboard/movie-list">
              <button className="border-2 border-white-600 p-1 bg-white hover:bg-gray-100 text-gray-800 font-bold">Movie List</button>
            </Link>
          </div>
          <div>
            <h2 className="flex justify-center underline font-bold">User Manager</h2>
            <div className="flex justify-center mt-3 pb-2">
              <Link to="/admin/dashboard/user-list">
                <button className="border-2 border-white-600 p-1 bg-white hover:bg-gray-100 text-gray-800 font-bold">Show User List</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="border-2 border-white-600 p-4 md:p-6 min-w-[280px] md:min-w-[400px] rounded-md">
          <h3 className="text-center underline font-bold">Overview</h3>

         
          <div className="flex justify-between mb-2 border-b border-gray-300 pb-2">
            <h5>Recent Users {time}</h5>
            <div className="flex justify-end w-full">
              <h6 className="ml-auto font-bold">{overview.recentUsers}</h6>
            </div>
          </div>

          <div className="flex justify-between mb-2 border-b border-gray-300 pb-2">
            <h5>Total Users</h5>
            <div className="flex justify-end w-full">
              <h6 className="ml-auto font-bold">{overview.totalUsers}</h6>
            </div>
          </div>

          <div className="flex justify-between mb-2 border-b border-gray-300 pb-2">
            <h5>Recent Reviews {time}</h5>
            <div className="flex justify-end w-full">
              <h6 className="ml-auto font-bold">{overview.recentReviews}</h6>
            </div>
          </div>

          <div className="flex justify-between mb-2 border-b border-gray-300 pb-2">
            <h5>Total Reviews</h5>
            <div className="flex justify-end w-full">
              <h6 className="ml-auto font-bold">{overview.totalReviews}</h6>
            </div>
          </div>

          <div className="flex justify-between mb-2 border-b border-gray-300 pb-2">
            <h5>Movies Added {time}</h5>
            <div className="flex justify-end w-full">
              <h6 className="ml-auto font-bold">{overview.recentMovies}</h6>
            </div>
          </div>

          <div className="flex justify-between mb-2 border-b border-gray-300 pb-2">
            <h5>Total Movies</h5>
            <div className="flex justify-end w-full">
              <h6 className="ml-auto font-bold">{overview.totalMovies}</h6>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
  
}

