import React, { FC, useState } from 'react';
import { VideoDetailsType } from '@/types';
import { VideoDetails } from './VideoDetails/VideoDetails';
import { ChannelDetailsVideo } from './ChannelDetailsVideo/ChannelDetails';

import Snackbar from '@mui/material/Snackbar';

interface VideoInformationProps {
    item: VideoDetailsType,
}


export const VideoInformation: FC<VideoInformationProps> = ({ item }) => {

    const [openSnackBar, setOpenSnackBar] = useState(false)

    const handleClick = () => {
        setOpenSnackBar(true);
    };

    const handleClose = () => {
        setOpenSnackBar(false);
    };

    return (
        <>
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
                    channelId={item.snippet.channelId}
                />
                <div className="video__divider" />
            </div>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                open={openSnackBar}
                onClose={handleClose}
                message="haha dude its just a clone"
            />

        </>

    )
};