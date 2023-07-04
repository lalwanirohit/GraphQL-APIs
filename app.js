import express from "express";
import dotenv from "dotenv";
dotenv.config();

import connectDb from "./config/database.js";
import userModel from "./models/user.js";

const port = process.env.PORT;
const app = express();

// JSON
app.use(express.json());

// Route

// Database Connection
connectDb();

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})