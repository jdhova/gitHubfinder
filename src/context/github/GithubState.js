import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';

import {
  SEARCH_USERS,
  SEARCH_USER,
  GET_USER,
  SET_USERS,
  CLEAR_USERS,
  GET_REPOS,
  SET_LOADING,
  SET_ALERT,
  REMOVE_ALERT,
} from '../types';

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);
  // Search Users

  const searchUsers = async (text) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITBUB_CLIENT_ID}&client_secreat=${process.env.REACT_APP_GITBUB_CLIENT_REACT_APP_GITBUB_CLIENT_SECREAT}`
    );
    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });
  };

  // Get User

  // Get Repos

  // clear Users

  // working on this now
  // clearUsers

  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  // set Loading

  const setLoading = () => dispatch({ type: SET_LOADING });

  // set Users
  // const setUsers = () => dispatch({ type: SET_USERS });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repo: state.repo,
        loading: state.loading,
        searchUsers,
        clearUsers,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;