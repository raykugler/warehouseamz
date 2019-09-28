import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Landing from './components/Landing';
import LandingTwo from './components/LandingTwo';
function App() {

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={LandingTwo}/>
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
