import React, { Fragment, Component } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  static propTypes = {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
  };

  render() {
    const {
      name,
      company,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hirable,
    } = this.props.user;

    const { loading } = this.props;

    if (loading) return <Spinner />;
    return (
      <Fragment>
        <Link to='/' className='btn btn-light'>
          Back to Search
        </Link>
        Hirable :{' '}
        {hirable ? (
          <i className='fas fa-check text-success' />
        ) : (
          <i className='fas fa-times-circle text-danger' />
        )}
        <div className='card grid-2'>
          <div className='all-center'>
            <img
              src={avatar_url}
              className='round-img'
              alt=''
              style={{ width: '150px' }}
            />
            <h1>{name}</h1>
            <p1>Location:{location}</p1>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className='btn btn-dark my-1'>
              Visit GitHub Profile
            </a>
            <ul>
              <li>{login && <Fragment>user name:{login}</Fragment>}</li>
              <li>{company && <Fragment>Company:{company}</Fragment>}</li>
              <li>{blog && <Fragment>Website:{blog}</Fragment>}</li>
            </ul>
          </div>
        </div>
        <div className='card text-center'>
          <div class='badge badge-primary'>Followers:{followers}</div>
          <div class='badge badge-success'>Following:{following}</div>
          <div class='badge badge-light'>Public Reops:{public_repos}</div>
          <div class='badge badge-dark'>Public Gist:{public_gists}</div>
        </div>
      </Fragment>
    );
  }
}
export default User;
