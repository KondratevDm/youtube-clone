import React, { FC } from 'react';

import { VideoComments } from '../VideoComments/VideoComments';
import { Player } from '../Player/Player';
import { VideoInformation } from '../VideoInformation/VideoInformation';
import { VideoDetailsType } from '@/types';

interface VideoContentProps {
    item: VideoDetailsType,
    videoId: string
}

export const VideoContent: FC<VideoContentProps> = ({ item, videoId }) => {
    return (
        <>
            <Player videoId={videoId} />
            <VideoInformation
                item={item}
            />
            <VideoComments
                videoId={videoId}
                commentCount={item.statistics.commentCount}
            />
        </>
    )
};