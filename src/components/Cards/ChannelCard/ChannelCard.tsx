import React, { FC } from 'react';
import { VideoItemType } from '@/types'
// import Avatar from '@mui/material/Avatar';

import './ChannelCard.scss'

interface ChannelCardProps {
    item: VideoItemType
}

export const ChannelCard: FC<ChannelCardProps> = ({ item }) => {
    return (
        <div key={item.id.videoId} className="searchVideos__content__item">
            <div className="searchVideos__content__channel-image-container">
                <img
                    className="searchVideos__content__channel-image"
                    alt="Video prewiew"
                    src={item.snippet.thumbnails.high.url}
                />
            </div>
            <div className="searchVideos__content__info">
                <p className="searchVideos__content__title">{item.snippet.title}</p>
                {/* <div className="searchVideos__content__channel-name-container">
                    <Avatar sx={{ bgcolor: "#ff0000", width: '24px', height: '24px' }}>{item.snippet.channelTitle[0].toUpperCase()}</Avatar>
                    <p className="searchVideos__content__channel-name">{item.snippet.channelTitle}</p>
                </div> */}
                <p className="searchVideos__content__description">{item.snippet.description}</p>
            </div>
        </div>
    )
};