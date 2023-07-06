import { GraphQLString as String, GraphQLID as Id, GraphQLObjectType as Object, GraphQLBoolean as Boolean, GraphQLNonNull as NonNull } from "graphql";

const createUserType = new Object({
    name: "createUserType",
    fields: {
        success: { type: new NonNull(Boolean) },
        message: { type: String },
        data: {
            type: new Object({
                name: "userData",
                fields: {
                    id: { type: Id },
                    firstName: { type: String },
                    middleName: { type: String },
                    lastName: { type: String },
                    contactNumber: { type: String },
                    countryCode: { type: String },
                    email: { type: String }
                }
            })
        },
    },
});

export default createUserType;