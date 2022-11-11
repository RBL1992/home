import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
// import Assistant from "./pages/Assistant";
// import Friends from './pages/Friends';
import Profile from "./pages/Profile.js";
import Rewards from "./pages/Rewards.js";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
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
        <div className="flex flex-col justify-center h-full">
         <Header />
            <div className="container flex flex-col min-h-screen">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/assistant" element={<Assistant />} /> */}
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          </div>
          </div>
         <Footer />
         
         
        
      </Router>
    </ApolloProvider>
  );
}

export default App;
