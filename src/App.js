import React from 'react';
import './App.css';
import { Button } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faEnvelope, faKey);

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Button className="btn-info">
          <FontAwesomeIcon icon="envelope"/>
            Hello
        </Button>

      </header>
    </div>
  );
}

export default App;
