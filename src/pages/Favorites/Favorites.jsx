import React, {Fragment} from 'react';
import Card from "../../components/Card/Card";


const Favorites = () => {
const fav = JSON.parse(localStorage.getItem('favorites'));

if (fav.length){
    return (

        <main>
            <div className="container">
                <div className="favorites">

                    {
                        fav.map((item) => (
                            <Fragment key={item.id}>
                                <Card item={item}/>
                            </Fragment>

                        ))
                    }
                </div>
            </div>
        </main>
    );
}else {
    return <div className='container'>
        <h2>Пока нет любимых продуктов</h2>
        </div>

}


};

export default Favorites;