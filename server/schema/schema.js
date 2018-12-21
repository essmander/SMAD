const graphql = require('graphql');
const _ = require('lodash');
const BoardMember = require('../models/boardMember');


const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList
} = graphql;

// dummy data
// var books = [
//     { name: 'Name of the Wind', genre: 'Fantasy', id: '1', authorId: '1' },
//     { name: 'The Final Empire', genre: 'Fantasy', id: '2', authorId: '2' },
//     { name: 'The Long Earth', genre: 'Sci-Fi', id: '3', authorId: '3' },
//     { name: 'A', genre: 'A', id: '4', authorId: '1' },
//     { name: 'B', genre: 'B', id: '5', authorId: '2' },
//     { name: 'C', genre: 'C', id: '6', authorId: '3' },
// ];

// var authors = [
//     { name: 'Patrick Rothfuss', age: 44, id: '1' },
//     { name: 'Brandon Sanderson', age: 42, id: '2' },
//     { name: 'Terry Pratchett', age: 66, id: '3' } 
// ];

// var members = [
//     {name:'Anders Nordström', role:'Ordförande', id: '1'},
//     {name:'Nils Johansson', role:'Kassör', id:'2'}
// ];

const BoardMemberType = new GraphQLObjectType({
    name: 'BoardMember',
    fields: () =>({
        id: { type: GraphQLID},
        name: { type: GraphQLString },
        role: { type: GraphQLString }            
    })
});

// const BookType = new GraphQLObjectType({
//     name: 'Book',
//     fields: ( ) => ({
//         id: { type: GraphQLID },
//         name: { type: GraphQLString },
//         genre: { type: GraphQLString },
//         author: {
//             type: AuthorType,
//             resolve(parent, args){
//                 console.log(parent);
//                 return _.find(authors, { id: parent.authorId });
//             }
//         }
//     })
// });

// const AuthorType = new GraphQLObjectType({
//     name: 'Author',
//     fields: ( ) => ({
//         id: { type: GraphQLID },
//         name: { type: GraphQLString },
//         age: { type: GraphQLInt },
//         books: {
//             type: new GraphQLList(BookType),
//             resolve(parent, args){
//                 return _.filter(books, {authorId: parent.id})
//             }
//         }
//     })
// });

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        // book: {
        //     type: BookType,
        //     args: { id: { type: GraphQLID } },
        //     resolve(parent, args){
        //         // code to get data from db / other source
        //         return _.find(books, { id: args.id });
        //     }
        // },
        // author: {
        //     type: AuthorType,
        //     args: { id: { type: GraphQLID } },
        //     resolve(parent, args){
        //         return _.find(authors, { id: args.id });
        //     }
        // },
        // books: {
        //     type: new GraphQLList(BookType),
        //     resolve(parent, args){
        //         return books
        //     }
        // },
        // authors: {
        //     type: new GraphQLList(AuthorType),
        //     resolve(parent, args){
        //         return authors
        //     }
        // },
        boardMember: {
            type: BoardMemberType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args){
                // return _.find(members, {id: args.id});
            }
        },   
        boardMembers: {
            type: new GraphQLList(BoardMemberType),
            resolve(parent, args){
                // return members
            }
        }   
    }
});
// const Mutation = new GraphQLObjectType({
//     name: 'Mutation',
//     fields: {
//         addAuthor: {
//             type: AuthorType,
//             args: {
//                 name: { type: GraphQLString },
//                 age: { type: GraphQLInt }
//             },
//             resolve(parent, args){
//                 let author = new Author({
//                     name: args.name,
//                     age: args.age
//                 });
//                 return author.save();
//             }
//         }
//     }
// });

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields:{
        addBoardMember: {
            type: BoardMemberType,
            args: {
                name: {type: GraphQLString },
                role: {type: GraphQLString }
            },
            resolve(parent, args){
                let boardMember = new BoardMember({
                    name: args.name,
                    role: args.role
                });

                return boardMember.save();
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});
