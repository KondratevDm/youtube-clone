import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { VideoItemType } from '@/types'

import './ChannelCard.scss'

interface ChannelCardProps {
    item: VideoItemType
}

export const ChannelCard: FC<ChannelCardProps> = ({ item }) => {
    return (
        <>
            <Link to={`/channel/${item.id.channelId}`}>
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
                        <p className="searchVideos__content__description">{item.snippet.description}</p>
                    </div>
                </div>
                <div className="searchVideos__divider"></div>
            </Link>
        </>
    )
};