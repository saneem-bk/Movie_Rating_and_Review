import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function UserShowReviews() {

  const [reviews, setReviews] = useState("");
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

    useEffect(() => {
        const getReviews = async () => {
          try {
            const res = await axios.get(`https://movie-rating-and-review.onrender.com/api/v1/user/movies/${id}/get-Reviews`);
            const data = res.data;
            console.log("Reviews", data);
            setReviews(data);
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
        <div className="max-w-md mx-auto py-8">
          <h2 className="text-xl font-bold mb-4 underline">User Reviews</h2>
          <div className="my-2 border-2 border-slate-600 rounded-md p-4">
            <ul className="gap-4">
              {reviews.length > 0 ? (
                reviews && reviews.map((review, index) => (
                  <li key={index}>
                    <div className="mb-4 mt-4 border-2 border-bg-slate-600">
                      <div className="flex justify-between pr-2 mb-2">
                        <span className="text-sm pl-1">Name - {review.userName}</span>
                        <span className="text-xs text-gray-500">{review.createdAt}</span>
                      </div>
                      <p className="text-base pl-1">{review.content}</p>
                      <div className="flex justify-end mt-2">
                        <span className="text-sm text-yellow-500 pr-2">rating - {review.rating} / 5</span>
                      </div>
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
      )}
      </main>
    )
}