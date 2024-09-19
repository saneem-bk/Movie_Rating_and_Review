import { useState } from "react";
import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";
import BackButton from "../../components/BackButton";


export default function DeleteMovie() {

   const [loading, setLoading] = useState(false);
   const navigate = useNavigate();
  const { id } = useParams();
  

   const handleDeleteMovie = () => {
    setLoading(true);
    axios
      .delete(`https://movie-rating-and-review.onrender.com/api/v1/admin/delete-movie/${id}`)
      .then((response) => {
          setLoading(false);
          alert("Movie deleted successfully !");
          setTimeout(() => {
            navigate("/admin/dashboard/movie-list", { replace: true });
          }, 3000);
      })
      .catch((error) => {
        setLoading(false);
        alert("An error occured. please check the console")
        console.log(error);
      });
   };

  return (
      
    <main className='max-w-4xl mx-auto p-4 md:p-6 lg:p-8'>
       <div className="pl-5 pt-2">
         <BackButton />
      </div>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <div className="p-4 md:p-6 lg:p-">
          
          <h1 className="flex justify-center text-3xl my-4">Delete Movie</h1>
          {loading ? (<h3>Loading...</h3> ) : ("")}
          <div className="flex flex-col items-center border-2 border-sky-000 rounded-xl w-full md:w-3/4 lg:w-2/3 p-4 mx-auto">
            <h3 className="text-2xl">Are you sure, you want to delete this movie ?</h3>
            <button
              className="p-4 bg-red-600 text-white m-8 w-full md:w-2/3 lg:w-1/2"
              onClick={handleDeleteMovie}
            >
              yes, delete it
            </button>
          </div>
        </div>
      )}
      </main>
      
      );
}

