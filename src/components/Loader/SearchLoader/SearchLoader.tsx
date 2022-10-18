import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import { emptyArray } from '@utils'

export const SearchLoader = () => {

    return (
        <>
            {emptyArray.map((_, index) => {
                return (
                    <div key={index} className="searchVideos__content__item">
                        <Skeleton variant="rectangular" width={360} height={202} sx={{ backgroundColor: '#212121' }} />
                        <div className="searchVideos__content__info">
                            <Skeleton sx={{ backgroundColor: '#212121' }} width={200} />
                            <Skeleton sx={{ backgroundColor: '#212121' }} width={200} />
                            <div className="searchVideos__content__channel-name-container">
                                <Skeleton variant="circular" width={24} height={24} sx={{ backgroundColor: '#212121' }} />
                                <Skeleton sx={{ backgroundColor: '#212121', marginLeft: '20px' }} width={157} />
                            </div>
                            <Skeleton sx={{ backgroundColor: '#212121' }} width={200} />
                        </div>
                    </div>
                )
            })}
        </>
    )
};