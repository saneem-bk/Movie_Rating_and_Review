import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";




const schema = yup
  .object({
    title: yup.string(),
    director: yup.string(),
    releaseDate: yup.date(),
    genre: yup.string(),
    summary: yup.string(),
    posterUrl: yup.mixed(),
    trailerUrl: yup.string()
    
  })
  .required();

export default function EditMovie() {
 
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({

    resolver: yupResolver(schema)
  });

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://rate-it-36xo.onrender.com/api/v1/admin/movie/${id}`)
      .then((response) => {
        if (response.data) {
          const movieData = response.data;


            setValue("title", movieData.title)
            setValue("director", movieData.director)
            setValue("releaseDate", new Date(movieData.releaseDate).toISOString().split('T')[0]);
            setValue("genre", movieData.genre)
            setValue("summary", movieData.summary)
            setValue("trailerUrl", movieData.trailerUrl)
         
        }

        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id, setValue]);


  const onSubmit = async (data) => {
    const requestBody = {
      title: data.title,
      director: data.director,
      releaseDate: data.releaseDate,
      genre: data.genre.split(",").map((genre) => genre.trim()),
      summary: data.summary,
      posterUrl: data.posterUrl[0],
      trailerUrl: data.trailerUrl
    };

    try {
      const res = await axios.put(
        `https://rate-it-36xo.onrender.com/api/v1/admin/update-movie/${id}`,
        requestBody,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      console.log(res.data);
      const result = res.data.message;
      if (result === "Movie updated successfully") {
        alert("Movie Edited");
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  return (

<main className='p-4'>
      {loading ? (

        <h3>Loading...</h3>
       
      
      ) : (
        <>

    <div className="flex h-screen w-screen items-center justify-center ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-2 rounded-md border p-6 max-w-[325px] my-8"
      >
        <input
          {...register("title")}
          type="text"
          placeholder="title"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.title && <p className="text-sm text-red-500">{errors.title.message}</p>}
        <input
          {...register("director")}
          type="text"
          placeholder="Director"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.director && <p className="text-sm text-red-500">{errors.director.message}</p>}
        <input
          {...register("releaseDate")}
          type="date"
          placeholder="Release Date"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.releaseDate && <p className="text-sm text-red-500 break-words">{errors.releaseDate.message}</p>}
        <input
          {...register("genre")}
          type="text"
          placeholder="Genre"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.genre && <p className="text-sm text-red-500">{errors.genre.message}</p>}
        <input
          {...register("summary")}
          type="text"
          placeholder="summary"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.summary && <p className="text-sm text-red-500">{errors.summary.message}</p>}
        <input
          {...register("posterUrl")}
          type="file"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.posterUrl && <p className="text-sm text-red-500">{errors.posterUrl.message}</p>}
        <input
          {...register("trailerUrl")}
          type="text"
          placeholder="Embed Id"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.trailerUrl && <p className="text-sm text-red-500">{errors.trailerUrl.message}</p>}
       
        <input
          type="submit"
          className="rounded-md bg-blue-500 py-1 text-white"
        />
      </form>
     </div>
            
            </>       
)}
    </main> 
  );
}