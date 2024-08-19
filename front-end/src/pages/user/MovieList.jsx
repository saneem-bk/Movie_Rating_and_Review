import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  const [selectedGenre, setSelectedGenre] = useState('');
  const [sortOrder, setSortOrder] = useState('A-Z');
  const [filteredMovies, setFilteredMovies] = useState([]);

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
                <div className="mt-10 flex flex-wrap justify-around gap-4 p-4 rounded-md border-2 border-gray-200 bg-white">
                   
                 {filteredMovies.map((movie) => (
                    <div 
                     className='w-full sm:w-1/2 md:w-1/3 flex flex-col items-center rounded-lg p-4'
                    >
                      <Link to={`/user/movies/${movie._id}`} key={movie._id} >
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
                     </div>
                      ))}
                    {/* {movie.genre.join(', ')} */}
                </div>
                
              </>
            )}
      </div>
    </>
  );
};

export default MovieList;