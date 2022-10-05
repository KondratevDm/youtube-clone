import React from 'react';
import Skeleton from '@mui/material/Skeleton';

export const Loader = () => {
    const emptyArray = new Array(16).fill(null)
    return (
        <>
            {emptyArray.map((_, index) => {
                return (
                    <div key={index} className="feed__content__item">
                        <Skeleton variant="rectangular" width={276} height={155} sx={{ backgroundColor: '#212121' }} />
                        <Skeleton sx={{ backgroundColor: '#212121' }} />
                        <Skeleton width="60%" sx={{ backgroundColor: '#212121' }} />
                    </div>
                )
            })}
        </>
    )
};