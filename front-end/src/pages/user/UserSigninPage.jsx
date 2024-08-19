import Signin from "../../components/user/UserSignin";

const UserSigninPage = () => {
    return (
        <div className="flex flex-col gap-y-5 justify-center items-center h-screen">
            <h1 className="text-2xl text-blue-700 shadow-lg px-4 py-1 rounded-lg hover:scale-110 cursor-pointer ease-in duration-300  transition-all">
              sign in
            </h1>
            <Signin />
        </div>
    );
};

export default UserSigninPage;