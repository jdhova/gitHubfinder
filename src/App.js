import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import About from './components/pages/About';
import Alert from './components/layout/Alert';
import Users from './components/user/Users';
import User from './components/user/User';
import Search from './components/user/Search';
import Axios from 'axios';

const App = () => {
  // const{users,repos,user,alert,setUsers,setRepos,setUser,setAlert} = useState(null)
  // const{loading,} = useState(false)

  const [users, setUsers] = useState([]);
  const [repos, setRepos] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  // state = {
  //   users: [],
  //   repos: [],
  //   user: {},
  //   loading: false,
  //   alert: null,
  // };

  const searchUsers = async (text) => {
    const res = await Axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITBUB_CLIENT_ID}&client_secreat=${process.env.REACT_APP_GITBUB_CLIENT_REACT_APP_GITBUB_CLIENT_SECREAT}`
    );
    setUsers(res.data.items);
    setLoading(false);
  };

  const clearUsers = () => {
    setUsers({ users: [], loading: false });
  };

  // Get Single GitHub User

  const getUser = async (username) => {
    setLoading({ loading: true });

    const res = await Axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITBUB_CLIENT_ID}&client_secreat=${process.env.REACT_APP_GITBUB_CLIENT_REACT_APP_GITBUB_CLIENT_SECREAT}`
    );
    setUser(res.data);
    setLoading(false);
  };

  // Get Users Repos

  const getUserRepos = async (username) => {
    setLoading(true);

    const res = await Axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITBUB_CLIENT_ID}&client_secreat=${process.env.REACT_APP_GITBUB_CLIENT_REACT_APP_GITBUB_CLIENT_SECREAT}`
    );
    setRepos(res.data);
    setLoading(false);
  };

  const showAlert = (msg, type) => {
    setAlert({ msg, type });

    setTimeout(() => setAlert(null), 5000);
  };

  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Alert alert={alert} />
          <Switch>
            <Route
              exact
              path='/'
              render={(props) => (
                <Fragment>
                  <Search
                    searchUsers={searchUsers}
                    clearUsers={clearUsers}
                    showClear={users.length > 0 ? true : false}
                    setAlert={showAlert}
                  />
                  <Users users={users} loading={loading} />
                </Fragment>
              )}
            />
            <Route exact path='/about' component={About} />
            <Route
              exact
              path='/user/:login'
              render={(props) => (
                <User
                  {...props}
                  getUser={getUser}
                  getUserRepos={getUserRepos}
                  user={user}
                  repos={repos}
                  loading={loading}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
