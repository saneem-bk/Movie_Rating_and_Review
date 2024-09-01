import jwt from "jsonwebtoken";
import dotenv from "dotenv";


dotenv.config();


function authenticateAdmin (req, res, next) {



    const token = req.cookies.token;

    console.log(token);

    if (!token) {
        return res.status(401).send('No token provided');
     }
    
    jwt.verify(token, process.env.SECRET_KEY, (err, admin) => {

    
        console.log(err)

     
        if (err) {

            return res.status(401).send({ message: 'error while verifying admin' });
        }

        req.admin = admin;
    
        console.log(req.admin);
    
        next();
   
    });
  
}
 
export default authenticateAdmin;