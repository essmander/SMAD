const graphql = require('graphql');
const _= require('lodash');

const {GraphQLObjectType, GraphQLString, GraphQLSchema} = graphql;

//Dummy data 
var books = [
{name: 'Name of the wind', genre:'Fantasy', id:'1'},
{name: 'Lord of the ring', genre:'Fantasy', id:'2'},
{name: 'Dotka collection', genre:'Sci-fi', id:'3'},
];

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: {type: GraphQLString },
        name: {type: GraphQLString},
        genre: {GraphQLString}
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: {id: {type: GraphQLString}},
            resolve(parent, args){
                //code to get data from db / other source
              return _.find(books, {id: args.id});   
            }
        }
    }
});

module.export = new GraphQLSchema({
    query: RootQuery
});