import React from 'react';
import './assets/styles/App.css';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers/index';
import Home from './Pages/Home'
import DetailCountry from  './Pages/DetailCountry'
import {
  BrowserRouter as Router,
  Route,
  Switch
 } from 'react-router-dom'

const initialState = {
  countryList: [],
  countryListRegion: [],
  countryName: [],
}

const store = createStore(reducer, initialState)

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/country/:name" component={DetailCountry} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
