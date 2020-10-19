import React from 'react';
import './assets/styles/App.css';
import CountryList from './components/CountryList';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers/index';

const initialState = {
  countryList: []
}

const store = createStore(reducer, initialState)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CountryList/>
      </div>
    </Provider>
  );
}

export default App;
