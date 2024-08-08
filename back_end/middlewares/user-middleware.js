import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/userModel.js";

dotenv.config();

const authenticateUser = async (req, res, next) => {

try{

    const token = req.cookies.token;
    console.log(token);
    if (!token) {
        return res.status(401).send('Unauthorized');
     }
    
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    console.log(decoded)

      const  user = await User.findOne({ email: decoded.data });
        console.log(user)

        if (!user) {

            return res.status(401).send({ message: 'user not found' });
        }

        req.user = user;
        console.log(req.user);
        next();
   
  } catch (error) {

            res.status(401).json({ message: "Authentication error" });
        };

  
}
 
export default authenticateUser;