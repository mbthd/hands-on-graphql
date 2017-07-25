import express from 'express';

import bodyparser from 'body-parser';

const app = express()

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use('/', (req, res) => res.json('hello world!!') );

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!')
});
