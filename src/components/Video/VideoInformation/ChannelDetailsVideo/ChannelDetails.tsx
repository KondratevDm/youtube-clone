import React, { FC } from 'react';
import { Avatar } from '@mui/material';
import { VideoDescription } from '../VideoDescription/VideoDescription';
import { changeDateFormat } from '@/utils';

interface ChannelDetailsVideoProps {
    channelTitle: string,
    publishedAt: Date,
    description: string,
    handleClick: () => void
}

export const ChannelDetailsVideo: FC<ChannelDetailsVideoProps> = ({ channelTitle, publishedAt, description, handleClick }) => {
    return (
        <div className="video__info__content-details">
            <div className="video__info__content-details__about-autor">
                <div className="video__info__content-details__about-autor__channel-info">
                    <Avatar sx={{ bgcolor: "#ff0000", width: '48px', height: '48px' }}>{channelTitle[0].toUpperCase()}</Avatar>
                    <div>
                        <div className="video__info__content-details__about-autor__channel-info__title">{channelTitle}</div>
                        <div className="video__info__content-details__about-autor__channel-info__publish-time">{`${changeDateFormat(publishedAt)}`}</div>
                    </div>
                </div>
                <button className="video__info__content-details__subscribe" onClick={handleClick}>SUBSCRIBE</button>
            </div>
            <VideoDescription description={description} />
        </div>
    )
};