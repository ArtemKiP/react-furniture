import React, {Fragment, useContext, useEffect, useState} from 'react';
import Card from "../../components/Card/Card";
import {CustomContext} from "../../config/context/context";


const Favorites = () => {
const {favorites} = useContext(CustomContext);
const [page, setPage] = useState(1);
let favoritesPages = new Array( Math.ceil(favorites.length / 4)).fill(null, 0 );

useEffect(() => {
    if (page > favoritesPages.length){
        setPage(favoritesPages.length)
    }
}, [favorites]);

if (favorites.length){
    return (

        <section className="hitSale">
            <div className="container">
                <h2 className="hitSale__title">
                    Хиты продаж
                </h2>
                <div className="hitSale__row">
                    {
                        favorites.filter((item, idx) => idx >= page * 4 - 4 && idx < page * 4).map((item) => (
                            <Fragment key={item.id}>
                                <Card item={item}/>
                            </Fragment>

                        ))
                    }
                </div>
                {
                    favoritesPages.length > 1 && <ul className='favorites__pagination'>
                        {
                            favoritesPages.map((item, idx) => (
                                <li onClick={() => setPage(idx + 1)} key={idx}>{idx + 1}</li>
                            ))
                        }
                    </ul>
                }

            </div>
        </section>
    );
}else {
    return <div className='container'>
        <h2>Пока нет любимых продуктов</h2>
        </div>

}


};

export default Favorites;