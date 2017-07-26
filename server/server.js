import express from 'express';
import graphqlHTTP from 'express-graphql';
import bodyparser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import schema from './schema.js';

const options = {
  server: {
    socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 }
  },
  replset: {
    socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 }
  }
};
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://onhandsgraph:onhands@ds123933.mlab.com:23933/onhandsgraphql', options);
const conn = mongoose.connection;
conn.on('error', console.error.bind(console, 'connection error:'));
conn.once('open', () => {
  console.log('Connection with MongoLab established.');
});

const app = express()

app.use('*', cors({ origin: 'http://localhost:3000' }));

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use('/graphql', graphqlHTTP( (req) => ({
  	schema: schema,
  	graphiql: true
})) );

app.use('/', (req, res) => res.json('hello world!!') );

app.listen(process.env.PORT || 4000, function () {
  console.log('Example app listening on port 3000!')
});
