import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import SignupPage from "./pages/admin/signupPage";
import SigninPage from "./pages/admin/signinPage";
import UserSignupPage from "./pages/user/UserSignupPage";
import UserSigninPage from "./pages/user/UserSigninPage";
import HomeLayout from "./layouts/HomeLayout";
import AddMovie from "./components/admin/AddMovie";
import AdminDashboard from "./pages/admin/AdminDashboard";



const router = createBrowserRouter([

{
  element: <HomeLayout />,
  children: [
  
  {
    path: "/",
    element: <App />
  },
  {
    path: "/admin/signup",
    element: <SignupPage />
  },
  {
    path: "/admin/sigin",
    element: <SigninPage />
  },
  {
    path: "/user/signup",
    element: <UserSignupPage />
  },
  {
    path: "/user/signin",
    element: <UserSigninPage />
  }
 ]
},
  
 {
  element: (
     <EasyMethod>
       <AdminLayout />
     </EasyMethod>
   ),
   
   children: [
   
     {
       path: "/admin/dashboard",
       element: <AdminDashboard />
     },
     {
       path: "/admin/add-movie",
       element: <AddMovie />
     }
   ]

}

]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
