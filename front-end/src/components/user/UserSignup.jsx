import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const schema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup
      .string()
      .email('Invalid email address')
      .required('Email is required'),
    password: yup
      .string()
      .required('Password is required')
      .matches(
      /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
      'Password must be at least 6 characters long, contain one uppercase letter, one lowercase letter, and one number'
    )
})

    .required();



export default function Signup() {

   



    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: yupResolver(schema) });


    const navigate = useNavigate();
    
    const onSubmit = async (data) => {
        try {
            

            const res = await axios.post(
                "https://movie-rating-and-review.onrender.com/api/v1/user/signup",
                data,
                {
                    withCredentials: true,
                },
            );
            const success = await res.data;
            
            if (success === "User already exist") {
               
                alert("you have already Signed Up");

            } else if (success === "Signed Up successfully!") {
                alert(success)
                setTimeout(() => {
                navigate("/user/signin", { replace: true });
            }, 3000);
            }

        } catch (error) {
            console.log(error);
        }
    };

    return (

        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col flex-wrap gap-y-2 rounded-md border p-6 max-w-[325px] my-8"
        >

            <input
                {...register("firstName")}
                placeholder="First name"
                className="block w-full rounded-lg border-4 border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.firstName && <p className="text-sm text-red-500">{errors.firstName.message}</p>}

            <input
                {...register("lastName")}
                placeholder="Last name"
                className="block w-full rounded-lg border-4 border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.lastName && <p className="text-sm text-red-500">{errors.lastName.message}</p>}
            
            <input
                {...register("email")}
                placeholder="email"
                className="block w-full rounded-lg border-4 border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
            
            <input
                {...register("password")}
                placeholder="password"
                type="password"
                className="block w-full rounded-lg border-4 border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.password && <p className="text-sm text-red-500 break-words">{errors.password.message}</p>}
            <input type="submit" className="rounded-md border-4 bg-blue-500 py-1 p-3  mt-5 text-white" />
            <p className="flex justify-between text-white">
                Already signed Up{" "}
                <Link to="/user/signin" className="text-white underline"  >
                    Sign In
                </Link>
            </p>

        </form>
    );

};