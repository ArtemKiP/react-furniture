import React from 'react';
import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderCenter from "./HeaderCenter/HeaderCenter";
import HeaderBottom from "./HeaderBottom/HeaderBottom";
import {useLocation} from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    return (
        <header className='header'>
            {
                location.pathname === '/' ? <HeaderTop/> : ''
            }

<div className="container">
<HeaderCenter/>
<HeaderBottom/>
</div>
        </header>
    );
};

export default Header;