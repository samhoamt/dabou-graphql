"use strict"
import { 
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} from 'graphql/type';
import restaurant from '../restaurant/model';

module.exports = new GraphQLObjectType({
  name: 'merchantType',
  fields: () => ({
    _id: { type: GraphQLString },
    email: { type: GraphQLString },
    contact_number: { type: GraphQLString },
    bank_number: { type: GraphQLString },
    bank_account: { type: GraphQLString },
    currency: { type: GraphQLString },
    amount: { type: GraphQLString },
    tm_register: { type: GraphQLString },
    restaurants: {
      type: new GraphQLList(require('../restaurant/type')),
      resolve: (parentValue, args) => {
        return new Promise((resolve, reject) => {
          restaurant.find({merchant: parentValue._id}, (err, data) => {
            err ? reject(err) : resolve(data);
          });
        })
      }
    }
  })
});