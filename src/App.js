import React from 'react';
import './App.css';
import Country from './components/Country';

function App() {
  return (
    <div className="App">
      <Country
        flag="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/200px-Flag_of_Colombia.svg.png"
        name="Colombia"
        population={12354}
        region="America"
        capital="Bógota"
      />
    </div>
  );
}

export default App;
