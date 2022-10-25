import React, { FC } from 'react';
import { Avatar } from '@mui/material';
import { changeDateFormat } from '@/utils';
import { Link } from 'react-router-dom';

interface AutorDetailsProps {
    channelTitle: string,
    publishedAt: Date,
    handleClick: () => void,
    channelId: string
}

export const AutorDetails: FC<AutorDetailsProps> = ({ channelId, channelTitle, publishedAt, handleClick }) => {
    return (
        <div className="video__info__content-details__about-autor">
            <div className="video__info__content-details__about-autor__channel-info">
                <Link to={`/channel/${channelId}`}>
                    <Avatar sx={{ bgcolor: "#ff0000", width: '48px', height: '48px', cursor: 'pointer' }}>{channelTitle[0].toUpperCase()}</Avatar>
                </Link>
                <div>
                    <Link to={`/channel/${channelId}`}>
                        <div className="video__info__content-details__about-autor__channel-info__title">{channelTitle}</div>
                    </Link>
                    <div className="video__info__content-details__about-autor__channel-info__publish-time">{`${changeDateFormat(publishedAt)}`}</div>
                </div>
            </div>
            <button className="video__info__content-details__subscribe" onClick={handleClick}>SUBSCRIBE</button>
        </div>
    )
};