import React,{ useState, useEffect } from 'react';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import MovieList from './MovieList';
import BackButton from '../../components/BackButton';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [suggestions, setSuggestions] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const getAllMovies = async () => {
      try {
        const res = await axios.get("https://movie-rating-and-review.onrender.com/api/v1/user/home");
        const data = res.data;
        console.log("movies", data);
        setMovies(data);
        console.log(movies);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getAllMovies();
  }, []);

  const topRatedMovies = movies
    .filter((movie) => movie.averageRating > 0)
    .sort((a, b) => b.averageRating - a.averageRating)
    .slice(0, 3);
  
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  
    if (value) {

      const filteredSuggestions = movies.filter(movie =>

        movie.title.toLowerCase().includes(value.toLowerCase()))
        .slice(0, 5);
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion.title);
    setSelectedMovieId(suggestion._id);
    setSuggestions([]);
  };

  const handleGoClick = () => {
    
    if (selectedMovieId) {
     
      navigate(`/user/movies/${selectedMovieId}`);
    }
  }
  
  

    return (
      <main className='max-w-4xl mx-auto p-4'>
         <div className="pl-5 pt-2">
      <BackButton />
      </div>
        {loading ? (
          <h3>Loading...</h3>
        ) : (
          
         <div className='min-h-screen text-gray-800 dark:text-white'>
            <div className='flex justify-center items-center w-full sm:w-auto mt-10'>
             <div  className='flex items-center'> 
               <h4 className='mr-2'>Search</h4>
               <div className='relative flex-1'>
                <input
                  type="text"
                  placeholder="Search movies"
                  className="input w-full pl-10 pr-20 border border-solid border-slate-600"
                  value={inputValue}
                  onChange={handleInputChange}
                  />
                 
                  
              {suggestions && suggestions.length > 0 && (
                <div className="absolute top-full left-0 w-full border border-gray-400 mt-1">
                  <ul className='p-2 text-sm text-gray-700 hover:bg-gray-200">'>
                    {suggestions.map((suggestion, index) => (
                      <li key={index}
                        className='p-2 cursor-pointer hover:bg-gray-200'
                        onClick={() => handleSuggestionClick(suggestion)}
                      >
                        {suggestion.title}
                      </li>
                    ))}
                   </ul>
                  </div>
                  )}
                  </div>
                  <button onClick={handleGoClick}
                  className='ml-2 h-full px-4 bg-white hover:bg-gray-100 text-gray-800 font-semibold border border-slate-600'>
                  Go
                </button>

              </div>
              </div>
               
              
              
              <h3 className='mt-6 text-center underline font-bold text-lg'>TRENDING</h3> 
              
             
              <div className="shadow-md mt-10 flex flex-wrap justify-around gap-4 p-4 rounded-md border-2 border-gray-200">
            
                {topRatedMovies.map((movie, index) => (
                  <div key={index} className='w-full sm:w-1/2 md:w-1/3 flex flex-col items-center rounded-lg p-4'>
                  <Link to={`/user/movies/${movie._id}`}>
                    <div className="w-80 h-40 bg-gradient-to-r from-cyan-200 to-indigo-300/[0.42] max-w-sm flex justify-start items-center rounded-md">
               
                      <img
                        src={movie.posterUrl}
                        alt={movie.title}
                        className="h-40 w-auto rounded-md object-contain object-fit:cover"
                      />
                      <div className='flex text-center flex-col font-bold justify-center items-center pl-10'>
                       <h2>{movie.title}</h2>
                       <h3>{movie.averageRating}/5</h3>
                      </div>
                    </div>
                  </Link>
                  </div>
                ))}
               
              </div>
              
              
             <MovieList movies={movies}  />

            </div>
        )}
    </main>
    );
      
};