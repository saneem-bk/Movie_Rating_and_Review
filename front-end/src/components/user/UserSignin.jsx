import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";


const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(6)
})

    .required();


export default function Signin() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: yupResolver(schema) });


    const onSubmit = (data) => console.log(data);

    return (

        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex"
        >
            
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
                User not created yet{" "}
                <Link to="/user/signup" className="text-green"  >
                    signup
                </Link>
            </p>

        </form>
    );

};