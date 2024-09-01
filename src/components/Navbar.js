import React from 'react';
import { NavLink } from 'react-router-dom';
import { TbHexagonLetterKFilled } from "react-icons/tb";
function Navbar({children}) {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className="navbar-brand"  ><TbHexagonLetterKFilled style={{fontSize:40}}/>KANAV</NavLink>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to='/' >Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/about' >About me</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/skill'>Skills</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div>{children}</div>
    </>
  );
}

export default Navbar;

