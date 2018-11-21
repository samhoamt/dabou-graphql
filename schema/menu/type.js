"use strict"
import { 
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} from 'graphql/type';
import GraphQLObjectId from 'graphql-scalar-objectid';
import menuItem from '../menu_item/model';

module.exports =  new GraphQLObjectType({
  name: 'menuType',
  fields: () => ({
    _id: { type: GraphQLObjectId },
    name: { type: GraphQLString },
    menuItems: {
      type: new GraphQLList(require('../menu/type')),
      resolve: (parentValue, args) => {
        return new Promise((resolve, reject) => {
          menuItem.find({_id: { $in: parentValue.items }}, (err, data) => {
            err ? reject(err) : resolve(data);
          });
        })
      }
    }
  })
});