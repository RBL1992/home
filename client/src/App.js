import React from 'react';
// import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
// import Footer from './components/Footer/Footer';
// import Header from './components/Header/Header';
// import Home from './pages/Home';
import Signup from './pages/Signup'
// import Assistant from './pages/Assistant';
// import Friends from './pages/Friends';
// import Profile from './pages/Profile';
// import Rewards from './pages/Rewards.js'

// const client = new ApolloClient({
//   uri: '/graphql',
//   cache: new InMemoryCache(),
// });

function App() {
  return (
  <div>
    <Signup />
  </div>
  );
}

export default App;

// {/* <ApolloProvider client={client}>
// <div className="flex-column justify-flex-start min-100-vh">
//   <Header />
//   <Route path="/" component={LandingPage} exact />
//   <Route path="/signup" component={() => <Signup />} exact />
//   <Route path="/home" component={() => <Home />} />
//   <Route path="/assistant" component={() => <Assistant />} />
//   <Route path="/friends" component={() => <Friends />} />
//   <Route path="/profile" component={() => <Profile />} />
//   <Route path="/rewards" component={() => <Rewards />} />
//   <Footer />
// </div>
// </ApolloProvider> */}
