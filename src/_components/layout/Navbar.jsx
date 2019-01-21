import React from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const renderLinks = () => (
  <>
    <NavLink className="item" exact to="/">
      Post List
    </NavLink>
    <NavLink className="item" exact to="/posts/new">
      Create a new post
    </NavLink>
  </>
);

export const Navbar = () => {
  return <Menu>{renderLinks()}</Menu>;
};
