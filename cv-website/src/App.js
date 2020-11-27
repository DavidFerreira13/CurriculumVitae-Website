import './App.css'
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home'


function App() {

  return (
    <main>
      <Router>
        <Home/>
      </Router>
    </main>
  );
}
export default App;
