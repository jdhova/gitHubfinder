import React from 'react';
import { BrowswerRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/user/Users';
import Search from './components/user/Search';
import Axios from 'axios';

class App extends React.Component {
  state = {
    users: [],
    loading: false,
  };

  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await Axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITBUB_CLIENT_ID}&client_secreat=${process.env.REACT_APP_GITBUB_CLIENT_REACT_APP_GITBUB_CLIENT_SECREAT}`
  //   );
  //   this.setState({ users: res.data });
  //   this.setState({ loading: false });
  // }

  searchUsers = async (text) => {
    const res = await Axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITBUB_CLIENT_ID}&client_secreat=${process.env.REACT_APP_GITBUB_CLIENT_REACT_APP_GITBUB_CLIENT_SECREAT}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  // searchUsers = (text) => {
  //   text.preventDefault();
  //   console.log('search user', text);
  // };

  clearUsers = (e) => {
    this.setState({ users: [] });
    console.log('clear user');
  };

  render() {
    return (
      <div className='App'>
        <Navbar />
        <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} />
        <div className='container'>
          <Users users={this.state.users} loading={this.state.loading} />
        </div>
      </div>
    );
  }
}

export default App;
