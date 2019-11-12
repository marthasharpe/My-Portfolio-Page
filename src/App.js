import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import Header from './Header';

library.add(fab, faFileAlt);

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
