import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";





export default function AddReview() {
     
    const [rating, setRating] = useState("")
    const [content, setContent] = useState("")
    const { id } = useParams();


    

    const handleAddReview = async () => {

        const data = {
            movieId: id,
            rating,
            content
        }

        try {
            const res = await axios.post(
                "http://localhost:4600/api/v1/user/add-review",
                data,
                {
                    withCredentials: true,
                },
            );
            const success = await res.data;
            console.log(success);
           
        } catch (error) {
            console.log(error);
        }
    };
    


    return (

        <main className="flex flex-grow h-[600px] justify-center items-center h-screen min-w-[50px] border-4 border-sky-500">
            <div className="flex justify-center h-[300px] w-[600px] min-w-[100px] border border-3 border-slate-500 relative">
               
                <h3>Add Review</h3>
                <div className="w-[490px] h-[270px] border border-2 border-slate-500 absolute bottom-0 mb-2">
                    <h4 className="pt-10 pl-3">Rating - </h4>
                    <h4 className="pt-10 pl-3">Review - </h4>
                    <div className="h-[270px] w-[400px] border border-1 border-slate-500 absolute top-0 right-0">
                        <div className="flex items-center justify-start pt-10 pl-5">
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
                            <h6>/5</h6>
                        </div>
                        <div>
                            <input
                               type="text"
                               placeholder="your Review"
                               className="input w-full pl-10 pr-20 border border-solid border-slate-600 absolute bottom-0 mb-2 h-[150px]"
                               value={content}
                               onChange={(e)=>setContent(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
               
              
            </div>
            <button onClick={handleAddReview}>Add</button>
        </main>



    )
}