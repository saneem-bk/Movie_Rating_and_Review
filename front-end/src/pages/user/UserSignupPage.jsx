import Signup from "../../components/user/UserSignup";

const UserSignupPage = () => {
    return (
        <div className="flex h-screen w-screen flex-col items-center justify-center">
             <h1 className="flex text-2xl text-white border-white border-4 shadow-lg px-4 py-1 rounded-lg hover:scale-110 cursor-pointer ease-in duration-300  transition-all">
              Sign Up
            </h1>
            <Signup />
        </div>
    );
};

export default UserSignupPage;