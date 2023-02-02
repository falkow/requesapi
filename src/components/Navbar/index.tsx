import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/cart'>Cart</Link>
      {/* <Link to='/'></Link> */}
    </nav>
  );
};

export default Navbar;
