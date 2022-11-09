import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Assistant from './pages/Assistant';
import Friends from './pages/Friends';
import Profile from './pages/Profile';
import Rewards from './pages/Rewards.js';
import Signup from './pages/Signup.js';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="flex-column justify-flex-start min-100-vh">
        <Signup />
      </div>
    </ApolloProvider>
  );
}

//     <Header />
//     <Route path="/" component={LandingPage} exact />
//     <Route path="/assistant" component={() => <Assistant />} />
//     <Route path="/friends" component={() => <Friends />} />
//     <Route path="/profile" component={() => <Profile />} />
//     <Route path="/rewards" component={() => <Rewards />} />
//     <Footer />
export default App;
