import {
  GraphQLString,
  GraphQLNonNull,
  GraphQLList
} from 'graphql/type';
import type from './type';
import model from './model';

module.exports = {
  addMerchant: {
    type: type,
    args: {
      _id: { type: new GraphQLNonNull(GraphQLString) },
      password: { type: GraphQLString },
      email: { type: GraphQLString },
      contact_number: { type: GraphQLString },
      bank_number: { type: GraphQLString },
      bank_account: { type: GraphQLString },
      currency: { type: GraphQLString },
      amount: { type: GraphQLString },
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
  updateMerchant: {
    type: type,
    args: {
      _id: { type: new GraphQLNonNull(GraphQLString) },
      password: { type: GraphQLString },
      email: { type: GraphQLString },
      contact_number: { type: GraphQLString },
      bank_number: { type: GraphQLString },
      bank_account: { type: GraphQLString },
      currency: { type: GraphQLString },
      amount: { type: GraphQLString },
    },
    resolve: (parentValue, {_id, name, items}) => {
      return new Promise((resolve, reject) => {
        model.findOneAndUpdate({_id}, {name, items}, {new: true}, (err, data) => {
          err ? reject(err) : resolve(data);
        });
      });
    }
  },
  deleteMerchant: {
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