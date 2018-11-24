"use strict"
import { GraphQLObjectType } from 'graphql/type';
import cuisineQuery from './cuisine/query';
import restaurantQuery from './restaurant/query';
import restaurantTypeQuery from './restaurant_type/query';
import menuQuery from './menu/query';
import menuItemQuery from './menu_item/query';
import merchantQuery from './merchant/query';

module.exports = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    ...cuisineQuery,
    ...restaurantQuery,
    ...restaurantTypeQuery,
    ...menuQuery,
    ...menuItemQuery,
    ...merchantQuery
  }
});