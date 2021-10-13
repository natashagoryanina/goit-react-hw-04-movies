import React from 'react';
import { NavLink } from 'react-router-dom';
import { mainRoutes } from '../../../routes/mainRoutes';
import HeaderListContainer from './HeaderListStyled';

const HeaderList = () => {
    return (
        <HeaderListContainer>
            <ul className='header-list'>
                {mainRoutes.map((item)=> (
                    <li className='header-list_item' key={item.path}>
                        <NavLink 
                            to={item.path}
                            exact={item.exact}
                            className='header-list_link'
                            activeClassName='header-list_link-active' 
                        >
                            {item.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </HeaderListContainer>
    );
};

export default HeaderList;