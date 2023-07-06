import { GraphQLString as String } from "graphql";
import { generateErrorResponse, generateSuccessResponse } from "../../helpers/apiHelper.js";
import createUserType from "../types/createUserType.js";
import userModel from "../../models/user.js";

const createUser = {
    // return type of createUser API
    type: createUserType,

    // list of argument
    args: {
        firstName: {
            type: String,
            description: "first name of user. it should be string.",
        },
        middleName: {
            type: String,
            description: "middle name of user. it should be string."
        },
        lastName: {
            type: String,
            description: "last name of user. it should be string."
        },
        contactNumber: {
            type: String,
            description: "contact number of user. it should be of 10 digits only."
        },
        countryCode: {
            type: String,
            description: "country code of user's contact number. emample (91)"
        },
        email: {
            type: String,
            description: "email of user."
        }
    },

    // resolver function for mutation
    async resolver({ req }, argsData) {
        const { firstName, middleName, lastName, contactNumber, countryCode, email } = argsData;
        const newUser = await userModel.create({
            firstName: firstName,
            middleName: middleName,
            lastName: lastName,
            contactNumber: contactNumber,
            countryCode: countryCode,
            email: email
        });

        return generateSuccessResponse(true, "User created successfully", newUser);
    }
}

export default createUser;