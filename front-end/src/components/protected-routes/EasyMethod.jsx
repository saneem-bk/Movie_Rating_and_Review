import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const EasyMethod = ({ children }) => {
  const navigate = useNavigate();

  

  useEffect(() => {
    const checkAdmin = async () => {
      try {

        const res = await axios.get(
          "https://movie-rating-and-review.onrender.com/api/v1/admin/check-admin",
          {
            withCredentials: true,
          },
        );
  
        const data = res.data;
        console.log(data);
        
        if (data.success === false) {
          navigate("/", { replace: true });
        }
      } catch (error) {
        console.error("Error occurred while checking user:", error);
        navigate("/", { replace: true });
      }
    };
    checkAdmin();
  }, [navigate]);


  return children;
};


export default EasyMethod;