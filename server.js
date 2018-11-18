import { resolve } from 'path';
import express from 'express';
import expressGraphQL from 'express-graphql';
import { port } from './config';
import db from './db';
import schema from './schema';

// Connect Mongodb
db.connect();

const app = express();
app.use(express.static('public'));

app.use('/graphql', expressGraphQL({
  graphiql: true,
  schema: schema
}));

app.listen(port, () => {
  console.log('Server is running at', port);
});