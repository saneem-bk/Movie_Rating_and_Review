import { useState, useEffect } from "react";
import axios from "axios";



export default function Bio() {

   const [user, setUser] = useState("");
   const [reviews, setReviews] = useState([])
   const [loading, setLoading] = useState(true);
   const [count, setCount] = useState(0);
    
    useEffect(() => {
        const getReviews = async () => {
        try {
              
            const res = await axios.get("https://rate-it-36xo.onrender.com/api/v1/user/bio",
                
                {

                withCredentials: true,
               
                });
            
            const user = res.data.user;
              
            console.log("User", user);
            
            const reviews = res.data.reviews;
            const reviewCount = res.data.reviewCount;

            setUser(user);
            setReviews(reviews);
            setCount(reviewCount);
            setLoading(false);

          } catch (error) {
            console.log(error);
            setLoading(false);
          }
        };
        getReviews();
    }, []);
    


    return (
        <main className='max-w-4xl mx-auto p-4'>
            {loading ? (
                <h3>Loading...</h3>
            ) : (
            
            <>
            
            <div className="flex justify-center">
                <div className="border-2 border-slate-600 px-2"> 
                 {user && (
                
                  <>  
                                            
                     <h3 className="border-b-2 border-b-slate-600 text-bold">Email : {user.email}</h3>
                     <div className="flex flex-wrap"> 
                                            
                       <h3 className="text-bold">Name : {user.firstName}</h3>
                                     
                       <h3 className="pl-1 text-bold">{user.lastName}</h3>
                       
                     </div>
                 </>
                   )}
                </div>
            
                {count > 29 && (
                      <div className="border-2 border-slate-600 p-1 my-2">          
                          <button onClick={() =>
                            window.location.href = '/premium'            
                         }>
                             Go premium             
                          </button>
                      </div>           
                )}          
                           

                
                            
           </div>
           <div className="max-w-md mx-auto py-8">
            <h3 className="text-xl font-bold mb-4 underline">Your Reviews</h3>
            <div className="my-2 border-2 border-slate-600 rounded-md p-4">
               <ul className="gap-4">
                {reviews.length > 0 ?   (  
                 reviews && reviews.map((review, index) => (
                    <li key={index} className="py-2 border-b border-2 border-slate-600 p-2">
                        <div className="flex justify-between mb-2">
                            <span className="text-sm pl-1">{review.movieId.title}</span>
                            <span className="text-xs text-slate-500">{review.createdAt}</span>
                        </div>
                        <p className="text-base">{review.content}</p>
                        <div className="flex justify-end">
                            <span className="text-sm text-yellow-500">rating - {review.rating} / 5</span>
                        </div>
                    </li>
                 ))) : (
                    <div className="flex justify-center mt-10">
                        <h3>no reviews yet</h3>
                    </div>
            )}
            </ul>
          </div>
        </div>
         </>
        )}    
        </main>  
    )

}