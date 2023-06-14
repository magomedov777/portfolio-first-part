import React from 'react';
import './App.css';
import { Header } from './Header/Header';
import { Navbar } from './Navbar/Navbar';
import { Main } from './Main/Main';
import { Skills } from './Skills/Skills';

function App() {
  return (
    <div className="App">
      <Header/>
      
      <Skills/>
      
    </div>
  );
}

export default App;
