import {
  GraphQLString,
  GraphQLNonNull
} from 'graphql/type';
import type from './type';
import model from './model';

module.exports = {
  addCuisine: {
    type: type,
    args: {
      name: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve: (parentValue, args) => {
      return new Promise((resolve, reject) => {
        const newModel = new model(args);
        newModel.save((err, data) => {
          err ? reject(err) : resolve(data);
        });
      });
    }
  },
  updateCuisine: {
    type: type,
    args: {
      _id: { type: new GraphQLNonNull(GraphQLString) },
      name: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve: (parentValue, {_id, name}) => {
      return new Promise((resolve, reject) => {
        model.findByIdAndUpdate(_id, {name}, (err, data) => {
          err ? reject(err) : resolve(data);
        });
      });
    }
  },
  deleteCuisine: {
    type: type,
    args: {
      _id: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve: (parentValue, {_id}) => {
      return new Promise((resolve, reject) => {
        model.findByIdAndRemove(_id, (err, data) => {
          err ? reject(err) : resolve(data);
        });
      });
    }
  }
}