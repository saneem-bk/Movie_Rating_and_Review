import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup
  .object({
    title: yup.string().required(),
    director: yup.string().required(),
    releaseDate: yup.date().required(),
    genre: yup.string().required(),
    summary: yup.string().required(),
    posterUrl: yup.mixed().required(),
    trailerUrl: yup.string().required()
    
  })
  .required();

export default function AddMovie() {
 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    const requestBody = {
      title: data.title,
      director: data.director,
      releaseDate: data.releaseDate,
      genre: data.genre,
      summary: data.summary,
      posterUrl: data.posterUrl[0],
      trailerUrl: data.trailerUrl
    };
    try {
      const res = await axios.post(
        "http://localhost:4600/api/v1/admin/add-movie",
        requestBody,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-2 rounded-md border p-6"
      >
        <input
          {...register("title")}
          type="text"
          placeholder="title"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.title && <p>{errors.title.message}</p>}
        <input
          {...register("director")}
          type="text"
          placeholder="Director"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.director && <p>{errors.director.message}</p>}
        <input
          {...register("releaseDate")}
          type="date"
          placeholder="Release Date"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.releaseDate && <p>{errors.releaseDate.message}</p>}
        <input
          {...register("genre")}
          type="text"
          placeholder="Genre"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.genre && <p>{errors.genre.message}</p>}
        <input
          {...register("summary")}
          type="text"
          placeholder="summary"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.summary && <p>{errors.summary.message}</p>}
        <input
          {...register("posterUrl")}
          type="file"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.posterUrl && <p>{errors.posterUrl.message}</p>}
        <input
          {...register("trailerUrl")}
          type="text"
          placeholder="Trailer URL"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.trailerUrl && <p>{errors.trailerUrl.message}</p>}
       
        <input
          type="submit"
          className="rounded-md bg-blue-500 py-1 text-white"
        />
      </form>
    </div>
  );
}