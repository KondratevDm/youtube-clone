import React, { FC } from 'react';
import { BiLike, BiDislike } from 'react-icons/bi';
import { numberWithSpaces } from '@utils'

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
                    <BiLike size={24} />
                    <p>{likeCount}</p>
                </div>
                <div className="video__info__view__button-block" onClick={handleClick}>
                    <BiDislike size={24} />
                    <p>Dislike</p>
                </div>
            </div>
        </>
    )
};