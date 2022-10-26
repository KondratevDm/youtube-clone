import React, { FC } from 'react';

import { numberWithSpaces } from '@utils'
import Like from '@assets/images/like.svg'
import Dislike from '@assets/images/dislike.svg'

interface VideoDetailsProps {
    viewCount: string,
    title: string,
    likeCount: string,
    handleClick: () => void
}


export const VideoDetails: FC<VideoDetailsProps> = ({ title, viewCount, likeCount, handleClick }) => {
    return (
        <>
            <p className="video__info__title">{title}</p>
            <div className="video__info__view">
                <p className="video__info__view__view-count">{numberWithSpaces(viewCount)} views</p>
                <div className="video__info__view__button-block" onClick={handleClick}>
                    <img className="video__info__view__button-block" src={Like} alt="like"/>
                
                    <p>{likeCount}</p>
                </div>
                <div className="video__info__view__button-block" onClick={handleClick}>
                    <img src={Dislike} alt="dislike" />
                    <p>Dislike</p>
                </div>
            </div>
        </>
    )
};