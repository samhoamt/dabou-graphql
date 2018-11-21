import {
  GraphQLString,
  GraphQLNonNull,
  GraphQLList
} from 'graphql/type';
import type from './type';
import model from './model';

module.exports = {
  addMenu: {
    type: type,
    args: {
      name: { type: new GraphQLNonNull(GraphQLString) },
      items: { type: new GraphQLList(GraphQLString) }
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
  updateMenu: {
    type: type,
    args: {
      _id: { type: new GraphQLNonNull(GraphQLString) },
      name: { type: GraphQLString },
      items: { type: new GraphQLList(GraphQLString) }
    },
    resolve: (parentValue, {_id, name, items}) => {
      return new Promise((resolve, reject) => {
        model.findOneAndUpdate({_id}, {name, items}, {new: true}, (err, data) => {
          err ? reject(err) : resolve(data);
        });
      });
    }
  },
  deleteMenu: {
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