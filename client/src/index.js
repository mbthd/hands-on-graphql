import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface,
} from 'react-apollo';

import App from './App';

const networkInterface = createNetworkInterface({ uri: 'http://localhost:4000/graphql' });
networkInterface.use([{
  applyMiddleware(req, next) {
    setTimeout(next, 500);
  },
}]);


const client = new ApolloClient({
  networkInterface,
});

ReactDOM.render(
	<ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
  document.getElementById('root')
);
