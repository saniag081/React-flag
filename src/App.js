import React from 'react';
import './assets/styles/App.css';
import CountryList from './components/CountryList';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers/index';
import Header from './components/Header';

const initialState = {
  countryList: [],
  countryListRegion: [],
  countryName: [],
}

const store = createStore(reducer, initialState)

function App() {
  return (
    <Provider store={store}>
      <Header />
      <div className="App">
        <CountryList/>
      </div>
    </Provider>
  );
}

export default App;
