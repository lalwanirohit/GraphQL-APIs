import {
    GraphQLSchema as Schema,
    GraphQLObjectType as ObjectType,
} from "graphql";

import createUser from "./mutations/createUser.js";

const schema = new Schema({
    query: new ObjectType({
        name: "Query",
        fields: {
        },
    }),
    mutation: new ObjectType({
        name: "Mutation",
        fields: {
            createUser,
        },
    }),
});

export default schema;