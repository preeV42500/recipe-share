import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './App.css';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <h3>Recipe Share</h3>
      <Login></Login>
    </div>
  );
}

export default App;
