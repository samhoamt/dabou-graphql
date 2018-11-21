import {
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
  GraphQLBoolean,
  GraphQLFloat
} from 'graphql/type';
import type from './type';
import model from './model';

module.exports = {
  addMenuItem: {
    type: type,
    args: {
      name: { type: new GraphQLNonNull(GraphQLString) },
      restaurant_id: { type: GraphQLString },
      menus: { type: new GraphQLList(GraphQLString) },
      ingredient: { type: new GraphQLList(GraphQLString) },
      spicy: { type: GraphQLBoolean },
      description: { type: GraphQLString },
      price: { type: GraphQLFloat },
      promotion_price: { type: GraphQLFloat },
      promotion_percentage: { type: GraphQLFloat }
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
  updateMenuItem: {
    type: type,
    args: {
      _id: { type: new GraphQLNonNull(GraphQLString) },
      name: { type: GraphQLString },
      menus: { type: new GraphQLList(GraphQLString) },
      ingredient: { type: new GraphQLList(GraphQLString) },
      spicy: { type: GraphQLBoolean },
      description: { type: GraphQLString },
      price: { type: GraphQLFloat },
      promotion_price: { type: GraphQLFloat },
      promotion_percentage: { type: GraphQLFloat }
    },
    resolve: (parentValue, args) => {
      return new Promise((resolve, reject) => {
        model.findOneAndUpdate({_id: args._id}, args, {new: true}, (err, data) => {
          err ? reject(err) : resolve(data);
        });
      });
    }
  },
  deleteMenuItem: {
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