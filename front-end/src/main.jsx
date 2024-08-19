import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import SignupPage from "./pages/admin/SignupPage";
import SigninPage from "./pages/admin/SigninPage";
import UserSignupPage from "./pages/user/UserSignupPage";
import UserSigninPage from "./pages/user/UserSigninPage";
import LandingLayout from "./layouts/LandingLayout";
import UserLayout from "./layouts/UserLayout";
import AddMovie from "./components/admin/AddMovie";
import AdminDashboard from "./pages/admin/AdminDashboard";
import EasyMethod from "./components/protected-routes/EasyMethod";
import UserRoutes from "./components/protected-routes/UserRoutes";
import AdminLayout from "./layouts/AdminLayout";
import Home from "./pages/user/Home";
import MoviePage from "./pages/user/MoviePage";
import Testing from "./components/Testing";
import AddReview from "./pages/user/AddReview";




const router = createBrowserRouter([

{
  element: <LandingLayout />,
  children: [
  
  {
    path: "/",
    element: <App />
  },
  {
    path: "/user/signup",
    element: <UserSignupPage />
  },
  {
    path: "/user/signin",
    element: <UserSigninPage />
  },
  {
    path: "/admin/signup",
    element: <SignupPage />
  },
  {
    path: "/admin/sigin",
    element: <SigninPage />
  },
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
       path: "/admin/dashboard/add-movie",
       element: <AddMovie />
     }
   ]

  },
  {
   
    element: (
      <UserRoutes>
        <UserLayout />
      </UserRoutes>
    ),
    children: [
    
      {
        path: "/user/home",
        element: <Home />
      },
      {
        path: "/user/movies/:id",
        element: <MoviePage />
      },
      {
        path: "/add-review",
        element: <AddReview />
      }
    
      
    ]

  },
  {
    path: "/testing",
    element:<Testing />
  }
  
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
