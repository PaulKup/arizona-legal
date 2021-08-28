import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import WhoAreWe from './pages/WhoAreWe';
import WhoDoWeServe from './pages/WhoDoWeServe';
import HowWeCanHelp from './pages/HowWeCanHelp';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NoMatch from './pages/NoMatch';


const client = new ApolloClient({
    request: operation => {
      const token = localStorage.getItem('id_token');
  
      operation.setContext({
        headers: {
          authorization: token ? `Bearer ${token}` : ''
        }
      });
    },
    uri: '/graphql'
});
  

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/WhoAreWe" component={WhoAreWe} />
              <Route exact path="/WhoDoWeServe" component={WhoDoWeServe} />
              <Route exact path="/HowWeCanHelp" component={HowWeCanHelp} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />

              <Route component={NoMatch} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
