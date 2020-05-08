import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/user/Users';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Navbar />

        <Users />
      </div>
    );
  }
}

export default App;
