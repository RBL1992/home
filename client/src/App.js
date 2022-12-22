import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import { setContext } from '@apollo/client/link/context';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Landingpage from './pages/Landingpage';
import Signup from './pages/Signup';
import Login from './pages/Login';
// import Friends from './pages/Friends';
import Profile from './pages/Profile.js';
import RewardsMarket from './pages/RewardsMarket';

// Construct our main GraphQL API endpoint
const httpLink = createUploadLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className='flex flex-col'>
          <Header />
          <div className='container min-h-screen self-center mx-12'>
            <Routes>
              {localStorage.getItem('id_token') ? (
                <Route
                  path='/'
                  element={<Home />}
                />
              ) : (
                <Route
                  path='/'
                  element={<Landingpage />}
                />
              )}
              <Route
                path='/signup'
                element={<Signup />}
              />
              <Route
                path='/login'
                element={<Login />}
              />
              <Route
                path='/profile'
                element={<Profile />}
              />
              <Route
                path='/rewards-market'
                element={<RewardsMarket />}
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
