import Signup from "../../components/admin/AdminSignup";
import black from "../../images/black.jpeg";

const SignupPage = () => {
    return (
        <div className="flex flex-col gap-y-3 justify-center items-center h-screen bg-cover h-screen bg-center"
          style={{ backgroundImage: `url(${black})` }}
        >
             <h1 className="flex text-2xl text-white border-white border-4 shadow-lg px-4 py-1 rounded-lg hover:scale-110 cursor-pointer ease-in duration-300  transition-all">
              Sign Up
            </h1>
            <Signup />
        </div>
    );
};

export default SignupPage;