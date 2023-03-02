import React from 'react';

import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <ul className='navlist'>
                <li className='nav-item'>
                    <Link to='/'><p className='nav-link'>Home</p></Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Portfolio'><p className='nav-link'>Portfolio</p></Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Resume'><p className='nav-link'>Resume</p></Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar