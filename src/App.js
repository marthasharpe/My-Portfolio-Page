import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import Header from './Header';

library.add(fab, faFileAlt);

function App() {
  return (
    <div className="fluid">
      <Header />
    </div>
  );
}

export default App;
