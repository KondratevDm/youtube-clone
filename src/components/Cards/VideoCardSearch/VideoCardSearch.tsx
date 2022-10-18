import React, { FC } from 'react';
import { VideoItemType } from '@/types'
import { changeDateFormat } from '@utils'
import Avatar from '@mui/material/Avatar';

import './VideoCardSearch.scss'

interface VideoCardSearchProps {
    item: VideoItemType
}

export const VideoCardSearch: FC<VideoCardSearchProps> = ({ item }) => {
    return (
        <div key={item.id.videoId} className="searchVideos__content__item">
            <div className={`searchVideos__content__${item.id.kind === "youtube#channel" ? 'channel-image-container' : 'video-image-container'}`}>
                <img
                    className={`searchVideos__content__${item.id.kind === "youtube#channel" ? 'channel-image' : 'video-image'}`}
                    alt="Video prewiew"
                    src={item.snippet.thumbnails.high.url}
                />
            </div>
            <div className="searchVideos__content__info">
                <p className="searchVideos__content__title">{item.snippet.title}</p>
                <p className="searchVideos__content__views">{`${changeDateFormat(item.snippet.publishTime)}`}</p>
                <div className="searchVideos__content__channel-name-container">
                    <Avatar sx={{ bgcolor: "#ff0000", width: '24px', height: '24px' }}>{item.snippet.channelTitle[0].toUpperCase()}</Avatar>
                    <p className="searchVideos__content__channel-name">{item.snippet.channelTitle}</p>
                </div>
                <p className="searchVideos__content__description">{item.snippet.description}</p>
            </div>
        </div>
    )
};