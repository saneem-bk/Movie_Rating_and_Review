import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const EasyMethod = ({ children }) => {
  const navigate = useNavigate();

  const token = Cookies.get("token");
  console.log(token);

  if (token === undefined) {
    navigate("/", { replace: true });
  }

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const res = await axios.get(
          "http://localhost:4600/api/v1/admin/check-admin",
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