import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import SignupPage from "./pages/admin/SignupPage";
import SigninPage from "./pages/admin/SigninPage";
import UserSignupPage from "./pages/user/UserSignupPage";
import UserSigninPage from "./pages/user/UserSigninPage";
import LandingLayout from "./layouts/LandingLayout";
import UserLayout from "./layouts/UserLayout";
import AddMovie from "./pages/admin/AddMovie";
import AdminDashboard from "./pages/admin/AdminDashboard";
import EasyMethod from "./components/protected-routes/EasyMethod";
import UserRoutes from "./components/protected-routes/UserRoutes";
import AdminLayout from "./layouts/AdminLayout";
import Home from "./pages/user/Home";
import MoviePage from "./pages/user/MoviePage";
import AddReview from "./pages/user/AddReview";
import UserList from "./pages/admin/UserList";
import AllMovies from "./pages/admin/AllMovies";
import ShowMovie from "./pages/admin/ShowMovie";
import EditMovie from "./pages/admin/EditMovie";
import DeleteMovie from "./pages/admin/DeleteMovie";
import ShowReviews from "./pages/admin/ShowReviews";
import UserShowReviews from "./pages/user/UserShowReviews";
import Bio from "./pages/user/Bio.jsx";
import PremiumPage from "./pages/PremiumPage.jsx"


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
  
 ]
  },
  
    {
      path: "/admin_2156/signup",
      element: <SignupPage />
    },
    {
      path: "/admin_2156/signin",
      element: <SigninPage />
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
     },
     {
      path: "/admin/dashboard/movie-list",
      element: <AllMovies />
     },
     {
      path: "/admin/dashboard/user-list",
      element: <UserList />
     },
     {
      path: "/admin/movie/:id",
      element: <ShowMovie />
     },
     {
      path: "/admin/movie/:id/show-reviews",
      element: <ShowReviews />
     },
     {
      path: "/admin/movie/edit/:id",
      element: <EditMovie />
     },
     {
      path: "/admin/movie/delete/:id",
      element: <DeleteMovie />
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
        path: "/user/bio",
        element: <Bio />
      },

      {
        path: "/user/:id/add-review",
        element: <AddReview />
      },
      {
        path: "/user/movies/:id/show-reviews",
        element: <UserShowReviews />
       },
      {
        path: "user/movies/:id",
        element: <MoviePage />
      }
      
     
    
      
    ]

  },
  {
    path: "/premium",
    element: <PremiumPage />
  }
 
 
  
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
