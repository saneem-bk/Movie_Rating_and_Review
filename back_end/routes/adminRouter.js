import express from "express";
import upload from "../middlewares/upload-middleware.js";
import User from "../models/userModel.js";
import Movie from "../models/movieModel.js";
import bcrypt from "bcrypt";
import Admin from "../models/adminModel.js";
import { adminToken } from "../utils/generateToken.js";
import { cloudinaryInstance } from "../config/cloudinary.js";





const adminRouter = express.Router();


adminRouter.post("/signup", async (req, res) => {
    try {
        console.log(req.body);
  
        const { name, email, password } = req.body;
        const adminExist = await Admin.findOne({ email });
        if (adminExist) {
            return res.send("Admin already exist");
        }
  
        const saltRounds = 10;
        const hashPassword = await bcrypt.hash(password, saltRounds);
  
        const newAdmin = new Admin({
            name,
            email,
            hashPassword
        });
        const newAdminCreated = await newAdmin.save();
  
        if (!newAdminCreated) {
            return res.send("Admin is not created");
        }
  
        const token = adminToken(newAdminCreated);
        res.cookie("token", token);
        res.json({ message: "signed Up!", token });
    } catch (error) {
        console.log(error, "Something wrong");
    }
  
});


adminRouter.post("/signin", async (req, res) => {
    try {
      const body = req.body;
      const { email, password } = body;
      console.log(body);
  
      const admin = await Admin.findOne({ email });
  
      if (!admin) {
        return res.send("Admin not found");
      }
  
      const matchPassword = await bcrypt.compare(
        password,
        admin.hashPassword
      );
  
      console.log(matchPassword, "matchpassword");
      if (!matchPassword) {
        return res.send("password does not match");
      }
  
      const token = adminToken(admin);
  
      res.cookie("token", token);
      res.json({ message: "Logged in!", token });
    } catch (error) {
      console.error("Error", error);
      res.status(500).send("Internal Server Error");
    }

  });


adminRouter.get("/show-movies", async (req, res) => {
    const movies = await Movie.find({});
    res.send(movies);
});





adminRouter.get("/movie/:id", async (req, res) => {
    try {
    
        const id = req.params.id;
        const movie = await Movie.findById(id);

        if (!movie) {
            res.status(404).send({ message: "Movie not Found" });
        } else {
            res.status(200).send(movie);
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: error.message })
    }

});




adminRouter.put("/update-movie/:id", async (req, res) => {

    try {
        const id = req.params.id;
        const result = await Movie.findByIdAndUpdate(id, req.body);
        if (!result) {
            res.status(404).send({ message: "Movie not found" });
        } else {
            res.status(200).send({ message: "Movie updated successfully" });
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message })
    }
    
});





adminRouter.post("/add-movie", upload.single("posterUrl"), async (req, res) => {
    try {
      console.log("hitted");
      if (!req.file) {
        return res.send("file is not visible");
      }
      
       cloudinaryInstance.uploader.upload(req.file.path, async (err, result) => {
        if (err) {
          console.log(err, "error");
            return res.status(500).json({
                success: false,
                message: "Error",
            });
        } else {
            
          console.log(result);

          const imageUrl = result.url;
          
        const newMovie = await new Movie({
          title: req.body.title,
          director: req.body.director,
          releaseDate: req.body.releaseDate,
          genre: req.body.genre,
          summary: req.body.summary,
          averageRating: 0,
          posterUrl: imageUrl,
          trailerUrl: req.body.trailerUrl,
        });
        const newMovieCreated = await newMovie.save();
        if (!newMovieCreated) {
          return res.send("movie is not created");
        }
        return res.send(newMovieCreated);
      }
      });
    } catch (error) {
      console.log("something went wrong", error);
      res.send("failed to create movie");
    }
  });
  





adminRouter.delete("/delete-movie/:id", async (req, res) => {


    try {
        const id = req.params.id;
        const result = await Movie.findByIdAndDelete(id);
        if (!result) {
            res.status(404).send({ message: "Movie not found" });
        } else {
            res.status(200).send({ message: "Movie deleted successfully" });
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message })
    }
   
});






adminRouter.get("/user-list", async (req, res) => {
    const users = await User.find({});
    res.send(users);
});





adminRouter.get("/show-user/:id", async (req, res) => {
    try {
    
        const id = req.params.id;
        const user = await User.findById(id);

        if (!user) {
            res.status(404).send({ message: "User not Found" });
        } else {
            res.status(200).send(user);
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: error.message })
    }
});

 




adminRouter.delete("/delete-user/:id", async (req, res) => {


    try {
        const id = req.params.id;
        const result = await User.findByIdAndDelete(id);
        if (!result) {
            res.status(404).send({ message: "User not found" });
        } else {
            res.status(200).send({ message: "User deleted successfully" });
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message })
    }
   

});





export default adminRouter;