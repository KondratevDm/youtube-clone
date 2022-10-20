import React, { FC } from 'react';
import { VideoDetailsType } from '@/types';
import { VideoDetails } from './VideoDetails/VideoDetails';
import { ChannelDetailsVideo } from './ChannelDetailsVideo/ChannelDetails';

interface VideoInformationProps {
    item: VideoDetailsType,
    handleClick: () => void
}


export const VideoInformation: FC<VideoInformationProps> = ({ item, handleClick }) => {
    return (
        <div className="video__info">
            <VideoDetails
                viewCount={item.statistics.viewCount}
                title={item.snippet.title}
                likeCount={item.statistics.likeCount}
                handleClick={handleClick}
            />
            <div className="video__divider" />
            <ChannelDetailsVideo
                channelTitle={item.snippet.channelTitle}
                publishedAt={item.snippet.publishedAt}
                description={item.snippet.description}
                handleClick={handleClick}
            />
            <div className="video__divider" />
        </div>
    )
};