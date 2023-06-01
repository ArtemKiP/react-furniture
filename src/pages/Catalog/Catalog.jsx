import React, {Fragment, useContext, useEffect} from 'react';
import AsideFilter from "../../components/AsideFilter/AsideFilter";
import Card from "../../components/Card/Card";
import {CustomContext} from "../../config/context/context";

const Catalog = () => {
    const {hitSale, getHitSale} = useContext(CustomContext);
    useEffect(() => {
        getHitSale()
    }, []);
    return (
        <main>
            <section className="catalog">
                <div className="container">
                    <div className="catalog__row">
                        <AsideFilter/>
                        <div className="hitSale__row catalog__content">
                            {
                                hitSale.map((item) => (
                                    <Fragment key={item.id}>
                                        <Card item={item}/>
                                    </Fragment>

                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Catalog;