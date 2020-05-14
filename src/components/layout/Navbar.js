import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon}> {title} </i>
      </h1>
      <ul>
        <li>
          <Link to='/'> home</Link>
        </li>
        <li>
          <Link to='/about'> About</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  icon: 'fab fa-github',
  title: 'Gitbub Finder',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
