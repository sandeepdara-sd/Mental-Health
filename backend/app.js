import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import router from "./routes/user-routes.js"; // Import user routes

const app = express();

app.use(cors()); // To allow cross-origin requests
app.use(express.json()); // To parse JSON request bodies

// Route setup
app.use("/api/user", router);

// Connect to MongoDB and start the server
mongoose.connect("mongodb+srv://sandeepdara44:1234567890@cluster0.wyu2t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => app.listen(5000))
    .then(() => console.log("DB Connected and Server running on port 5000"))
    .catch((err) => console.log(err));
