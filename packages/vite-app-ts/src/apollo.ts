import { ApolloClient, InMemoryCache, ApolloLink, HttpLink, gql } from '@apollo/client';
import jwtDecode from 'jwt-decode';

import { API_URL } from './constants';
const REFRESH_INTERVAL = 25 * 60; //25 Minutes

const REFRESH_AUTHENTICATION = `
  mutation Refresh($request: RefreshRequest!) {
    refresh(request: $request) {
      accessToken
      refreshToken
    }
  }
`;

const httpLink = new HttpLink({
  uri: API_URL,
  fetch,
});

const authLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('accessToken');

  if (token === 'undefined') {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    // localStorage.removeItem('selectedProfile');
    // location.href = '/';

    return forward(operation);
  } else {
    operation.setContext({
      headers: {
        'x-access-token': token ? `Bearer ${token}` : '',
      },
    });

    // @ts-ignore
    const { exp }: { exp: any } = token ? jwtDecode(token) : '';
    if (Date.now() >= exp * 1000 + REFRESH_INTERVAL) {
      console.log('entered here');
      fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          operationName: 'Refresh',
          query: REFRESH_AUTHENTICATION,
          variables: {
            request: { refreshToken: localStorage.getItem('refreshToken') },
          },
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log('Token refreshed');
          console.log('res', res);
          operation.setContext({
            headers: {
              'x-access-token': token ? `Bearer ${res?.data?.refresh?.accessToken}` : '',
            },
          });
          localStorage.setItem('accessToken', res?.data?.refresh?.accessToken);
          localStorage.setItem('refreshToken', res?.data?.refresh?.refreshToken);
        });
    }

    return forward(operation);
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
