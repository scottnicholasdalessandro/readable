import React from 'react';
import {NavLink} from 'react-router-dom';

function Nav() {
  return (
    <div className="header bg-dark">
      <div>
        <h3 className="header">Readable</h3>
        <NavLink className="nav-link" to="/"> Home </NavLink>
      </div>
    </div>
  );
}

export default Nav;
