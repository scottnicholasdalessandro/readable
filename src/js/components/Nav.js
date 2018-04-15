import React from 'react';
import {NavLink} from 'react-router-dom';

function Nav(props) {
  return (
    // <div className="header bg-dark">
    <div>
      <h1 className="header">Readable</h1>
      <NavLink className="nav-link" to="/post/create">
        <button className="btn-primary">Create Post</button>
      </NavLink>
      </div>
    // </div>
  );
}

export default Nav;

// <NavLink className="nav-link" to="/" activeClassName="active">
//           Active
//         </NavLink>
//       </li>
//       <li className="nav-item">
//         <NavLink className="nav-link" to="#" activeClassName="active">
//           Link
//         </NavLink>
//       </li>
//       <li className="nav-item">
//         <NavLink className="nav-link" to="#" activeClassName="active">
//           Link
//         </NavLink>
