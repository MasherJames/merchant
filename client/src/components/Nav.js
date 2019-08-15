import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default () => {
  const handleItemClick = (e, { name }) =>setActiveItem(name);

  const pathname = window.location.pathname;
  const currpath = pathname === '/' ? 'home' : pathname.substr(1);
  const [activeItem, setActiveItem] = useState(currpath);
  
    return (
        <Menu pointing secondary size='huge' color="pink">
          <Menu.Item
           name='home' 
           active={activeItem === 'home'} 
           onClick={handleItemClick} 
           as={Link}
           to="/"
           />
          <Menu.Menu position='right'>
            <Menu.Item
              name='login'
              active={activeItem === 'login'}
              onClick={handleItemClick}
              as={Link}
              to="/login"
            />
            <Menu.Item
              name='register'
              active={activeItem === 'register'}
              onClick={handleItemClick}
              as={Link}
              to="/register"
            />
          </Menu.Menu>
        </Menu>
    )
}