import express from "express";
import cookieParser from "cookie-parser"; 
import dotenv from "dotenv";
import { connect } from "../config/db.js";
import  userRouter  from "../routes/userRouter.js";
import adminRouter from "../routes/adminRouter.js";
import cors from "cors";


dotenv.config();

const app = express();
console.log(process.env.PORT)
const port = process.env.PORT;
app.use(cors({
    origin: 'https://66d41b0d9886f0efb52f8c72--creative-panda-70aa6b.netlify.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser({
    sameSite: 'none',
}));
app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);


connect();


app.get("/", (req, res) => {
    res.send("hello world!");
})

app.listen(port, () => {
    console.log(`App listening to port : ${port}`);
});