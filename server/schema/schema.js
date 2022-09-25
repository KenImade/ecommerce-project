const Product = require('../models/Product');

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull,
    GraphQLEnumType,
    GraphQLBoolean,
    GraphQLFloat,
    GraphQLInt,
} = require("graphql");

// Accessories Type
const accessoriesType = new GraphQLObjectType({
    name: "Accessories",
    fields: () => ({
        name: {type: GraphQLString},
        quantity: {type: GraphQLInt}
    })
})

//Product Type
const ProductType = new GraphQLObjectType({
    name: "Product",
    fields: () => ({
        id: {type: GraphQLID},
        title: {type: GraphQLString},
        tag: {type: GraphQLString},
        category: {type: GraphQLString},
        isNew: {type: GraphQLBoolean},
        previewImg: {type: GraphQLString},
        productImg: {type: GraphQLString},
        info: {type: GraphQLString},
        price: {type: GraphQLFloat},
        quantity: {type: GraphQLFloat},
        features: {type: GraphQLString},
        accessories: {type: new GraphQLList(accessoriesType)},
        gallery: {type: new GraphQLList(GraphQLString)},
        cartImg: {type: GraphQLString}
    })
})

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        products: {
            type: new GraphQLList(ProductType),
            resolve(parent, args) {
                return Product.find();
            }
        },
        product: {
            type: ProductType,
            args: {id: {type: GraphQLID }},
            resolve(parent, args) {
                return Product.findById(args.id);
            }
        }
    }
})

// //Mutations
// const mutation = new GraphQLObjectType({
//     name: 'Mutation',
//     fields {
//         //
//     }
// })


module.exports = new GraphQLSchema({
    query: RootQuery,
})