import React from 'react';

const NavBar = () => {
    return (
        <div>
            <p className='all-menu' onClick={ onToggle }>menu</p>
            <nav className={ isNav ? 'on' : ''}>
                <ul>
                    {
                        data.map((item, index) => <li key={ index }>
                             { item.path}{ item.title}
                        </li>)
                    }
                    </ul>
            </nav>
        </div>
    );
};

export default NavBar;