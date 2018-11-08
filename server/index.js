const express = require('express');
const { graphql, buildSchema } = require('graphql');
const graphqlHTTP = require('express-graphql');
//const cors = require('cors');
const schema = require('./schema/schema').default;

// const schema = buildSchema (`
//     type Query {
//         language: String
//     }`
// )

// const rootValue = {
//     language: () => 'GraphQL'
// }

const app = express();
// app.use(cors());

app.use('/graphql', graphqlHTTP({
    // rootValue, schema, graphiql: true
    schema,
    graphiql: true
}));

app.listen(4000, () =>console.log('Listening on 4000 yolo'));