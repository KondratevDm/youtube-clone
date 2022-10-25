import React from 'react';
import { useParams } from 'react-router';
import { VideoContent } from './VideoContent/VideoContent';
import { useFetchVideoDetails } from '@/hooks/useFetchVideoDetails'
import { Error, Loader } from '@components';

import './Video.scss'

export const Video = () => {
    const { videoId } = useParams();

    const { item, error, handleCloseError, isLoading } = useFetchVideoDetails(videoId);

    return (
        <div className="video">
            <div className="video__container">
                {isLoading && (
                    <Loader type="circularLoader" />
                )}

                {item && (
                    <VideoContent
                        item={item}
                        videoId={videoId} />
                )}

                {error && (
                    <Error
                        message={error.response.data.message}
                        handleCloseError={handleCloseError}
                    />
                )}
            </div>
        </div>
    )
};