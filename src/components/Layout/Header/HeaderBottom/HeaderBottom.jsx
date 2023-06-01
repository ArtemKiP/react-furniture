import React from 'react';

import {MdKitchen} from 'react-icons/md';
import {GiPersonInBed} from 'react-icons/gi';
import {MdOutlineLiving} from 'react-icons/md';
import {HiDesktopComputer} from 'react-icons/hi';
import {BsThreeDotsVertical} from 'react-icons/bs';
import {MdOutlineChildFriendly} from 'react-icons/md';

const HeaderBottom = () => {
    return (
        <nav className='header__bottom'>
            <a href="#" className='header__bottom-link'>
<span>
    <MdKitchen/>
</span>
                Кухни
            </a>
            <a href="#" className='header__bottom-link'>
<span>
  <GiPersonInBed/>
</span>
                Спальни
            </a>
            <a href="#" className='header__bottom-link'>
<span>
    <MdOutlineLiving/>
</span>
                Гостинные
            </a>
            <a href="#" className='header__bottom-link'>
<span>
    <MdKitchen/>
</span>
                Прихожие
            </a>
            <a href="#" className='header__bottom-link'>
<span>
    <HiDesktopComputer/>
</span>
                Офисная мебель
            </a>
            <a href="#" className='header__bottom-link'>
<span>
    <MdOutlineChildFriendly/>
</span>
                Детская
            </a>
            <a href="#" className='header__bottom-link red'>
                Акция
            </a>
            <a href="#" className='header__bottom-link'>
<span>
  <BsThreeDotsVertical/>
</span>

            </a>
        </nav>
    );
};

export default HeaderBottom;