import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import Admin from "../models/adminModel.js";

dotenv.config();

const authenticateAdmin = async (req, res, next) => {

try{

    const token = req.cookies.token;
    
    
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    console.log(decoded)

      const  admin = await Admin.findOne({ email: decoded.email });
        console.log(admin)

        if (!admin) {

            return res.status(401).send({ message: 'Admin not found' });
        }

        req.admin = admin;
        console.log(req.admin);
        next();
   
  } catch (error) {

            res.status(401).json({ message: "Authentication error" });
        };

  
}
 
export default authenticateAdmin;