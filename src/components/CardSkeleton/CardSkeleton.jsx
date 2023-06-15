import React from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'



const CardSkeleton = ({cards}) => {
    return (
        Array(cards).fill(0).map((item) => (
            <div className="card">
                <Skeleton width={250} height={350}/>
            </div>
        ))
    );
};

export default CardSkeleton;