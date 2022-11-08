const { gql } = require('apollo-server-express');

const typeDefs = gql`
 type Data {
    name: String
 }
 type Query {
    allHomes: Data
 }
`;

module.exports = typeDefs;