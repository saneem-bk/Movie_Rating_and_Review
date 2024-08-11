import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";


const schema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(6)
})

    .required();


export default function Signup() {
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
                {...register("firstName")}
                placeholder="First name"
                className="block"
            />
            {errors.firstName && <p>{errors.firstName.message}</p>}

            <input
                {...register("lastName")}
                placeholder="Last name"
                className="block"
            />
            {errors.lastName && <p>{errors.lastName.message}</p>}
            
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
                User already exist{" "}
                <Link to="/user/signin" className="text-green"  >
                    signin
                </Link>
            </p>

        </form>
    );

};