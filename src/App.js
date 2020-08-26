import React from 'react';
// import './App.css';

import Introduction from './components/Introduction';
import SideBar from './components/SideBar';
import About from './components/About';

const App = () => {
  return (
    <div className="App">
      <Introduction />
      <SideBar />
      <About />
    </div>
  );
}

export default App;
