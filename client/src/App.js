import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
// import Footer from './components/Footer/Footer';
// import Header from './components/Header/Header';
// import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
// import Assistant from './pages/Assistant';
// import Friends from './pages/Friends';
// import Profile from './pages/Profile';
// import Rewards from './pages/Rewards.js'

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <div className="flex-column justify-flex-start min-100-vh">
        {/* <Header /> */}
        <Routes>
        {/* <Route path="/" component={LandingPage} exact /> */}
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
        {/* <Route path="/home" component={() => <Home />} />
        <Route path="/assistant" component={() => <Assistant />} />
        <Route path="/friends" component={() => <Friends />} />
        <Route path="/profile" component={() => <Profile />} />
        <Route path="/rewards" component={() => <Rewards />} /> */}
        </Routes>
        {/* <Footer /> */}
        </div>
      </Router>
      </ApolloProvider>
  );
}

export default App;

