import React from 'react'
import ReactDOM from 'react-dom/client'
import {

  RouterProvider,
} from "react-router-dom";

import './index.css'
import { router } from './Routes/Routes.tsx'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import { store } from './app/store.ts';
const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <Provider store={store}>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
    </Provider>
  </React.StrictMode>,
)
