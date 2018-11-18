import { GraphQLSchema } from 'graphql/type';
import rootQuery from './rootQuery';
import mutation from './mutation'; 

module.exports = new GraphQLSchema({
  query: rootQuery,
  mutation: mutation
});