import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header id='header-container'>
      <h1>Todo List</h1>
      <Link to='/' className='header-link'>Home</Link> | <Link to='/about' className='header-link'>About</Link>
    </header>
  )
}

export default Header;