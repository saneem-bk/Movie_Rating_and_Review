import React,{useState, useEffect} from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { Button, AspectRatio} from "@chakra-ui/react";
import StarRating from "../../components/StarRating";


export default function MoviePage() {

  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get(`https://rate-it-36xo.onrender.com/api/v1/user/movies/${id}`);
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
         
      <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
                    
     
       <h2 className="flex justify-center mb-1 text-3xl font-extrabold leading-tight text-gray-900 underline mb-4">{movie.title}</h2>
    
      <div className="w-full">
        <div className="flex flex-col w-full mb-10 sm:flex-row">
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div className="relative max-h-[190px] h-full ml-0 mr-0 sm:mr-10">
                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
                    <div className="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                    
                                    
                              <div className="relative flex inline-block gap-2 pb-2">
                                    <h4 className="font-bold text-gray-800">Director - </h4>
                                    <h6>{movie.director}</h6>
                              </div>
                              <div className="flex inline-block gap-2 pb-2">
                                    <h4 className="font-bold text-gray-800">Release Date - </h4>
                                    <h6>{movie.releaseDate}</h6>
                              </div>
                              <div className="flex inline block gap-2 pb-2">
                                    <h4 className="font-bold text-gray-800">Genre - </h4>
                                    <h6>{movie.genre.join(",")}</h6>
                              </div>
                                 
                          
                    </div>
                </div>
             </div>
                        
            <div className="w-full sm:w-1/2">
                <div className="relative h-full ml-0 md:mr-10">
                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
                    <div className="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg">
                        <div className="flex items-center -mt-1">
                            <h3 className="my-2 ml-3 text-lg font-bold text-gray-800 underline">summary</h3>
                        </div>
                         <p className="mb-2 text-gray-600">{movie.summary}</p>
                    </div>
                </div>
            </div>
            </div>
                    
                    <div className="flex flex-col w-full mb-5 sm:flex-row">
                         <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                             <div className="relative h-full ml-0 mr-0 sm:mr-10">
                                 <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
                                 <div className="relative h-full p-5 bg-slate-600 border-2 border-blue-400 rounded-lg">
                                     <div className="flex items-center -mt-1 min-h-[250px] min-w-[250px]">
                                     <AspectRatio ratio={1} className="w-full h-full">
                                     <iframe
            
                                      
                                       
                                       src={`https://www.youtube.com/embed/${movie.trailerUrl}`}
                                       allowFullScreen
                                       title={movie.title}
                                       className="w-full object-cover h-full"
                                       />
                                      </AspectRatio>
                                                   
                        </div>
                        <h3 className="my-2 ml-3 text-lg font-bold text-gray-800 underline">TRAILER</h3> 
                    </div>
                </div>
             </div>
             
            <div className="flex w-full sm:w-1/2 md:flex-grow">
                <div className="w-full">
                  <AspectRatio ratio={2/3} className="w-full"  > 
                    
                      
                        <img
                        src={movie.posterUrl}
                        alt={movie.title}
                            className="rounded-md object-cover h-full w-full"
                        />
                  </AspectRatio>  
                      
                    
                </div>
            </div>
            <div className="w-full sm:w-1/2">
                    <div className="flex justify-center items-center max-h-[250px] min-h-[250px] h-full w-full ml-0 mr-0 sm:mr-10 md:flex-row">
                      <div className="text-center"> 
                           <h6 className="underline mb-2">Average Rating</h6>  
                            <p className="text-gray-600">{movie.averageRating} / 5</p> 
                            <StarRating averageRating={movie.averageRating} /> 
                                        
                      </div>
                    </div>
            </div>        
            </div>      
        </div>
              <div className="flex justify-center gap-4 mt-8">
                <Link to={`/user/movies/${id}/show-reviews`}>
                    <Button className="border-2 w-[120px] mr-10 border-slate-600">show Reviews</Button>
                </Link>
                <Link to={`/user/${id}/add-review`}>
                  <Button className="border-2 w-[120px] border-slate-600">Add Review</Button>
                </Link>
        </div>       
  </div>
  </>       
)}
    </main> 
     
    );
}
        
          
      
  

