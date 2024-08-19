import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { Link, useNavigate} from "react-router-dom";


const schema = yup.object({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().min(6)
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
                "http://localhost:4600/api/v1/admin/signup",
                data,
                {
                    withCredentials: true,
                },
            );
               const data = res.data.message;
               console.log(success);

               if (data === "signed Up!") {
                navigate("/admin/signin", { replace: true });
            }

        } catch (error) {
            console.log(error);
        }
    };

    return (

        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-y-2 rounded-md border p-6"
        >

            <input
                {...register("name")}
                placeholder="name"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.name && <p>{errors.name.message}</p>}
            
            <input
                {...register("email")}
                placeholder="email"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.email && <p>{errors.email.message}</p>}
            
            <input
                {...register("password")}
                placeholder="password"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.password && <p>{errors.password.message}</p>}
            <input type="submit" className="rounded-md bg-blue-500 py-1 text-white" />
            <p>
                already signed-up{" "}
                <Link to="/admin/signin" className="text-green-500 underline"  >
                    signin
                </Link>
            </p>

        </form>
    );

};