import React from 'react';
import Nav from "./components/Navbar/Navbar";
import Header from "./components/Header/Header"
import './App.css';
import Card from './components/Cards/Card';
// import options from "./options.json";


function App() {
  return (
    <div>
      <Nav />
      <Header />
      <Card />
    </div>
  );
}

export default App;
