import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useFetchVideoDetails } from '@/hooks/useFetchVideoDetails'
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import './Video.scss'

import { VideoComments } from './VideoComments/VideoComments';
import { Error } from '@components';
import { Player } from './Player/Player';
import { VideoInformation } from './VideoInformation/VideoInformation';

export interface State extends SnackbarOrigin {
    open: boolean;
}


export const Video = () => {
    const { videoId } = useParams();

    const { item, error, handleCloseError } = useFetchVideoDetails(videoId);

    const [openSnackBar, setOpenSnackBar] = useState(false)

    const handleClick = () => {
        setOpenSnackBar(true);
    };

    const handleClose = () => {
        setOpenSnackBar(false);
    };

    return (
        <div className="video">
            <div className="video__container">
                <Player videoId={videoId} />
                {item && (
                    <>
                        <VideoInformation
                            item={item}
                            handleClick={handleClick}
                        />
                        <VideoComments
                            videoId={videoId}
                            commentCount={item.statistics.commentCount}
                        />
                    </>
                )}
                <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                    open={openSnackBar}
                    onClose={handleClose}
                    message="haha dude its just a clone"
                />
                {!!error && (
                    <Error
                        message={error.response.data.message}
                        handleCloseError={handleCloseError}
                    />
                )}
            </div>
        </div>
    )
};