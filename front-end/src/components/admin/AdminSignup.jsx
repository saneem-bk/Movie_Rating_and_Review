import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom";


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


    const onSubmit = async (data) => {
        try {
            const res = await axios.post(
                "http://localhost:4600/api/v1/admin/signup",
                data,
                {
                    withCredentials: true,
                },
            );
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    };


    return (

        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex"
        >

            <input
                {...register("name")}
                placeholder="name"
                className="block"
            />
            {errors.name && <p>{errors.name.message}</p>}
            
            <input
                {...register("email")}
                placeholder="email"
                className="block"
            />
            {errors.email && <p>{errors.email.message}</p>}
            
            <input
                {...register("password")}
                placeholder="password"
                className="block"
            />
            {errors.password && <p>{errors.password.message}</p>}
            <input type="submit" className="rounded-md" />
            <p>
                Admin already exist{" "}
                <Link to="/admin/signin" className="text-green"  >
                    signin
                </Link>
            </p>

        </form>
    );

};