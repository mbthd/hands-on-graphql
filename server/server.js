import express from 'express';
import graphqlHTTP from 'express-graphql';
import bodyparser from 'body-parser';

import schema from './schema.js';

const app = express()

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use('/graphql', graphqlHTTP( (req) => ({
  	schema: schema,
  	graphiql: true
})) );

app.use('/', (req, res) => res.json('hello world!!') );

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!')
});

