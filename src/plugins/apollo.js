import Vue from 'vue';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { InMemoryCache } from 'apollo-cache-inmemory';
import VueApollo from 'vue-apollo';
import { setContext } from 'apollo-link-context';

import VuetifyToast from 'vuetify-toast-snackbar';

const httpLink = new HttpLink({
  uri: process.env.VUE_APP_GRAPHQL_ENDPOINT,
});

const accessToken = localStorage.getItem('token');
// Create a new Middleware Link using setContext
const authLink = setContext((_, { headers }) =>
  // get the authentication token from local storage if it exists
  // return the headers to the context so httpLink can read them
  ({
    headers: {
      ...headers,
      authorization: accessToken ? `Bearer ${accessToken}` : '',
    },
  }));

// Error Handling
const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => {
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      );
    });
  }
  if (graphQLErrors) console.log(graphQLErrors[0].message);
  let testMessage = graphQLErrors[0].message;
  if (testMessage.includes('[')) {
    const message = testMessage.substring(
      testMessage.lastIndexOf('[') + 1,
      testMessage.lastIndexOf(']'),
    ).replace(/"/g, '');
    testMessage = message.charAt(0).toUpperCase() + message.slice(1);
  }

  Vue.prototype.$toast.error(testMessage);
});

// Create the apollo client
export const apolloClient = new ApolloClient({
  link: errorLink.concat(authLink).concat(httpLink),
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

// Install the Vue plugin
Vue.use(VueApollo);

export const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});
