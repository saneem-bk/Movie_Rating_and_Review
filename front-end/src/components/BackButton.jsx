import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";



function BackButton() {

  const navigate = useNavigate();
 
  const goBack = () => {
    navigate(-1)
  }
  


    return(
        <div className="flex">
          
         <div className="bg-orange-500 text-white px-4 rounded-lg w-fit">
          
          <  BsArrowLeft className="text-2xl"
             onClick={goBack}
          />
          </div>
        </div>
    );

}

export default BackButton;