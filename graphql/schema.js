import {
    GraphQLSchema as Schema,
    GraphQLObjectType as ObjectType,
} from "graphql";



const schema = new Schema({
    query: new ObjectType({
        name: "Query",
        fields: {
        },
    }),
    mutation: new ObjectType({
        name: "Mutation",
        fields: {
            
        },
    }),
});

module.exports = schema;