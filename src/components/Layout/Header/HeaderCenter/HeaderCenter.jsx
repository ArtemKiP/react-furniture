import {Link} from 'react-router-dom';
import logo from "../../../../assets/logo.svg";
import {IoIosSearch} from "react-icons/io";
import {IoExitOutline} from "react-icons/io5";
import {AiOutlineHeart} from "react-icons/ai";
import {HiOutlineShoppingBag} from "react-icons/hi";
import {FiUser} from "react-icons/fi";
import {useContext} from "react";
import {CustomContext} from "../../../../config/context/context";
import {useLocation} from 'react-router-dom';


const HeaderCenter = () => {
    const {user, logOutUser} = useContext(CustomContext);
    const location = useLocation();
    return (
        <nav className='header__center'>
            <Link to={'/'}>
                <img src={logo} alt=""/>
            </Link>
            <div className="header__center-search">
                <div className="header__center-glass">
                 <IoIosSearch/>
                </div>
                <input placeholder="Поиск" type="search" className="header__center-field"/>
            </div>
<div className="header__center-icons">
   <Link to={'/favorites'} className='header__center-icon'>
<AiOutlineHeart/>
   </Link>
    <Link to={user.email?.length ? '/cart' : '/login'} className='header__center-icon'>
        <HiOutlineShoppingBag/>
    </Link>
    {
        location.pathname === '/room' ? <span style={{cursor: 'pointer'}} onClick={logOutUser}><IoExitOutline  className='header__center-icon'/></span>  : <Link to={user.email?.length ? '/room' : '/login'} className='header__center-icon'>
            <FiUser/>
        </Link>
    }


</div>
        </nav>
    );
};

export default HeaderCenter;