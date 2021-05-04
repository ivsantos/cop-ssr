import React from 'react';
import { NavLink } from 'react-router-dom';

const categories = [
  {
    name: 'Home 🏡',
    param: '/',
  },
  {
    name: 'Cat gifs 🎬',
    param: '/cats/gif',
  },
  {
    name: 'Sleepy cats 💤',
    param: '/cats/sleepy',
  },
  {
    name: 'Cute cats 🥰',
    param: '/cats/cute',
  },
];

const Navbar = () => (
  <ul className="nav">
    {categories.map(({ name, param }) => (
      <li key={param}>
        <NavLink activeStyle={{ fontWeight: 'bold' }} to={param}>
          {name}
        </NavLink>
      </li>
    ))}
  </ul>
);

export default Navbar;
