"use strict"
import { 
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} from 'graphql/type';
import GraphQLObjectId from 'graphql-scalar-objectid';
import restaurant from '../restaurant/model';

module.exports =  new GraphQLObjectType({
  name: 'restaurantTypeType',
  fields: () => ({
    _id: { type: GraphQLObjectId },
    name: { type: GraphQLString },
    restaurants: {
      type: new GraphQLList(require('../restaurant/type')),
      resolve: (parentValue, args) => {
        return new Promise((resolve, reject) => {
          restaurant.find({typeId: parentValue._id}, (err, data) => {
            err ? reject(err) : resolve(data);
          });
        })
      }
    }
  })
});