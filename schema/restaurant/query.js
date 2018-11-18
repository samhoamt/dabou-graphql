"use strict"
import {
  GraphQLString,
  GraphQLList,
  GraphQLNonNull
} from 'graphql/type';
import type from './type';
import model from './model';

module.exports = {
  restaurants: {
    type: new GraphQLList(type),
    resolve: (parentValue, args) => {
      return new Promise((resolve, reject) => {
        model.find({}, (err, data) => {
          err ? reject(err) : resolve(data);
        });
      });
    }
  },
  restaurant: {
    type: type,
    args: {
      _id: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve: (parentValue, {_id}) => {
      return new Promise((resolve, reject) => {
        model.findOne({_id}, (err, data) => {
          err ? reject(err) : resolve(data);
        });
      });
    }
  }
};