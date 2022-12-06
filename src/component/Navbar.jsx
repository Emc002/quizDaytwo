import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  const navbar = {
    listStyle: "none",
    style: "none",
    textDecoration: "none",
    outline: "0",
    border: "0"
  }

  const actBehave = {
    color: "white", listStyle: "none",
    style: "none",
    textDecoration: "none",
    outline: "0",
    border: "0"
  }

  return (
    <nav
      style={{
        backgroundColor: '#ff0488',
        padding: "20px",
        display: "flex",
        gap: "20px",
        borderRadius: "1rem 1rem",
        listStyle: "none",
        style: "none",
        textDecoration: "none",
        outline: "0",
        border: "0",

      }}
    >

      <NavLink
        to='/'
        style={({ isActive }) => (isActive ? actBehave : navbar)}
      >HOME PAGE</NavLink>
      <NavLink
        to='/Profile/DOUBLE SLIT'
        style={({ isActive }) => (isActive ? actBehave : navbar)}
      >PROFILE PAGE</NavLink>
    </nav>
  );
};

export default Navbar;