import React from 'react';
import {NavLink} from 'react-router-dom';

function Nav() {
  return (
    <div className="header">
      <div>
        <h3 className="header">Readable</h3>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            {' '}
            <NavLink className="nav-link" to="/">
              {' '}
              Home{' '}
            </NavLink>
          </li>
          <li className="nav-item">
            {' '}
            <NavLink className="nav-link" to="/react">
              React
            </NavLink>
          </li>

          <li className="nav-item">
            {' '}
            <NavLink className="nav-link" to="/redux">
              Redux
            </NavLink>
          </li>
          <li className="nav-item">
            {' '}
            <NavLink className="nav-link" to="/udacity">
              Udacity
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="btn btn-primary" to="/post/create">
              Create Post
            </NavLink>{' '}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
