import express from "express";
import upload from "../middlewares/upload-middleware.js";
import User from "../models/userModel.js";
import Movie from "../models/movieModel.js";
import Review from "../models/reviewModel.js"
import bcrypt from "bcrypt";
import Admin from "../models/adminModel.js";
import { adminToken } from "../utils/generateToken.js";
import { cloudinaryInstance } from "../config/cloudinary.js";
import authenticateAdmin from "../middlewares/admin-middleware.js";





const adminRouter = express.Router();


adminRouter.post("/signup", async (req, res) => {
    try {
        console.log(req.body);
  
        const { name, password } = req.body;
        const email = req.body.email.toLowerCase();
       
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
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: 'None',
        });

        res.json({ message: "signed Up!"});
    } catch (error) {
        console.log(error, "Something wrong");
    }
  
});


adminRouter.post("/signin", async (req, res) => {
    try {
        const body = req.body;
        
        const { password } = body;
        
        const email = body.email.toLowerCase();
  
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
  
      res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: 'None',
      });
        
        res.json({ message: "Logged in!"});
        
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



adminRouter.get("/movie/:id/get-reviews", async (req, res) => {
  
  
    try {
           
            const movieId = req.params.id;
            const reviews = await Review.find({ movieId: movieId });
    
            if (!reviews) {
                res.status(404).send({ message: "No reviews yet" });
            } else {
                res.status(200).send(reviews);
            }
        } catch (error) {
            console.error(error.message);
            res.status(500).send({ message: error.message })
        }
    
});




adminRouter.put("/update-movie/:id", upload.single("posterUrl"), async (req, res) => {
    try {
        const id = req.params.id;
        const genre = req.body.genre;
        const changedGenre = genre.replace(/\s*,\s*/g, ',');
        
        const updateData = {
            title: req.body.title,
            director: req.body.director,
            releaseDate: req.body.releaseDate,
            genre: changedGenre,
            summary: req.body.summary,
            trailerUrl: req.body.trailerUrl,
        };

        if (req.file) {
           
            const result = await cloudinaryInstance.uploader.upload(req.file.path);
            updateData.posterUrl = result.url;
        }

        const updatedMovie = await Movie.findByIdAndUpdate(id, updateData, { new: true });

        if (!updatedMovie) {
            return res.status(404).send({ message: "Movie not found" });
        }

        res.status(200).send({ message: "Movie updated successfully", movie: updatedMovie });
    } catch (error) {
        console.log("Error updating movie:", error.message);
        res.status(500).send({ message: "An error occurred while updating the movie." });
    }
});





adminRouter.post("/add-movie", upload.single("posterUrl"), async (req, res) => {
    try {
        console.log("hitted");
        
        const title = req.body.title;
        const movieExists = await Movie.exists({ title: title },
            {collation: {locale:'en',strength: 2}});
          
        if (movieExists) {
            return res.json({
                message: "this movie already exists",
                movieExists: true
            });
        };


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
          const genre = req.body.genre;
          const changedGenre = genre.replace(/\s*,\s*/g, ',');
            
        const newMovie = new Movie({
          title: title,
          director: req.body.director,
          releaseDate: req.body.releaseDate,
          genre: changedGenre,
          summary: req.body.summary,
          averageRating: 0,
          posterUrl: imageUrl,
          trailerUrl: req.body.trailerUrl,
        });
        const newMovieCreated = await newMovie.save();
        if (!newMovieCreated) {
          return res.send("movie is not created");
        }
        return res.send("success");
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

 
adminRouter.get("/overview", async (req, res) => { 

    const recentUsers = await User.countDocuments({
        createdAt: { $gt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) }
    });

    const totalUsers = await User.countDocuments();

    const recentReviews = await Review.countDocuments({
        createdAt: { $gt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) }
    });

    const totalReviews = await Review.countDocuments();

    const recentMovies = await Movie.countDocuments({
        createdAt: { $gt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) }
    });
    
    const totalMovies = await Movie.countDocuments();
  
    const overviewData = {
      recentUsers,
      totalUsers,
      recentReviews,
      totalReviews,
      recentMovies,
      totalMovies,
    };
  
    res.json(overviewData); 

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


adminRouter.get("/check-admin", authenticateAdmin, async (req, res) => {
   
    const admin = req.admin;

    if (!admin) {
        return res.json({ message: "authentication middleware error" });
      }
    
    console.log('data', admin);

    const findAdmin = await Admin.findOne({ email: admin.email });

    
  
   if (!findAdmin) {
      return res.json({ message: "authentication failed", success: false });
    }
    
    res.json({ message: "authenticateAdmin", success: true });
  });





export default adminRouter;