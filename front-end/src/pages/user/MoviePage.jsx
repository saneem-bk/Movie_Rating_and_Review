import React,{useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function MoviePage() {

  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get(`http://localhost:4600/api/v1/user/movies/${id}`);
        const data = res.data;
        console.log("movie", data);
        setMovie(data);
        console.log(movie);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getMovie();
  }, []);



  return (
    <main className='max-w-4xl mx-auto p-4'>
      {loading ? (
        <h3>Loading...</h3>
       
      
      ) : (
        <>
          <div>
            <h2>Movie Details</h2>
              <div className="flex justify-center space-x-4">
                <div className="w-1/2">
                  <h3>Rating</h3>
                </div>


                <div className="w-1/2">
                  <h3></h3>
                </div>
              
      
             
          
        
              
              </div>
              <button>Add Review</button>
              <button>Show Reviews</button>
          </div>
        </>
          
      )}
    </main>
  );
}

