import Signin from "../../components/admin/AdminSignin";
import black from "../../images/black.jpeg";

const SigninPage = () => {
    return (
        <div className="flex flex-col gap-y-3 justify-center items-center h-screen bg-cover h-screen bg-center"
         style={{backgroundImage: `url(${black})`}}
        >
             <h1 className="flex text-2xl text-white border-white border-4 shadow-lg px-4 py-1 rounded-lg hover:scale-110 cursor-pointer ease-in duration-300  transition-all">
              Sign In
            </h1>
            <Signin />
        </div>
    );
};

export default SigninPage;