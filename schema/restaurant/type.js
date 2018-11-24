"use strict"
import { 
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} from 'graphql/type';
import GraphQLObjectId from 'graphql-scalar-objectid';
import cuisine from '../cuisine/model';
import restaurantType from '../restaurant_type/model';
import merchant from '../merchant/model';

module.exports = new GraphQLObjectType({
  name: 'restaurantType',
  fields: () => ({
    _id: { type: GraphQLObjectId },
    name: { type: GraphQLString },
    cityCode: { type: GraphQLString },
    address: { type: GraphQLString },
    postal: { type: GraphQLString },
    geoLocation: { type: GraphQLString },
    tm_open: { type: GraphQLString },
    tm_close: { type: GraphQLString },
    delivery_fee: { type: GraphQLString },
    tm_register: { type: GraphQLString },
    cuisine: {
      type: require('../cuisine/type'),
      resolve: (parentValue, args) => {
        return new Promise((resolve, reject) => {
          cuisine.findOne({_id: parentValue.cuisineId}, (err, data) => {
            err ? reject(err) : resolve(data);
          });
        })
      }
    },
    type: {
      type: require('../restaurant_type/type'),
      resolve: (parentValue, args) => {
        return new Promise((resolve, reject) => {
          restaurantType.findOne({_id: parentValue.typeId}, (err, data) => {
            err ? reject(err) : resolve(data);
          });
        })
      }
    },
    merchant: {
      type: require('../merchant/type'),
      resolve: (parentValue, args) => {
        return new Promise((resolve, reject) => {
          merchant.findOne({_id: parentValue.merchant}, (err, data) => {
            err ? reject(err) : resolve(data);
          });
        })
      }
    }
  })
});