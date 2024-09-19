import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import BackButton from "../../components/BackButton"





export default function AddReview() {
     
    const [rating, setRating] = useState("")
    const [content, setContent] = useState("")
    const { id } = useParams();
    const navigate = useNavigate();

    

    const handleAddReview = async () => {
        
        

        const data = {
            movieId: id,
            rating,
            content
        }

        try {
            const res = await axios.post(
                "https://movie-rating-and-review.onrender.com/api/v1/user/add-review",
                data,
                {
                    withCredentials: true,
                },
            );
            const success = res.data;
            const reviewExists = res.data.reviewExists;
            if (reviewExists) {

                alert(res.data.message);
                setTimeout(() => {
                    navigate("/user/bio", { replace: true })
                }, 3000); 
            }
            if (success === "review added") {
                alert('Review added successfully')
                setTimeout(() => {
                    navigate(`/user/movies/${id}/show-reviews`, { replace: true });
                }, 3000); 
            }
        } catch (error) {
            console.log(error);
        }
    };
    

    return (

        <main className="flex flex-col justify-center items-center h-screen gap-4">
             <div className="pl-5 pt-2">
      <BackButton />
      </div>
           
               
            <h3 className="underline">Add Review</h3>
            <div className="flex justify-start w-[490px] h-[270px] border border-2 border-slate-500 rounded-md">
                <div className="pt-10 pl-3">
                  <h4 className="mb-2">Rating - </h4>
                  <h4>Review - </h4>
                </div>
            
                <div className="h-[270px] w-[400px]">
                    <div className="flex items-center justify-start pt-10 pl-5 mb-4">
                            <select
                                name="rating"
                                value={rating}
                                onChange={(e)=>setRating(e.target.value)}
                            >
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </select>
                            <h6>/ 5</h6>
                    </div>
                    <div className="border border-2 border-slate-600 rounded-md h-[154px] w-full ml-2">
                            <textarea
                               type="text"
                               placeholder=" Enter your Review"
                               className="input h-full w-full rounded-md resize-none"
                               value={content}
                               onChange={(e)=>setContent(e.target.value)}
                            />
                    </div>
                </div>
            </div>
               
            <button onClick={handleAddReview}
                    className="border-2 border-blue-500 rounded-md p-1" 
            >
                Add
            </button>
       
        </main>



    )
}