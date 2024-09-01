import jwt from "jsonwebtoken";
import dotenv from "dotenv";


dotenv.config();

function authenticateUser (req, res, next) {



    const token = req.cookies.token;

    console.log(token);

    if (!token) {
        return res.status(401).send('No token provided');
     }
    
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {

    
        console.log(err)

     
        if (err) {

            return res.status(401).send({ message: 'error while verifying user' });
        }

        req.user = user;
    
        console.log(req.user);
    
        next();
   
    });
  
}
 
export default authenticateUser;