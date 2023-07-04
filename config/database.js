import mongoose from "mongoose";
// import { generateErrorResponse, generateSuccessResponse } from "../helpers/apiHelper.js";

export default function connectDb () {
    try {
        const dbName = process.env.DATABASE;
        console.log('mongodb://localhost:27017/'+dbName);
        mongoose.connect('mongodb://localhost:27017/'+dbName);
        console.log('Connected successfully ...');
    } catch (error) {
        console.log(error.message);
    }
}