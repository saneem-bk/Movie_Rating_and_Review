import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        director: String,
        releaseDate: Date,
        genre: [String],
        summary: String,
        averageRating: {
            type: Number,
            default: 0
           
        },
        posterUrl: String,
        trailerUrl: String,
        reviews: [{type:mongoose.Schema.Types.ObjectId,ref:'Review'}]
    },
    { timestamps: true }
);

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;