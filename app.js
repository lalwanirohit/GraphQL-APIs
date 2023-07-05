import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
dotenv.config();

import connectDb from "./config/database.js";
// import schema from "./graphql/schema.js";
import userModel from "./models/user.js";

const port = process.env.PORT;
const databaseUrl = process.env.DATABASE_URL;
const app = express();

// JSON
app.use(express.json());

// Route

// Cors Policy
app.use(cors());

// Database Connection
connectDb(databaseUrl);

// Graphql Route
// app.use("/graphql", graphqlHTTP((req, res) => ({
//     schema,
//     graphiql: true,
//     //customFormatErrorFn : (err) => { console.log(err)},
//     rootValue: {
//         request: req,
//         response: res,
//     },
//     pretty: true,
// })));

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});