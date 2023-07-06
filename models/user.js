import mongoose from "mongoose";

// Schema
const userSchema = mongoose.Schema({
    firstName: { type: String, trim: true },
    middleName: { type: String, trim: true },
    lastName: { type: String, trim: true },
    contactNumber: { type: String, min: 10, max: 10 },
    countryCode: { type: String, min:2, max: 2 },
    email: { type: String, trim: true }
});

// Model
const User = mongoose.model('users', userSchema);

export default User;