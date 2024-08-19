import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const EasyMethod = ({ children }) => {
  const navigate = useNavigate();

  const token = Cookies.get("token");
  console.log(token);

  if (token === undefined) {
    navigate("/", { replace: true });
  }
  return children;
};

export default EasyMethod;