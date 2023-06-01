import React from 'react';
import FilterSelect from "../FilterSelect/FilterSelect";
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const AsideFilter = () => {

    const colors = ['red', 'green', 'blue'];
    return (
        <aside className='catalog__aside'>
            <div className="catalog__aside-content">
                <h2 className="catalog__aside-title">
                    Раздел
                </h2>
                <FilterSelect/>
                <FilterSelect/>
                <FilterSelect/>
            </div>
            <div className="catalog__aside-content">
                <h2 className="catalog__aside-title">
                    Цена
                </h2>
                <input type="range"/>
                <div className="catalog__aside-prices">
                    <div className="catalog__aside-price">
                        2 000 ₽
                    </div>
                    -
                    <div className="catalog__aside-price">
                        102 000 ₽
                    </div>
                </div>
            </div>
            <div className="catalog__aside-content">
                <h2 className="catalog__aside-title">
                    Цвет
                </h2>
                <div className="catalog__aside-colors">
                    {
                        colors.map((item, idx) => (
                            <div key={idx} className='catalog__aside-color' style={{background: item}}>
                                s
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="catalog__aside-content">
                <h2 className="catalog__aside-title">
                    Бренд
                </h2>
                <div className="catalog__aside-checks">
                    <Checkbox {...label} />
                    <Checkbox {...label} />
                    <Checkbox {...label} />
                </div>

            </div>
        </aside>
    );
};

export default AsideFilter;