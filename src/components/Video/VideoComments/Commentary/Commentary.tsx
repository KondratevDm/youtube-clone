import React, { FC } from 'react';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

import { changeDateFormat } from '@utils'


interface CommentaryProps {
    authorChannelId: string,
    authorDisplayName: string,
    textOriginal: string,
    publishedAt: Date
}

export const Commentary: FC<CommentaryProps> = ({ authorChannelId, authorDisplayName, textOriginal, publishedAt }) => {

    return (
        <div key={`${authorChannelId}${publishedAt}`} className="video__info__comment">
            <div className="video__info__comment__about-autor__channel-info">
                <Link to={`/channel/${authorChannelId}`}>
                    <Avatar sx={{ bgcolor: "#7499bc", width: '40px', height: '40px', cursor: 'pointer' }}>{authorDisplayName[0].toUpperCase()}</Avatar>
                </Link>
                <div>
                    <div className="video__info__comment__about-autor__channel-info__block">
                        <Link to={`/channel/${authorChannelId}`}>
                            <div className="video__info__comment__about-autor__channel-info__block__title">{authorDisplayName}</div>
                        </Link>
                        <div className="video__info__comment__about-autor__channel-info__block__publish-time">{`${changeDateFormat(publishedAt)}`}</div>
                    </div>
                    <div className="video__info__comment__about-autor__channel-info__comment-text">{textOriginal}</div>
                </div>
            </div>
        </div>
    )
};