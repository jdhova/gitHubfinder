import React from 'react';
import { BrowswerRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import Users from './components/user/Users';
import Search from './components/user/Search';
import Axios from 'axios';

class App extends React.Component {
  state = {
    users: [],
    loading: false,
    alert: null,
  };

  searchUsers = async (text) => {
    const res = await Axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITBUB_CLIENT_ID}&client_secreat=${process.env.REACT_APP_GITBUB_CLIENT_REACT_APP_GITBUB_CLIENT_SECREAT}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  clearUsers = () => {
    this.setState({ users: [], loading: false });
    console.log('clear user');
  };

  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } });
  };

  render() {
    const { users, loading, alert } = this.state;
    return (
      <div className='App'>
        <Navbar />
        <Alert alert={alert} />
        <Search
          searchUsers={this.searchUsers}
          clearUsers={this.clearUsers}
          showClear={users.length > 0 ? true : false}
          setAlert={this.setAlert}
        />
        <div className='container'>
          <Users users={users} loading={loading} />
        </div>
      </div>
    );
  }
}

export default App;
