import React from 'react';
import Skeleton from '@mui/material/Skeleton';

import { emptyArray } from '@utils'

export const ChannelVideosLoader = () => {
    return (
        <>
            {emptyArray.map((_, index) => {
                return (
                    <div key={index} className="channelVideos__content__item">
                        <Skeleton variant="rectangular" width={205} height={117} sx={{ backgroundColor: '#212121' }} />
                        <Skeleton sx={{ backgroundColor: '#212121' }} />
                        <Skeleton width="60%" sx={{ backgroundColor: '#212121' }} />
                    </div>
                )
            })}
        </>
    )
};