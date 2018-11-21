"use strict"
import { 
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLBoolean,
  GraphQLFloat
} from 'graphql/type';
import GraphQLObjectId from 'graphql-scalar-objectid';
import restaurant from '../restaurant/model';
import menu from '../menu/model';

module.exports = new GraphQLObjectType({
  name: 'menuItemType',
  fields: () => ({
    _id: { type: GraphQLObjectId },
    name: { type: GraphQLString },
    ingredient: { type: new GraphQLList(GraphQLString) },
    spicy: { type: GraphQLBoolean },
    description: { type: GraphQLString },
    price: { type: GraphQLFloat },
    promotion_price: { type: GraphQLFloat },
    promotion_percentage: { type: GraphQLFloat },
    restaurant: {
      type: require('../restaurant/type'),
      resolve: (parentValue, args) => {
        return new Promise((resolve, reject) => {
          restaurant.findOne({_id: parentValue.restaurant_id}, (err, data) => {
            err ? reject(err) : resolve(data);
          });
        })
      }
    },
    menus: {
      type: new GraphQLList(require('../menu/type')),
      resolve: (parentValue, args) => {
        return new Promise((resolve, reject) => {
          menu.find({_id: { $in: parentValue.menus }}, (err, data) => {
            err ? reject(err) : resolve(data);
          });
        })
      }
    }
  })
});