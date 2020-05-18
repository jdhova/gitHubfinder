import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import About from './components/pages/About';
import Alert from './components/layout/Alert';
import Users from './components/user/Users';
import User from './components/user/User';
import Search from './components/user/Search';

import GithubState from './context/github/GithubState';
import AlertState from './context/Alert/AlertState';
const App = () => {
  // const [alert, setAlert] = useState(null);

  // const showAlert = (msg, type) => {
  //   setAlert({ msg, type });

  //   setTimeout(() => setAlert(null), 5000);
  // };

  return (
    <GithubState>
      <AlertState>
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
                      // clearUsers={clearUsers}
                      // showClear={users.length > 0 ? true : false}
                      // setAlert={showAlert}
                      />
                      <Users />
                    </Fragment>
                  )}
                />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
