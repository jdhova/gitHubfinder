import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchUsers, clearUsers, showClear, setAlert }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert('field can not be blank', 'light');
    } else {
      searchUsers(text);
      setText({ text: '' });
    }
  };

  const onChange = (e) => {
    setText(e.target.value);
    // console.log(this.state.text);
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search...'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>

      {showClear && (
        <button
          className='btn btn-light btn-block'
          style={{ backgroundColor: 'skyblue' }}
          onClick={clearUsers}
        >
          Clear{' '}
        </button>
      )}
    </div>
  );
};

Search.propType = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
