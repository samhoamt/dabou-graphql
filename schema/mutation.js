"use strict"
import { GraphQLObjectType } from 'graphql/type';
import cuisineMutation from './cuisine/mutation';
import restaurantMutation from './restaurant/mutation'
import restaurantTypeMutation from './restaurant_type/mutation';

module.exports = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    ...cuisineMutation,
    ...restaurantMutation,
    ...restaurantTypeMutation
  }
});