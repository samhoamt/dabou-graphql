import { 
  GraphQLNonNull,
  GraphQLString
 } from 'graphql/type';
import type from './type';
import model from './model';

module.exports = {
  addRestaurant: {
    type: type,
    args: {
      name: { type: new GraphQLNonNull(GraphQLString)},
      typeId: { type: new GraphQLNonNull(GraphQLString)},
      cuisineId: { type: new GraphQLNonNull(GraphQLString)},
      merchant: { type: GraphQLString },
      cityCode: { type: GraphQLString },
      address: { type: GraphQLString },
      postal: { type: GraphQLString },
      geoLocation: { type: GraphQLString },
      tm_open: { type: GraphQLString },
      tm_close: { type: GraphQLString },
      delivery_fee: { type: GraphQLString }
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
  updateRestaurant: {
    type: type,
    args: {
      _id: { type: new GraphQLNonNull(GraphQLString) },
      name: { type: GraphQLString },
      typeId: { type: GraphQLString },
      cuisineId: { type: GraphQLString },
      merchant: { type: GraphQLString },
      cityCode: { type: GraphQLString },
      address: { type: GraphQLString },
      postal: { type: GraphQLString },
      geoLocation: { type: GraphQLString },
      tm_open: { type: GraphQLString },
      tm_close: { type: GraphQLString },
      delivery_fee: { type: GraphQLString }
    },
    resolve: (parentValue, {_id, ...rest}) => {
      return new Promise((resolve, reject) => {
        model.findByIdAndUpdate(_id, {...rest}, (err, data) => {
          err ? reject(err) : resolve(data);
        });
      });
    }
  },
  deleteRestaurant: {
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