import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";

export default function AllMovies() {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [sortOrder, setSortOrder] = useState('A-Z');
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:4600/api/v1/admin/show-movies")
      .then((response) => {
        if (response.data) {
          
          setMovies(response.data);
        } else {
          setMovies([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setMovies([]);
        setLoading(false);
      });
  }, []);
    
  
 
    
  
    useEffect(() => {
      let filtered = [...movies]; 
  
      
      if (selectedGenre) {
        filtered = filtered.filter(movie =>
          movie.genre.some(genre => genre.toLowerCase() === selectedGenre.toLowerCase())
        );
      }
  
     
      if (sortOrder === 'A-Z') {
        filtered.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
      } else if (sortOrder === 'Z-A') {
        filtered.sort((a, b) => b.title.toLowerCase().localeCompare(a.title.toLowerCase()));
      }
  
      
      setFilteredMovies(filtered);
  
    }, [selectedGenre, sortOrder, movies]);
  
    return (
        <main className='max-w-4xl mx-auto p-4'>
            {loading ? (
                <h3>Loading...</h3>
            ) : (
                <>
                    <h3 className='mt-6 text-center underline font-bold text-lg'>MOVIES</h3>
                    <div className='flex justify-center mb-2 mt-5'>
               
                        <label className='mr-4'>
                            Genre:
                            <select
                                value={selectedGenre}
                                onChange={(e) => setSelectedGenre(e.target.value)}
                                className='ml-2'
                            >
                                <option value="">All Genres</option>
                                {['Action', 'Comedy', 'Drama', 'Adventure', 'Sci-Fi', 'Horror'].map((genre) => (
                                    <option key={genre} value={genre} >
                                        {genre}
                                    </option>
                                ))}
                            </select>
                        </label>
                        <label>
                            Sort by:
                            <select
                                value={sortOrder}
                                onChange={(e) => setSortOrder(e.target.value)}
                                className='ml-2'
                            >
                                <option value="A-Z">A-Z</option>
                                <option value="Z-A">Z-A</option>
                            </select>
                        </label>
                    </div>
            
                    <div>
                        {filteredMovies.length === 0 ? (
                            <p>No movies found for the selected criteria.</p>
                        ) : (
                        
                            <>
                                <div className="mt-10 flex flex-wrap justify-around gap-4 p-4 rounded-md border-2 border-gray-200">
                     
                                    {filteredMovies.map((movie, index) => (
                                        <div key={index}
                                            className='w-full sm:w-1/2 md:w-1/3 flex flex-col items-center rounded-lg p-4'
                                        >
                                            <Link to={`/admin/movie/${movie._id}`}>
                                                <div className="w-80 h-40 bg-gradient-to-r from-cyan-200 to-indigo-300/[0.42] flex justify-start items-center rounded-md">
                     
                                                    <img
                                                        src={movie.posterUrl}
                                                        alt={movie.title}
                                                        className="h-40 w-auto rounded-md object-contain"
                                                    />
                                                    <div className='flex text-center flex-col font-bold justify-center items-center pl-10'>
                                                        <h2>{movie.title}</h2>
                                                        <h3>{movie.averageRating}/5</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                            <div className="flex justify-center gap-x-4">
                                                <Link to={`/admin/movie/edit/${movie._id}`}>
                                                   <AiOutlineEdit className="text-2xl text-yellow-600" />
                                                </Link>
                                                <Link to={`/admin/movie/delete/${movie._id}`}>
                                                   <MdOutlineDelete className="text-2xl text-red-600" />
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                    
                                </div>
                  
                            </>
                        )}
                    </div>
                </>
            )}         
      </main>
    );
  };
  