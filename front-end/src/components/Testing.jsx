import { Button, AspectRatio} from "@chakra-ui/react";

import StarRating from "./StarRating";

export default function Testing() {

    const movie = {
        "title": "hunter",
        "director": "sam",
        "releaseDate": "12/10/2008",
        "genre": "action,adventure",
        "summary": "see the hunter",
        "averageRating": "4.2",
        "posterUrl": "url here",
        "trailerUrl": "",
        "reviews":["no reviews yet"],
   }

    return (

<main>
           
            
<div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
                    
     
                    <h2 className="flex justify-center mb-1 text-3xl font-extrabold leading-tight text-gray-900 underline mb-4">{movie.title}</h2>
                 
                   <div className="w-full">
                     <div className="flex flex-col w-full mb-10 sm:flex-row">
                         <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                             <div className="relative h-full max-h-[190px] ml-0 mr-0 sm:mr-10">
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
                                        <h6>{movie.genre}</h6>
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
                                <h3 className="my-2 ml-3 text-lg font-bold text-gray-800 underline">TRAILER</h3>
                     <div className="flex flex-col w-full mb-5 sm:flex-row">
                         <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                             <div className="relative h-full ml-0 mr-0 sm:mr-10">
                                 <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
                                 <div className="relative h-full p-5 bg-slate-600 border-2 border-blue-400 rounded-lg">
                                     <div className="flex items-center -mt-1 min-h-[250px] min-w-[250px]">
                                     <AspectRatio ratio={1} className="w-full h-full">
                                     <iframe
            
                                      
                                       
                                       src="https://www.youtube.com/embed/fU7TQ_1HDa8"
                                       allowFullScreen
                                       title={movie.title}
                                       className="w-full object-cover h-full"
                                       />
                                      </AspectRatio>
                                                     
                                     </div>
                                 </div>
                             </div>
                          </div>
                          
                         <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                             <div className="relative max-h-[250px] min-h-[250px] ml-0 mr-0 sm:mr-10">
                                 <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-200 rounded-lg"></span>
                                 <div className="relative h-full p-5 rounded-lg">
                                   <div className="flex items-center -mt-1">
                                     <img
                                     src={movie.posterUrl}
                                     alt={movie.title}
                                     className="h-full w-full rounded-md object-contain object-fit:cover"
                                   />
                                     </div>
                                    
                                 </div>
                             </div>
                         </div>
                         <div className="w-full sm:w-1/2">
                             <div className="relative max-h-[250px] h-full ml-0 md:mr-10">
                                 <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
                                  <div className="relative h-full p-5 bg-white border-2 border-green-500 rounded-lg">
                                     <h4 className="flex justify-center my-2 ml-3 text-lg font-bold text-gray-800 underline">Average Rating</h4>
                                     <div className="flex justify-center items-center pt-2 mt-10 border border-1 border-slate-600 rounded-md">
                                         <p className="mb-2 text-gray-600 pr-2">{movie.averageRating}</p> 
                                         <StarRating averageRating={movie.averageRating} /> 
                                                     
                                     </div>
                                        
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
                 <div className="mb-5">
                                 <Button className="flex justify-center border-2 w-[120px] gap-5 ml-10 border-slate-600">show Reviews</Button>
                                 <Button className="flex justify-center border-2 w-[120px] gap-5 ml-10 border-slate-600">Add Review</Button>
                </div>       
               </div>
            
  
        </main> 
     
    );
}

