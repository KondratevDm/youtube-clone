import React, { FC } from 'react';
import { VideoDescription } from '../VideoDescription/VideoDescription';
import { AutorDetails } from './AutorDetails/AutorDetails';

interface ChannelDetailsVideoProps {
    channelTitle: string,
    publishedAt: Date,
    description: string,
    handleClick: () => void,
    channelId: string
}

export const ChannelDetailsVideo: FC<ChannelDetailsVideoProps> = ({ channelId, channelTitle, publishedAt, description, handleClick }) => {
    return (
        <div className="video__info__content-details">
            <AutorDetails
                channelId={channelId}
                channelTitle={channelTitle}
                publishedAt={publishedAt}
                handleClick={handleClick}
            />
            <VideoDescription description={description} />
        </div>
    )
};